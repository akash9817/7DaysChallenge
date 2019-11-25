var dice = document.getElementById('dice-img');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var newGame = document.getElementById('new');
var cur_score =  document.getElementsByClassName('cur-score')
var main_score =  document.getElementsByClassName('main-score')
var namer =  document.getElementsByClassName('name')
var dot =  document.getElementsByClassName('dot')
var p1 = document.getElementsByClassName('players')
var c_sc = 0
var currentPlayer = 0;
var state = true;
roll.onclick = () => {
    if(state){
      document.getElementById('dice').style.display = "block"
      var num = Math.floor(Math.random() * 6) + 1
      if(num == 1){
          activePlayer();
          return;
      }
      var src;
      switch(num){
          case 2:
            src = "https://i.imgur.com/EA2qvGZ.png"
            break;
          
          case 3:
            src = "https://i.imgur.com/qaekzKO.png"
            break;
          
          case 4:
            src = "https://i.imgur.com/qbqvQvB.png"
            break;
          
          case 5:
            src = "https://i.imgur.com/eeBcrqU.png"
            break;

          default:
            src = "https://i.imgur.com/vzksTKQ.png"
            break;
      }
      dice.src=src
      c_sc += num
      cur_score[currentPlayer].innerHTML = c_sc
    }  
}
hold.onclick = () => {
    if(state){
    var main = parseInt(main_score[currentPlayer].innerHTML);
    main += c_sc;
    main_score[currentPlayer].innerHTML = main
    if(main >= 5){
        namer[currentPlayer].innerHTML = "WINNER !"
        namer[currentPlayer].style.color = "#ff6363"
        var active = document.getElementsByClassName('active');
        active[0].childNodes[1].childNodes[2].classList.remove('dot');
        state = false;
        document.getElementById('dice').style.display = "none"
        return;
    }
    activePlayer();
}
}
newGame.onclick = () => {
    document.getElementById('dice').style.display = "none"
    cur_score[0].innerHTML = 0
    cur_score[1].innerHTML  = 0
    main_score[0].innerHTML = 0
    main_score[1].innerHTML = 0
    namer[currentPlayer].innerHTML = `PLAYER ${currentPlayer + 1}`
    namer[currentPlayer].style.color = "black"
    var active = document.getElementsByClassName('active');
     active[0].childNodes[1].childNodes[2].classList.remove('dot');
     active[0].classList.remove('active');
     p1[0].classList.add('active')
     p1[0].childNodes[1].childNodes[2].classList.add('dot');
     currentPlayer = 0;
     state = true;
}


function activePlayer(){
    c_sc = 0;
    cur_score[currentPlayer].innerHTML = c_sc
    currentPlayer== 0?currentPlayer = 1: currentPlayer = 0;
     var active = document.getElementsByClassName('active');
     active[0].childNodes[1].childNodes[2].classList.remove('dot');
     active[0].classList.remove('active');
     let newActive = document.getElementsByClassName('players')
     newActive[currentPlayer].classList.add('active');
     active[0].childNodes[1].childNodes[2].classList.add('dot');
     document.getElementById('dice').style.display = "none"
}