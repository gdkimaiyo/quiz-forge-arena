from django.contrib import admin
from django.urls import include, path
from apps.quizzes.urls import public_urls as quiz_public_urls

urlpatterns = [
    path("api/quizzes/", include(quiz_public_urls)),
    path("admin/", admin.site.urls),
]
