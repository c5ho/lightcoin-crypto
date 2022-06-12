//let balance = 500.00;

class Account {
  
  constructor(username) {
    this.username = username;
    this.transactions = [];
    // // Have the account balance start at $0 since that makes more sense.
    // this.balance = 0;
    }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  // Pass in the account that the transaction is for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  
    // Update the balance in the account (generic form that can be in superclass)
    commit() {
      //Keep track of the time of the transaction
      this.time = new Date();
      // Add the transaction to the account
      this.account.addTransaction(this);
    }
  }
  
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {
  
  get value() {
    return this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);
// console.log('Balance:', balance);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);
// console.log('Balance:', balance);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);
// console.log('Balance:', balance);
/********After creating an Account class, we don't need the above code */


const myAccount = new Account("snow-patrol");
console.log(myAccount);
console.log('Starting Balance: ', myAccount.balance);
t1 = new Withdrawal(50.25, myAccount);  //passing myAccount object reference to withdrawal object
//now, Withdrawal and Deposit objects are not dependent on surrouding data in their global or outer scope
//also, transactions are no longer tied to a single account; transaction record work with any account???
t1.commit();
console.log('Transaction 1:', t1);
console.log('Updated Balance:', myAccount.balance);

t2 = new Deposit(100, myAccount);
t2.commit();
console.log('Transaction 2:', t2);
console.log('Updated Balance:', myAccount.balance);