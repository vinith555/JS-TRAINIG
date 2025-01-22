const princepale = document.getElementById("pa");
const rate = document.getElementById("ra");
const year = document.getElementById("ye");
const dis = document.getElementById("sp");

// const pav = princepale.value;
function calculate(){
    const pav = Number( princepale.value);
    let rav = Number(rate.value);
    const yev = Number(year.value);
    rav = rav/100;
    let value = pav *Math.pow((1+rav/1),1*yev);
    dis.textContent = value.toLocaleString("hi-IN");
}