;(function(window) {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function countdown(n, onTick) {
    for (let i = n; i >= 0; i--) {
      onTick(i);
      await delay(1000);
    }
  }

  async function addCountdown(container, seconds) {
    const id = "cd-" + Date.now() + "-" + Math.random().toString(36).slice(2,5);
    const el = document.createElement("div");
    el.id = id;
    el.className = "countdown-block";
    container.appendChild(el);

    countdown(seconds, (n) => {
      el.textContent = (n === 0 ? "Done" : n);
    }).then(() => {
      el.remove();
    });

    return id;
  }

  window.delay = delay;
  window.countdown = countdown;
  window.addCountdown = addCountdown;
})(window);
