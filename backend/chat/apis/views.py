# -*- coding: utf-8 -*-
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ChatMsg
from .serializers import ChatMsgSerializer

# Create your views here.
@api_view(['POST'])
def api_login(request):
	user_name = request.data.get("username")
	pass_word = request.data.get("password")

	res = {"role": "admin", "code": 0, "msg": "登录成功！", "username": user_name}
	return Response(res, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def history_msg(request):
	if request.method == 'GET':
		all_history_msg = ChatMsg.objects.all()
		res = ChatMsgSerializer(all_history_msg, many=True)
		return Response(res.data, status=status.HTTP_200_OK)
	if request.method == 'POST':
		username = request.data.get('username')
		msg = request.data.get('msg')
		gentime = request.data.get('gentime')

		res = {'code': 0, 'msg': '消息创建成功！'}
		ChatMsg.objects.create(username=username, msg=msg, gentime=gentime)
		return Response(res, status=status.HTTP_200_OK)
        
