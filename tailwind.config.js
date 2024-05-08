/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        landingBanner: "url('/src/Assets/images/landingImage5.png')",
        studentswithcap: "url('/src/Assets/images/studentswithcap.jpg')",
      },
      colors: {
        primaryColor: "#002147",
        secondaryColor: "#FDC800",
        textColor:"#646464",
        primaryTextColor: "#F5F5F5",
        secondaryTextColor: "#444444",
        lightBackgroundColor: "#EEEEEE",
        lightGray: "#F4F6F5"
      },
    },
  },
  plugins: [],
}

