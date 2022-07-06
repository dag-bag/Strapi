module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: process.env.hostF,
      database: process.env.database,
      user: process.env.username_h,
      password: process.env.password,
      ssl: true,
    },
  },
});
