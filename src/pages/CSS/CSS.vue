<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const list = ref([
	{
		Q:`实现一个三角形`,
		A:`<pre>
width: 0;
height: 0;
border: 100px solid;
border-color: red transparent transparent transparent;
		</pre>`,
		E:`example1`
	},
	{
		Q:`实现一个扇形`,
		A:`<pre>
width: 0;
height: 0;
border: 100px solid transparent;
border-radius: 100%;
border-top-color: rgba(255, 0, 0, 0.3);
</pre>`,
		E:`example2`
	},
	{
		Q:`实现一个宽高自适应的正方形`,
		A:`<pre>
width: 10vw;
height: 10vw;
background: rgba(0, 255, 0, 0.4);
</pre>`,
		E:`example3`
	},
	{
		Q:`画一条0.5px的线`,
		A:`<pre>
width: 100vw;
height: 1px;
transform: scaleY(0.5);
background: rgba(0, 255, 255, 0.4);
</pre>`,
		E:`example4`
	},
])
</script>

<template>
	<div class="css-contain">
		<div class="btn">
			<router-link :to="{ path: '/cssqa' }">
      	`刷题了`
  		</router-link>
		</div>
	  <ul>
	  	<li v-for="({Q,A,E},index) in list" :key="index">
	  		<h1>{{Q}}</h1>
	  		<div class="css-a-code" v-html="A" ></div>
	  		<div :class="E"></div>
	  	</li>
	  </ul>
	</div>
  
</template>

<style scoped>
	.css-contain{
		width: 100vw;
		height: 100vh;
		padding: 16px 24px;
		box-sizing: border-box;
	}
	.btn{
		width: 100px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 255, 255, 0.1);
		color: #fff;
	}
	h1,.css-a-code{
		font-size: 18px;
		background: rgba(0, 0, 0, 0.1);
		padding: 4px;
		text-align: left;
		border-radius: 8px;
		margin-bottom: 4px;
	}
.example1 {
  width: 0;
  height: 0;
  border: 100px solid;
  border-color: red transparent transparent transparent;
}
.example2 {
  width: 0;
  height: 0;
  border: 100px solid transparent;
  border-radius: 100%;
  border-top-color: rgba(255, 0, 0, 0.3);
}
.example3{
	width: 10vw;
	height: 10vw;
	background: rgba(0, 255, 0, 0.4);
}
.example4{
	width: 100vw;
	height: 1px;
	transform: scaleY(0.5);
	background: rgba(0, 255, 255, 0.4);
}
</style>
