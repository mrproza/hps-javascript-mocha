describe('Serve coffee', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Simple use', function () {
    // Well, sometimes, you just get a coffee.
    // Tags: priority:high
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });

  it('I can serve coffee to 5 my friends without a problem', function () {
    // Well, sometimes, you just get a coffee.
    // Tags: priority:high
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take "5" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(5);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });
});
