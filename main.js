let addClick = 0;
function viewDiv(){  
 updateDisplay(++addClick);
 console.log('add ' + addClick) ;
 if (addClick==1) document.getElementById("elem0").style.display = "block";   
  if (addClick==2) document.getElementById("elem1").style.display = "block";   
  if (addClick==3) document.getElementById("elem2").style.display = "block";   
  if (addClick==4) document.getElementById("elem3").style.display = "block";
   if (addClick==5) document.getElementById("elem3").style.display = "block";
    if (addClick==6) document.getElementById("elem3").style.display = "block";
   if (addClick==7) {document.getElementById("elem4").style.display = "block";  addClick = 0; }  
};

function delNode(el){el.parentNode.parentNode.remove()}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}