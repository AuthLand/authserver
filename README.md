# authserver

authentication and authorization server template

# To Install

....................

`npm - i` // will install dependencies found in pacakage.json - express - base64 - bcrypt - mongoose - JWT - Cors - dotEnv

- You must create your own .env (dotEnv) file as well as a .gitignore file. Make sure to add both to your .gitignore file.and

- DotEnv - Add your environment variable for:
  - Port - The port your server will be running on.
  - MongoDB - Add your URI / database name
  - AppSecret - Your secret key needed in your JWT authentication

# To Run

`npm run start`
This will start nodemon, keeping your server running and reloading on changes.
