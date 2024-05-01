import App from "../../src/App"

describe("App.cy.jsx", () => {
    it("renders correctly", () => {
        cy.mount(<App />)
        cy.clickButton('Más')
    })
})
