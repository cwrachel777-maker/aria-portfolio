import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function mergeToPDF() {
  console.log('📄 开始合并截图为PDF...\n');
  
  const outputDir = path.join(__dirname, 'pdf-output');
  const screenshots = fs.readdirSync(outputDir)
    .filter(file => file.endsWith('.png'))
    .sort()
    .map(file => path.join(outputDir, file));
  
  if (screenshots.length === 0) {
    console.log('❌ 没有找到截图文件，请先运行 npm run pdf-generate');
    return;
  }
  
  console.log(`📸 找到 ${screenshots.length} 张截图`);
  
  // 创建PDF文档
  const pdfDoc = await PDFDocument.create();
  
  for (let i = 0; i < screenshots.length; i++) {
    const screenshotPath = screenshots[i];
    console.log(`📥 正在添加 [${i + 1}/${screenshots.length}]: ${path.basename(screenshotPath)}`);
    
    try {
      const imageBytes = fs.readFileSync(screenshotPath);
      const image = await pdfDoc.embedPng(imageBytes);
      
      // 16:9比例页面 (1920x1080)
      const page = pdfDoc.addPage([1920, 1080]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080
      });
    } catch (error) {
      console.error(`   ❌ 添加失败: ${error.message}`);
    }
  }
  
  // 保存PDF
  const pdfBytes = await pdfDoc.save();
  const pdfPath = path.join(outputDir, 'Aria_Portfolio.pdf');
  fs.writeFileSync(pdfPath, pdfBytes);
  
  console.log('\n✨ PDF生成完成！');
  console.log(`📁 PDF文件: ${pdfPath}`);
  console.log(`📊 共 ${screenshots.length} 页`);
}

mergeToPDF().catch(console.error);
