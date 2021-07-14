//触发视图更新
function updateView() {
    console.log('视图更新')
}

//重新定义属性，监听起来
function defineReactive(target,key,value){
    //核心API
    Object.defineProperty(target,key,{
        get() {
            return value
        },
        set(newValue){
            if(newValue!==value){
                //设置新值
                //注意，value一直在闭包中，此处设置完之后，再get时也是最新值
                value = newValue

                updateView()
            }
        }
    })
}

//监听对象属性
function observe(target){
    if(typeof target!=='object' || target === null){
        //不是对象或数组
        return target
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const data = {
    name:'zhangsan',
    age:20
}
// 监听数据
observe(data)

data.name='lisi'