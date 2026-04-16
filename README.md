# JarBudget MVP (React + Vite + Spring Boot)

![CI Pipeline]([ВСТАВИТИ_BADGE_URL])

Навчальний MVP застосунок для обліку витрат: фронтенд на React + Vite, бекенд на Spring Boot.

## Demo

- Production: [ВСТАВИТИ_PRODUCTION_URL]
- Repository: [ВСТАВИТИ_REPOSITORY_URL]

## Tech Stack

- Frontend: React, Vite, React Router, ESLint, Vitest
- Backend: Java 17, Spring Boot, Spring Data JPA, H2
- CI: GitHub Actions
- CD: Vercel (frontend deployment)

## Getting Started

### 1) Клонування репозиторію

```bash
git clone [ВСТАВИТИ_REPOSITORY_URL]
cd spring-boot-web_lab2
```

### 2) Запуск frontend

```bash
cd frontend
npm install
npm run dev
```

### 3) Локальна перевірка якості frontend

```bash
cd frontend
npm run lint
npm run test:unit
npm run build
```

### 4) Запуск backend (опціонально для повного MVP)

```bash
mvn spring-boot:run
```

## Available Scripts (frontend)

```bash
npm run dev
npm run lint
npm run test:unit
npm run build
npm run preview
```

## CI/CD Overview

- Workflow file: `.github/workflows/main.yml`
- Triggers:
  - `push` у `main`
  - `push` у `develop`
  - `pull_request`
- Main CI job: `build-and-test`
  - `npm ci`
  - `npm run lint`
  - `npm run test:unit`
  - `npm run build`

## Branch Protection (Recommended)

Увімкніть правило для `main`:
- `Require status checks to pass before merging`
- оберіть обов'язковий check: `build-and-test`

## Secrets (Template Only)

Додаються через:
`Settings -> Secrets and variables -> Actions`

Приклади назв:
- `VERCEL_TOKEN`
- `DATABASE_PASSWORD`
- `API_KEY`

## Production Link

- Live URL: [ВСТАВИТИ_PRODUCTION_URL]
