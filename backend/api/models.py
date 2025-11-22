from django.db import models
from django.utils.translation import gettext_lazy as _

class Employee(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    email = models.EmailField(_("Email"), unique=True)
    password = models.CharField(_("Password"), max_length=128)

    def __str__(self):
        return self.name
