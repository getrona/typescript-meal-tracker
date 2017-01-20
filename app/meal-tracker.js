var Meal = (function () {
    function Meal(nameParameter, detailsParameter, caloriesParameter) {
        this.name = nameParameter;
        this.details = detailsParameter;
        this.calories = caloriesParameter;
    }
    return Meal;
}());
var meals = [];
meals.push(new Meal('pizza', 'it was quite delicious', 300));
console.log(meals);
