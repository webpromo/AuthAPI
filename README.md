# AuthAPI

NodeJS + MongoDB API for User Management, Authentication and Registration.

**How to use:**
1. Authenticate by sending JSON of username and password in the body to /users/authenticate.
2. Get all users through /users/all using the Bearer Token returned in authentication.
3. Get a specific user's info through /users/:id using the Bearer Token. Allows user to:
     - See a specific user's contact info, 
     - whether a given user is logged in, and 
     - whether the user in question has admin status.
4. Log a user in or out by doing a PUT to /users/:id using the Bearer Token and with the boolean value for "loggedIn".
5. Create new users by sending the following JSON in the body to /users/register:
```
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
```
6. Delete a user by sending the user's ID to the delete endpoint at /users/:id with the Bearer Token.

**Possible New Features:**
1. Restricting all actions but authorization to an admin user.

**Credits**

Based on https://github.com/cornflourblue/node-mongo-registration-login-api

Adapted for Paladin & Archer by <a href="https://github.com/webpromo">Jesse Fisher</a>