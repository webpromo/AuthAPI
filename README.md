# AuthAPI

**API for User Management, Authentication and Registration.**

Stack: MongoDB, Express, and NodeJS (MEN!)

**How to use:**
1. Authenticate by sending JSON of username and password in the body to /users/authenticate. If successful, the entire user record is returned, including the user's ID and token.
2. Get all users through /users/all using the Bearer Token returned in authentication. Returns a JSON of all users.
3. Getting a specific user's info through /users/:id using the Bearer Token. Allows one to:
     - See a specific user's contact info, 
     - whether a given user is logged in, and 
     - whether the user in question has admin status.
4. Log a user in or out by doing a PUT to /users/:id using the Bearer Token and with the boolean value for "loggedIn". The current value for "loggedIn" is returned as a JSON value pair.
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

Note: If successful, items 5 and 6 will return a JSON with a single 'message' element.

**Possible New Features:**
1. Restricting all actions, except authorization and logging in or out, to an admin user.

**Credits**

Based on https://github.com/cornflourblue/node-mongo-registration-login-api

Adapted for Paladin & Archer by <a href="https://github.com/webpromo">Jesse Fisher</a>