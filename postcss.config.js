const tailwindcss = require('tailwindcss');

module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.jsx'],
      },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
