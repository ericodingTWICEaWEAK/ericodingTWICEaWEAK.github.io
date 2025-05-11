// countdown.js
;(function(window) {
  // 延遲函式，回傳一個在 ms 後 resolve 的 Promise
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 真正執行倒數的協程
  async function countdown(n, onTick) {
    for (let i = n; i >= 0; i--) {
      onTick(i);
      await delay(1000);  // 每秒一個刻度
    }
  }

  // 暴露給全域：新增一個倒數區塊並啟動倒數
  function addCountdown(container, seconds) {
    const id = "cd-" + Date.now() + "-" + Math.random().toString(36).slice(2,5);
    const el = document.createElement("div");
    el.id = id;
    el.className = "countdown-block";
    container.appendChild(el);

    // 每秒呼叫 onTick 更新文字，結束後移除元素
    countdown(seconds, (n) => {
      el.textContent = (n === 0 ? "Done" : n);
    }).then(() => {
      el.remove();
    });

    return id;
  }

  // 掛到全域
  window.delay = delay;
  window.countdown = countdown;
  window.addCountdown = addCountdown;
})(window);
