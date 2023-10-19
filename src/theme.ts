import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config.js';
const { theme: tokens } = tailwindConfig;
export default resolveConfig(tokens);
