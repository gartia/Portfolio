module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      visibility: ["group-hover"],
      backgroundImage: {
        mountain: "url('./images/mountain.png')",
        darkmountain: "url('./images/darkmountain.png')",
      },
      animation: {
        background: "background 15s ease infinite",
      },
      keyframes: {
        background: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
