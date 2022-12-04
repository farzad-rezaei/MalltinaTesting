describe("malltin.com search something", ()=>{
    it( 'search a word', ()=>{
        cy.startLoad();
        cy.get('.opration-wrap > .search-form > .input-group > .form-control').type("hi")

        
    })

    // first api chalenge
    it("spam", ()=>{
       fetch('https://api.malltina.com/search/v2?q=headphones').then((response) => {
        cy.log(response)
    
    })
    


    })
    
})

