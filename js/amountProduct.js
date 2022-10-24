
function amountProduct(element,num){
    if(num < 0){
        let value = parseInt(element.nextElementSibling.innerHTML);
        element.nextElementSibling.innerHTML = value + num < 0 ? 0 : value + num;
    }
    else{
        let value = parseInt(element.previousElementSibling.innerHTML);
        element.previousElementSibling.innerHTML = value + num;
    }
}