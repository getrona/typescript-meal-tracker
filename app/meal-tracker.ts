class Meal {

  constructor(public name: string, public details: string, public calories: number){
  }
}

var meals: Meal[] = [];
meals.push(new Meal('Pizza', 'It was quite delicious', 300));
meals.push(new Meal('Big-Mac', 'I only ate roughly half', 500));
meals.push(new Meal('Pop.tarts', 'it was very sugary', 300));

for (var meal of meals) {
  console.log(meal);
}
