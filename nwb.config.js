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
  }
}
