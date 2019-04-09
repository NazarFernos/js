var clicks = 0;

function increment() {
    clicks += 1; 
    drawResult();
}

function decrement() {
    clicks -= 1; 
    drawResult();
}

function reset() {
    clicks = 0; 
    drawResult();
}

function drawResult() {
  document.getElementById("counter").innerHTML = clicks;
} 
