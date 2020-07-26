function findProduct()
{
    var productGauge=document.forms[0].gauge.value;
    document.getElementById("product").innerHTML=productGauge;
}
function setColor()
{
    if(document.forms[0].gauge.value == 30){
        document.getElementById("productColor").style.backgroundColor = "yellow";
    }
    else if(document.forms[0].gauge.value == 29){
        document.getElementById("productColor").style.backgroundColor = "red";
    }
    else if(document.forms[0].gauge.value == 28){
        document.getElementById("productColor").style.backgroundColor = '#00665a';
    }
    else if(document.forms[0].gauge.value == 27){
        document.getElementById("productColor").style.backgroundColor = '#999b9e';
    }
    else if(document.forms[0].gauge.value == 26){
        document.getElementById("productColor").style.backgroundColor = '#95533c';
    }
    else if(document.forms[0].gauge.value == 25){
        document.getElementById("productColor").style.backgroundColor = '#f5822b';
    }
    else if(document.forms[0].gauge.value == 24){
        document.getElementById("productColor").style.backgroundColor = '#1b1c85';
    }
    else if(document.forms[0].gauge.value == 23){
        document.getElementById("productColor").style.backgroundColor = '#005188';
    }
    else if(document.forms[0].gauge.value == 22){
        document.getElementById("productColor").style.backgroundColor = '#000000';
    }
    else if(document.forms[0].gauge.value == 21){
        document.getElementById("productColor").style.backgroundColor = '#006910';
    }
    else if(document.forms[0].gauge.value == 20){
        document.getElementById("productColor").style.backgroundColor = '#fff200';
    }
    else if(document.forms[0].gauge.value == 19){
        document.getElementById("productColor").style.backgroundColor = '#f0e0c6';
    }
    else if(document.forms[0].gauge.value == 18){
        document.getElementById("productColor").style.backgroundColor = '#f59eb3';
    }
    else{
        document.getElementById("productColor").style.backgroundColor = "";
    }
}
function setNDC(){

}