/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/index.html",             // لو بتستخدم HTML عادية
      "./node_modules/flowbite/**/*.js"  // ده مهم علشان Flowbite تشتغل
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')  // هنا بنضيف Flowbite كمكوّن
    ],
  }
  