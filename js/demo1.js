var quantity = parseInt(document.querySelectorAll("input")[0].value);
var price = parseInt(document.querySelectorAll("input")[1].value);
var freight = parseInt(document.querySelectorAll("input")[2].value);
var sum = quantity * price + freight;
function ONclick() {
    document.querySelectorAll("input")[3].value = (parseInt(document.querySelectorAll("input")[0].value) * parseInt(document.querySelectorAll("input")[1].value) + parseInt(document.querySelectorAll("input")[2].value)) + "元";   
}