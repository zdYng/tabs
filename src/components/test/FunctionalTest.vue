<template >
    <functional-button @click="log">
        Click me
    </functional-button>
</template>

<script>
    import FunctionalButton from "@/components/js/FunctionalButton";
    export default {
        name:'FunctionalTest',
        components:{
            FunctionalButton
        },
        methods:{
            log(){
                console.log("click ....");
            }
        }
    }
</script>
