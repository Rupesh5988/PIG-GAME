var scores,activePlayer,roundScore,dice;
scores=[0,0];
activePlayer=0;
roundScore=0;

document.getElementById('score--0').textContent=0;
document.getElementById('score--1').textContent=0;
document.getElementById('current--0').textContent=0;
document.getElementById('current--1').textContent=0;

document.querySelector('.dice').style.display='none';

 document.querySelector('.btn--roll').addEventListener('click', function() {
    var player0=document.querySelector('#score--0');
    var player1=document.querySelector('#score--1');
    
   var dice=Math.floor(Math.random()*6 + 1);
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    
   if(dice>1){
      roundScore+=dice;
      document.querySelector('#current--'+activePlayer).textContent=roundScore;
   }
   else{
    document.querySelector('#score--'+activePlayer).textContent=0;
    
      nextPlayer();

   }
   

 });    
 document.querySelector('.btn--hold').addEventListener('click',function(){
   scores[activePlayer]+=roundScore;
document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];
if(scores[activePlayer]>=20 ){
   document.querySelector('#name--'+activePlayer).textContent='YOU WON';
}else{nextPlayer();}


 })
 function nextPlayer(){
   document.querySelector('#current--'+activePlayer).textContent=0;

   roundScore=0;
   var diceDOM=document.querySelector('.dice');
   
   diceDOM.style.display='none';
   activePlayer = (activePlayer + 1) % 2;
   document.querySelector('.player--0').classList.toggle('active');
   document.querySelector('.player--1').classList.toggle('active');
   
 }
 document.querySelector('.btn--new').addEventListener('click',function(){
   scores=[0,0];
activePlayer=0;
roundScore=0;

document.getElementById('score--0').textContent=0;
document.getElementById('score--1').textContent=0;
document.getElementById('current--0').textContent=0;
document.getElementById('current--1').textContent=0;

document.querySelector('.dice').style.display='none';

 })
