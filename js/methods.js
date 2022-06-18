const animalMethods = {
  eat: function (amount) {
    this.energy += amount;
    console.log(`${this.name} is eating`);
  },
  sleep: function (amount) {
    this.energy += amount;
    console.log(`${this.name} is sleeping`);
  },
  play: function (amount) {
    this.energy -= amount;
    console.log(`${this.name} is playing`);
  },
};

function Animal(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;

  return animal;
}