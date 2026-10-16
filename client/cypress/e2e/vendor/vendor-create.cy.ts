describe('Vendor - Create', () => {
  it('Visits the /vendors page and creates a vendor', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.contains('a', 'Vendors').click();
    cy.wait(1000);
    cy.contains('control_point').click();
    cy.get('input[formcontrolname=name]').click({ force: true }).type('Testy Tester Inc.');
    cy.get('input[formcontrolname=address]').click({ force: true }).type('123 Test St');
    cy.get('input[formcontrolname=city]').click({ force: true }).type('London');
    cy.get('mat-select[formControlName=province]').click().get('mat-option').contains('Ontario').click();
    cy.get('input[formcontrolname=postalCode]').click({ force: true }).type('N6A-1A1');
    cy.get('input[formcontrolname=phone]').click({ force: true }).type('555-555-5555');
    cy.get('mat-select[formControlName=type]').click().get('mat-option').contains('Trusted').click();
    cy.get('input[formcontrolname=email]').click({ force: true }).type('tt@email.com');
    cy.get('button').contains('Save').click();
    cy.wait(1000);
    cy.contains('Testy Tester Inc.');
  });
});