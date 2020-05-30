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
npm run start:dev
```

Run build files
```bash
npm run build
```

Run production mode
```bash
npm run start
```

Run linter and auto fix files
```bash
npm run lint
npm run lint -- --fix
```