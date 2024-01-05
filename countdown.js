
function countdown(num) {
    let intervalId = setInterval(function() {
        num--;

        if (num === 0) {
            console.log("DONE!");
            clearInterval(intervalId)
        } else
            console.log(num);
    }, 1000);
}

countdown(10);