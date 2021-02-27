

exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const roles = [
    {
      username: "admin",
      password: "user" // will get id 1
    },
    {
      username: "user",
      password: "users", // will get id 2
    },
  ];

  return knex("users")
    .insert(roles)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};


  