/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
        extend: {
         colors:{
          bgcolor:{
            100:'#1A1A1A',
            200:'#090909'},
          grad:'#4287F7',
          button:"#FFBF00",
          darkbutton:'#CC9900',
          textcolor:{
          100:'#9CA3AF'    
            }},

          fontFamily:{
              body:['Quicksand'],
              other:['Allerta Stencil']
            },
            backgroundImage:{
              'tessaract': "url('/img/teseract-pattern.png')",
              'gear': "url('/img/gear.png')"
            },
            boxShadow: {
              'custom': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
  },
  plugins: [],
  }}