document.querySelectorAll(".auto-rotate").forEach(img => {
  let angle = 0;

  setInterval(() => {
    angle += 0.5;               // 回転スピード（小さいほどゆっくり）
    img.style.transform = `rotate(${angle}deg)`;
  }, 30);                       // 数字を大きくすると遅くなる
});
