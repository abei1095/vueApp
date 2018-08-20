<template>
    <div class="">
        <h3>Home组件页面</h3>
        <!-- 轮播图  使用mint-ui里面的 swipe -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data: ()=>({
        
    })
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: lightcoral;
            }
            &:nth-child(2){
                background-color: hotpink;
            }
            &:nth-child(3){
                background-color: lightgreen;
            }
        }
       
    }
</style>