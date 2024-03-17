/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    REACT_APP_FLUX_API: process.env.REACT_APP_FLUX_API
  },
  async redirects() {
    return [
      {
        "source": "/home",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/about",
        "destination": "/about-us/who-we-are",
        permanent: true,
      },
      {
        "source": "/cases-we-handle",
        "destination": "/cases-we-handle/hair-litigation",
        permanent: true,
      },
      {
        "source": "/landingpage2.cochrantexas.com",
        "destination": "/cases-we-handle/employment",
        permanent: true,
      },
      {
        "source": "/tulsa-office",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/dallas",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/our-team",
        "destination": "/about-us/our-team",
        permanent: true,
      },
      {
        "source": "/our-team/bryan-pope",
        "destination": "/about-us/our-team/bryan-pope",
        permanent: true,
      },
      {
        "source": "/our-team/larry-taylor",
        "destination": "/about-us/our-team/larry-taylor",
        permanent: true,
      },
      {
        "source": "/our-team/tasha-williams",
        "destination": "/about-us/our-team/tasha-williams",
        permanent: true,
      },
      {
        "source": "/black-history",
        "destination": "/cochran-cares",
        permanent: true,
      },
      {
        "source": "/ft-worth",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/north-houston",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/south-houston",
        "destination": "/",
        permanent: true,
      },
      {
        "source": "/our-team/michael-t-sterling",
        "destination": "/about-us/our-team/michael-t-sterling",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/faulty-products",
        "destination": "/cases-we-handle/personal-injury/faulty-products",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/unsafe-drugs",
        "destination": "/cases-we-handle/personal-injury/unsafe-drugs",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/boat-accidents",
        "destination": "/cases-we-handle/personal-injury/boat-accidents",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/traumatic-brain-injury",
        "destination": "/cases-we-handle/personal-injury/traumatic-brain-injury",
        permanent: true,
      },
      {
        "source": "/our-team/darian-l-conston-sr",
        "destination": "/about-us/our-team/darian-l-conston-sr",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/hair-litigation",
        "destination": "/cases-we-handle/mass-torts/hair-litigation",
        permanent: true,
      },
      {
        "source": "/our-team/tracy-wickstrom",
        "destination": "/about-us/our-team/tracy-wickstrom",
        permanent: true,
      },
      {
        "source": "/cochran-cares/poll-worker",
        "destination": "/cochran-cares",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/wrongful-death",
        "destination": "/cases-we-handle/personal-injury/wrongful-death",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/motorcycle-wrecks",
        "destination": "/cases-we-handle/personal-injury/motorcycle-wrecks",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/trip-and-fall",
        "destination": "/cases-we-handle/personal-injury/trip-and-fall",
        permanent: true,
      },
      {
        "source": "/cases-we-handle/slip-and-fall",
        "destination": "/cases-we-handle/personal-injury/slip-and-fall",
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
