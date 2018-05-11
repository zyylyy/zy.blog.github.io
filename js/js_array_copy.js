let array1 = [1, 'a', true, null, undefined];

/*slice*/
let c1 = array1.slice();

/*concat*/
let cc1 = array1.concat();

/*from*/
let fc1 = Array.from(array1);

/*push*/
let pc1 = [];
Array.prototype.push.apply(pc1, array1);

/*map*/
let mc1 = array1.map(function (item) {
    return item;
});

/*JSON转换*/
let jsonc = JSON.parse(JSON.stringify(array1));

/*简单的引用复制*/
function shallowClone(copyObj) {
    var obj = {};
    for (var i in copyObj) {
        obj[i] = copyObj[i];
    }
    return obj;
}
var x = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);     // true

/*Object.assign()*/
var x = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var y = Object.assign({}, x);
console.log(y.b.f === x.b.f);     // true

