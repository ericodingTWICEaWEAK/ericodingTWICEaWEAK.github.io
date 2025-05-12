var assert = chai.assert;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe("五秒倒數計時器測試", function() {
  this.timeout(100000);
  it("5秒的addCountdown 執行後應該被移除", async function() {
    const container = document.getElementById("test-container");
    const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
    await addCountdown(container, 5, id);
    const el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });
});

describe("兩秒倒數計時器測試", function() {
  this.timeout(100000);
  it("2秒的addCountdown 執行後應該被移除", async function() {
    const container = document.getElementById("test-container");
    const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
    await addCountdown(container, 2, id);
    const el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });
});

describe("零秒倒數計時器測試", function() {
  this.timeout(100000);
  it("0秒的addCountdown 執行後應該被移除", async function() {
    const container = document.getElementById("test-container");
    const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
    await addCountdown(container, 0, id);
    const el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });
});

describe("五秒倒數計時器，測試三秒後是否顯示'2'", function() {
  this.timeout(100000);
  it("測試3秒後的addCountdown(5秒)輸出是否正確(為2)", async function () {
    const container = document.getElementById("test-container");
    const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
    addCountdown(container, 5, id);
    await delay(3100);
    el = document.getElementById(id);

    assert.isNotNull(el, "3秒後元素應該仍存在");
    assert.strictEqual(el.textContent, "2", "3 秒後文字應該是 '2'");
    await delay(2200);
    el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });
});

describe("五秒倒數計時器，測試三秒後是否顯示'1'", function() {
  this.timeout(100000);
  it("錯誤測資範例 5秒倒數計時，3秒時顯示1秒", async function () {
    const container = document.getElementById("test-container");
    const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
    addCountdown(container, 5, id);
    await delay(3000);
    el = document.getElementById(id);

    assert.isNotNull(el, "3秒後元素應該仍存在");
    assert.strictEqual(el.textContent, "1", "3 秒後文字應該是 '1'");
    await delay(2500);
    el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });
});

describe("同時發出三個倒數計時器", function() {
  this.timeout(100000);
  it("同時發出三個addCountdown", async function () {
    const container = document.getElementById("test-container");
    const promises = [
      addCountdown(container, 2),
      addCountdown(container, 3),
      addCountdown(container, 5)
    ];

    const results = await Promise.all(promises);

    results.forEach((id) => {
      const el = document.getElementById(id);
      assert.isNull(el, "倒數結束後元素應該被移除");
    });
  });
});

describe("憤怒點擊 我討厭人機互動", function() {
  this.timeout(100000);
  it("憤怒點擊 每0.2秒點擊一次生成5秒的倒數計時器", async function () {
    const container = document.getElementById("test-container");
    var Id_list = [];

    for(let i=0;i<30;i++)
    {
      const id = "cd-" + Date.now() + Math.random().toString(36).slice(2, 5);
      Id_list.push(id);
      addCountdown(container, 5, id);
      await delay(200);      
    }
    await delay(5000);
    Id_list.forEach(id => {
      el = document.getElementById(id);
      assert.isNull(el, "倒數結束後元素應該被移除");      
    });
  });

});
