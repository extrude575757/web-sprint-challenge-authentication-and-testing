# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule.

## Introduction

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

## Instructions

### Task 1: Project Set Up

- [ ] Fork the project and clone it to your machine.
- [ ] Set up your fork settings in Github to submit via Codegrade.
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on your newly created branch, committing changes regularly.
- [ ] Push commits regularly: `git push origin <firstName-lastName>`.
- [ ] Run the tests inside `./api/server.test.js` locally by executing `npm test`.
- [ ] Run the Codegrade tests locally by executing `npm run codegrade`.

  **Important:**

  If you already have a fork of this project in your Github account, you _must_ delete it, re-fork and re-clone.

### Task 2: Project Requirements

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `./api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `./api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, implemented inside `./api/server.test.js`. The `package.json` includes the "test" script.

**Notes:**

- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. The "test" script has been added for you.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

**IMPORTANT:** Work on stretch goals in a **new branch**. You can branch off `<firstName-lastName>` by executing `git checkout -b stretch`.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Write at least 4 tests per endpoint.
- [ ] Extract user validation into a separate method and write unit tests for it.
- [ ] Implement authentication using sessions instead of tokens.

## Submission format

Submit via Codegrade. Remember to add a query string to your Webhook's Payload URL specifying your `<firstName-lastName>` branch:

```
  https://example.com/example?branch=jane-doe
```

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

The main difference is that sessions will do more work on a server than a client. And with Json web-token based applications most of the information is stored on the client to authenticate them instead of a server. A json webtoken will have information on the header payload and signature  while a json web-token is just a string of random alpha-numeric characters to partain to the sessions ID. It seems a session will have less sql to run as well since its only looking up an id, while json tokens are a hash which includes alot more information than just the session id. 

Sessions are server oriented to take care of all the authentication. The client does not have much of an idea of what’s going on. After the user logs in, the server will create a session for the user and store the session data in the server memory.
The session ID is stored in a cookie in the client’s browser. While the user stays logged in, the cookie would be sent along with each subsequent request.
The server can then compare the session ID stored on the cookie against the session information stored in the memory to verify the user’s identity and send responses. On logging out, the session gets deleted from the database.

  Json web tokens and sessions for authnetication are both HTTP enabled.
  In a token-based application, the server creates a signed token and sends the token back to the client. The JWT is stored on the client’s side (usually in local storage) and sent as a header for every subsequent request.
  The server would then decode the JWT, and, if the token is valid, processes the request and sends a response. When the user logs out, the token is destroyed on the client’s side without having any interaction with the server.

  JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between endpoints as JSON objects. It is mainly used to prove that the sent data was actually created by an authentic source.
JWT consists of three concatenated Base64url-encoded strings, separated by dots (.). These are Header Payload and Signature
A JWT typically looks like:
 xxxxx.yyyyy.zzzzz
Header
The first part typically consists of two parts; the type of the token, which is JWT, and the signing algorithm being used such as HMAC SHA256 or RSA. If you don’t define the algorithm, it uses HS256 by default.
For example:
      {
      “alg”: “HS256”,
      “typ”: “JWT”
      }
Payload
The second part consists of a set of claims that are basically verifiable security statements, such as the identity of the user and the permissions they are allowed.
There are three types of claims: registered, public, and private claims. Note that the claim names are short as JWT is meant to be compact for fast requests.
And wait! Be careful not to put sensitive data such as passwords in your payload as this can easily be decoded.
An example payload could be:
      {
      “sub”: “123456789”,
      “name”: “Anamika Ahmed”,
      “admin”: true
      }
Signature
The last part is the signature which is the sum of the encoded header, the encoded payload, a secret, and lastly, the algorithm which is specified in the header.
For example, if you want to use the HS256 algorithm, the signature would be created in the following way:
HS256(
base64UrlEncode(header) + “.” +
base64UrlEncode(payload),
secret)
The signature is used to verify the message wasn’t changed along the way. It is the most important part of the JWT structure as header and payload can easily be decoded, but not the signature.
The signature is not publicly readable because it is encrypted with a secret key. Unless someone has the secret key, they cannot decrypt this information.

2. What does `bcryptjs` do to help us store passwords in a secure manner?



3. How are unit tests different from integration and end-to-end testing?
4. How does _Test Driven Development_ change the way we write applications and tests?
