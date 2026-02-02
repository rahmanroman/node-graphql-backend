# 🚀 Node.js GraphQL Backend Template

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![typescript](https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=ffffff)
![node.js](https://img.shields.io/badge/node.js-339933?logo=nodedotjs&logoColor=ffffff)
![graphql](https://img.shields.io/badge/graphql-e10098?logo=graphql&logoColor=ffffff)

A modern, lightweight, and opinionated boilerplate for building robust GraphQL APIs with Node.js and TypeScript. Designed for speed, type safety, and a seamless developer experience.

## 🌟 Overview

This repository provides a production-ready foundation for building modular GraphQL backends. It moves beyond a basic Node.js setup by integrating a schema-first workflow, automated type generation, and a feature-based architecture. Instead of wiring up standard middleware, you can focus on defining your schema and implementing business logic.

## ✨ Features

- **Schema-First Workflow**: Define your API in `.graphql` files and let the tooling generate the boilerplate.
- **Automated Type Generation**: Ensures end-to-end type safety between your schema and resolvers.
- **Feature-Based Architecture**: Keep your codebase scalable and maintainable by organizing it into domain-driven modules.
- **Built-in Endpoint Protection**: Reusable guards for implementing authorization and access control.
- **High-Performance Tooling**: Pre-configured with Vitest for fast testing and ts-node for seamless TypeScript execution.
- **Modern ESM & Tooling**: Uses standard JavaScript modules, ESLint 9, and a modern `eslint.config.js` flat config.

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (>= 20.19)
- **Language**: [TypeScript](https://www.typescript.org/) 5.8
- **GraphQL**: [GraphQL.js](https://graphql.org/) & [GraphQL Codegen](https://the-guild.dev/graphql/codegen)
- **Server**: [Fastify](https://www.fastify.io/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [ESLint 9](https://eslint.org/) (with `@typescript-eslint` and `@stylistic`)

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 20.19
- npm (or your preferred package manager)

### 2. Clone & Install
```bash
git clone https://github.com/rahmanroman/node-graphql-backend.git
cd node-graphql-backend
npm install
```

### 3. Environment Setup
Create a `.env` file for local development.
```bash
cp .env.example .env
```

### 4. Run the Development Server
```bash
npm run dev
```
This command starts the server with hot-reloading, listening on `http://localhost:3000`.

## 🕹️ GraphQL Playground

Once the server is running, explore the API using the built-in **GraphQL Playground** available at:

[http://localhost:3000/graphql](http://localhost:3000/graphql)

You can write queries, mutations, and view the schema documentation directly in your browser.

## 📦 Core Concepts

### Mock Data Store
This template uses a simple file-based data store located in the `.data/` directory. The `authors.json` and `books.json` files serve as a mock database, allowing you to test the API without setting up an external database. The repositories in `src/repositories/` are responsible for interacting with these files.

### GraphQL Code Generation
This project uses `graphql-codegen` to automatically generate TypeScript types from your GraphQL schemas. This ensures that your resolvers are always type-safe and consistent with your API definition.

To regenerate types after changing a `.graphql` file, run:
```bash
npm run codegen
```
The configuration can be found in `codegen.yml`.

### Endpoint Protection with Guards
You can protect your resolvers using composable guards. A guard is a higher-order function that wraps a resolver and can check for certain conditions (e.g., authentication) before executing it.

The `hasToken` guard in `src/graphql/guards.ts` provides an example:
```typescript
// src/graphql/guards.ts
export const hasToken = (): Guard => next => (
  root: unknown,
  args: object,
  context: Context,
  info: GraphQLResolveInfo,
) => {
  if (!context.token) throw new GraphQLError('Unauthorized');
  return next(root, args, context, info);
};
```
This can be applied in your feature's resolver map to protect specific queries or mutations.

## 🧪 Testing

Run the test suite using Vitest:
```bash
npm test
```

## 📂 Project Structure
```
├── .data/                 # Mock JSON database files
│   ├── authors.json
│   └── books.json
├── src/
│   ├── features/          # Domain-driven modules (GraphQL schemas and resolvers)
│   │   ├── book/
│   │   └── author/
│   ├── repositories/      # Data access layer (e.g., database interactions)
│   │   ├── book.ts
│   │   └── author.ts
│   ├── graphql/           # GraphQL engine, root schema, guards, & generated types
│   ├── server/            # Server setup and configuration
│   └── index.ts           # Application entry point
├── codegen.yml            # GraphQL Code Generator config
├── eslint.config.js       # Modern ESLint flat config
└── vitest.config.ts       # Vitest configuration
```

## 🚢 Deployment

This template uses `ts-node` for development and serving. For a production environment, it is best practice to compile the TypeScript code to JavaScript and run the output.

You could add a `build` script to your `package.json`:
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```
And create a `tsconfig.json` that outputs the compiled files to a `dist` directory.

## 📄 License
This project is licensed under the [MIT License](LICENSE).  <br>
Built with ❤️ by [Roman Rakhman](https://github.com/rahmanroman)