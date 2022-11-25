/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/ebalajipay' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/ebalajipay' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/ebalajipay/upload.php' : '/api/upload'
    }
};

module.exports = nextConfig;
