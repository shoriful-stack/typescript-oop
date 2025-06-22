{
    //
    class Jamal {
        name: string;
        age: number;
        occupation: string;

        constructor(name: string, age: number, occupation: string) {
            this.name = name;
            this.age = age;
            this.occupation = occupation;
        }

        getPropertyFromFather(partOfProperty: string) {
            console.log(`${this.name} is ${this.age} years old. He is a ${this.occupation}. He will get ${partOfProperty} from his Fathers property.`);
        }
    }


    class BigSon extends Jamal{
        contribute: string;

        constructor(name: string, age: number, occupation: string, contribute: string) {
            super(name, age, occupation);
            this.contribute = contribute;
        }

        ownProperty(own: string) {
            console.log(`${this.name} is ${this.age} years old. He is a ${this.occupation}. He pays ${this.contribute} contribute to his family. He make ${own} property with his fathers total property.`);
        }

        getPropertyFromFather(partOfProperty: string) {
            console.log(`${this.name} is ${this.age} years old. He is a ${this.occupation}. He pays ${this.contribute} contribute to his family. He will get ${partOfProperty} from his Fathers property.`);
        }
    }

    const Sazid = new BigSon("Sazid", 23, "Software Developer", "70%");
    Sazid.getPropertyFromFather("10 percent");
    Sazid.ownProperty("5 percent");

    class SmallSon extends Jamal {

        constructor(name: string, age: number, occupation: string) {
            super(name, age, occupation)
        }

        getPropertyFromFather(partOfProperty: string) {
            console.log(`${this.name} is ${this.age} years old. He is a ${this.occupation}. He will get ${partOfProperty} from his Fathers property.`);
        }
    }

    const Shehzad = new SmallSon("Shehzad", 8, "Student");
    Shehzad.getPropertyFromFather("10 Percent");
    //
}