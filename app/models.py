from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 100, default='')
    email = models.EmailField(max_length = 100, default='')
    password = models.CharField(max_length = 100, default='')
    profile_picture = models.ImageField(upload_to = 'app/media/profile_pictures/', default = 'app/media/default/profile_default.png')

class Report(models.Model):
    user_fk = models.ForeignKey(User)
    status = models.CharField(max_length = 100, default='')
    name = models.CharField(max_length = 100, default='')
    gender = models.CharField(max_length = 20, default='')
    birth_date = models.DateField()
    state = models.CharField(max_length = 100, default='')
    city = models.CharField(max_length = 100, default='')
    missing_date = models.DateField()
    status = models.CharField(max_length = 500, default='')

class ImageReport(models.Model):
    report_fk = models.ForeignKey(Report)
    image = models.ImageField(upload_to = 'app/media/report_pictures/', default = 'app/media/default/product_default.png')


class Comment(models.Model):
    report_fk = models.ForeignKey(Report)
    comment_date = models.DateField()
    content = models.CharField(max_length = 500, default='')