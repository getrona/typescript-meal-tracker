var Meal = (function () {
    function Meal(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
    }
    return Meal;
}());
var meals = [];
meals.push(new Meal('Pizza', 'It was quite delicious', 300));
meals.push(new Meal('Big-Mac', 'I only ate roughly half', 500));
meals.push(new Meal('Pop.tarts', 'it was very sugary', 300));
console.log(meals);
