import React from 'react';

const divStyle = {
  width: '90%',
  overflow: 'hidden',
  margin: 'auto',
};

const Discover = () => {
  (function(d, id) {
    let t,
      el = d.scripts[d.scripts.length - 1].previousElementSibling;
    if (el) el.dataset.initTimestamp = new Date().getTime();
    if (d.getElementById(id)) return;
    t = d.createElement('script');
    t.src = '//assetscdn.stackla.com/media/js/widget/fluid-embed.js';
    t.id = id;
    (
      d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]
    ).appendChild(t);
  })(document, 'stackla-widget-js');
  return (
    <div>
      <div
        className='stackla-widget'
        data-ct=''
        data-hash='5df3267548b99'
        data-id='65282'
        data-title='latest'
        data-ttl='60'
        style={divStyle}
      ></div>
    </div>
  );
};
export default Discover;
