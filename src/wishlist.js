import Car from './car.js';

export default class Wishlist {
    list = [];
    nextId = 0;

    add = (make, model, year) => {
        let newCar = new Car(++this.nextId, make, model, year);
        this.list.push(newCar);
    }

    remove = (carId) => {
       this.list.forEach((ele, index) => {
        if (ele.id === carId) {
            this.list.splice(index, 1);
        }
       }) 
    }
}
