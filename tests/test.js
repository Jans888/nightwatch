module.exports = {

  before : function(browser) {
    console.log('The tests are started');
  },

  after: function(browser) {
    console.log('The tests are finished')
  },

    "Test file": function(browser) {
        let unitedCom = browser.page.unitedCom();
        const wait = 1 * 1000
        browser.windowMaximize()
        unitedCom.navigate()
        .assert.title('United Airlines - Airline Tickets, Travel Deals and Flights')
        .pause(wait)
        .click('@bookFlightForm')
        .pause(wait)
        .clearValue('@bookFlightOriginInput')
        .setValue('@bookFlightOriginInput', 'New York, NY, US (JFK)')
        .pause(wait)
        .setValue('@bookFlightDestinationInput', 'Miami, FL, US (MIA - All Airports)')
        .pause(wait)
        .click('@select')
        .pause(wait)
        .clearValue('@DepartDate')
        .setValue('@DepartDate', 'Aug 20')
        .pause(wait)
        .click('@class')
        .click('@economy')
        .pause(wait)
        .click('@findFlights')
        .waitForElementVisible('body', 5 * 1000)
        .pause(wait)
        .click('@sortAndFilter')
        .pause(wait)
        .click('@sortByEconomy')
        .pause(wait)
        .moveToElement('@apply', 10, 10)
        .waitForElementVisible('.atm-c-btn--primary', 500)
        .pause(wait)

        browser.elements('css selector','#flightResults-content > div.app-components-Shopping-ResultGrid-styles__flightsContainer--3sApV', function (result) {
          //var jsonString = "";
          els = result.value;
          var i = 0;
          els.forEach(function(el, j, elz){
            browser.elementIdText(el.ELEMENT, function(text) {
              //jsonString += text;
              console.log(text)
            })
          })
        })
    }
}