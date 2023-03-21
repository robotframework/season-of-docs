module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/season-of-docs/'
    : '/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/season-of-docs/'
    : '/'
}
