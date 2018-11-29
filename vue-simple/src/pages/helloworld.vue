<template>
  <div>
    <h2>Bootstrap3样式验证</h2>
    <div class="btn-group" role="group" aria-label="...">  
      <button type="button" class="btn btn-default">Left</button>  
      <button type="button" class="btn btn-default">Middle</button>  
      <button type="button" class="btn btn-default">Right</button>  
    </div> 
  </div>
</template>

<script>
export default{
	name:'HelloWorld',
	data(){
		return {}
	},
	mounted(){
		const self = this
		// 验证axios
		self.$axios.get('https://www.baidu.com/',{}).then(function(){
			console.log('SSDSDD')
		})
	}
}
</script>