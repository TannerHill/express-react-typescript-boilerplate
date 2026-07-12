# Express/React SPA Boilerplate
This code is a minimal template for creating a single-repo, containerized full-stack application with a Express-powered backend and React Frontend.

## Features
- ### Full-stack Typescript
    - Both client and server can use types from the "types" directory, allowing for consistency between backend and frontend
- ### Containerization
    - A pre-defined Docker build that bundles the backend and frontend into a single Image
- ### Express Backend
    - [Express JS](https://github.com/expressjs/express) server
    - Minimal code for configuring dependency injection from [TypeDI](https://github.com/typestack/typedi)
    - Set-up for decorator-based Service/Controller definition from [TypeDI](https://github.com/typestack/typedi) and [Routing Controllers](https://github.com/typestack/routing-controllers)
    - Static serving of pre-built frontend assets
- ### React JS Frontend
    - Minimal [React JS](https://github.com/react/react) frontend
    - [React MUI](https://github.com/mui/material-ui) pre-configured
    - Fast bundling with [esbuild](https://github.com/evanw/esbuild)

## How to use
1. Clone this repo
2. Replace references to "nogitsunedev" placeholder in the following locations with your own app name:
    - bin/build.sh
    - types/package.json
    - server/package.json
    - client/package.json
3. write code under the src/ directory of client/ and server/
    - define shared types in the types/ directory
4. use bin/build.sh to build your image and Docker to run it

## Contributing
I will push changes to this repository for purposes such as refactoring, security updates, or version bumps. Feel free to open Pull Requests against the main branch.

## Disclaimer
**It is your own responsibilty to mitigate secuity vulnerabilities and package deprecations. I provide no guarantee that this is production-ready out of the box.**
