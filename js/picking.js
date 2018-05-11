function pick(obj, keys) {
    return keys.map(k => k in obj ? { [k]: obj[k] } : {})
        .reduce((res, o) => Object.assign(res, o), {});

        keys.map((k) =>{
            if(k in obj) {
                return { [k]: obj[k]}
            }else {
                return {}
            }
        })

        reduce((res, o) =>{
            return Object.assign(res, o),{};
        })
}

const row = {
    'accounts.id': 1,
    'client.name': 'John Doe',
    'bank.code': 'MDAKW213'
};

const table = [
    row,
    { 'accounts.id': 3, 'client.name': 'Steve Doe', 'bank.code': 'STV12JB' }
];

pick(row, ['client.name']); // 取到了 client name

table.map(row => pick(row, ['client.name'])); // 取到了一系列 client name



// 反选（reject）

function reject(obj, keys) {
    return Object.keys(obj)
        .filter(k => !keys.includes(k))
        .map(k => ({ [k]: obj[k] }))
        .reduce((res, o) => Object.assign(res, o), {});
}

// 或者, 利用 pick
function reject(obj, keys) {
    const vkeys = Object.keys(obj)
        .filter(k => !keys.includes(k));
    return pick(obj, vkeys);
}

reject({ a: 2, b: 3, c: 4 }, ['a', 'b']); // => {c: 4}