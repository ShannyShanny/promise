let p = new Promise((resolve,reject)=>{
    let random = Math.random();
    if(random>0.5) {
        resolve('>0.5');
    } else {
        reject('<=0.5');
    }
});

// 接收2个参数
p.then(rst => {
    console.log('resolve'+rst);
},rst => {
    console.log('reject'+rst);    
})

// 接收1个参数，则时resolve的情况，这时候如果搜reject会报错
p.then(rst=>{
    console.log('resove'+rst)
})

// 接收2个参数，第一个时null，相当于catch
p.then(null,rst=>{
    console.log('reject'+rst);
})
