let num ;
let randomNum = Math.floor(Math.random()*100)+1;
let count = 0;
let round = true;
var result;
document.getElementById("b1").onclick = function(){
num = document.getElementById("i1").value;
    // console.log(randomNum);
    if(num<1 && num>100){
        document.getElementById("p1").textContent = `Enter a valid number`;
    }
    else{
        if(num<randomNum){
            document.getElementById("p1").textContent = `Too low`;
        }else if(num>randomNum){
            document.getElementById("p1").textContent = `Too high`;
        }else{
            document.getElementById("p1").textContent = `You have won in ${count} attempts`;
        }
    }
    count++;
    console.log(count);
}
