/*
* 大家都知道，男大当婚，女大当嫁，那么女方家长要嫁女儿，当然提出一定条件；
* 高：180cm以上；富：1000万以上；帅：500以上；
* 如果这三个条件同时满足，则：‘我一定要嫁给他’；
* 如果三个条件有为真的情况，则：‘嫁吧，比上不足，比下有余。’；
* 如果三个条件都不满足，则：‘不嫁’；
*/

var height = prompt("请输入你的身高(CM):");
var money = prompt("请输入你的财富(万):");
var face = prompt("请输入你的颜值(PX):");
// 如果这三个条件同时满足，则：‘我一定要嫁给他’
if(height > 180 && money > 1000 && face > 500){
    console.log("我一定要嫁给他");
}else if(height > 180 || money > 1000 || face > 500){
    // 如果三个条件有为真的情况，则：‘嫁吧，比上不足，比下有余。’；
    console.log("嫁吧，比上不足，比下有余。");
}else{
    // 如果三个条件都不满足，则：‘不嫁’；
    console.log("不嫁。");
}