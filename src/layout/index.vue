<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const interviewList = ref([
	{title:'CSS',url:'/cssinter'}
])
</script>

<template>
  <h1>{{ msg }}</h1>

  <ul>
  	<li v-for="item in interviewList">
	  	<router-link :to="{ path: item.url }">
      	{{ item.title }}
  		</router-link>
  	</li>
  </ul>
  <router-view></router-view>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
