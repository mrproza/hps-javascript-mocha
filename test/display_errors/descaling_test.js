describe('Descaling', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // Given I handle coffee grounds
    this.actionwords.iHandleCoffeeGrounds();
    // And I handle water tank
    this.actionwords.iHandleWaterTank();
    // And I handle beans
    this.actionwords.iHandleBeans();
  });

  it('Message "Descaling is needed" is displayed after 500 coffees are taken', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take "500" coffees
    this.actionwords.iTakeCoffeeNumberCoffees("500");
    // Then message "Descaling is needed" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Descaling is needed");
  });
});
