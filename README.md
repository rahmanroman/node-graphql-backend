# 🚀 Node.js TypeScript Basic Template

A modern, lightweight, and opinionated boilerplate for building robust Node.js applications with TypeScript. Designed for speed, type safety, and developer experience.

## 🌟 Overview

This repository provides a solid foundation for your next Node.js project. Instead of spending hours configuring build tools, linting, and testing frameworks, you can jump straight into writing your application logic.

### Key Goals
- **Minimalist**: No bloat—only the essential tools to get you moving.
- **Type-Safe**: Strict TypeScript configuration for catching errors early.
- **Developer-Friendly**: Integrated linting, formatting, and high-performance testing.
- **Production-Ready**: Follows modern ESM standards and Node.js best practices.

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (>= 20.19)
- **Language**: [TypeScript](https://www.typescript.org/) 5.8
- **Testing**: [Vitest](https://vitest.dev/) (Vite-native test runner)
- **Linting**: [ESLint 9](https://eslint.org/) (with `@typescript-eslint` and `@stylistic`)
- **Execution**: [ts-node](https://typestrong.org/ts-node/) for seamless TypeScript execution

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
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
├── src/                # Source code
│   └── index.ts        # Entry point
├── eslint.config.js    # Modern ESLint flat configuration
├── tsconfig.json       # TypeScript compiler settings
├── vitest.config.ts    # Testing configuration
└── .env.example        # Template for environment variables
```

## ✨ Benefits
- **Zero-Config Testing**: Vitest is pre-configured for blazing-fast unit testing.
- **Modern ESM**: Built from the ground up to use standard JavaScript modules (`"type": "module"`).
- **Consistent Code Style**: Pre-configured ESLint rules ensure your codebase remains clean and maintainable.
- **Native Env Support**: Uses Node's native flag, reducing dependency on third-party loaders for local development. `--env-file`

## 📄 License
This project is licensed under the [MIT License](LICENSE).
Built with ❤️ by [Roman Rakhman](https://github.com/romanrakhman)