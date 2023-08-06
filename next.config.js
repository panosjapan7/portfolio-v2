/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  publicRuntimeConfig: {
    NEXT_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  },
};

module.exports = nextConfig;
