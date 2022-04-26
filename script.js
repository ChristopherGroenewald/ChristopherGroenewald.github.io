var num = 0;
function Incrementor() 
{
    num++;
    var numValue = `<h1> ${num} </h1>`;
    document.getElementById("result").innerHTML = numValue;
    return num;
}
document.querySelector("button").addEventListener("click", Incrementor);

//document.querySelector("button").onclick = Incrementor();


