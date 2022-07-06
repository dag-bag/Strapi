console.log(process.env.username);
module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: process.env.hostF,
      database: process.env.database,
      user: process.env.username_h,
      password: process.env.password,
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});

// host: env("DATABASE_HOST", "sql610.main-hosting.eu"),
//       database: env("DATABASE_NAME", "u779264867_demo"),
//       user: env("DATABASE_USERNAME", "u779264867_demo"),
//       password: env("DATABASE_PASSWORD", "demo@1Dddd"),
//       ssl: env.bool("DATABASE_SSL", true),
