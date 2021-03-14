# React常见问题

## React中的key的作用

1. 和type值一起来标记同级节点，当前元素的唯一性。
2. fiber架构的唯一性

## React生命周期

挂载时

## React Fiber

- 对于⼤大型项⽬目，组件树会很⼤大，这个时候递归遍历的成本就会很⾼高，会造成主线程被持续占⽤用，结果就是主线程上的布局、动画等周期性任务就⽆无法⽴立即得到处理理，造成视觉上的卡顿，影响⽤用户体验。
- 增量渲染(把渲染任务拆分成块，匀到多帧)
- 更新时能够暂停，终⽌，复⽤渲染任务
- 给不同类型的更新赋予优先级
- 并发⽅面新的基础能⼒