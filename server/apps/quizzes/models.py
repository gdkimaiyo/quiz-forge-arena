from mongoengine import (
    Document,
    DateTimeField,
    StringField,
    ListField,
    IntField,
    DictField,
)

# Create your models here.


class Quizes(Document):
    quiz = ListField(DictField())
    category = StringField(required=True)
    level = IntField(required=True)
    week = IntField(required=True)
    created = DateTimeField(required=True)
    updated = DateTimeField(required=True)
