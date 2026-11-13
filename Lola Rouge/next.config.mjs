/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static site, so it can be hosted on Cloudflare Pages
  images: { unoptimized: true },
}

export default nextConfig
