/*
** 深拷贝
**创建对象副本的最古老方法之一是将对象转换为其JSON字符串表示形式，然后将其解析回对象
*/
// const obj = /* ... */;
// const copy = JSON.parse(JSON.stringify(obj));

const x = {};
const y = { x };
x.y = y; // Cycle: x.y.x.y.x.y.x.y.x...
const copy = JSON.parse(JSON.stringify(x)); // throws!

/*
** 浅拷贝：Object.assign（）
**创建对象副本的最古老方法之一是将对象转换为其JSON字符串表示形式，然后将其解析回对象
*/
// const obj = /* ... */;
// const copy = Object.assign({}, obj);

function mutateDeepObject(obj) {
    obj.a.thing = true;
}

const obj = { a: { thing: false } };
const copy = Object.assign({}, obj);
mutateDeepObject(copy)
console.log(obj.a.thing); // prints true