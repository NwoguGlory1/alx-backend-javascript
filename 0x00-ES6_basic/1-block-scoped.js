export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // let scopes it to the block
    let task2 = false; 
  }

  return [task, task2];
}
