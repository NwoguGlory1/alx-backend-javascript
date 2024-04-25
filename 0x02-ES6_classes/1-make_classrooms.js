// Import the ClassRoom class
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arrayy = [];

  const arrayy1 = new ClassRoom(19);
  arrayy.push(arrayy1);

  const arrayy2 = new ClassRoom(20);
  arrayy.push(arrayy2);

  const arrayy3 = new ClassRoom(34);
  arrayy.push(arrayy3);
  return arrayy;
}

// Call the function to create an array
const Rooms = initializeRooms();

// Output the array of ClassRoom objects
//console.log(Rooms);
