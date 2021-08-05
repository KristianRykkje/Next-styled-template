const fs = require("fs");

const localesFolder = "./public/locales";
const locales = fs.readdirSync(localesFolder);

module.exports = {
  i18n: {
    defaultLocale: "en",
    defaultNS: "common",
    locales,
  },
};
