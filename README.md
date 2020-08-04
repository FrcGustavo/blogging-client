![CI](https://github.com/FranciscoGustavo/bloging-client/workflows/CI/badge.svg)

# Bloging

It is the client to blog

## Config the enviroment variables
Before the start, your must config enviroment variables

#### Intructions:
- Copy the file '.env.example'
- Change the name '.env.example' to '.env'
- open file and complete the variables

Example
```
// Enviroment
NODE_ENV=

// MongoDB
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

## Start

Install dependencies
```bash
npm install
```

Run development mode
```bash
npm run dev
```

Run build and production mode
```bash
npm run build
npm run start
```
Run linter and auto fix files
```bash
npm run lint
npm run lint -- --fix
```

Run test and coverage code
```bash
npm run test
npm run cover
```