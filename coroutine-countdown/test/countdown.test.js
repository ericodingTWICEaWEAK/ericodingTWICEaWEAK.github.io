// test/countdown.test.js

// 取得全域的 expect
var expect = chai.expect;

describe("Coroutine Countdown", function() {
  // 最多等 10 秒
  this.timeout(10000);

  beforeEach(function() {
    // 每次測試前清空容器並重建
    var tc = document.getElementById("test-container");
    tc.innerHTML = '<div id="container"></div>';
  });

  it("should create countdown block", function() {
    var container = document.getElementById("container");
    // 倒數 3 秒
    var id = addCountdown(container, 3);
    var el = document.getElementById(id);
    // 確認元素存在
    expect(el).to.not.be.null;
    // 初始內容應為 "3"
    expect(el.textContent).to.equal("3");
  });

  it("should remove block after countdown", function(done) {
    var container = document.getElementById("container");
    // 倒數 1 秒
    var id = addCountdown(container, 1);
    // 等 2.5 秒後確認元素已被移除
    delay(2500).then(function() {
      var el = document.getElementById(id);
      expect(el).to.be.null;
      done();
    }).catch(done);
  });
});
