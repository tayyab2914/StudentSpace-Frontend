/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'blogger.googleusercontent.com',
      'res.cloudinary.com',
      'i.postimg.cc',
      'via.placeholder.com',
      'robohash.org',
      'cdn-icons-png.flaticon.com'
    ],
  },
  env: {
    REACT_APP_PRODUCTION: process.env.REACT_APP_PRODUCTION,
    REACT_APP_TESTING: process.env.REACT_APP_TESTING,
    REACT_APP_BACKEND_DOMAIN_NAME: process.env.REACT_APP_BACKEND_DOMAIN_NAME,
    REACT_APP_FRONTEND_DOMAIN_NAME: process.env.REACT_APP_FRONTEND_DOMAIN_NAME,
    REACT_APP_REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
    REACT_APP_GOOGLE_AUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
  },
}

module.exports = nextConfig