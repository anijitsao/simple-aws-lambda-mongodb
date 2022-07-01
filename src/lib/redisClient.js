import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_CONNECTION_URL,
});

export { redisClient };
// on all error execute this line
// client.on("error", (err) => console.log("Redis Error: ", err.toString()));

// await client.connect();
// await client.set("num", 23);
// const value = await client.get("num");
// console.log("Value as received", value);

// const nameVal = await client.get("name");
// console.log("Name vlaue: ", nameVal);

// // const an object as key
// const keyObj = { username: "anij123" };
// const keyObjVal = { name: "Anijit Sau", role: "Developer", country: "India" };
// await client.hSet("anij123", keyObjVal);
// const valueKeyObj = await client.hGetAll("anij123");
// console.log(
//   "value received :",
//   valueKeyObj,
//   " \nand its type: ",
//   typeof valueKeyObj
// );
