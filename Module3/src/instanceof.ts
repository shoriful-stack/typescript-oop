{
    //
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('I can make sound');
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('I am barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeaw() {
            console.log('I am mewaing');
        }
    }

    const dog = new Dog('Ariffa', 'Dog');
    const cat = new Cat('Manikka', 'Cat');

    console.log(dog);
    console.log(cat);

    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        } else if (animal instanceof Cat) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    getAnimal(dog);
    getAnimal(cat);


    const isDog = (animal: Animal) => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal) => {
        return animal instanceof Cat;
    }

    const getAnimal2 = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    getAnimal2(dog);
    getAnimal2(cat);
    //
}