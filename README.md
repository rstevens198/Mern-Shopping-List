# MERN-stack-shopping-list
learning the mern stack by creating a shopping list app. this has transitions and jwt authentication. The database I used for testing was created at mlab. 

Quick Start
Add your MONGO_URI to the default.json file. Make sure you set an env var for that and the jwtSecret on deployment

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
Deployment
There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page
