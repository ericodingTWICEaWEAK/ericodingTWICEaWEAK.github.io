export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function startCountdown(id, seconds = 5) {
  const block = document.getElementById(id);
  for (let i = seconds; i >= 0; i--) {
    block.textContent = i;
    block.classList.add('animate');
    await delay(100);
    block.classList.remove('animate');
    await delay(900);
  }
  block.remove();
}

let blockId = 0;
export function addCountdown(container, seconds = 5) {
  const id = `countdown-${blockId++}`;
  const div = document.createElement('div');
  div.className = 'countdown-block';
  div.id = id;
  div.textContent = '?';
  container.appendChild(div);
  startCountdown(id, seconds);
  return id;
}
