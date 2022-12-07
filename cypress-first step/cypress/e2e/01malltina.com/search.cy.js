describe("malltin.com search something", ()=>{
    it( 'search a word', ()=>{
        cy.startLoad();
        cy.get('.opration-wrap > .search-form > .input-group > .form-control').click({force:true}).type("hi")
        cy.get('.opration-wrap > .search-form > .input-group > .input-group-prepend > #main-site-search > .icon-search').click({force:true});
        cy.get(':nth-child(4) > a > .product > .title').click({force:true})

        
    })

  
    

  // first api chalenge
    // it("spam", ()=>{
    //    fetch('https://api.malltina.com/search/v2?q=headphones').then((response) => {
    //     cy.log(response)
    
    // })

    // })