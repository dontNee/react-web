// 开发模式
const devMode = process.env.NODE_ENV == "production" ? false : true;

/** @type {import('next').NextConfig} */
const nextConfig = devMode ? {
  reactStrictMode: true,
} : {
  reactStrictMode: true,
  // 静态导出页面-out
  output: 'export',
  // 公有路径
  assetPrefix: './'
}

module.exports = nextConfig
