export default function cleanSet(set, startString) {
  // Use the map method to transform each element of the Set
  const transformedSet = Array.from(set).map((value) => {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // If it does, return the part of the string that comes after the startString
      return value.substring(startString.length);
    }
    // If it doesn't, return an empty string (or any other value you prefer)
    return '';
  });

  // Use join method to combine all transformed elements into a single string,separated by dashes
  const resultString = transformedSet.join('-');

  // Return the resulting string
  return resultString;
}
