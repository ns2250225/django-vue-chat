# -*- coding: utf-8 -*-
from django.db import models

# Create your models here.
class ChatMsg(models.Model):
    username = models.CharField(max_length=255, verbose_name='用户名')
    msg = models.TextField(verbose_name='聊天消息')
    gentime = models.DateTimeField(verbose_name='消息生成时间')
