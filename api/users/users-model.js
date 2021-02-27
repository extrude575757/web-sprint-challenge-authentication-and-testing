const db = require("../../data/dbConfig.js");



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

 function add(user) {
  // const [id] = await db("users").insert(user);
  // return findByThisId(id);
  return db("users").insert(user)
}

function findByThisId(id){
  return [id]
}

function findById(id) {
    return db("users").where( {id}).first();
  }
  function find(){
    return db("users").select("id","username")
  }

// function findById(id) {
//   return db("users as u")
//     .join("roles as r", "u.role", "=", "r.id")
//     .select("u.id", "u.username", "r.name as role")
//     .where("u.id", id)
//     .first();
// }
module.exports = {
  add,
  findById,
  find
};