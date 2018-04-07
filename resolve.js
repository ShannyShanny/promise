// let p = Promise.reject(404);
let pp = Promise.resolve(200);

pp.then(rst=>{
    console.log('then',rst)
}).catch(rst=>{
    console.log('catch',rst)
})
