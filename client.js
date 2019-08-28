const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.1.79",
    port: 50541
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("connection established");
    conn.write("Name: MC");
  });

  // interpret incoming data as text
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };
