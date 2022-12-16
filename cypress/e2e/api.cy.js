const { id, username, firstName, lastName, email, password, phone, userStatus } = require('../fixtures/user.json');

describe("Api tests", () => {
    it("Should create a new user", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
        .then((response) => {
            expect(response.status).to.eql(200);
        });
    });

    it("Should update id", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
        cy.updateUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
        .then((response) => {
            expect(response.body.message).to.eql("785");
        });
    })

    it("Should delete user", () => {
        cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
        cy.deleteUser(username)
        .then((response) => {
            expect(response.body.lastName).to.not.equal("Khrolenko");
            expect(response.status).to.eql(200);
        });
    });
});