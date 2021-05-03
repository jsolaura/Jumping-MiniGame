let btn = document.querySelector("check");
let outputArea = document.querySelector("#display");
let countArea = document.querySelector("#counter");
let inputNum = document.querySelector("#try");
let randomNum = Math.floor(Math.random() * 100 + 1);
let count = 0;

inputNum.onkeypress = function(e) {
    if (e.keyCode == 13 || e.which == 13) {
        finding();
        return false;
    }
}
function finding() {
    let userNum = inputNum.value;
    if (userNum <= 100 && userNum >= 1) {
        if (userNum < randomNum) {
            outputArea.innerHTML = "!!! UP !!!";
        } else if (userNum > randomNum) {
            outputArea.innerHTML = "!!! DOWN !!!";
        } else if (userNum = randomNum) {
            outputArea.innerHTML = `<span style="color:pink">YOU GOT IT </br> CONGRATULATION !!! </span>`;
        }
        userNum = "";
        count++;
        countArea.innerHTML = `입력 횟수 : ${count}회`;

    } else {
        alert("1~100 단위의 숫자를 입력해주세요.");
    }
}