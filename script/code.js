

let tired = document.getElementById('rah')

tired.addEventListener(('click'), ()=>{
    let fQuantity = document.getElementById('femaleQuantity');
    let mQuantity = document.getElementById('maleQuantity');
    let fPrice = document.getElementById('fPrice').value
    console.log(fPrice)
    document.getElementById('tPrice').textContent = fPrice.substring(2) * fQuantity.value;
    console.log(fPrice.substring(2) * fQuantity.value);

}
)