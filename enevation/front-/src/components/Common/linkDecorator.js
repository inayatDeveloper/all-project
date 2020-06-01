import * as Routes from 'routes';

const linkDecorator = {
  attributes: {
    rel: 'noopener noreferrer',
  },
  target: {
    url: '_blank',
  },
  formatHref: function(href, type) {
    if (type === 'hashtag') {
      href = `${Routes.HOME}?hash-tag-search=${href.substring(1)}`;
    }
    return href;
  },
};

export default linkDecorator;
