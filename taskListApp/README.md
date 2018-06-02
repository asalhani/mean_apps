# Task List app (MEAN Stack)

This is a simple task list app created using MEAN stack.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node
- Mongodb
- Angular CLI (globally)
- Nodemon (globally)


### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Install Node
Install Mongodb

Install Angular/CLI globally
npm i -g @angular/cli

Install nodemon globally
npm i -g nodemon
```

## Deployment

- NodeJS:
  --> Server Port: 3000
  --> run command: 
  ```
  nodemon
  ````

- Client (Angular)
  --> Port: 4200
  --> run command: 
  ```
  ng serve --proxy-config proxy.config.json
  ```
  
 - Note: If NodeJS server is running on diffrent port than [3000], update file [proxy.config.json] in root angular folder



This project is licensed under the MIT License..

