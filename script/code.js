function tired(){
    let fQuantity = document.getElementById('femaleQuantity').value;
    let fPrice = document.getElementById('fPrice').value

    // console.log(fPrice.substring(2) * fQuantity);
    document.getElementById('tfPrice').value = parseFloat(fPrice.substring(2) * fQuantity).toFixed(2);
    let tired = fPrice.substring(2) * fQuantity
    return tired;
}

function fr(){
    let mQuantity = document.getElementById('maleQuantity').value;
    let mPrice = document.getElementById('mPrice').value

    // console.log(mPrice.substring(2) * mQuantity);
    document.getElementById('tmPrice').value = parseFloat(mPrice.substring(2) * mQuantity).toFixed(2);
    let fr = mPrice.substring(2) * mQuantity
    return fr;
}

function totalPrice(){
    // console.log(fr())
    // console.log(tired())
    document.getElementById('valueMAIN').value ='R ' + parseFloat(tired() + fr()).toFixed(2);
}