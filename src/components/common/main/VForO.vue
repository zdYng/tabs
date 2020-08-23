// 循环对象

<template>
    <div>
        <h1>循环对象</h1>
    <div v-for="(value,key) in game" :key="key">
        {{key}} : {{value}}
    </div>
    </div>
</template>

<script>
    export default {
        name:"VForO",
        data() {
            return {
                game:{
                    title: "呜呜欧",
                    price: 100,
                    pubdate: "2020/08/08",
                    category: "射击",
                    agerange: "全年龄段",
                }
            }
        },
        
    };
</script>

<style>
    
</style>