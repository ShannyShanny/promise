let p = new Promise((resolve,reject)=>{
    console.log('after Resolve');
    resolve('success');
    reject('error');
})

p.then(rst => {
    console.log(rst);
})

p.catch(res => {
    console.log(res);
})

