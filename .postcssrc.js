module.exports = (ctx) => ({
  plugins: {
    'postcss-custom-media': {
      importFrom: './src/assets/css/utils/variables.scss'
    }
  }
})