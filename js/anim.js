
function toggleGlow(){
    let elm = document.getElementById("spooky--image");
    var toggle = false;
    
    setInterval(()=>{
        toggle = !toggle;
        elm.style.opacity = toggle ? '0.0' : '0.1';
    } ,1500);
}


function removePx(str){
    var cleaned = str.slice(0, -2);
    return parseInt(cleaned);
}


function addTroll() {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "troll--seeker";
    
    let main = document.getElementById("main--container");
    document.body.insertBefore(newDiv, main);

    initSeeker(newDiv);
}


function initSeekers(){
    const timeDiff = 10;
    var k = 0;
    while(k < 12){
        addTroll()
        k++;
    }


    for(var i = 0; i < seekers.length; i++){
        let cur = seekers[i];
        initSeeker(cur);
    }
}

var moveCount = 0;
var trollCount = 0;
function moveSeekers(){
    moveCount++;
    if(moveCount % 100 == 0){
        if(trollCount < 20){
             addTroll();
        }
        trollCount++;
    }
    if(moveCount > 10000000){
        moveCount = 0;
    }
    let seekers = document.getElementsByClassName('troll--seeker');
    for(var i = 0; i < seekers.length; i++){
        let cur = seekers[i];
        moveSeeker(cur);
        correvtVelocity(cur);
    }
}

function getRandomInt(max) {
    var retVal = Math.floor(Math.random() * max);
    while(retVal == 0){
        retVal = Math.floor(Math.random() * max);
    }
    return retVal
}

function initSeeker(seeker){
    seeker.dataset.xVelocity = getRandomInt(4);
    seeker.dataset.yVelocity = getRandomInt(4);
    seeker.style.top = "1px";
    seeker.style.left = "2px";
}

function moveSeeker(seeker){
    let xVol = seeker.dataset.xVelocity;
    let yVol = seeker.dataset.yVelocity;
    var top = removePx(seeker.style.top);
    var left = removePx(seeker.style.left);

    seeker.style.top = `${top + parseInt(yVol)}px`;
    seeker.style.left = `${left + parseInt(xVol)}px`;
}

function correvtVelocity(seeker){
    var top = removePx(seeker.style.top);
    var left = removePx(seeker.style.left);
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight

    let xVol = seeker.dataset.xVelocity;
    let yVol = seeker.dataset.yVelocity;
    
    if(top <= 0 || top >= maxHeight){
        seeker.dataset.yVelocity = (parseInt(yVol) * -1);
    }   
    if(left <= 0 || left >= maxWidth){
        seeker.dataset.xVelocity = (parseInt(xVol) * -1);
    }   
}

function animText(container, text){
    console.log('in method')
    console.log(text);
    console.log( text.length);
    console.log(container);
    container.innerHTML = "";
    var timeConst = 10;
    for(var i = 0; i < text.length; i++){
        var curChar = text.charAt(i);
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
    toggleGlow();
    //initSeekers();
    //moveSeekers();
    setInterval(moveSeekers, 6);
    console.log("started onload");
    let header = document.getElementById("form--label");
    let russianSpook = "Вы были активированы";
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