const increaseButton = document.getElementById("increase-button");
const resetButton = document.getElementById("reset-button");
const decreaseButton = document.getElementById("decrease-button");
const restoreButton = document.getElementById('restore-button');

const counter = document.getElementById("counter")

let previousCounter = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function splashColour(type, button) {
    if (type == "increase") {
        button.style.backgroundColor = `#6EFF61`;
        await sleep(150);
        button.style.backgroundColor = `#FFFFFF`;
    } else if (type == "decrease") {
        button.style.backgroundColor = `#FF6161`;
        await sleep(100);
        button.style.backgroundColor = `#FFFFFF`;
    }
};

increaseButton.addEventListener('click', function() {
    let counterNumber = Number(counter.textContent);
    counter.textContent = counterNumber + 1;
    splashColour("increase", increaseButton);
});

resetButton.addEventListener('click', function() {
    if (counter.textContent != "0") {
        previousCounter = Number(counter.textContent);
        counter.textContent = "0";
    };
});

decreaseButton.addEventListener('click', function() {
    let counterNumber = Number(counter.textContent);
    counter.textContent = counterNumber - 1;
    splashColour("decrease", decreaseButton);
});

restoreButton.addEventListener('click', function() {
    counter.textContent = previousCounter;
});
