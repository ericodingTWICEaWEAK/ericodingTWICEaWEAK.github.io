var assert = chai.assert;

describe("Coroutine Countdown", function() {
  this.timeout(10000);

  beforeEach(function() {
    var tc = document.getElementById("test-container");
    tc.innerHTML = '<div id="container"></div>';
  });

  it("should remove block after countdown", async function() {
    const container = document.getElementById("container");
    const id = await addCountdown(container, 2);
    const el = document.getElementById(id);
    assert.isNull(el, "倒數結束後元素應該被移除");
  });

  it("should remove block after countdown", async function() {
  const container = document.getElementById("container");
  const id = await addCountdown(container, 5);
  const el = document.getElementById(id);
  assert.isNull(el, "倒數結束後元素應該被移除");
});

});
