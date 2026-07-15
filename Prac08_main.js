    //target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
  for(let onepage of allpages){ //go through all subtopic pages
    onepage.style.display="none"; //hide it
  }
}
function show(pgno){ //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage=document.querySelector("#page"+pgno);
  onepage.style.display="block";   //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () { 
  show(1); 
});
page2btn.addEventListener("click", function () { 
  show(2); 
});
page3btn.addEventListener("click", function () {
  show(3); 
});
hideall();

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);

function toggleMenus(){ /*open and close menu*/
 //if menuItemsList dont have the class "menuShow", add it, else remove it
 menuItemsList.classList.toggle("menuShow"); 
 //if menu is showing (has the class “menuShow”)
 if(menuItemsList.classList.contains("menuShow")){ 
  hamBtn.innerHTML="Close Menu"; //change button text to chose menu
 }else{ //if menu NOT showing
  hamBtn.innerHTML="Open Menu"; //change button text open menu
 }
}

  /*find references to all the buttons and ball */
  const leftBtn = document.querySelector("#leftBtn");
  const rightBtn = document.querySelector("#rightBtn");
  const upBtn = document.querySelector("#upBtn");
  const downBtn = document.querySelector("#downBtn");
  const resetBtn = document.querySelector("#resetBtn");
  const ball = document.querySelector("#ball");
  var ballX = ballY = 0; //assign initial position of ball

  function ResetPos() {
    ballX=ballY=0; //reset to zero
    ball.style.left = ballX+"px"; //set left property to ball x variable
    ball.style.top = ballY+"px"; //set top property to ball x variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
  }
  function MovePos(leftInc, topInc) {
    ballX =ballX+ leftInc; 
    ballY =ballY+ topInc;
    ball.style.left = ballX+"px"; //set left css property to ball x variable
    ball.style.top = ballY+"px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate   
  }
  //function just to move left (decrease left style)
  function MoveLeft(){
    ballX =ballX-10; //decrement by 10
    ballY =ballY+0; //no change
    ball.style.left = ballX+"px"; //set left css property to ball x variable
    ball.style.top = ballY+"px"; //set top css property to ball y variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate   
  }
  //eventlistener to activate MoveLeft (named callback function)
  leftBtn.addEventListener("click", MoveLeft); //no brackets after MoveLeft

  //eventListener to anonymous callback function (other way)
  rightBtn.addEventListener("click", function () { 
    MovePos(10, 0); 
  });
  upBtn.addEventListener("click", function () {
    MovePos(0, -10);
  });
  downBtn.addEventListener("click", function () { 
    MovePos(0, 10);
  });
  resetBtn.addEventListener("click", ResetPos);
  document.addEventListener('keydown', function (kbEvt) { 
    //kbEvt: an event object passed by event to callback function
    console.log(kbEvt); //see what is returned 
    if (kbEvt.code === "ArrowRight"){
      MovePos(10,0);
    } 
    if (kbEvt.code === "ArrowLeft"){   
      MoveLeft();  
    }    
    if (kbEvt.code === "ArrowDown"){
      MovePos(0, +10);
    }
    if (kbEvt.code === "ArrowUp"){
      MovePos(0, -10);
    }
  });
