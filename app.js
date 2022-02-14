//------------------incrase-decrase btn function-------------------- 
function numberOfCounter(product, price, isIncrse) {
    const numberOfInput = document.getElementById(product + '-number');
    let numberOfInputValue = parseInt(numberOfInput.value);
    if (isIncrse) {
        numberOfInputValue = numberOfInputValue + 1;

    } else if (numberOfInputValue > 0) {
        numberOfInputValue = numberOfInputValue - 1;
    }
    numberOfInput.value = numberOfInputValue;
    const totalAmount = document.getElementById(product + '-amount');
    totalAmount.innerText = numberOfInputValue * price;
    calcolateTotal();

}
function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calcolateTotal() {
    const phoneTotal = getInput('iphone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;


    // update on the html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// }

//-----------------iphon number plus btn--------------------------------
document.getElementById('iphone-incrase').addEventListener('click', function () {
    numberOfCounter('iphone', 1219, true);
})

//-----------------iphon number minous btn--------------------------------
document.getElementById('inphone-decrase').addEventListener('click', function () {
    numberOfCounter('iphone', 1219, false);

})

//-----------------black case number minous btn--------------------------------
document.getElementById('case-incrase').addEventListener('click', function () {
    numberOfCounter('case', 59, true);
})

//-----------------black case number minous btn--------------------------------
document.getElementById('case-decrase').addEventListener('click', function () {
    numberOfCounter('case', 59, false);
})
