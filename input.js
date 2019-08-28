const stdin = process.stdin;
let connection;

let directions = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right"
};
const handleUserInput = () => {
  stdin.on("data", key => {
    if (key === "\u0003") {
      process.exit();
    } else {
      connection.write(directions[key]);
    }
  });
};

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

module.exports = { setupInput };
