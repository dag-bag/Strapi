module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "Bcx4aVKPwfHKsGfn03ixJA==",
      "RRrHTovBfkrPjBy1Q4aiTA==",
      "Vbe/KzVCKZ7Ds0G347PSYA==",
      "wUzXlJ4xA6YHjfbFBm8h7Q==",
    ],
  },
});
