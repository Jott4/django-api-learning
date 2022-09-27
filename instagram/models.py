from django.db import models
from django.contrib.auth.models import User


class User(User):
    profile_pic = models.ImageField(
        ("profile_pic"),
        upload_to="profile_pics/%Y/%m",
        blank=True,
    )
    bio = models.CharField(blank=True, null=True, max_length=250)

    def __str__(self):
        return self.username

    def get_posts(self):
        return Post.objects.filter(user=self).values_list("id", flat=True)


class Post(models.Model):
    description = models.CharField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(("post_picture"), upload_to="post_pics/%Y/%m", blank=True)
    image_filter = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.description

    def get_image_url(self, obj):
        return obj.image.url
