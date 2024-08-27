// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Adicione outros caminhos de arquivos onde você usa Tailwind CSS
  ],
  theme: {
    extend: {
      // Adicione as classes personalizadas aqui
      scrollbar: {
        hide: {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        hideWebkit: {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
          ".scrollbar-hide::-webkit-scrollbar": {
            display: "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
