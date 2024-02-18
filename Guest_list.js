"use strict";
let Guest_List = ['Muntaha Noor', 'Warda Noor', 'Musfirah Noor'];
// for(let i=0; i<Guest_List.length; i++){     
//     console.log('Dear Miss.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }
let absent_Guest = 'Warda Noor';
let new_Guest = 'Kulsoom Noor';
Guest_List[1] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Miss.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }
console.log(`Miss.${absent_Guest} is not coming to the party.\n`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.\n');
Guest_List.unshift('Nazia Noor');
Guest_List.splice(2, 0, 'Noor Jahan');
Guest_List.push('Anus Noor');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n');
}
console.log('\nSorry we can not arrange bid table, only Two peoples well be invited.\n');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Dear. ${remove_Guest}, You are not invited for Dinner.\n`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
