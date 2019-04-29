<template>
    <div>分析页</div>
</template>

<script>
export default {
    created() {
        console.log('这里是分析页的console.log')
        console.log(this.$router);
        console.log(this.$router.options);
        console.log(this.$router.options.routes);
    }
}
</script>

<style>

</style>
