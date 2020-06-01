import ogs from 'open-graph-scraper';
import getUrls from 'get-urls';
import urlParser from 'url';

export function handler(event, context, callback) {
  const text = event.queryStringParameters.q;
  const urls = getUrls(text, { requireSchemeOrWww: false });

  // Return if there is no urls in text
  if (!urls.size) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        text: text,
        meta: null,
        error: ['Empty url in text'],
      }),
    });
  }

  // Retrieve first URL in text - urls are already normalized
  const url = [...urls][0];
  const options = { url };

  ogs(options, (error, results) => {
    const statusCode = results.success ? 200 : 500;
    callback(null, buildResponseObject(statusCode, results, text));
  });
}

function getUrlDomain(url) {
  const urlObj = urlParser.parse(url);
  return urlObj.href;
}

function buildResponseObject(statusCode, result, text) {
  let meta = statusCode === 200 ? result.data : null;

  if (meta) {
    let images = meta.ogImage;

    if (images instanceof Array) {
      meta.ogImage = images[0];
    }

    let domain = meta.ogUrl;

    if (domain) {
      meta.ogUrl = getUrlDomain(meta.ogUrl);
    }
  }

  const body = {
    meta: meta,
    text: text,
    error: statusCode !== 200 ? result.error : null,
  };

  return {
    statusCode,
    body: JSON.stringify(body),
  };
}
