const candidatesItemToObjMapper = (user) => {
  return {
    userId: user.userId,
    name: user.name,
    email: user.email,
    phone: user.phone,
    profilePic: user.profilePic,
    residence: user.residence,
    summary: user.summary,
    fullTime: user.fullTime,
    partTime: user.partTime,
    skills: user.MercorUserSkills,
    isInvitedToInterview: user.resume?.isInvitedToInterview,
    location: user.resume?.personalInformation?.location,
    workExperience: user.resume?.workExperiences,
  };
};

const candidatesDetailsItemToObjMapper = (user) => {
  return {
    userId: user.userId,
    notes: user.notes,
    name: user.name,
    email: user.email,
    phone: user.phone,
    profilePic: user.profilePic,
    residence: user.residence,
    summary: user.summary,
    fullTime: user.fullTime,
    fullTimeSalaryCurrency: user.fullTimeSalaryCurrency,
    fullTimeSalary: user.fullTimeSalary,
    fullTimeAvailability: user.fullTimeAvailability,
    partTime: user.partTime,
    partTimeSalaryCurrency: user.partTimeSalaryCurrency,
    partTimeSalary: user.partTimeSalary,
    partTimeAvailability: user.partTimeAvailability,
    skills: user.MercorUserSkills,
    isInvitedToInterview: user.resume?.isInvitedToInterview,
    location: user.resume?.personalInformation?.location,
    workExperience: user.resume?.workExperiences,
    education: user.resume?.educations,
  };
};

module.exports = {
  candidatesDetailsItemToObjMapper,
  candidatesItemToObjMapper,
};
