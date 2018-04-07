function ajaxReq(time) {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            console.log(time)
            res(time);
        },time);
    })
}


let p1 = ajaxReq(8000);
let p2 = ajaxReq(500);
let p3 = ajaxReq(500);

Promise.all([p1,p2,p3]).then(rst=>{
    console.log(rst)
}).catch(rst=>{
    console.log(rst)
})