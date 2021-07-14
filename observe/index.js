//触发视图更新
function updateView(value) {
    console.log('视图更新：',value)
}

//重新定义数组原型
const oldArrayProperty = Array.prototype// 把数组的原型赋值给oldArrayProperty，数组的方法像push都在数组的原型上
const arrProto = Object.create(oldArrayProperty);//Object.create表示创建新对象，原型指向oldArrayProperty，再扩展新的方法不会影响原型，此时arrProto等同于Array
['push','pop','shift','unshift','splice'].forEach(methodName=>{
    arrProto[methodName] = function(){
        updateView(methodName)//更新视图
        oldArrayProperty[methodName].call(this,...arguments)//做本该做的数组修改
    }
})

//重新定义属性，监听起来
function defineReactive(target,key,value){
    //深度监听，用于监听属性值是对象或者数组的情况，想info是个对象，就需要深度监听下
    observe(value)

    //核心API
    Object.defineProperty(target,key,{
        get() {
            return value
        },
        set(newValue){//属性值是对象或者数组的时候，监听不到变化
            if(newValue!==value){
                // 深度监听，用于下面data.name改成对象后的监听
                observe(value)

                //设置新值
                //注意，value一直在闭包中，此处设置完之后，再get时也是最新值
                value = newValue

                updateView(value)
            }
        }
    })
}

//监听对象属性
function observe(target){
    console.log(target)
    if(typeof target!=='object' || target === null){
        //不是对象或数组，就跳出这个函数
        return target
    }

    if(Array.isArray(target)){
        target.__proto__ = arrProto
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const data = {
    name:'zhangsan',
    age:20,
    info:{
        city:'北京',// 需要深度监听
    },
    nums:[1,2,3,4]
}
// 监听数据
observe(data)

data.name='lisi'
data.name={mingzi:'kaiqin'}//这时就需要在 Object.defineProperty的set里再监听下‘mingzi’，不然下面的修改就监听不到了
data.name={mingzi:'test'}
data.age = 24
data.info.city='上海'
data.nums.push(2)