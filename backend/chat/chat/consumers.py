# -*- coding: utf-8 -*-
from channels.generic.websocket import AsyncJsonWebsocketConsumer

# 自定义websocket处理类
class MyConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        # 创建连接时调用
        await self.accept()

        # 将新的连接加入到群组
        await self.channel_layer.group_add("chat", self.channel_name)

    async def receive_json(self, message):
        # 收到信息时调用
        
        # 信息单发
        # await self.send_json(content=content)
        
        # 信息群发
        await self.channel_layer.group_send(
            "chat",
            {
                "type": "chat.message",
                "message": message.get('msg'),
                "username": message.get('username')
            },
        )

    async def disconnect(self, close_code):
        # 连接关闭时调用
        # 将关闭的连接从群组中移除
        await self.channel_layer.group_discard("chat", self.channel_name)
        
        await self.close()


    async def chat_message(self, event):
        # Handles the "chat.message" event when it's sent to us.
        await self.send_json({
            "msg": event["message"],
            "username": event["username"]
        })
    
