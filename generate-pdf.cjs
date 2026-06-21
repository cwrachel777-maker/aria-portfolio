const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:9999';
const OUTPUT_DIR = path.join(__dirname, 'pdf-export');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const pages = [
  { name: '01-home', path: '/' },
  { name: '02-ability', path: '/ability' },
  { name: '03-projects', path: '/projects' },
  { name: '04-insights', path: '/insights' },
  { name: '05-about', path: '/about' },
  { name: 'A1-brand-guide', path: '/projects/a/a1' },
  { name: 'A2-training', path: '/projects/a/a2' },
  { name: 'A3-upgrade', path: '/projects/a/a3' },
  { name: 'A4-training-system', path: '/projects/a/a4' },
  { name: 'B1-salon', path: '/projects/b/b1' },
  { name: 'B2-window', path: '/projects/b/b2' },
  { name: 'B3-research', path: '/projects/b/b3' },
  { name: 'C1-city-lake', path: '/projects/c/c1' },
  { name: 'C2-cloud-store', path: '/projects/c/c2' },
  { name: 'C3-super-light', path: '/projects/c/c3' },
  { name: 'C4-narrative', path: '/projects/c/c4' },
];

async function exportPage(browser, url, filename) {
  const page = await browser.newPage();
  
  // 设置视口为桌面端
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
  });

  try {
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // 等待页面完全渲染
    await page.waitForTimeout(3000);
    
    // 等待所有图片加载完成
    await page.evaluate(async () => {
      const images = Array.from(document.querySelectorAll('img'));
      await Promise.all(images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
          setTimeout(resolve, 5000);
        });
      }));
    });
    
    // 再等一下确保动画完成
    await page.waitForTimeout(1000);

    const outputPath = path.join(OUTPUT_DIR, `${filename}.pdf`);
    await page.pdf({
      path: outputPath,
      width: '1440px',
      height: '900px',
      printBackground: true,
      preferCSSPageSize: true,
    });
    
    console.log(`✅ 已生成: ${filename}.pdf`);
    await page.close();
    return true;
  } catch (error) {
    console.error(`❌ 生成失败 ${filename}:`, error.message);
    await page.close();
    return false;
  }
}

async function main() {
  console.log('🚀 开始生成PDF...\n');
  
  // 临时修改 index.html 和 404.html 使用相对路径
  const indexPath = path.join(__dirname, 'docs', 'index.html');
  const notFoundPath = path.join(__dirname, 'docs', '404.html');
  
  let indexOriginal, notFoundOriginal;
  
  try {
    indexOriginal = fs.readFileSync(indexPath, 'utf8');
    notFoundOriginal = fs.readFileSync(notFoundPath, 'utf8');
    
    // 替换为相对路径
    const indexFixed = indexOriginal
      .replace(/href="\/aria-portfolio\//g, 'href="./')
      .replace(/src="\/aria-portfolio\//g, 'src="./');
    const notFoundFixed = notFoundOriginal
      .replace(/href="\/aria-portfolio\//g, 'href="./')
      .replace(/src="\/aria-portfolio\//g, 'src="./');
    
    fs.writeFileSync(indexPath, indexFixed);
    fs.writeFileSync(notFoundPath, notFoundFixed);
    
    console.log('📝 已临时修改路径为相对路径\n');
  } catch (e) {
    console.log('⚠️ 路径修改失败，尝试直接生成...', e.message);
  }
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let successCount = 0;
  let failCount = 0;

  for (const p of pages) {
    const success = await exportPage(browser, `${BASE_URL}${p.path}`, p.name);
    if (success) successCount++; else failCount++;
  }

  await browser.close();
  
  // 恢复原文件
  if (indexOriginal) fs.writeFileSync(indexPath, indexOriginal);
  if (notFoundOriginal) fs.writeFileSync(notFoundPath, notFoundOriginal);
  console.log('📝 已恢复原始文件\n');
  
  console.log(`📊 完成! 成功: ${successCount}, 失败: ${failCount}`);
  console.log(`📁 PDF文件位置: ${OUTPUT_DIR}`);
}

main().catch(console.error);
