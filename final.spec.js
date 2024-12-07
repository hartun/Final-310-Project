//example test case
//  describe('Dealer Should Draw no Ace test', () => {
//     it('should determine if the dealer should take another card', () => {
//         const dealerHand = [
//             { displayVal: 'Ten', suit: 'hearts', val: 10 },
//             { displayVal: 'Nine', suit: 'hearts', val: 9 },
//         ];

//         const isSoft = calcPoints(dealerHand).isSoft;
//         expect(isSoft).toBeFalsy();
//         });
// });

describe('Show helper message', () => {
    it('should show the helper message', () => {
        const alert = setTimeout(helpMessage, 3000);
        expert(alert).toEqual(true);
    });
});
