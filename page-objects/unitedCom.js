module.exports = {
    url: 'https://www.united.com',
    elements: {
        bookFlightForm: {
            selector: '#bookFlightForm > div.app-components-BookFlightForm-bookFlightForm__formHeader--2Hpvk > fieldset > div > label:nth-child(2) > span.app-components-BookFlightForm-bookFlightForm__checkmark--2DHJD',
        },
        bookFlightOriginInput: {
            selector: '#bookFlightOriginInput',
        },
        bookFlightDestinationInput: {
            selector: '#bookFlightDestinationInput',
        },
        select: {
            selector: '#autocomplete-item-0 > button > span > strong',
        },
        DepartDate: {
            selector: '#DepartDate',
        },
        class: {
            selector: '#cabinType',
        },
        economy: {
            selector: '#cabinType_item-0',
        },
        findFlights: {
            selector: '#bookFlightForm > div.app-components-BookFlightForm-bookFlightForm__basicEconomyToggle--1VE5O > div > div:nth-child(1) > div > div > button',
        },
        sortAndFilter: {
            selector: '#app > div > div > div > div.page > div.relativePosition > div > div.app-containers-Shopping-FlightSearchResultsContainer-styles__flightSearchResultContainer--2BFw0 > div > div:nth-child(4) > div:nth-child(1) > div > div.app-components-Shopping-SortFilterSection-styles__content--2Zm5F > section > div > div > div > div > button',
        },
        sortByEconomy: {
            selector: '.atm-c-select-field > .atm-c-select-field__body > .atm-c-select option[value="ECONOMY"]',
        },
        apply: {
            selector: '.atm-c-btn--primary',
        }

    }
}