var elButton = document.querySelectorAll(".btn");
var elBox =document.querySelectorAll(".filter-box");
console.log(elButton);
 for(var i=0; i<elButton.length; i++) {
     elButton[i].addEventListener("click",function(){
         for(var j=0; j < elButton.length; j++){
             elButton[j].classList.remove("active");
             this.classList.add("active");
         }
         var dataFilter = this.getAttribute("data-name");
for(var k=0; k < elBox.length; k++){
    elBox[k].classList.add("hide");
    elBox[k].classList.remove("show");

    if(dataFilter === elBox[k].getAttribute("data-item") || dataFilter ==="all") {
        elBox[k].classList.add("show");
        elBox[k].classList.remove("hide");
    }
}
     })
 
    }
