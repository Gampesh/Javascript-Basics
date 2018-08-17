// var liElementToMove = document.getElementsByClassName('p12_548_00')[0].children[0];
// var parentElement = document.getElementsByClassName('p12_548_00')[0];
// parentElement.removeChild(liElementToMove);
//
//
// var websiteParentElement = document.getElementsByTagName('table')[0].children[1].children[1].children[1].children[0];
// liElementToMove.children[0].setAttribute('name', "fields[1][fields][12.548.00][]");
// websiteParentElement.appendChild(liElementToMove);


var unMovedFormElement = document.getElementById('reqsDiv').children;
var elementCount = 0;
var repackageingProducts = ['12.548.00',
    '12.551.00',
    '12.553.00',
    '12.549.00',
    '12.552.00',
    '41.053.00F',
    '41.052.00',
    '14.685.00',
    '14.693.00',
    '14.692.00',
    '14.665.00',
    '14.666.00',
    '14.672.00',
    '14.674.00',
    '14.675.00',
    '14.676.00'];

var websiteParentElement = document.getElementsByTagName('table')[0].children[1].children[1].children[1].children[0];

for (var i=0; i<unMovedFormElement.length; i++) {
    if (unMovedFormElement[i].nodeName == 'UL' && unMovedFormElement[i].children[0] != undefined &&
    repackageingProducts.includes(unMovedFormElement[i].children[0].getAttribute('product_code'))
    ) {
        var websiteLiElementToMove = unMovedFormElement[i].children[0];
        unMovedFormElement[i].removeChild(websiteLiElementToMove);

        websiteLiElementToMove.children[0].setAttribute('name', "fields[1][fields]["+unMovedFormElement[i].children[0].getAttribute('product_code')+"][]");
        websiteParentElement.appendChild(websiteLiElementToMove);
        elementCount++;

    }
}
console.log(elementCount + "Website form field updated");


/*

New Vehicle Advertising
Used Vehicle Advertising
Fixed Operations Advertising
Gold
Platinum
Diamond
Platinum Plus
Diamond Plus
Landing Page
Landing Page Bundle
Banner Set

12.548.00
12.551.00
12.553.00
12.549.00
12.552.00
41.053.00
41.052.00
14.685.00
14.693.00
14.692.00
14.665.00
14.666.00
14.672.00
14.674.00
14.675.00
14.676.00
 */