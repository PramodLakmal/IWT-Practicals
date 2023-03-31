function loadData(data) {
    if (data === 'product1') {
        document.getElementById("image").src = "/IWT/src/images/XS.jpg";
        document.getElementById("image").style.display ='block';
        document.getElementById("text").innerHTML = "<span>Iphone XS</span> :- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis sit fugiat molestias voluptatem nostrum. Eaque mollitia, non, accusantium qui, illum sapiente quis molestias necessitatibus cumque labore aut tempore at.";
        document.getElementById("text").style.display ='block';
        document.getElementById("text1").style.display ='none';
    }
    else if (data === 'product2') {
        document.getElementById("image").src = "/IWT/src/images/XSMax.jpg";
        document.getElementById("image").style.display ='block';
        document.getElementById("text").innerHTML = "<span>Iphone XS Max</span> :- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis sit fugiat molestias voluptatem nostrum. Eaque mollitia, non, accusantium qui, illum sapiente quis molestias necessitatibus cumque labore aut tempore at.";
        document.getElementById("text").style.display ='block';
        document.getElementById("text1").style.display ='none';
    }
    else if (data === 'product3') {
        document.getElementById("image").src = "/IWT/src/images/8plus.jpg";
        document.getElementById("image").style.display ='block';
        document.getElementById("text").innerHTML = "<span>Iphone 8 Plus</span> :- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis sit fugiat molestias voluptatem nostrum. Eaque mollitia, non, accusantium qui, illum sapiente quis molestias necessitatibus cumque labore aut tempore at.";
        document.getElementById("text").style.display ='block';
        document.getElementById("text1").style.display ='none';
    }
    else if (data === 'product4') {
        document.getElementById("image").src = "/IWT/src/images/SE.png";
        document.getElementById("image").style.display ='block';
        document.getElementById("text").innerHTML = "<span>Iphone SE</span> :- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita blanditiis sit fugiat molestias voluptatem nostrum. Eaque mollitia, non, accusantium qui, illum sapiente quis molestias necessitatibus cumque labore aut tempore at.";
        document.getElementById("text").style.display ='block';
        document.getElementById("text1").style.display ='none';
    }
}
function priceForLoop() {
    const prices = ["Iphone XS - $1349","Iphone XS - $1349","Iphone XS - $999","Iphone 8 Plus - $599","Iphone SE - $399"];
    var text = "";

    for (var i = 0; i < 5; i++) {
        text += prices[i] + "<br>";
    }
    document.getElementById("text1").innerHTML = text;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}
const phones = {"Iphone 11":"1699","Iphone XS": "1499", "Iphone XS Max": "1699", "Iphone X": "999", "Iphone 8Plus": "699", "Iphone SE": "599"};

function priceHigher() {
    
    var high = "";
    for (var i in phones) {
        if (phones[i] > 1000) {
            high += i + " : $" + phones[i] + "<br>";
        }
    }
    document.getElementById("text1").innerHTML = high;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}
function priceLower() {
    
    var low = "";
    for (var i in phones) {
        if (phones[i] < 1000) {
            low += i + " : $" + phones[i] + "<br>";
        }
    }
    document.getElementById("text1").innerHTML = low;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}
function checkPassword() {
    var pass1 = document.getElementById("pswd1");
    var pass2 = document.getElementById("pswd2");

    if (pass1 != pass2) {
        alert ("Password Mismatch!");
    }
    else {
        alert ("Success!");
    }
}
function enableButton() {
    var checkBox = document.getElementById("checkbox");

    if (checkBox.checked == true) {
        document.getElementById('btn').disabled = false;
    }
    else {
        document.getElementById('btn').disabled = true;
    }
}