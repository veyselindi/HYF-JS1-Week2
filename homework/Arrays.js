const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log (favoriteAnimals); // this was not instructed but did not feel comfy w/o seeing this at the console :)

favoriteAnimals.push("turtle");
console.log(
    'My new array will look like this: "blowfish", "capricorn", "giraffe", "turtle"'
  );
console.log(favoriteAnimals);

favoriteAnimals.splice( 1, 0, "parrot"); // at index position 1, remove 0 elements, then add "parrot" to that position

console.log(
    'My new array will look like this: "blowfish", "parrot", "capricorn", "giraffe", "turtle"'
  );
  console.log(favoriteAnimals);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);


/* Consider the following array:
const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
Add a statement that adds your favorite animal say 'turtle' to the existing array.
Explain in a comment what do you think the new array will look like.
Log your new array.
Now add another favorite animal to the array but make sure it is placed after 'blowfish' and before 'capricorn'.
Explain in a comment what do you think the new array will look like.
Log your new array.
Delete 'giraffe' from the array. */