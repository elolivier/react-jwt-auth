# React App with JWT
App created to interact with this [SpringBoot Backend](https://github.com/elolivier/java-jwt-auth) which generates JWT token for existent users and return the token in the `Authorization` Header response.

## Description
This App shows in its Home page the public content retrieved from the backend endpoint /api/test/all.

The navigation bar has the option of login or sign up and once the new user is logged in, it can be seen the private content under the User menu or see the user data under an option named after its username.

## Run the App

1. Clone the repo in your local
2. Run the following command in your terminal from the root path of the cloned project `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

> **Acknowledgement 1**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
> **Acknowledgement 2**: Code is based on this [BezKoder article](https://www.bezkoder.com/spring-boot-react-jwt-auth/)
