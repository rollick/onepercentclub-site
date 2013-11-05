// FIXME:   Need to do some work mocking ajax requests and 
//          loading the handlebar templates before starting
//          integration testing. 

// TODO:    * Create a helper for logging in a user
//          * ??

// module("/homepage", {
//   setup: function() {
//     App.reset();
//   }
// });

// test("Check HTML is returned", function() {
//      controllerFor('application').set('currentUser', null);
    
//      visit("/homepage").then(function() {
//          ok(exists("*"), "Found HTML!");
//      });
// });

pavlov.specify("Page model integration tests", function(){

    describe("Page View Instance", function () {
        
        before(function() {      
            Ember.run( function () {
                App.injectTestHelpers();
            });
        });

        after(function () {
            Ember.run( function () {
                App.removeTestHelpers();

                App.Page.FIXTURES = [];
            });
        });

        it("should be possible to visit a page", function () {
            expect(0);
            // create('page').then(function(page) {
            //     navigateTo("/pages/" + page.id).then(function() {
            //         ok(exists("*"), "Found HTML!");
            //     });
            // });
        });

    });

});