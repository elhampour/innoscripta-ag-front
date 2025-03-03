const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
