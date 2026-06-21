import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 基础URL
const BASE_URL = 'https://cwrachel777-maker.github.io/aria-portfolio';

// 定义所有页面
const pages = [
  // 首页
  { name: '01-home', url: '/', title: '首页' },
  
  // 能力地图
  { name: '02-ability', url: '/ability', title: '能力地图' },
  
  // 项目经历总页 - 第一页（A板块）
  { name: '03-projects-1', url: '/projects', title: '项目经历 - A板块', scrollY: 0 },
  // 项目经历总页 - 第二页（B+C板块）
  { name: '03-projects-2', url: '/projects', title: '项目经历 - B/C板块', scrollY: 600 },
  
  // A板块项目
  { name: '04-a1', url: '/projects/a/a1', title: 'A1 - 品牌专卖店形象规范指南' },
  { name: '05-a2', url: '/projects/a/a2', title: 'A2 - 波段上新陈列指引' },
  { name: '06-a3', url: '/projects/a/a3', title: 'A3 - 季度陈列升级与跨部门协作' },
  { name: '07-a4', url: '/projects/a/a4', title: 'A4 - 分层培训体系' },
  
  // B板块项目
  { name: '08-b1', url: '/projects/b/b1', title: 'B1 - 上海旗舰店月度沙龙视觉企划' },
  { name: '09-b2', url: '/projects/b/b2', title: 'B2 - 季度橱窗视觉企划' },
  { name: '10-b3', url: '/projects/b/b3', title: 'B3 - 市场趋势调研' },
  
  // C板块项目
  { name: '11-c1', url: '/projects/c/c1', title: 'C1 - City Lake诗意场域构建' },
  { name: '12-c2', url: '/projects/c/c2', title: 'C2 - 云朵商店未来商店叙事' },
  { name: '13-c3', url: '/projects/c/c3', title: 'C3 - Super Light光之容器' },
  { name: '14-c4', url: '/projects/c/c4', title: 'C4 - 叙事性陈列兴趣起点' },
  
  // 市场洞察
  { name: '15-insights', url: '/insights', title: '市场洞察' },
  
  // 关于我
  { name: '16-about', url: '/about', title: '关于我' },
];

async function generatePDF() {
  console.log('🚀 开始生成PDF作品集...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // 设置视口大小为16:9比例 (1920x1080)
  await page.setViewport({ width: 1920, height: 1080 });
  
  // 创建输出目录
  const outputDir = path.join(__dirname, 'pdf-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const screenshots = [];
  
  // 遍历所有页面并截图
  for (let i = 0; i < pages.length; i++) {
    const pageInfo = pages[i];
    console.log(`📸 正在截图 [${i + 1}/${pages.length}]: ${pageInfo.title}`);
    
    try {
      await page.goto(`${BASE_URL}${pageInfo.url}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // 等待页面加载完成
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 如果需要滚动到特定位置
      if (pageInfo.scrollY) {
        await page.evaluate((scrollY) => {
          window.scrollTo(0, scrollY);
        }, pageInfo.scrollY);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // 截图
      const screenshotPath = path.join(outputDir, `${pageInfo.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        type: 'png',
        fullPage: false // 只截取视口大小
      });
      
      screenshots.push({
        path: screenshotPath,
        title: pageInfo.title
      });
      
      console.log(`   ✅ 已保存: ${screenshotPath}`);
    } catch (error) {
      console.error(`   ❌ 截图失败: ${error.message}`);
    }
  }
  
  await browser.close();
  
  console.log('\n✨ 所有页面截图完成！');
  console.log(`📁 截图保存在: ${outputDir}`);
  console.log(`📊 共生成 ${screenshots.length} 张截图`);
  
  // 生成PDF合并说明
  console.log('\n📝 下一步操作：');
  console.log('1. 打开截图文件夹查看所有截图');
  console.log('2. 使用以下任一方式合并为PDF：');
  console.log('   - Mac: 选中所有截图 → 右键 → 快速操作 → 创建PDF');
  console.log('   - Windows: 使用在线工具如 ilovepdf.com');
  console.log('   - 或者运行: npm run pdf-merge');
}

generatePDF().catch(console.error);
