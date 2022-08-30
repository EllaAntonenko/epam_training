// - Create a car object, add a color property to it with the value equals 'black'
// - Change the color property of the car object to 'green'
// - Add the power property to the car object, which is a function and displays the engine power to the console

const car = {
    color: "black",
    power(){
        console.log("Engine power: 1000")
    }
}
car.color = "green"
console.log(car)