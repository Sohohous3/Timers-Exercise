
function randomGame() {
    let count = 1;
    let intervalId = setInterval(() => {
        let randomNum = Math.random();
        if (randomNum > 0.75) {
            clearInterval(intervalId)
            console.log("It took you : ", count, " tries to find a number greater than 0.75!");
        } else {
            count += 1;
        }
    }, 1000);
}

randomGame();