from django.urls import path

# Views
from apps.quizzes.views import QuizView

public_urls = [
    # *********** Quizzes *********** #
    path("", QuizView.as_view(), name="quizzes-list"),
    path("<str:id>/", QuizView.as_view(), name="quiz-details"),
]
