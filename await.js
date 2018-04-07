// 只有在异步方法中才可以使用await,await只接收成功的信息
function sleep(timeout) {
    return new Promise((rst,rej) => {
        setTimeout(()=>{
            timeout += 100;
            rst(timeout);
        }, timeout);
    })
}


sleep(100).then(rst => {
    console.log(rst)
})














return;

async function test(rst0) {
    let rst1 = await sleep(rst0);
    let rst2 = await sleep(rst1);
    let rst3 = await sleep(rst2);
    return rst3;
}

test(100).then(rst=>{
    console.log(rst);
})