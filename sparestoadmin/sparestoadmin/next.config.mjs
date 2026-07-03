/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactCompiler: true,

  basePath: isProd ? '/sparestoadmin' : '',
  assetPrefix: isProd ? '/sparestoadmin/' : '',
};

export default nextConfig;