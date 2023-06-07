import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
};

export default withPlaiceholder(config);
