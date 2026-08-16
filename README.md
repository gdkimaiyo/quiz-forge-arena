# QuizForgeArena

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier&logoColor=white)](https://prettier.io/)
[![Linter: ESLint](https://img.shields.io/badge/linter-eslint-4B32C3.svg?logo=eslint&logoColor=white)](https://eslint.org/)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg?logo=python&logoColor=white)](https://github.com/psf/black)
[![Flake8](https://img.shields.io/badge/linting-flake8-blue.svg)](https://flake8.pycqa.org/en/latest/)
[![Frontend: React](https://img.shields.io/badge/frontend-React_18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Backend: Django](https://img.shields.io/badge/backend-Django_DRF-092E20?logo=django&logoColor=white)](https://www.djangoproject.com/)

An interactive, real-time full-stack quiz platform built with React, Chakra UI v3, Django REST Framework and MongoDB.

QuizForgeArena is a scheduled, competitive quiz platform where users take timed quizzes, earn points based on their performance, build streaks, unlock achievements and compete on leaderboards.

## Project Structure

QuizForgeArena is organized as a full-stack application with separate frontend and backend projects.

```text
QuizForgeArena/
│
├── frontend/       # React + Chakra UI v3 frontend
├── server/         # Django + Django REST Framework
├── README.md
├── LICENSE
└── ...
```

### Frontend

The `frontend` directory contains the React application responsible for the user interface and client-side interactions.

**Technologies:**

* React
* TypeScript
* Chakra UI v3
* React Router
* REST API integration

See the [frontend README](./frontend/README.md) for setup instructions and frontend-specific documentation.

### Backend

The `server` directory contains the Django REST Framework API responsible for authentication, quiz management, scoring, user progress, points and other application logic.

**Technologies:**

* Python
* Django
* Django REST Framework
* REST APIs

See the [server README](./server/README.md) for backend setup instructions and API documentation.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/gdkimaiyo/quiz-forge-arena.git
cd quiz-forge-arena
```

The frontend and backend are maintained as separate applications. Follow the setup instructions in each directory's README.

### Start the Backend

```bash
cd server
```

Follow the instructions in [`server/README.md`](./server/README.md).

### Start the Frontend

```bash
cd frontend
```

Follow the instructions in [`frontend/README.md`](./frontend/README.md).

## Development

The frontend communicates with the Django REST API provided by the backend.

```text
┌─────────────────────┐
│                     │
│   React Frontend    │
│   Chakra UI v3      │
│                     │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│                     │
│   Django REST API   │
│                     │
└──────────┬──────────┘
           │
           ▼
      Data Storage
```

## Roadmap

The project is under active development. Watch this space!

## License

Copyright © 2026 QuizForgeArena. All rights reserved.
