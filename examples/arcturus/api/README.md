## Instinct - API

### Setting Up
1. `cd api`
1. `cp .env.example .env`
1. Edit your `.env` file to have the relevant config
1. `npm install`
1. `npm start`

### Environment Explained

#### Database
* DATABASE_HOST
  * The host of your database.  Typically `localhost`
* DATABASE_USER
  * The username of the user you authenticate with on your database.  Typically `root`
* DATABASE_PASS
  * The password of your database's user
* DATABASE_NAME
  * The name of the database you want to connect to

#### Default User
* DEFAULT_USER_LOOK
  * The look code users will have by default, their appearance.
* DEFAULT_USER_CREDITS
  * The number of credits new users will start with
* DEFAULT_USER_PIXELS
  * The number of pixels new users will start with