module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FhirSmartrRedux',
      externals: {
        react: 'React'
      }
    }
  },
  devServer: {
    compress: true,
    public: 'smartrr-nathanrichardng.c9users.io'
  },
  webpack: {
    html: {
      template: 'demo/src/index.html'
    }
  }
}
