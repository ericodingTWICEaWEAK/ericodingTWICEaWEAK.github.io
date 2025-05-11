function addCountdown(container, seconds) {
  const id = "countdown-" + Date.now() + Math.random().toString(36).slice(2, 5);
  const el = document.createElement("div");
  el.id = id;
  el.textContent = "?";
  container.appendChild(el);

  countdown(seconds, (num) => {
    el.textContent = num === 0 ? "Done" : num;
  }).then(() => {
    el.remove();
  });

  return id;
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function countdown(n, onTick) {
  for (let i = n; i >= 0; i--) {
    onTick(i);
    await delay(1000);
  }
}