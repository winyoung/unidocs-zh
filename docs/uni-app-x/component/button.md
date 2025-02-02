## button

<!-- UTSCOMJSON.button.description -->

<!-- UTSCOMJSON.button.attrubute -->

<!-- UTSCOMJSON.button.event -->

<!-- UTSCOMJSON.button.example -->

<!-- UTSCOMJSON.button.compatibility -->

<!-- UTSCOMJSON.button.children -->

<!-- UTSCOMJSON.button.reference -->

## button样式修改@style

button在元素的text区域直接写文字，和text组件一样。可以这么理解，button是一个特殊的text组件，文字样式可以直接写在button组件的style或class上。

button组件属性中的size和type，属于预置样式，方便开发者使用。开发者也可以通过style和class来自定义样式。

button虽然可以内嵌text组件，但不建议通过text组件来修改button样式，因为会导致hove-class不生效。尤其是uvue中样式不继承。建议button组件text区域直接写文字，然后在button组件的style或class属性编写样式。

style和class的优先级，高于size和type属性。

```html
<template>
	<button size="default" type="default" 
	style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19" 
	hover-class="is-hover">按钮</button>
</template>
<style>
.is-hover {
	color: rgba(255, 255, 255, 0.6);
	background-color: #179b16;
	border-color: #179b16;
  }
</style>
```

## button点击

button 组件的点击遵循 vue 标准的 @click事件。

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button>通过navigator组件跳转到about页面</button></navigator>
		<button @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url:string) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

## tips
- button 的text区域文字，app-uvue下不支持 `\n` 方式换行，会直接显示 `\n` 字符。微信小程序下 `\n` 会变成一个空格
- button 的默认高度为46px，文字大小为18px，文字行高为46px。如果修改了默认高度，要注意手动调整文字行高
