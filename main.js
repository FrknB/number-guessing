let heart = 3;
let random = 0;

function Guess(){
    let number = document.getElementById("number").value;

    if(heart == 3){
        random = Math.floor(Math.random()*10)+1;
    }

    if(number == random){
        document.getElementById("result").innerText = "Tebrikler Doğru Bildiniz.";
        ShowButton("btn-again");
        HideButton("btn-user");
    }
    else{
         let element = document.querySelectorAll("#hearts > i")[heart -1];
         element.classList.remove("heart-red");
         element.classList.add("heart-gray");

         heart--;
         document.getElementById("number").value="";
         if(heart >0){
            document.getElementById("result").innerText = "Yanlış Bildiniz.";
            
         }
         else{
            ShowButton("btn-again");
            HideButton("btn-user");

            document.getElementById("result").innerText = ("Yanlış Bildiniz. Doğru Cevap ")+ random;
            /*  */
         }
    }
}

function Again(){
    document.getElementById("result").innerText="";
    heart = 3;

    for (let i = 0; i < 3; i++) {
        let element = document.querySelectorAll("#hearts > i")[i];
        element.classList.remove("heart-gray");
        element.classList.add("heart-red"); 
    }
        ShowButton("btn-user");
        HideButton("btn-again");

}
function ShowButton(id){
    document.getElementById(id).classList.add("btn-show");
    document.getElementById(id).classList.remove("btn-hide");
}

function HideButton(id){
    document.getElementById(id).classList.add("btn-hide");
    document.getElementById(id).classList.remove("btn-show");
}