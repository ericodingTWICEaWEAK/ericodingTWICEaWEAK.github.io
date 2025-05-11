// test/countdown.test.js

// 取得全域的 assert
var assert = chai.assert;

describe("Coroutine Countdown", function() {
  this.timeout(10000);

  beforeEach(function() {
    var tc = document.getElementById("test-container");
    tc.innerHTML = '<div id="container"></div>';
  });

  it("should create countdown block", function() {
    var container = document.getElementById("container");
    var id = addCountdown(container, 3);
    var el = document.getElementById(id);
    // 用 assert 代替 expect
    assert.isNotNull(el, "倒數區塊應該存在");
    assert.strictEqual(el.textContent, "3", "初始文字應該是 '3'");
  });

  it("should remove block after countdown", function(done) {
    var container = document.getElementById("container");
    var id = addCountdown(container, 1);

    delay(2500).then(function() {
      var el = document.getElementById(id);
      assert.isNull(el, "倒數結束後元素應該被移除");
      done();
    }).catch(done);
  });
});
