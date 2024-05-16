const business = 450;
const minister = 550;
const army = 700;
// if(business > minister && business > aemy){
//     console.log('Busniess is bigger');
// }
// else if(minister > business && minister >army){
//     console.log('minister is begger');
// }
// // else if(army > business && army > minister){
// //     console.log('army is begger');
// // }
// else {
//     console.log('army is begger');

// }
function findLargest(frist,second){
    if(frist> second){
        return frist;
    }
    else{
         return second;
    }
    
}
const largest = findLargest(259, 350) ;
console.log('largest is', largest);
var max = Math.max(business, minister, army)
// console.log('largest is', max);
