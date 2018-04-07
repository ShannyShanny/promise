let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.reject('error');

Promise.all([p1,p2,p3]).then(rst=>{
    console.log(rst)
}).catch(rst=>{
    console.log(rst)
})