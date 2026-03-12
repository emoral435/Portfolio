import { FlatCompat } from '@eslint/eslintrc'
import nextConfig from 'eslint-config-next/core-web-vitals'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      "no-empty": false,
    },
  }),
  // next.js specific configs for eslint
  ...nextConfig,
]

export default eslintConfig