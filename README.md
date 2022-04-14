# Code Box

**Code Box** is a service that allows you to run your code in a remote environment. The execution takes place in a containerized environment. The API now supports three programming languages, with the ability to add more in the future.

This RCE project provides a basic API for remotely executing programmes. To prevent potentially dangerous code, basic code validation is performed.


It allows you to share your work in real time with the server, which is ideal for interview sessions. A'sessionId' key is assigned to each user. By entering the ID of another session, users can join it. Joining a session allows you to watch it in read-only mode; only the session author has the ability to alter the code and input..

## Salient Features

- Code execution on a remote server in a sandboxed environment. Users can programme in three languages without having to install anything locally.
- A client application that has all of the functionality - Makes it simple and convenient to use the service. User input is cached locally for convenience.
- Code validation - Code containing potentially dangerous libraries is invalidated using /regex/ checks, and code including such libraries is not run.
- There are live sessions. The **'session'** menu in the navbar allows each user to access and share their session ID; users may also paste a session ID to join someone else's room from the same menu. (Only accessible via the client app)

## Local Setup

Documentation is available in the 'docs' folder if you want to set up the project yourself. For a thorough reference, see [DOCS.md](https://github.com/nafees87n/codebox/blob/main/docs/DOCS.md). It explains how to set up a local machine and how to use it. For deployment documentation, see [SERVER.md](https://github.com/nafees87n/codebox/blob/main/docs/SERVER.md).

## Tools & Technology

This RCE project incorporates a variety of technologies:

- Node and Express - These are used to write server and executer services.

- React - React is used to create the client application.

- Docker/docker-compose/docker-compose/docker-compose/docker- - Containerization of services and provisioning of a code execution sandbox

- Bash scripting - Convenience scripts for setting up the environment and running the project

- Websocket to add live sharing capability - Socket.io