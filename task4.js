function reverseNumber() {
    let num = parseInt(document.getElementById("input1").value);
    let result = document.getElementById("result");
    
    if (isNaN(num)) {
        result.innerHTML = "Enter valid number";
        return;
    }
    
    let n = Math.abs(num);
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    rev = Math.sign(num) * rev;
    
    result.innerHTML = "Reversed: " + rev;
}