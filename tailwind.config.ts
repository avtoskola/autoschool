/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        small: ['13px', '1.6em'],
        medium: ['15px', '1.6em'],
        'medium-l': ['17px', '25.4px'],
        large: ['19px', '1.55em'],
        xlarge: ['23px'],
        '2xlarge': ['26.4px'],
        '3xlarge': ['34px', '1.2em'],
        '4xlarge': ['35px'],
        '5xlarge': ['44.5px'],
        '6xlarge': ['45.6px', '2.8rem'],
      },
      colors: {
        purple: '#6B21A8',
        yellow: '#FB923C',
        'gray-light': '#F2F2F2',
        'gray-lighter': '#F1F1F1',
      },
      maxWidth: {
        container: '1140px',
      },
      backgroundImage: {
        'bright-blue-green-grid': 'url(\'/images/grid-bright.webp\')',
        'gradient-green-blue-tiles': 'url(/images/tiles-gradient-green-blue.webp)',
        secondary: 'linear-gradient(180deg, #F3F4F6 0%, #FFF 100%)',
      },
      boxShadow: {
        'hero-section': '15px 15px 0px -5px #000000',
        'popover-option': '2px 2px 5px rgba(0,0,0,0.2)',
        'calendly-widget': '0 1px 8px 0 rgb(0 0 0/8%)',
        'video-preview': '10px 10px 11px -6px rgba(0,0,0,0.5)',
        screenshot: '7px 7px 10px 0px rgba(0,0,0,0.5)',
        card: '3px 3px 10px 0px #35474933',
        'card-primary': '3px 3px 10px rgba(53, 71, 73, 0.20)',
        modules: '2.210322380065918px 2.210322380065918px 7.36774206161499px 0px #00000040',
        section: '2.25px 2.25px 7.5px 0px #35474933',
      },
      dropShadow: {
        play: '2px 4px 20px rgba(0,0,0,0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: '2s fadeIn',
      },
    },
  },
};
