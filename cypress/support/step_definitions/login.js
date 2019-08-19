/* eslint-disable new-cap */
/// <reference types="cypress" />

import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
	// fixtures
 	cy.fixture('cars/data.json').then((data)  => {
		var title = data.title
		console.log(title);

	})

})

Given(/^I open Login page$/, () => {
	cy.visit(Cypress.env('URL'))
	

});

Then(/^I should be able to login$/, () => {
	cy.wait(2000)
	cy.login()
	
});
