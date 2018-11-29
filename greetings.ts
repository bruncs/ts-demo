interface Animal {
  name: string;
  age: number;
  sex: string;
  country: string;
}

class Human {
  human: Animal;
  constructor(human: Animal) {
    this.human = human;
  }
  greet() {
    switch (this.human.country) {
      case "Brasil":
        return `Olá, meu nome é ${this.human.name}, tenho ${
          this.human.age
        } anos, sou do sexo ${this.human.sex} e moro no ${this.human.country}.`;
      case "USA":
        return `Hi, my name is ${this.human.name}, I'm ${
          this.human.age
        } years old, I'm ${this.human.sex} and I live at ${
          this.human.country
        }.`;
      default:
        return "Hey! 👋";
    }
  }
}

class Dog {
  dog: Animal;
  constructor(dog: Animal) {
    this.dog = dog;
  }
  greet() {
    switch (this.dog.country) {
      case "Brasil":
        return `Au, au au au ${this.dog.name}, au au ${
          this.dog.age
        } aus, au au au ${this.dog.sex} au au au au ${this.dog.country}.`;
      case "USA":
        return `Woof, woof woof ${this.dog.name}, woof ${
          this.dog.age
        } woof woof, arf ${this.dog.sex} woof arf woof ${this.dog.country}.`;
      default:
        return "Arf! 🐾";
    }
  }
}

const Bruno = new Human({
  name: "Bruno",
  age: 32,
  sex: "masculino",
  country: "Brasil"
});

const John = new Human({
  name: "John",
  age: 25,
  sex: "male",
  country: "USA"
});

const Rex = new Dog({
  name: "Rex",
  age: 6,
  sex: "ausculino",
  country: "Brasil"
});

const Lucy = new Dog({
  name: "Lucy",
  age: 4,
  sex: "female",
  country: "USA"
});

console.log(Bruno.greet());
console.log(John.greet());
console.log(Rex.greet());
console.log(Lucy.greet());
