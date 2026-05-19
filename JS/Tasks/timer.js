let body = document.body;
Object.assign(body.style, {
  height: "100vh",
  backgroundColor: "pink",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

let container = document.createElement("div");
Object.assign(container.style, {
  height: "300px",
  width: "400px",
  backgroundColor: "red",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",
});
body.appendChild(container);

let header = document.createElement("div");
Object.assign(header.style, {
  backgroundColor: "blue",
  width: "500px",
  position: "absolute",
  textAlign: "center",
  top: "40px",
  fontSize: "24px",
  borderRadius: "10px",
  color: "white",
});
container.appendChild(header);

let display = document.createElement("h1");
display.innerHTML = "00 : 00 : 00 : 000";
header.appendChild(display);

let buttonContainer = document.createElement("div");

function createBtn(text) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  Object.assign(btn.style, {
    padding: "6px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  });
  return btn;
}

Object.assign(buttonContainer.style, {
  position: "absolute",
  bottom: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
});

let startBtn = createBtn("Start");
let stopBtn = createBtn("Stop");
let resetBtn = createBtn("Reset");

container.appendChild(buttonContainer);
buttonContainer.appendChild(startBtn);
buttonContainer.appendChild(stopBtn);
buttonContainer.appendChild(resetBtn);

// ======================================================================================================

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  display.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function startTimer() {
  if (timer !== null) return;
  timer = setInterval(function () {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
