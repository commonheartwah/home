fis.match('/en/fonts/*', {
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
}) 

fis.match('*.css', {
  optimizer: fis.plugin('clean-css'),
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor'),
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});

fis.match('*.gif', {
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});

fis.match('*.jpg', {
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});

fis.match('*.ico', {
  domain: 'http://s0.babyfs.cn/www',
  useHash: true,
  release : '/static/$0'
});
