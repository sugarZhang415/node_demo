<template>
  <div>
    <p>{{ num }}</p>
    <van-button @click="handle1">+1</van-button><!-- 事件不传参，默认有event -->
    <van-button @click="handle2(2,$event)">+2</van-button><!-- 事件如需传参，event必须写才能获取-->
  </div>
</template>

<script>
export default {
    data() {
        return {
            num:0,
        }
    },
    methods: {
        handle1:function(event){
            console.log(event,event.__proto__.constructor);//event.__proto__.constructor就是event的构造函数， 打印结果证明event就是原生事件，没有进行改写，react则不同。
            console.log(event.target);// 事件挂载的地方，vue的事件挂载到当前元素上
            console.log(event.currentTarget);//事件触发的地方
            this.num++
        },
        handle2:function(val,event){
            console.log(event)
            this.num = this.num+val
        }

    }
};
</script>

<style scoped>
</style>