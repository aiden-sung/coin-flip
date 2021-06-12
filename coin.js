let score = 1;

function loop() {
    let guess = prompt("Enter guess (heads or tails)");

    let result = Math.random();

    alert(result)

    let side = "";

    if (result > 0.5) {
        side = "heads"
    }

    if (result <= 0.5) {
        side = "tails"
    }

    if (guess === side) {
        score = score * 2;
        alert("Congrats you got it. Your score is: " + score);
        setTimeout(loop, 0);
    } else {
        alert("Maybe next time. Your final score is: " + score)
    }
}

setTimeout(loop, 0);
