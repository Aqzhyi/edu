/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  /**
   * ## 當參數值為 ['page.mdx', 'page.md', 'page.tsx']
   *
   * - 使 ~/pages/* 裡面能夠擺放「非 page 的其它 React 組件」
   * - 若要擺放「page 組件」後檔名需要為「page.tsx」；例如「hog/me.page.tsx」
   */
  pageExtensions: ['page.mdx', 'page.md', 'page.tsx'],
}

module.exports = nextConfig
