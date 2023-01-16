function changeStyle1()
{
    let element1 = document.getElementById("c1");
    let element2 = document.getElementById("c2");
    let element3 = document.getElementById("c3");
    let key1 = document.getElementById("k1");
    let key2 = document.getElementById("k2");
    let key3 = document.getElementById("k3"); 
    key1.className = "button active1";
    key2.className = "button";
    key3.className = "button";
    element1.style.opacity = "1";
    element2.style.opacity = "0";
    element3.style.opacity = "0";
}
function changeStyle2()
{
    let element1 = document.getElementById("c1");
    let element2 = document.getElementById("c2");
    let element3 = document.getElementById("c3");
    let key1 = document.getElementById("k1");
    let key2 = document.getElementById("k2");
    let key3 = document.getElementById("k3"); 
    key1.className = "button";
    key2.className = "button active1";
    key3.className = "button";
    element1.style.opacity = "0";
    element2.style.opacity = "1";
    element3.style.opacity = "0";
}
function changeStyle3()
{
    let element1 = document.getElementById("c1");
    let element2 = document.getElementById("c2");
    let element3 = document.getElementById("c3");
    let key1 = document.getElementById("k1");
    let key2 = document.getElementById("k2");
    let key3 = document.getElementById("k3"); 
    key1.className = "button";
    key2.className = "button";
    key3.className = "button active1";
    element1.style.opacity = "0";
    element2.style.opacity = "0";
    element3.style.opacity = "1";
}
