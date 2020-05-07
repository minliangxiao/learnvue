<template>
    <div>
        <h1>这是App 根组件</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        methods:{

        },
    }
</script>

<!--scoped 保证属性的私有性-->
<style scoped>
    h1{
        color: red;
    }
</style>