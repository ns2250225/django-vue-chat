<template>
    <div class="item-left">
        <div class="name-left">
            <span v-if="mytime">{{ getdate }}</span> &nbsp;&nbsp;{{ name }}
        </div>
        <img :src="avatar" alt="" class="avatar-left">
        <div v-if="img">
            <img :src="img" alt="" class="img-left">
        </div>
        <span v-if="msg">
            {{ msg }}
        </span>
    </div>
</template>

<script>
import dateFormat from '../utils/date'
export default{
  props: ['name', 'img', 'msg', 'mytime', 'avatar'],
  computed: {
    getdate () {
      return dateFormat(new Date(this.mytime), 'yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>

<style>
.item-left {
    position: relative;
    clear: both;
    display: inline-block;
    padding: 16px 40px 16px 20px;
    margin: 10px 10px 20px 10px;
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
    animation: show-chat-even 0.25s 1 ease-in;
    -moz-animation: show-chat-even 0.25s 1 ease-in;
    -webkit-animation: show-chat-even 0.25s 1 ease-in;
    float: left;
    margin-left: 80px;
    color: #0EC879;
}
.item-left ::after {
    position: absolute;
    top: 15px;
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
    border-left: 15px solid transparent;
    left: -15px;
}
.img-left {
    max-width: 200px;
}
.name-left {
    position: absolute;
    top: -20px;
    width: 280px;
    height: 20px;
    left: -70px;
    text-align: left;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
span {
    word-break: break-all;
}
.time-left {
    position: absolute;
    top: -40px;
    width: 200px;
    height: 20px;
    right: -70px;
    text-align: right;
}
.avatar-left {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    left: -70px;
}
@keyframes show-chat-odd {
    0% {
        margin-right: -480px;
    }

    100% {
        margin-right: 0;
    }
} @keyframes show-chat-even {
    0% {
        margin-left: -480px;
    }

    100% {
        margin-left: 0;
    }
}
@-moz-keyframes show-chat-even {
    0% {
        margin-left: -480px;
    }

    100% {
        margin-left: 0;
    }
}
@-webkit-keyframes show-chat-even {
    0% {
        margin-left: -480px;
    }

    100% {
        margin-left: 0;
    }
}
</style>
