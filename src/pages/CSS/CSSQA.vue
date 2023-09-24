<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const list = ref([
	{
		Q:`如何解决 1px 问题？`,
		D:`1px 问题指的是：在一些 Retina屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。`,
		A:`<pre>
		CSS 中的 1px 并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专门的属性来描述：window.devicePixelRatio = 设备的物理像素 / CSS像素。
		</pre>`,
	},

])
</script>

<template>
	<div class="css-qa-contain">
	  <ul>
	  	<li v-for="({Q,D,A},index) in list" :key="index" class="box1">
	  		<div class="box">
		  		<h1>{{Q}}</h1>
		  		<div class="desc" v-html="D" ></div>
		  	</div>
		  	<div class="mask">{{A}}</div>
	  	</li>
	  </ul>
	</div>
  
</template>

<style scoped>
	.css-qa-contain{
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
	}
	ul,li{
		width: 100%;
	}
	ul{
		height: 100%;
	}

	h1,.desc{
		font-size: 18px;
		background: rgba(0, 0, 0, 0.1);
		padding: 4px;
		text-align: left;
		border-radius: 8px;
		margin-bottom: 4px;
	}
	.box1 {
    width: 100%;
    height: 100%;
    /* background-color: salmon; */
    float: left;
    border-radius: 18px;
	}
	.box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 28px;
    border-radius: 18px;
    color: #fff;
    padding: 38px 0 0 38px;
    position: absolute;
    perspective: 1000px;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
  }
  .mask{
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 18px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 300px;
    font-family: '微软雅黑';
    font-weight: bold;
    position: absolute;
    backface-visibility:hidden;
    perspective: 1000px;
    transform: rotateY(-180deg);
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
  }
  .box1:hover .box{
    transform: rotateY(-180deg);
  }
  .box1:hover .mask{
    transform: rotateY(-360deg);
  }




</style>
