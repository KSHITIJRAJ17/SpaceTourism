function changeStyle(){
    let element1 = document.getElementById("c1");
    let element2 = document.getElementById("c2");
    let element3 = document.getElementById("c3");
    let element4 = document.getElementById("c4");
    if(k1.checked)
    {
        element1.style.opacity = "1";
        element2.style.opacity = "0";
        element3.style.opacity = "0";
        element4.style.opacity = "0";
    }
    else if(k2.checked)
    {
        element1.style.opacity = "0";
        element2.style.opacity = "1";
        element3.style.opacity = "0";
        element4.style.opacity = "0";
    }
    else if(k3.checked)
    {
        element1.style.opacity = "0";
        element2.style.opacity = "0";
        element3.style.opacity = "1";
        element4.style.opacity = "0";
    }
    else if(k4.checked)
    {
        element1.style.opacity = "0";
        element2.style.opacity = "0";
        element3.style.opacity = "0";
        element4.style.opacity = "1";
    }
    else
    {
        element1.style.opacity = "1";
        element2.style.opacity = "0";
        element3.style.opacity = "0";
        element4.style.opacity = "0"; 
    }
}