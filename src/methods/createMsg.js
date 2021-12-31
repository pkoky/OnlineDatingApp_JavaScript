const sampleMsgs = [
  'Hello',
  'こんにちは',
  'Buenos dias',
  'Hola',
]
 
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function createMsg(){
  let date = new Date();
  let atIndex = getRandomInt(4);
  let msg = sampleMsgs[atIndex];
  let msgObj = {'other': msg, 'date': date};
  return msgObj;
}

export { createMsg };