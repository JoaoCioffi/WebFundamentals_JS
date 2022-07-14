function car(maxVelocity=200, delta=5){
    //private attribute
    let currentVelocity = 0

    //public method
    this.accelerate = function () {
        if (currentVelocity + delta <= maxVelocity){
            currentVelocity += delta
        }
        else {
            currentVelocity = maxVelocity
        }
    
    //public method
    this.getCurrentVelocity = function () {
        return currentVelocity
    }
    
    }
}

const utilityCar = new car
utilityCar.accelerate()
console.log(utilityCar.getCurrentVelocity())

const sportCar = new car(350,20)
sportCar.accelerate()
console.log(sportCar.getCurrentVelocity())
