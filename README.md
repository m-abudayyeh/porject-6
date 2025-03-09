# Mishkah - Crowdfunding Platform

Mishkah is a web platform designed to help individuals who have innovative project ideas but lack the necessary funds to execute them. Users can submit their projects, and donors can contribute to support them. Our goal is to bridge the gap between creative minds and generous supporters.

## Features
- Users can register and submit their project ideas with detailed descriptions.
- Donors can browse various projects and contribute securely.
- Secure authentication and user management.
- Admin panel for managing projects and users.
- Modern, responsive, and user-friendly UI.
- Project categories for easy navigation.
- Search and filter functionality to find relevant projects quickly.
- Transparent donation tracking and real-time funding updates.
- Notifications and email updates for users and donors.

## Tech Stack
### Frontend:
- React (Vite)
- Tailwind CSS

### Backend:
- PostgreSQL
- Sequelize ORM
- Node.js (Express.js)
- JWT for authentication


## Project Resources
- **Figma Design:** [Project Design](https://www.figma.com/design/ZCNopj3OTUrPA1FnWiXHkZ/Untitled?node-id=1-4&t=FaJB7KOtOLHOV8tR-1)
- **Trello Board:** [Task Management](https://trello.com/invite/b/67c09bcb7452011b3b8f487c/ATTI94d7648e7b51746d27994d93ec82a6f43FB79457/project-6)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```sh
   cd project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   ```sh
   Create a .env file and configure your database credentials.
   ```
5. Run database migrations:
   ```sh
   npx sequelize db:migrate
   ```
6. Start the development server:
   ```sh
   npm run dev
   ```

## How It Works
1. Users sign up and create their project proposal.
2. Each project is reviewed before approval.
3. Approved projects are published on the platform.
4. Donors can browse projects and make contributions.
5. Funds are securely processed and transferred to project owners.
6. Users receive notifications about the status of their projects and donations.

## Security Measures
- Encrypted user passwords for security.
- Secure authentication using JWT.
- Validation checks to prevent spam submissions.
- Secure payment processing integration.


## Contributing
Contributions are welcome! Feel free to submit issues and pull requests. If you have suggestions for improvements, please open an issue.


