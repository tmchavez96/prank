
function animText(container, text){
    console.log('in method')
    console.log(text);
    console.log( text.length);
    console.log(container);
    container.innerHTML = "";
    var timeConst = 10;
    for(var i = 0; i < text.length; i++){
        console.log("in loop")
        var curChar = text.charAt(i);
        console.log(curChar);
        if(i % 30 == 0){
            setTimeout(writeChar.bind(null, container, '<br>'), i * timeConst);
        }
        setTimeout(writeChar.bind(null, container, curChar), i * timeConst);
    }
}

function writeChar(cont, char){
    cont.innerHTML += char;
}

function main() {
    console.log("started onload");
    let header = document.getElementById("form--label");
    let russianSpook = "Бидејќи непочитува ето и омаловажувањето на човековите права";
    let activation = "You have been activated. Enter activation code."
    animText(header, russianSpook);
    setTimeout( () =>{
        header.innerHTML = "";
    }, 3000);
    setTimeout( () =>{
        animText(header, activation);
    }, 4000);
}

function sendInsructions(){
    let fb = document.getElementById("feedback");
    animText(fb, "Excellent. Await Further instrcutions...");
}

window.onload = main;
