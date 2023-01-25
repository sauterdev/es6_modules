console.log("Hello World");

// TODO
import Wishlist from "./wishlist.js";


const form = document.getElementById("submitForm");
const makeInput = document.getElementById("makeInput");
const modelInput = document.getElementById("modelInput");
const yearInput = document.getElementById("yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeButton = document.querySelector(".removeBtn");
const addButton = document.getElementById("submitBtn")
const wishListUL = document.querySelector("#wishUL");
// addButton.addEventListener(`click`, myWishlist.addCar);



function showCarDetails(car) {
   carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;
    removeButton.disabled = false;
    removeButton.addEventListener (`click`, removeCar)
    removeButton.setAttribute("data-carID", car.id);
   }
   
   function updateDOMlist() {
      wishListUL.innerHTML = "";
      myWishlist.list.forEach((car) => {
         const newLi = document.createElement(`li`);
         newLi.textContent = `${car.make} ${car.model}`;
         newLi.addEventListener("click", () => {
            showCarDetails(car);
         });
         wishListUL.appendChild(newLi);
      })
   }
   
   function addCar(event) {
      event.preventDefault();
      myWishlist.add(makeInput.value, modelInput.value, yearInput.value)
      
      updateDOMlist();
   }
   
   function removeCar() {
    const carId = Number(removeButton.getAttribute("data-carID"));
    myWishlist.remove(carId);
    updateDOMlist();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeButton.disabled = true;
   }
   
   let myWishlist = new Wishlist();
   addButton.addEventListener(`click`, addCar);
   
   
   
   
   
   
   



