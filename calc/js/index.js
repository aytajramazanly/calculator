let calc=document.getElementById("display");

let btns=document.querySelectorAll(".button");

btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        switch (btn.innerText) {
            case "C":
                calc.innerText="";
                break;
            case "=":
               try {
                calc.innerText=eval(calc.innerText);
               } catch  {
                calc.innerText=0;
               }
                break;
            case "←":
               if (calc.innerText) {
                calc.innerText=calc.innerText.slice(0,-1);
               }
                break;
            default:
                calc.innerText+=this.innerText;
        }
    })
})