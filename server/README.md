# Reacto Service
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg?logo=python&logoColor=white)](https://github.com/psf/black)
[![Flake8](https://img.shields.io/badge/linting-flake8-blue.svg)](https://flake8.pycqa.org/en/latest/)
[![Backend: Django](https://img.shields.io/badge/backend-Django_DRF-092E20?logo=django&logoColor=white)](https://www.djangoproject.com/)

The backend app built with Python, Django, Django REST Framework
and REST APIs


## 🚀 Setting Up

### 1. Create a `.env` File
```sh
touch .env
```
Add the necessary environment variables.

### 2. Set Up a Virtual Environment
#### For macOS/Linux:
```sh
python -m venv .venv
source .venv/bin/activate
```
#### For Windows:
```sh
python -m venv .venv
.venv\Scripts\activate
```
To deactivate the virtual environment, run:
```sh
deactivate
```

### 3. Install Dependencies
```sh
pip install -r requirements.txt
```

### 4. Run the Server
```sh
python manage.py runserver
```

## 🔥 Important Notes
- If you install additional dependencies, update `requirements.txt`:
  ```sh
  pip freeze > requirements.txt
  ```
- Or check installed packages with:
  ```sh
  pip freeze
  ```

## Code Quality & Pre-Commit Hooks

This project uses `pre-commit` to automatically enforce formatting (Black, Prettier), linting (Flake8, ESLint), and Conventional Commit standards across the repository.

> **Note:** Run all commands from the **repository root**, not from inside `server/` or `frontend/`.

---

### Setup & Usage Workflow

1. Register the `Git hooks`:
```sh
# For pre-commit code checks
pre-commit install

# For commitizen message validation
pre-commit install --hook-type commit-msg
```

2. Stage files and test hooks (OPTIONAL):
- `pre-commit` only inspects files tracked by Git. Stage your untracked changes first before running manual checks.
```sh
# Stage untracked files
git add .

# Run manual checks
pre-commit run --all-files
```

3. Auto update pre-commit (OPTIONAL):
```sh
pre-commit autoupdate --repo https://github.com/pre-commit/pre-commit-hooks
```


## 🛠 Running Redis
First make sure Redis is running locally, then on a new terminal windows, run:
```sh
# For macOS
brew services start redis

# For Ubuntu/Debian
sudo systemctl start redis

# For Windows
sc start Redis
```

## ⚙️ Running Celery and Celery Beat
On two new terminal windows, run Celery and Beat using the following commands respectively to keep track of background running tasks, such as subscription expiry dates:
```sh
celery -A core worker --loglevel=info
```
<!-- celery -A core worker -P gevent -l info -->

```sh
celery -A core beat --loglevel=info
```


## Creating a new app
```sh
cd apps
python manage.py startapp <app_name>

```

## 📚 Learn More
- [Django Documentation](https://docs.djangoproject.com/en/6.1/)
- [pre-commit](https://pre-commit.com/#install)
