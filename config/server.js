module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "hPmgEaK8BXPSDKp7ze+3iA==",
      "iqgREiueRevSy2hmqHjxFA==",
      "zHYKpTOnjOXvCrpixhx+Hg==",
      "vyPTvtXx1Xf3bwrhwXwbdA==",
    ],
  },
});
