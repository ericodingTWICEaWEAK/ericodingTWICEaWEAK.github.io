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

  function addCountdown(container, seconds) {
    return new Promise(resolve => {
      const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
      const el = document.createElement("div");
      el.id = id;
      el.className = "countdown-block";
      el.textContent = seconds;
      container.appendChild(el);

      let current = seconds;

      const timer = setInterval(() => {
        current--;
        if (current <= 0) {
          clearInterval(timer);
          el.remove();
          resolve(id);
        } else {
          el.textContent = current;
        }
      }, 1000);
    });
  }


  window.delay = delay;
  window.countdown = countdown;
  window.addCountdown = addCountdown;
})(window);
