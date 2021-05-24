let car = {
  name: "sonata",
  ph: "500ph",
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

console.log(car.name);
console.log(car.ph);
console.log(car.start());

console.log("이름은 : " + car.name + "마력은 : " + car.ph);
console.log(`이름은 ${car.name} 마력은 ${car.ph}`);
