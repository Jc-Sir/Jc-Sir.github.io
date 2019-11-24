#   reduce()的常用条件
reduce()方法在数组的每个元素上执行回调函数函数，从而产生单个输出值。

回调函数参数四个
pre: 初始值（之后为上一操作的结果）
cur: 当前元素之
index: 当前索引
arr: 数组本身


示例：
```javascript
[1,2,3,21,4].reduce((pre,cur,index,arr)=>{ pre + cur })
```

主要有以下用法：
1、数组求和
```javascript
[1,2,3,4].reduce((pre, cur) => pre + cur)  //10
```


2、计算数组中每个元素出现的次数
```javascript
let names = ['tom', 'jim', 'jack', 'tom', 'jack'];
const countNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name] ++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countNames)  // { tom: 2, jim: 1, jack: 2 }
```

方法2
```javascript
const arraySum = (arr, val) => arr.reduce((acc, cur) => {
    return cur == val ? acc + 1 : acc + 0
}, 0);

let arr = [ 0, 1, 3, 0, 2, 0, 2, 3 ]
console.log(arraySum(arr, 0)) // 数组arr中 0 元素出现的次数为3

```
3、数组去重
```javascript
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

```
4、二维数组变一维数组
```javascript
var array = [[1, 2], [3, 4], [5, 6]].reduce(( acc, cur ) => {
    return acc.concat(cur)
}, []);

console.log(array)  // [ 0, 1, 3, 4, 5, 6 ]
```

