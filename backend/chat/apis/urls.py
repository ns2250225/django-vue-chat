# -*- coding: utf-8 -*-
from django.urls import path
from .views import api_login, history_msg

urlpatterns = [
    path('login/', api_login, name='api_login'),
    path('history_msg/', history_msg, name='history_msg'),
]
