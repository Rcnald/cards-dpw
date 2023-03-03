/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'primary':['Nunito, sans-serif'],
      },
      colors:{
        'gray':{
          'bg':'#e5e5e5',
          'text':'#363636',
        },
        'blue':{
          'btn-primary':'#2d849f',
          'btn-primary-hover':'#3da6c8',
        },
        'instagram':{
          'bg':'#e4405f',
          'btn':'#4f5bd5',
          'btn-hover':'#646eda',
        },
        'linkedin':{
          'bg':'#0077b5',
          'btn':'#FFF',
          'btn-hover':'#d9d9d9',
        },
        'twitter':{
          'bg':'#00aced',
          'btn':'#FFF',
          'btn-hover':'#d9d9d9',
        },
      },
    },
  },
  plugins: [],
}
