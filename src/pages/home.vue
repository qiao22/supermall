<template>
    <div>
        <p>{{$store.state.count}}</p>
        <button @click="addHandler">+</button>
        <button @click="eggHandle">-</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            addHandler(){
                this.$store.commit('add')
            },
            eggHandle(){
                this.$store.commit('egg')

            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
