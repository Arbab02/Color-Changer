function color1(value) {
  document.body.style.background = value;

}

let color = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'purple'];
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let randomColor = color[Math.floor(Math.random() * color.length)];
  document.body.style.background = randomColor;
})