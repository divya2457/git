function box1(callback){
    setTimeout(()=>{
        console.log("successful")
        callback()
    }, 5000);
}
function box2(callback){
    setTimeout(()=>{
        console.log("loading")
        callback()
    }, 2000);
}
function box3(callback){
    setTimeout(()=>{
        console.log("deliverd")
        callback()
    }, 1000);
}
function box4(callback){
    setTimeout(()=>{
        console.log("bending")
    }, 500);
}
box1(()=>{
    box2(()=>{
        box3(()=>{
            box4(()=>{

            })
        })
    })
})