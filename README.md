# 🚀 Node.js GraphQL Backend Template

A modern, lightweight, and opinionated boilerplate for building robust GraphQL APIs with Node.js and TypeScript. Designed for speed, type safety, and a seamless developer experience.

## 🌟 Overview

This repository provides a production-ready foundation for building modular GraphQL backends. It moves beyond a basic Node.js setup by integrating a schema-first workflow, automated type generation, and a feature-based architecture. Instead of wiring up standard middleware, you can focus on defining your schema and implementing business logic.

## 🔑 Key Goals

- **GraphQL-First**: Optimized for schema-driven development with integrated GraphQL tools.
- **Type-Safe & Generated**: Automatic TypeScript type generation from GraphQL schemas to ensure end-to-end safety.
- **Modular Architecture**: Organized by features (e.g., `src/features/ping`) to keep codebases scalable and maintainable.
- **Developer-Friendly**: Hot-reloading, integrated linting, and high-performance testing with Vitest.
- **Production-Ready**: Follows modern ESM standards, uses native Node.js environment handling, and stays minimalist.

## ✨ Benefits

- **Schema-First Workflow**: Define your API in `.graphql` files and let the tooling generate the boilerplate.
- **Feature-Based Scaling**: Easily add new domains by creating a folder in `src/features`.
- **Endpoint Protection**: Built-in guards middleware for reusable authorization and access control across resolvers.
- **Zero-Config Testing**: Vitest is pre-configured for blazing-fast unit testing.
- **Modern ESM**: Built from the ground up to use standard JavaScript modules.

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (>= 20.19)
- **Language**: [TypeScript](https://www.typescript.org/) 5.8
- **GraphQL**: [GraphQL.js](https://graphql.org/) & [GraphQL Codegen](https://the-guild.dev/graphql/codegen)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [ESLint 9](https://eslint.org/) (with `@typescript-eslint` and `@stylistic`)
- **Execution**: [ts-node](https://typestrong.org/ts-node/) for seamless TypeScript execution

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone git@github.com:rahmanroman/node-graphql-backend.git
cd template-node-basic
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```

### 3. Development

```bash
npm run dev
```

### 4. Testing

Run the test suite using Vitest:

```bash
npm test
```

## 📂 Project Structure
```
├── src/
│   ├── features/          # Domain-driven modules
│   │   └── ping/          # Example feature (schema + logic)
│   ├── graphql/           # GraphQL engine, root schema & generated types
│   ├── server/            # Server setup and configuration
│   └── index.ts           # Application entry point
├── codegen.yml            # GraphQL Code Generator config
├── eslint.config.js       # Modern ESLint flat config
├── vitest.config.ts       # Vitest configuration
└── .env.example           # Environment template
```

## 📄 License
This project is licensed under the [MIT License](LICENSE).  <br>
Built with ❤️ by [Roman Rakhman](https://github.com/rahmanroman)