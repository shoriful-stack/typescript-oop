{
  // getter and setter
  class Account {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const islamiBankAccount = new Account(563, "Md. Shoriful Islam", 5000);

  // islamiBankAccount.deposit = 0;
  // islamiBankAccount.addDeposit(2000); // need to call function
  islamiBankAccount.deposit = 50;
  // const myBalance = islamiBankAccount.getBalance(); // need to call function

  const myBalance = islamiBankAccount.balance; // using getter and setter(Property)
  console.log(myBalance);

  //
}