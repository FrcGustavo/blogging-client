/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'res.cloudinary.com',
      'res-2.cloudinary.com',
      'res-3.cloudinary.com',
      'res-4.cloudinary.com',
    ],
  },
}

module.exports = nextConfig
