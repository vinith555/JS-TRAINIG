const d1 = document.getElementById("d1");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const p1 = document.getElementById("p1");
const hh = document.getElementById("res");
const s3 =document.getElementById("s3");
const s4 =document.getElementById("s4");

let pcount = 0;
let ccount = 0;
s3.style.color = "green";
s4.style.color = "red";
function decider(num){
    let com = Math.floor(Math.random()*3)+1;
    let res ="";
    if(num == com){
        p1.style.fontSize = "30px";
        p1.style.fontWeight = "bold";
        p1.textContent = `IT'S A TIE`;
        p1.style.color = "red";
    }
    else{
        p1.textContent = "";
        switch(num){
            case 1:
                res = (com == 3) ? 'YOU WON':'YOU LOSE';
                break;
            case 2:
                res = (com == 1) ? 'YOU WON':'YOU LOSE';
                break
            case 3:
                res = (com == 2) ? 'YOU WON':'YOU LOSE';
                break; 
        }
    }
    if(num == 1){
        s1.textContent = ' ROCK';
    }
    if(num == 2){
        s1.textContent = ' PAPER';
    }
    if(num == 3){
        s1.textContent = ' SCISSOR';
    }
    if(com == 1){
        s2.textContent = ' ROCK';
    }
    if(com == 2){
        s2.textContent = ' PAPER';
    }
    if(com == 3){
        s2.textContent = ' SCISSOR';
    }
    switch(res){
        case 'YOU WON':
            pcount++;
            break;
        case 'YOU LOSE':
            ccount++;
            break;
    }
    s3.textContent = `${pcount}`;
    s4.textContent = `${ccount}`;
    hh.textContent = res;
}
function resset(){
    hh.textContent = "";
    s3.textContent = `0`;
    s4.textContent = `0`;
    s2.textContent = "";
    s1.textContent = "";
    p1.textContent = "";
    pcount = 0;
    ccount = 0;
}