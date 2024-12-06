import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config, matchVariant }) {
      matchVariant("rp", (value) => {
        console.log("replace value ====", value); // 你可以打印一下看看编译的时候，收到的是什么值
        return `& ${value}`;
      });
    }),
  ],

}