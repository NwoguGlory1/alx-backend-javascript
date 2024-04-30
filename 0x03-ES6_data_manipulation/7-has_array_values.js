// Using Set data structure

export default function hasValuesFromArray(set, array) {
  // Use the every method to check if all elements in the array exist in the Set
  return array.every((element) => set.has(element));
}
