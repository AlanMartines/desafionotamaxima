const puppeteer = require('puppeteer');
const Crawler = require('crawler');

(async () =>{
  const url = 'https://www.desafionotamaxima.com.br/';
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 768},
    args: ['--start-maximized']
  });
  const page = await browser.newPage();
  await page.goto(url);
  const pageTitle = await page.title();
  if(pageTitle ){}
  await page.waitFor('input[name="user_session[email]"]');
  await page.type('input[name="user_session[email]"]','user', {delay: 100});
  await page.keyboard.press('Enter');
  //await page.waitForNavigation();
  await page.waitFor('input[name="user_session[password]"]');
  await page.type('input[name="user_session[password]"]', '****', {delay: 100});
  await page.keyboard.press('Enter');
  await page.waitForNavigation();

  //await browser.close();
})();