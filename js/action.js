function animatedform(){
   const arrows = document.querySelectorAll(".fa-right-to-bracket");
   arrows.forEach(arrow => {
      arrow.addEventListener("click",()=>{
         const input = arrow.previousElementSibling;
         const parent = arrow.parentElement;
         const nextfom = parent.nextElementSibling;
         if(input.type == 
         "text" && validateuser(input)){
            nextslide(parent,nextfom); 
         } else if(input.type == "email" && vlidatemail(input)){
            nextslide(parent,nextfom);
         }else if(input.type == "password" && validateuser(input)){
            nextslide(parent,nextfom);
         }else{
            parent.style.animation = "shake 0.5s ease"; 
         }
         parent.addEventListener('animationend' ,() => {
            parent.style.animation = "";
         });
      })
   });
}

function validateuser(user){
   if(user.value.length < 6){
      console.log("Not enougth Caractere");
      error('rgb(189,87,87)');//red
   }else{
      error('rgb(87, 189, 130)');//green
      return true;
   }
}

function error(color){
   document.body.style.backgroundColor = color;
}

function nextslide(parent,nextfom){
   parent.classList.add("inactive");
   parent.classList.remove ("active");
   nextfom.classList.add("active");
}

function vlidatemail(email){
   const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(validation.test(email.value)){
      error('rgb(87, 189, 130)');//green
      return true;
   }else{
      error('rgb(189,87,87)');//red
   }
}

animatedform();