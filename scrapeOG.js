const ogs = require('open-graph-scraper');
const resume = require('./config/resume.json');
const fs = require('node:fs');
function findUrls(obj) {
    let urls = [];

    function searchForUrls(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'string' && (key === 'url' || key==="demo")) {
                    urls.push(obj[key]);
                } else if (typeof obj[key] === 'object') {
                    searchForUrls(obj[key]);
                }
            }
        }
    }

    searchForUrls(obj);
    return urls;
}

(async () => {
    const urls = findUrls(resume);
    console.log(urls);
    const responses = await Promise.all(urls.map(async url => {
        try {
            return await ogs({ url });
        } catch (error) {

        }
    }));
    /**@type {Map<string,string>} */
    const imageURLs=new Map();
    for (let r of responses) {
        if (!r) {
            continue;
        }
        const { error, html, result, response } = r;
        if(result) {
            console.log(result);
            if(result.ogImage) {
                imageURLs.set(result.requestUrl,result.ogImage[0].url);
            }
        }
    }
    await fs.promises.writeFile('./config/imageURLs.json', JSON.stringify(Object.fromEntries(imageURLs)));
})();