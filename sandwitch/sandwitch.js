function makeSandwich (bread,cb){
    setTimeout(() => {
        console.log(`Making ${bread}`);
        cb();
    }, 3000);
}

function applysauce(sauce,cb){
    setTimeout(() => {
        console.log(`Applied ${sauce}`)
        cb();
    }, 2000);
}

function stuffying(stuff, cb){
    setTimeout(() => {
        console.log(`Stuff Added ${stuff}`)
        cb();
    }, 4000);
}

function grilled(temp,cb){
    setTimeout(() => {
        console.log(`Grilled at temp ${temp}`)
        cb();
    }, 5000);
}

function serving (plate,cb){
    setTimeout(() => {
        console.log(`Served at plate ${plate}`)
        cb();
    }, 3000);
}

makeSandwich("Brown Bread", ()=>{
    applysauce("Chilly", ()=>{
        stuffying("Panner", ()=>{
            grilled("60", ()=>{
                serving("Gold Plate",()=>{
                    console.log("Your Sandwich is Ready to eat")
                })
            })
        })
    })
})