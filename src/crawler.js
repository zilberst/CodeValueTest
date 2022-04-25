const scrapeLinks = require('./utils/scraper');
const linksScraped = require('./utils/results');

module.exports = async function crawlUrls(paths, depth, http) {
  /*
    As an example, the following extracts links from given website URL or file path
    scrapeLinks('htmls/1.html', false).then(console.log);
    scrapeLinks('https://edition.cnn.com/', true).then(console.log);
  */
  if (depth === 0) {
    return [];
  }

  let linksToReturn = [];
  for (const path of paths) {
    const scrapedLinks = await scrapeLinks(path, false);
    const links = await crawlUrls(scrapedLinks, depth -1, false);
    linksScraped[path] = scrapedLinks;
    linksToReturn = linksToReturn.concat(scrapedLinks, links);
  }
  
  return linksToReturn;
}
