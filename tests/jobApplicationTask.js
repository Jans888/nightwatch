const fs = require('fs');
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
        .click('@apply')
        .pause(wait)

        browser.elements('css selector','#flightResults-content > div.app-components-Shopping-ResultGrid-styles__flightsContainer--3sApV', function (result) {
          els = result.value;
          var i = 0;
          els.forEach(function(el, j, elz){
            browser.elementIdText(el.ELEMENT, function(text) {

                let myText = text.value
                //Create json object do test insertion
                let flightJson = {};
                flightJson.flightInformation=[];
                
                //Parse the text received from FE
                //Count how many records returned
                let flightsCount = myText.split("STOPS").length - 1;
                console.log("Flights records returned count: "+ flightsCount);
                console.log(" ")
                
                //Loop throught all records returned
                for (let i = 0; i < flightsCount; i++) {
                  let recordInFocusTemp = myText.split("Flight Information")[1]
                  let recordInFocus = recordInFocusTemp.split("Flight Information")[0]
                  //Exclude processed record from the main text
                  myText = myText.split(recordInFocus)[1]
                  //console.log(recordInFocus)
                
                  console.log("##########   Flight number: " + (i+1) + " ##########")
                
                  //Get stops
                  console.log("Stops claculated:")
                  let stopsCount = recordInFocus.split(" STOPS")[0]
                  console.log(stopsCount.trim())
                  console.log(" ")
                
                  //Get depart
                  console.log("Departs claculated:")
                  let departTemp = "Departing"+ recordInFocus.split("Departing")[1]
                  let depart = departTemp.split("Arrives")[0].replace("\n","")
                  console.log(depart)
                  console.log(" ")
                
                  //Get arrive
                  console.log("Arrive claculated:")
                  let arriveTemp = "Arriving" + recordInFocus.split("Arriving")[1]
                  let arrive = arriveTemp.split("Duration")[0].replace(/(\r\n|\n|\r)/gm, " ")
                  console.log(arrive)
                  console.log(" ")
                
                  //Get duration
                  console.log("Duration claculated:")
                  let durationTemp = "Duration"+ recordInFocus.split("Duration")[1]
                  let duration = durationTemp.split("Destination")[0].replace("\nFLL\n","")
                  console.log(duration)
                  console.log(" ")
                
                  //Get price
                  console.log("Prices claculated:")
                  let priceTemp = "Seats"+ recordInFocus.split("Seats")[1].replace(/(\r\n|\n|\r)/gm, " ")
                  let price = priceTemp.replace("Seats","").replace("price","price, ")
                  console.log(price)
                  console.log(" ")
                
                  //Write parsed data into json object
                  flightJson.flightInformation.push({"depart":depart , "arrive":arrive , "stops":stopsCount.trim() , "duration":duration , "price":price });
                
                } //End FOR 
                
                //Print collection (json object)
                console.log(flightJson);

                //Write collection to file
                fs.writeFile("/Projects/nightwatch/output/flight.json", JSON.stringify(flightJson), function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("Data Saved to file");
                })
            })
          })
        })
    }
}