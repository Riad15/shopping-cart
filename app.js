//------------------incrase-decrase btn function-------------------- 
function numberOfCounter(numberOfInputId, isIncrse) {
    const numberOfInput = document.getElementById(numberOfInputId);
    const numberOfInputValue = parseInt(numberOfInput.value);
    if (isIncrse) {
        numberOfInput.value = numberOfInputValue + 1;
    } else {
        numberOfInput.value = numberOfInputValue - 1;
    }

}
//-----------------iphon number plus btn--------------------------------
document.getElementById('iphone-incrase').addEventListener('click', function () {
    numberOfCounter('iphone-number', true);
})

//-----------------iphon number minous btn--------------------------------
document.getElementById('inphone-decrase').addEventListener('click', function () {
    numberOfCounter('iphone-number', false);

})

//-----------------black case number minous btn--------------------------------
document.getElementById('case-incrase').addEventListener('click', function () {
    numberOfCounter('case-number', true);
})

//-----------------black case number minous btn--------------------------------
document.getElementById('case-decrase').addEventListener('click', function () {
    numberOfCounter('case-number', false);
})
