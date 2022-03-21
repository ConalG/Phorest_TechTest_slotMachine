/// <reference types="cypress" />

describe('Play Game', () => {

    beforeEach(() => {
        cy.viewport(1280,720);
        cy.visit('https://conalg.github.io/Phorest_TechTest_slotMachine/');
    })
    
    it('Visit Site',() => {
        cy.contains('We have given you 100 credits on the house!');

        cy.get('button#play').click();
        
        cy.get('span#result').invoke('text').then((text) => {
            expect(text).equal('Spinning');
        })
        cy.wait(5000);
        cy.get('span#result').invoke('text').then((text) => {
            if(text.includes('Congratulations you have won the Jackpot:')){
                console.log('Game was won');
            }
            else if (text === 'Better luck next time!'){
                console.log(`Game was lost`);
            }
            else{
                console.log(text);
                throw ("cannot find any of them");
            }
        }) ;

    });

    it('Play Until No Credits',() =>{
        for( let i = 0; i < 10; i ++){
            cy.get('button#play').click();
            cy.get('span#result').invoke('text').then((text) => {
                expect(text).equal('Spinning');
            })
            cy.wait(5000);
            cy.get('span#result').invoke('text').then((text) => {
                if(text.includes('Congratulations you have won the Jackpot:')){
                    console.log('Game was won');
                }
                else if (text === 'Better luck next time!'){
                    console.log(`Game was lost`);
                }
                else{
                    console.log(text);
                    throw ("cannot find any of them");
                }
            });
        };
        cy.get('button#play').click();
        cy.get('span#result').invoke('text').then((text) => {
            expect(text).equal('Not Enough Credits');
        });
    });
    
    it('Check Balance',() => {
        cy.get('button#balance').click();
        
        cy.get('span#result').contains('Your Balance is:');
       
    });

    it('Current Jackpot',() => {
        cy.get('button#checkJackpot').click();
        
        cy.get('span#result').contains('Current Jackpot is:');
       
    });

    it('Add 100 Credits',() => {
        cy.get('button#add').click();
        
        cy.get('span#result').contains('100 Credits Added');
       
    });

    it('Payout',() => {
        cy.get('button#payout').click();
        
        cy.get('span#result').contains('You have received as a payout:');
       
    });
    
});