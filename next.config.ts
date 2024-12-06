import type { NextConfig } from "next";
import "./src/env/client";
import "./src/env/server";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
    typedEnv: true,
  },
};

export default nextConfig;
