export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true; // let scopes it to the block
  }

  return [task, task2];
}
