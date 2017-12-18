exports.config = {
  bundles: [{ components: ['mm-keyboard', 'mm-key'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
