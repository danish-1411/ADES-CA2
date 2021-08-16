# Setup Guide

1. Requirements: (Pick the installer for your operating system)
   - [install Node.js](https://nodejs.org/en/download/)
   - [install Visual Studio Code](https://nodejs.org/en/download/)
2. Setup Instructions

   - Open with GitHub Desktop and click 
      > Open in Visual Studio Code
   
   **Starting backend**
   - Open Terminal in VSC
   - run `npm init`
   - enter `cd backend`
   - run `nodemon server.js.js` to start backend server and you should see the output
      > Server started and listening on port: 3000

   **Starting frontend**
   - Open another Terminal in VSC
   - enter `cd frontend`
   - run `nodemon index.js` to start frontend server and you should see the output
      > Server hosted at http://localhost:3001
3. Basic Code Organization
   - Backend
      - The APIs are stored in backend/controller/app.js
      - Backend Application Logic is stored in backend/model/ama.js
   - Frontend
      - The website sends HTTP requests in the HTML files using JQuery and axios API
      - Application logic is done in each of the HTML files using JQuery and internal CSS styling is used 
4. Links to Documentation
      - API Documentation https://web.postman.co/workspace/My-Workspace~f6adcde2-473b-4f46-8b46-13c8aad7ab94/documentation/13386203-6b8192c4-e7d8-4e0a-945a-6c6abe0a5e23

