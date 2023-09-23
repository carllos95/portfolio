module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/curriculo',
        destination: '/api/curriculo',
      }
    ]
  }
}
