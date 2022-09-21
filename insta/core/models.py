from django.db import models

# Create your models here.
from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles


class User(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    username = models.CharField(max_length=100, blank=True, default="")
    email = models.CharField(max_length=100, blank=True, default="")
    password = models.CharField(max_length=100, blank=True, default="")
    photo = models.ImageField(upload_to="photos", blank=True, default="")
    friends = models.ManyToManyField("self", blank=True)

    def __str__(self):
        return self.username


class Post(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to="photos", blank=True, default="")
    caption = models.CharField(max_length=100, blank=True, default="")
    likes = models.ManyToManyField(User, related_name="likes", blank=True)

    def __str__(self):
        return self.caption


class Comment(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(max_length=100, blank=True, default="")

    def __str__(self):
        return self.comment


class Like(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + " likes " + self.post.caption
