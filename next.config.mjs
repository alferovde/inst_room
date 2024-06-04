/** @type {import('next').NextConfig} */

const global_path_server = process.env.host;
const nextConfig = {
  env: {
    host: "http://127.0.0.1:8000/api",
    public: "http://127.0.0.1:8000",
  },
  images: {
    domains: ["127.0.0.1"],
  },
};

export default nextConfig;
