{
    //
    class StarTech {
        name: string;
        price: number;
        validity: string;

        constructor(name: string, price: number, validity: string) {
            this.name = name;
            this.price = price;
            this.validity = validity;
        }

        placeOrder() {
            console.log(`The price of this ${this.name} is ${this.price} and its validity is ${this.validity}`);
        }
    }

    const mouse = new StarTech("Mouse", 900, "1 year");
    mouse.placeOrder();

    // usage of class with parameter
    class TastyTreat {

        constructor(public name: string, public price: number, public taste: string) {
        }

        makePrice() {
            console.log(`Price of this ${this.name} is ${this.price} and its taste is ${this.taste}`);
        }
    }

    const burger = new TastyTreat("Burger", 100, "spicy");
    burger.makePrice();

    //
}