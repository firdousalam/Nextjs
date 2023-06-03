/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  env: {
    URL: process.env.URL,
    HOST : process.env.HOST,
    KEY : process.env.KEY
  }

}

module.exports = nextConfig
