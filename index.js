function writeCards(namesArray, occasion) {
    const messages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`);
    }
  
    return messages;
}

function countDown(number){
    for (let i = number; i>=0;i--){
        console.log(i)
    }
}
