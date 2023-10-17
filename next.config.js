module.exports = {
  images: {
    domains: [
      'pokeres.bastionbot.org',
      'raw.githubusercontent.com',
      'cdn.traction.one',
      'img.pokemondb.net',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
