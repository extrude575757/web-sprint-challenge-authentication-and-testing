const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  findById
};

// function find() {
//   return db("users as u")
//     .join("roles as r", "u.role", "=", "r.id")
//     .select("u.id", "u.username", "r.name as role", "u.department");
// }


// async function findUsers1(uName) {
//   const [id] = await db("thisuser").insert(uName, "id");
//   return findById(id);
//   }

//   function findUsers(id) {
//     return db("users as u")
//       .join("thisuser as r", "u.department", "=", "r.department")
//       .select("u.id", "u.username", "r.department as dep")
//       .where("u.id", id)
//       .first();
//   }
  

// function findBy(filter) {
//   return db("users as u")
//     .join("roles as r", "u.role", "=", "r.id")
//     .select("u.id", "u.username", "r.name as role", "u.password")
//     .where(filter);
// }

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}


function findById(id) {
    return db("users as u") 
      .select("u.id", "u.username")
      .where("u.id", id)
      .first();
  }
  

// function findById(id) {
//   return db("users as u")
//     .join("roles as r", "u.role", "=", "r.id")
//     .select("u.id", "u.username", "r.name as role")
//     .where("u.id", id)
//     .first();
// }
