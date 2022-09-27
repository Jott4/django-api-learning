from . import models
from django.contrib.auth import authenticate
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    get_posts = serializers.ReadOnlyField()

    class Meta:
        model = models.User
        fields = (
            "id",
            "username",
            "profile_pic",
            "first_name",
            "last_name",
            "bio",
            "get_posts",
        )


class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ("id", "username", "profile_pic")


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ("id", "description", "created_at", "image", "user", "image_filter")

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["user"] = PostUserSerializer(models.User.objects.get(pk=data["user"])).data
        return data


class UserPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ("id",)


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        print()
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            "id",
            "username",
            "password",
            "first_name",
            "last_name",
            "bio",
            "profile_pic",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = models.User.objects.create_user(
            validated_data["username"], None, validated_data["password"]
        )
        print(user)
        return user


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")
