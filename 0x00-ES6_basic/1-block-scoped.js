export default function taskBlock(trueOrFalse) {
 /* eslint-disable */
 let task = false;
 let task2 = true;

 if (trueOrFalse) {
    let task = true;
    let task2 = false;
 }

 return [task, task2];
 /* eslint-enable */
}
