
{import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
}

if (process.env.MIGHTYMELD) {

	nextConfig.experimental = {
		swcPlugins: [['@mightymeld/runtime/swc-plugin-mightymeld', require('@mightymeld/runtime').pluginoptions()]]
	}
}

module.exports = nextConfig
