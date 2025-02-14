# Terra-Scape VueJS Backend

This repository contains the backend server for the Terra-Scape VueJS application. The backend is built using Node.js, Express.js, and integrates with Vercel for deployment. It also includes configuration files for TypeScript and Vercel.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (comes bundled with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/terra-scape-vuejs-backend.git
   cd terra-scape-vuejs-backend

   ```

2. Install the dependencies:

   ```bash
   npm install

   ```

3. Set up environment variables:
   Create a .env file in the root directory and add the required environment variables:
   PAYPAL_API=https://api-m.sandbox.paypal.com
   PAYPAL_CLIENT_ID=your_sandbox_client_id
   PAYPAL_SECRET=your_sandbox_secret
   PORT=3000

## Usage
      To start the development server:
      npm run dev
      The server will be running at http://localhost:3000

## Project Structure:
       terra-scape-vuejs-backend/
       ├── src/
       │   ├── server.ts           # Main server file
       │   └── ...
       ├── vercel.json             # Vercel deployment configuration
       ├── tsconfig.json           # TypeScript configuration
       ├── .env.example            # Example environment variables file
       ├── package.json            # NPM packages and scripts
       ├── README.md               # This file
       └── ...

## Environment Variables: 
      The following environment variables are required for the application to work properly:
      
      PAYPAL_API: URL of the PayPal API (sandbox or production).
      PAYPAL_CLIENT_ID: Client ID for accessing the PayPal API.
      PAYPAL_SECRET: Secret key for accessing the PayPal API.
      PORT: Port number for the server to listen on.

## Contributing
      Contributions are welcome! Please follow these steps to contribute:
      - Fork the repository.
      - Create a new branch for your feature or bug fix.
      - Make your changes and commit them with clear commit messages.
      - Push your changes to your fork.
      - Submit a pull request
     
 
