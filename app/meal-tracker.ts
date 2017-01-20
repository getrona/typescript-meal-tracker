class Meal {

  constructor(public name: string, public details: string, public calories: number){
  }
}

var meals: Meal[] = [];
meals.push(new Meal('pizza', 'it was quite delicious', 300));
console.log(meals);
