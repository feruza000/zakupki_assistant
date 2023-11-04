import puppeteer from "puppeteer";

const fetchDataFromWebsite = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://ru.sputnik.kg/keyword_goszakupki/?ysclid=loj0c1n6el298258406');

    // Здесь вы можете использовать Puppeteer для извлечения данных с веб-страницы
    const titles = await page.$$eval('.your-selector-for-titles', (titleElements) => {
        return titleElements.map((element) => element.textContent);
    });

    const metadata = await page.$$eval('.your-selector-for-metadata', (metadataElements) => {
        return metadataElements.map((element) => element.textContent);
    });

    await browser.close();

    // Здесь вы можете создать массив BlogData на основе данных, полученных выше
    const blogData = titles.map((title, index) => ({
        _id: index + 1,
        mainImage: `/images/blog/blog-${index + 1}.png`,
        title,
        metadata: metadata[index],
    }));

    debugger
    console.log(blogData, '12')
    debugger

    return blogData;
};

export default fetchDataFromWebsite;