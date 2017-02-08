/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var b=
[
        "images/guitar 1.png",
        "images/guitar 2.png",
        "images/guitar 3.jpg"
];
var flag=0;
var ctr=-1;

var data;  
var filtereddata;
var price,ship;

function fetchdata()
{    
    var xmlhttp = new XMLHttpRequest();
    var url = "guitardata.json";
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
    xmlhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            data = this.responseText;
            filtereddata=JSON.parse(data);
        }    
    };

}


function imgnext()
{
    if(ctr===2)
        ctr=-1;
    ctr=ctr+1;
    
    var str = filtereddata.allProducts[ctr].customer_reviews;
    var fstr = str.replace(/;/g,'</li><li>');
    
    document.getElementById("guitarimg").src=b[ctr];
        document.getElementById("drop1").innerHTML="<b>Description : </b>" + 
                filtereddata.allProducts[ctr].product_description + 
                "<br><br><b>Price : </b>" + filtereddata.allProducts[ctr].price+ 
                "<br><br><b>Quantity : </b>" + filtereddata.allProducts[ctr].no_of_items;
    document.getElementById("drop2").innerHTML=filtereddata.allProducts[ctr].shipping_details;
    document.getElementById("drop3").innerHTML='<ul><li>' + fstr + '</li></ul>';
}

function imgprev()
{
    if(ctr===0)
        ctr=3;
    ctr=ctr-1;
    
    var str = filtereddata.allProducts[ctr].customer_reviews;
    var fstr = str.replace(/;/g,'</li><li>');
    
    document.getElementById("guitarimg").src=b[ctr];
        document.getElementById("drop1").innerHTML="<b>Description : </b>" + 
                filtereddata.allProducts[ctr].product_description + 
                "<br><br><b>Price : </b>" + filtereddata.allProducts[ctr].price+ 
                "<br><br><b>Quantity : </b>" + filtereddata.allProducts[ctr].no_of_items;
    document.getElementById("drop2").innerHTML=filtereddata.allProducts[ctr].shipping_details;
    document.getElementById("drop3").innerHTML='<ul><li>' + fstr + '</li></ul>';
}

function loadguitar()
{
    if(flag===0)
    {
        document.getElementById("guitarimg").src=b[0];
        ctr=0;
        document.getElementById("content").style.display='block';
        flag=1;
    
        
    var str = filtereddata.allProducts[ctr].customer_reviews;
    var fstr = str.replace(/;/g,'</li><li>');
    
        document.getElementById("drop1").innerHTML="<b>Description : </b>" + 
                filtereddata.allProducts[ctr].product_description + 
                "<br><br><b>Price : </b>" + filtereddata.allProducts[ctr].price+ 
                "<br><br><b>Quantity : </b>" + filtereddata.allProducts[ctr].no_of_items;
    document.getElementById("drop2").innerHTML=filtereddata.allProducts[ctr].shipping_details;
    document.getElementById("drop3").innerHTML='<ul><li>' + fstr + '</li></ul>';
    }
}

function displaydrop(a)
{
    var b=document.getElementById(a.toString()).style.display;
    if(b.toString()==='block')
        document.getElementById(a.toString()).style.display= 'none';
    else
        document.getElementById(a.toString()).style.display= 'block';
    
}

function page2(a)
{
    window.location.href = a.toString() + ctr;
}

function page2load()
{
    
    var a = window.location.href;
    var c = a.lastIndexOf("id");
    var temp = a.slice(c+3);
    ctr=parseInt(temp);
    
    var xmlhttp = new XMLHttpRequest();
    var url = "guitardata.json";
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
    xmlhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            data = this.responseText;
            filtereddata=JSON.parse(data);
            document.getElementById("guitarimg").src=b[ctr];
     document.getElementById("guitarimg").src=b[ctr];
        document.getElementById("drop1").innerHTML="<b>Description : </b>" + 
                filtereddata.allProducts[ctr].product_description + 
                "<br><br><b>Price : </b>" + filtereddata.allProducts[ctr].price+ 
                "<br><br><b>Quantity : </b>" + filtereddata.allProducts[ctr].no_of_items;
        
            
            price=filtereddata.allProducts[ctr].price;
            
            var a=filtereddata.allProducts[ctr].shipping_details;
            
            var c = a.lastIndexOf("id");
            ship = a.slice(c+3);
        }    
    };
    
    
}

function initialiseinput()
{
    //window.alert("Hello Input");
    document.getElementById('fname').style.border='5px solid yellow';    
    document.getElementById('lname').style.border='none';
    document.getElementById('line1').style.border='none';
    document.getElementById('line2').style.border='none';
    document.getElementById('city').style.border='none';
    document.getElementById('state').style.border='none';
    document.getElementById('mail').style.border='none';
    document.getElementById('cc').style.border='none';
}

function formvalidity(a)
{
    //document.getElementById(a.toString()).setCustomValidity(' ');
 
    if(document.getElementById(a.toString()).validity.valid==false)
    {
        document.getElementById(a.toString()).style.border='2px solid red';
        window.alert(document.getElementById(a.toString()).value);
    }
    else
    {
        document.getElementById(a.toString()).style.border="none";  
    }
  
}
 
function disprev()
{
    document.getElementById('invalidform').style.display='none';
    document.getElementById('validform').style.display='block';
    var naam=document.getElementById('fname').value + " " + document.getElementById('lname').value;
    
    document.getElementById("name").innerHTML=naam;    
    
    document.getElementById("adl1").innerHTML=document.getElementById('line1').value;
    document.getElementById("adl2").innerHTML=document.getElementById('line2').value;
    document.getElementById("adl3").innerHTML=document.getElementById('city').value;
    document.getElementById("adl4").innerHTML=document.getElementById('state').value;
    
    document.getElementById("email").innerHTML=document.getElementById('mail').value;
    document.getElementById("card").innerHTML=document.getElementById('cc').value;
    
    return false;
}

function itemstore()
{
    if(typeof(Storage)!== "undefined")
    {       
        var naam=document.getElementById('fname').value + " " + document.getElementById('lname').value;

        sessionStorage.setItem("Name",naam);    

        sessionStorage.setItem("Line1",document.getElementById('line1').value);
        sessionStorage.setItem("Line2",document.getElementById('line2').value);
        sessionStorage.setItem("City",document.getElementById('city').value);
        sessionStorage.setItem("State",document.getElementById('state').value);

        sessionStorage.setItem("Email",document.getElementById('mail').value);
        sessionStorage.setItem("Card",document.getElementById('cc').value);
    
        sessionStorage.setItem("Price",price);
        sessionStorage.setItem("Ship",ship);
    }
    else
    {
        window.alert("Your Browser doesnt support Local Storage ");
    }
}

function itemget()
{
    if(typeof(Storage)!== "undefined")
    {       
        document.getElementById("name").innerHTML=sessionStorage.getItem("Name");    
    
        document.getElementById("adl1").innerHTML=sessionStorage.getItem("Line1");
        document.getElementById("adl2").innerHTML=sessionStorage.getItem("Line2");
        document.getElementById("adl3").innerHTML=sessionStorage.getItem("City");
        document.getElementById("adl4").innerHTML=sessionStorage.getItem("State");

        document.getElementById("email").innerHTML=sessionStorage.getItem("Email");
        document.getElementById("card").innerHTML=sessionStorage.getItem("Card");
    
    }
    else
    {
        window.alert("Your Browser doesnt support Local Storage ");
    }
}