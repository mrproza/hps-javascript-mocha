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

  it('Descaling is needed after 500 coffees', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take "500" coffees
    this.actionwords.iTakeCoffeeNumberCoffees("500");
    // Then a notification about descaling is displayed
    this.actionwords.aNotificationAboutDescalingIsDisplayed();
  });
});
