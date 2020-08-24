<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name: 'EmptyPage',
    data(){
        return {

        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$router.replace(from.path);
        })
    }
}
</script>
<style lang="less" scoped>

</style>