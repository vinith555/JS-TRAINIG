let count=0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById("b1").onclick =async function(){
    // for(let i=0;i<10;i++){
    count=count+1;
    document.getElementById("p1").textContent= count;
    // await sleep(1000);
// }
}
document.getElementById("b2").onclick = function(){
    count=0;
    document.getElementById("p1").textContent= count;
}
document.getElementById("b3").onclick = function(){
    count=count-1;
    document.getElementById("p1").textContent= count;
}