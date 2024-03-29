const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    // enabled: true, //사용하지 않는 스타일 수동으로 제거
    content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    // safelist: [ //사용하지 않은 css가 제거되지 않도록 명시하는 곳
    //   'bg-blue-500',
    //   'text-center',
    //   'hover:opacity-100',
    //   // ...
    //   'lg:text-right',
    // ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'accordian-menu-open': 'accordian-menu-open 0.5s ease',
        'accordian-menu-close': 'accordian-menu-close 0.5s ease',
        'text-gradient': 'text-gradient 3s ease infinite'
      },
      keyframes: {
        'accordian-menu-open': {
          '0%' : {'height': '0%', 'opacity': '0'},
          '100%': {height: '100%', opacity: '1'}
        },
        'accordian-menu-close': {
          '0%' : {'height': '100%', 'opacity': '1'},
          '100%': {height: '0%', opacity: '0'}
        },
        'text-gradient':{
        //   '0% 100': {
        //     'background-size':'100% 100%',
        //      'background-position': 'left center'
        //   },
        //  '50%': {
        //   'background-size':'100% 100%',
        //    'background-position': 'right center'
        //   },
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        // '100%': {
        //  'background-size':'100% 100%',
        //   'background-position': 'right center'
        //   }
          // '200%' : {'background-position' : 'center'}
        }
      },
      screens: {
        'mobile' : '375px'
        
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    // extend: {},
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
