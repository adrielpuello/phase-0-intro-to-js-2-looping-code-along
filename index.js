const name1 = 'Guadalupe'
const name2 = 'Ollie'
const name3 = 'Aki'
const surprise = [`Thank you, ${name1}, for the wonderful surprise gift!`,
`Thank you, ${name2}, for the wonderful surprise gift!`,
`Thank you, ${name3}, for the wonderful surprise gift!`,]
function writeCards(){
    return surprise
}
function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
        
      }
    }, 1000);
  }
  
  function countDown(seconds){
    let counter = seconds;

    while (counter >= 0) {
        console.log(counter--);
    if (counter < 0){
        clearInterval(counter);
        }
      }
  }
  
 