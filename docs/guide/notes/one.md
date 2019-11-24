# 一、冒泡排序

## 原理（算法描述）：

1、比较相邻元素，如果第一个比较大 ，就交换他们的顺序。

2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；

3、针对所有的元素重复以上的步骤，除了最后一个；

4、重复1-3步骤直到排序完成。

代码实现

/**
 * 冒泡排序
 * @param array
 * @return
 */

     
```javascript
var a = [2,1,3,4,5,2,56]; 
function bubbleSort(array){
var temp;    //定义temp变量，用于存放最大值
if(array.length == 0){
	return array;
}else{
for(var i=0;i<array.length;i++){
    for(var j=i+1;j<array.length;j++){
    if(array[i]>array[j]){
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
 }
    return array;
}
}
}
bubbleSort(a);
```