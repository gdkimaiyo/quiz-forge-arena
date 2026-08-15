# Django
# from django.conf import settings

# Rest Framework
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from bson import ObjectId, errors

# Models
from apps.quizzes.models import Quizes

# Serializers
from apps.quizzes.serializers import QuizesSerializer

# Create your views here.

# ##################### QUIZES VIEWS #######################


class QuizView(APIView):
    """
    Returns a list of quizes

    Retrieve one or more quizes.

    If an 'id' is provided, return that specific quiz.
    Otherwise, return all quizes
    """

    def get(self, request, id=None):
        if id:
            try:
                quiz = Quizes.objects.get(id=ObjectId(id))
            except (errors.InvalidId, Quizes.DoesNotExist):
                return Response(
                    {"message": "Invalid or non-existent quiz ID."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            serializer = QuizesSerializer(quiz)
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        try:
            quizes = Quizes.objects.all()
            serializer = QuizesSerializer(quizes, many=True)
            print(serializer.data)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(f"GET_QUIZES_ERROR: {str(e)}")
            return Response(
                {"message": "Error fetching quizes"},
                status=status.HTTP_400_BAD_REQUEST,
            )
