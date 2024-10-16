let a =20;
let b= 0;

let wdata = new Promise((Resolve, Reject)=> {

    setTimeout(()=>{
        Resolve(40);
    }, 5000);

});

wdata.then((data)=>{
    b = data;
    console.log(a+b);
})