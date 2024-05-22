document.getElementById("check-btn").addEventListener("click", function() {
    const resultDiv = document.getElementById("result");
    const inputText = document.getElementById("text-input").value
    let cleanInput = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedText = cleanInput.split('').reverse().join('');

    if(inputText === '') {
        return alert("Please Input a value")
    } else if (cleanInput === reversedText) {
         resultDiv.innerText = `${inputText} is a Palindrome`;
    } else {
        resultDiv.innerText = `${inputText} is not a Palindrome`;
    }
});