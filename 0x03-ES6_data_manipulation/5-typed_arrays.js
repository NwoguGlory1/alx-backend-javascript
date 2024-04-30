// Using Types Arrays
// Function to calculate the sum of all numbers in an array
export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to write data into the ArrayBuffer
  const dataView = new DataView(buffer);

  // Check if the provided value is within the range of Int8 (between -128 and 127)
  if (value < -128 || value > 127) {
    throw new Error('Value outside range');
  }
 
  // Check if the provided position is within the range of the buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Write the Int8 value into the ArrayBuffer at the first position
  dataView.setInt8(position, value);

  // Return the ArrayBuffer
  return buffer;
}
