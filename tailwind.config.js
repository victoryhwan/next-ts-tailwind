module.exports = {
  mode: 'jit',
  purge: {
    // enabled: true, //사용하지 않는 스타일 수동으로 제거
    content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: [ //사용하지 않은 css가 제거되지 않도록 명시하는 곳
      'bg-blue-500',
      'text-center',
      'hover:opacity-100',
      // ...
      'lg:text-right',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile' : '375px'
        
      },
      typography: {
        DEFAULT: {
          // css: {
          //   color: '#333',
          //   strong: {
          //     fontWeight: '800',
          //   },
          //   fontSize: '1.875rem',
          //   h1: {
          //     fontSize: '4rem',
          //   }
          //   ...
          // },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
