/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  env: {
    URL: process.env.URL,
    HOST : process.env.HOST,
    KEY : process.env.KEY
  }

}

module.exports = nextConfig
