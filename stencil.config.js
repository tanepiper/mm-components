exports.config = {
  bundles: [{ components: ['mm-context', 'mm-keyboard', 'mm-key'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
