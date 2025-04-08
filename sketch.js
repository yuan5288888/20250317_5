let seaweedColors = [];
let seaweedLengths = [];

function setup() { //初始設定函數，只會執行一次
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '1'); // 確保畫布在 iframe 背後
  clear();
  
  // 初始化每條海草的顏色和長度
  for (let i = 0; i < 40; i++) {
    seaweedColors.push(color(random(255), random(255), random(255), 150)); // 設置顏色和透明度
    seaweedLengths.push(int(random(40, 70))); // 每條海草的段數不同
  }
}

function draw() { //畫圖函數，會一直執行
  clear(); // 清除畫布，保持透明背景
  
  // 設定每條海草的數量
  let seaweedCount = 40; // 只畫出螢幕一半的海草
  
  // 設定每條海草的初始位置和長度
  for (let j = 0; j < seaweedCount; j++) {
    let baseX = (windowWidth / seaweedCount) * j + (windowWidth / seaweedCount) / 2;
    let baseY = windowHeight;
    let segmentLength = seaweedLengths[j]; // 使用固定的段數
    let width = 40; // 固定每條海草的寬度
    
    // 設定線條顏色為固定顏色
    let seaweedColor = seaweedColors[j];
    stroke(seaweedColor);
    // 設定線條粗細
    strokeWeight(width);
    noFill();
    
    // 畫每條海草的多個枝節
    beginShape();
    let x = baseX;
    let y = baseY;
    vertex(x, y);
    for (let i = 0; i < segmentLength; i++) {
      // 計算每個枝節的擺動
      let angle = sin(frameCount * 0.01 + i * 0.3 + j * 0.1) * 0.3; // 調整擺動頻率
      let newX = baseX + sin(angle) * width;
      let newY = y - 10; // 每個枝節的長度固定為10
      
      // 添加頂點
      vertex(newX, newY);
      
      // 更新下一個枝節的起始位置
      x = newX;
      y = newY;
    }
    endShape();
  }
}
