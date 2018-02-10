<template>
    <div class="item-right">
        <div class="name-right">
            <span v-if="mytime">{{ getdate }}</span> &nbsp;&nbsp;{{ name }}
        </div>
        <img :src="avatar" alt="" class="avatar-right">
        <div v-if="img">
            <img :src="img" alt="" class="img-right">
        </div>
        <span v-if="msg">
            {{ msg }}
        </span>
    </div>
</template>

<script>
import dateFormat from '../utils/date'
export default {
  props: ['name', 'img', 'msg', 'mytime', 'avatar'],
  computed: {
    getdate () {
      return dateFormat(new Date(this.mytime), 'yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>

<style>
.item-right {
    margin-top: 10px;
    position: relative;
    clear: both;
    display: inline-block;
    padding: 16px 40px 16px 20px;
    margin: 10px 10px 20px 10px;
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
    animation: show-chat-odd 0.25s 1 ease-in;
    -moz-animation: show-chat-odd 0.25s 1 ease-in;
    -webkit-animation: show-chat-odd 0.25s 1 ease-in;
    float: right;
    margin-right: 80px;
    color: #0AD5C1;
}
.item-right ::after {
    position: absolute;
    top: 15px;
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
    border-right: 15px solid transparent;
    right: -15px;
}
.img-right {
    max-width: 200px;
}
span {
    word-break: break-all;
}
.time-right {
    position: absolute;
    top: -40px;
    width: 200px;
    height: 20px;
    right: -70px;
    text-align: right;
}
.name-right {
    position: absolute;
    top: -20px;
    width: 280px;
    height: 20px;
    right: -70px;
    text-align: right;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.avatar-right {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    right: -70px;
}
@keyframes show-chat-odd {
0% {
    margin-right: -480px;
}

100% {
    margin-right: 0;
}
}

@-moz-keyframes show-chat-odd {
    0% {
        margin-right: -480px;
    }

    100% {
        margin-right: 0;
    }
}

@-webkit-keyframes show-chat-odd {
    0% {
        margin-right: -480px;
    }

    100% {
        margin-right: 0;
    }
}
</style>
