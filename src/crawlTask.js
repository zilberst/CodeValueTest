const crawlUrls = require('./crawler');
const config = require('./utils/config');

let depth = 7;

async function crawl(paths, http) {

  if (!depth) {
    depth = config.DEFAULT_CRAWL_DEPTH
  }
  if (depth > config.MAX_CRAWL_DEPTH) {
    depth = config.MAX_CRAWL_DEPTH
  }
  const links = await crawlUrls(paths, depth, http);
  console.log('links:', links);
}

crawl(['htmls/1.html'], false)
  .then(() => crawl(['htmls/2.html', 'htmls/3.html'], false));
