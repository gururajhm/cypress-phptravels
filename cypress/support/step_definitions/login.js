/* eslint-disable new-cap */
/// <reference types="cypress" />

import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

Given(/^I open Login page$/, () => {
	cy.visit(Cypress.env('URL'))
	

});

Then(/^I should be able to login$/, () => {
	cy.wait(2000)
	cy.login()
	
});
