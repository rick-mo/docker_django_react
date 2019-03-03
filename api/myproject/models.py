from django.db import models

class Chart(models.Model):
  title = models.CharField(max_length=200)
  row_title = models.CharField(max_length=100)
  column_title = models.CharField(max_length=100)

  def __str__(self):
    return self.title
