<template>
    <div>
        <ul>
            <li v-for="(game,index) in games" :key="index">{{index+1}} {{game.title}} / 售价:{{game.price}}$ </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Button",
        data() {
            return {
                games:[
                    {title:"game1，嗷嗷嗷",price: 1000},
                    {title:"game2，eeeee",price: 2000},
                    {title:"game3，dddd",price: 3000},
                ]
            }
        },
        
    };
</script>

<style>
    
</style>