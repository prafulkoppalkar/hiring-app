### Prerequisites

Ensure you have `yarn` or `npm` installed on your machine.

### Installation

1. **Install Dependencies**

   Use one of the following commands to install the backend project dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

2. **Configure CORS**

   Update the CORS configuration in the backend to allow requests from your frontend application.

3. **Update Environment Variables**

   Open the `.env` file and update it with the credentials required to connect to your database.
   
### Development

#### Start the Backend Server

Use one of the following commands to start the backend development server:

```bash
yarn dev
# or
node app.js
```
### API Endpoints

- `GET /api/candidates/:id` - Retrieve details of a specific candidate by ID.
- `GET /api/candidates` - Retrieve a list of candidates. 
- `GET /api/skills` - Retrieve a list of skills.
- `GET /api/search` - Retrieve a list of candidates based SkillName and SearchText Query params.

The list apis are paginated. Use `limit` & `offset` to get limited paginated data.
