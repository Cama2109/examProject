var elButton = document.querySelectorAll(".btn");
console.log(elButton);
 for(var i=0; i<elButton.length; i++)
 {
     elButton[i].addEventListener("click",function(){
         for(var j=0; j < elButton.length; j++){
             elButton[j].classList.remove("active");
             this.classList.add("active");
         }
     })
 }

