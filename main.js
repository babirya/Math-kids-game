function rand(){

     
    var v1= document.getElementById("in1"); 
    var v2= document.getElementById("in2");
    v1.value=Math.floor(Math.random()*100) ;
    v2.value=Math.floor(Math.random()*100) ;
}  

function valider(){
     var somme =parseInt(document.getElementById("s").value) ; 
     var sou = parseInt(document.getElementById("sou").value)  ; 
     var mul = parseInt(document.getElementById("mu").value)  ; 
     var dev= parseFloat(document.getElementById("dev").value)  ;
     // 
     var vv1= parseInt(document.getElementById("in1").value); 
     var vv2= parseInt(document.getElementById("in2").value) ;  
var sop=vv1+vv2;
var sou1=vv1-vv2; 
var mul1=vv1*vv2;  
var dev1=vv1/vv2;



     // if  some
     if(somme==sop)
     {
         document.getElementById("s").style.border="3px green solid";
     }
     else
     {
        document.getElementById("s").style.border="3px red solid";
     } 

     // sous  
     if(sou1==sou)
     {
         document.getElementById("sou").style.border="3px green solid";
     }
     else
     {
        document.getElementById("sou").style.border="3px red solid";
     } 
     // munltiplication  
     if(mul==mul1)
     {
         document.getElementById("mu").style.border="3px green solid";
     }
     else
     {
        document.getElementById("mu").style.border="3px red solid";
     } 
     
     // devision 
     if(dev1==dev)
     {
         document.getElementById("dev").style.border="3px green solid";
     }
     else
     {
        document.getElementById("dev").style.border="3px red solid";
     } 
     
     
} 

// function correction 

function cor(){

    var vv1= parseInt(document.getElementById("in1").value); 
    var vv2= parseInt(document.getElementById("in2").value) ;  

var sop=vv1+vv2;
var sou1=vv1-vv2; 
var mul1=vv1*vv2;  
var dev1=vv1/vv2;

var sas=document.getElementById("sas").value=sop;
var sas=document.getElementById("nas").value=sou1;
var sas=document.getElementById("fas").value=mul1;
var sas=document.getElementById("ras").value=dev1;




}

