// Function to update items with initial quantity of 1 to 100
export default function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  map.forEach((quantity, item) => {
    // If the quantity is 1, update it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  // Return the updated map
  return map;
}
