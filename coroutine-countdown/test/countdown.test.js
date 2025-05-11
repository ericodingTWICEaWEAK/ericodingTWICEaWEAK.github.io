const expect = chai.expect;

describe("Coroutine Countdown", function () {
  this.timeout(10000);

  beforeEach(() => {
    const container = document.getElementById("test-container");
    container.innerHTML = '<div id="container"></div>';
  });

  it("should create countdown block", () => {
    const container = document.getElementById("container");
    const id = addCountdown(container, 3);
    const el = document.getElementById(id);
    expect(el).to.exist;
    expect(el.textContent).to.equal("?");
  });

  it("should remove block after countdown", async () => {
    const container = document.getElementById("container");
    const id = addCountdown(container, 1);
    await delay(2500);
    const el = document.getElementById(id);
    expect(el).to.not.exist;
  });
});