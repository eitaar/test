# GitHub Copilot Instruction

## Overview

This document outlines the rules and guidelines for using GitHub Copilot in this project. Please adhere to these instructions to ensure consistency and quality.

## Rules

### 1. Response Language

- Copilot's suggestions and explanations must always be in **Japanese**, regardless of the language used in the user's instructions. The only exception is when writing **commit messages**, which must be in **English**.

### 2. Code Comments

- Add comments only when the code involves **complex logic** or **challenging processing**.
- Write comments in **English**.
- Avoid adding comments to simple or self-explanatory code.

### 3. Git Commit Messages

- Commit messages must be written in **English**.
- Use the following prefixes to indicate the type of change:
  - `feat:` for new features.
  - `fix:` for bug fixes.
  - `docs:` for documentation updates.
  - `style:` for formatting changes (no code logic changes).
  - `refactor:` for code restructuring without altering functionality.
  - `test:` for adding or updating tests.
  - `chore:` for maintenance tasks.
  - `revert:` for reverting previous changes.
- Include a brief explanation of the reason for the change or what it addresses.
  - Examples:
    - `feat: Add user authentication feature to enhance security`
    - `feat: Update example.jsx to improve mobile user experience`
    - `fix: Correct typo in README for better clarity`

### 4. Coding Style

- Use **camelCase** for function and variable names.
- Use **PascalCase** for JavaScript/TypeScript classes, interfaces, types, namespaces, enums, and constants.
- Maintain consistent indentation and formatting as per the project's established style guide.

### tech stacks

when suggesting code, consider the following tech stacks:

- JavaScript (ES6+)
- TypeScript
- Astro v5.x.x
- Tailwind CSS v4.x.x - **no more tailwind.config.js**
