module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  app: {
    keys: process.env.MY.split(", "),
  },
});
