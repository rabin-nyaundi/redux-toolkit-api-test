/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/users",
        destination: "https://touchinspiration-0ada.restdb.io",
      },
    ];
  },
};

module.exports = nextConfig;
