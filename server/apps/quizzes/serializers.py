from rest_framework_mongoengine import serializers

# from rest_framework import serializers

from apps.quizzes.models import Quizes


class QuizesSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Quizes
        fields = "__all__"
