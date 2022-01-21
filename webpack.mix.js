const glob = require("glob");
let mix = require("laravel-mix");
require("mix-env-file");

const vueConfig = { version: 3 };

mix
  .setPublicPath("dist")
  .copy("src/static", "dist")
  .js("src/main/background.js", "dist/js", { base: "src/main" });
