function insert(num: string): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML += num;
  }
}

function clean(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML = "";
  }
}

function back(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML = resultElement.innerHTML.slice(0, -1);
  }
}

function calculate(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    const expression = resultElement.innerHTML;
    try {
      const result = new Function(`return (${expression})`)();
      resultElement.innerHTML = result.toString();
    } catch (error) {
      resultElement.innerHTML = "Erro na expressão";
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key;
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];

    if (allowedKeys.includes(key)) {
      insert(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      back();
    } else if (key.toLowerCase() === 'c') {
      clean();
    }
  });
});