export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // Declared in the if block scope, not the same as the outer task
    let task2 = false; // Declared in the if block scope, not the same as the outer task2
  }

  return [task, task2];
}
