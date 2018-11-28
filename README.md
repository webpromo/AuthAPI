# AuthAPI

NodeJS + MongoDB API for User Management, Authentication and Registration.

#How to use:
1. Authenticate by sending JSON of username and password in the body to /users/authenticate.
2. Get all users through /users/all using the Bearer Token returned in authentication.
3. Get a specific user's info through /users/:id using the Bearer Token.
4. Create new users by sending the following JSON in the body to /users/register:
{
    username : (string),
    password : (string),
    firstName : (string),
    lastName : (string),
    address : (string),
    city : (string),
    state : (string),
    zip : (string),
    isAdmin : (boolean)
}

#Could be added:
1. Restriction to Admin for everything but authorization.

#Credits
Based on https://github.com/cornflourblue/node-mongo-registration-login-api
Adapted for Paladin & Archer by <a href="https://github.com/webpromo">Jesse Fisher</a>