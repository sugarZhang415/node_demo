<template>
  <div>
      <Input @add='addItem'/>
      <List :data='data' @delete='delItem'/>
  </div>
</template>

<script>
import Input from './components/input';
import List from './components/list';

export default {
    components:{
        Input,
        List
    },
    data(){
        return {
            data:[{
                id:0,value:'苹果',
            },{
                id:1,value:'香蕉',
            }]
        }
    },
    methods:{
        addItem(item){
            this.data.push({
                id:this.data.length,
                value:item
            })
        },
        delItem(id){
            this.data = this.data.filter(item =>item.id!==id);
        }
    }
}
</script>

<style>

</style>