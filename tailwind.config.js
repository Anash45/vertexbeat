/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './*.html',            // Include all HTML files in the root directory
      './assets/js/**/*.js', // Include all JS files in assets/js directory
    ],
    theme: {
      extend: {
        screens: {
          'xs': '480px',   // Bootstrap's extra small screen
          'sm': '600px',   // Bootstrap's small screen
          'md': '768px',   // Bootstrap's medium screen
          'lg': '992px',   // Bootstrap's large screen
          'xl': '1200px',  // Bootstrap's extra large screen
          'xxl': '1400px', // Bootstrap's extra extra large screen
        },
        container: {
          center: true,  // Optional: center the container horizontally
          padding: '1rem',  // Optional: padding around the container
          screens: {
            'xs': '100%',   // Max width for xs
            'sm': '570px',   // Max width for sm
            'md': '740px',   // Max width for md
            'lg': '970px',   // Max width for lg
            'xl': '1160px',  // Max width for xl
            'xxl': '1350px', // Max width for xxl
          },
        },
      },
    },
    plugins: [],
  }
  