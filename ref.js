const app = Vue.createApp({
	setup () {
		const { ref } = Vue
		let name = ref('1')
		setTimeout(() => {
			name.value = '123456'
		}, 2000)
		return {
			name
		}
	}
})
app.mount('#app')
/*
	ref底层是用proxy来数据
	ref('1') ==> Proxy({value: 1})
*/