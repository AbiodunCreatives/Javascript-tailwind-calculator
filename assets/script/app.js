
function clr() {
    document.getElementById('outputScreen').innerText = '';
}

// Delete button 
function del() {
    document.getElementById('outputScreen').innerText = document.getElementById('outputScreen').innerText.slice(0, -1);
}
// Making button works 
function display(n) {
    document.getElementById('outputScreen').innerText += n;
}

// making the calculaton 
function calc() {
    try {
        document.getElementById('outputScreen').innerText = eval(document.getElementById('outputScreen').innerText);
    } catch {
        document.getElementById('outputScreen').innerText = '';
    }
}

// Enabling the Keyboard Input
document.addEventListener("keydown", key, false);

function key(e) {
    var keynum;
    if (window.event) {
        keynum = e.keyCode;
    } else if (e.which) {
        keynum = e.which;
    }
    console.log(String.fromCharCode(keynum));
    display(String.fromCharCode(keynum));
}