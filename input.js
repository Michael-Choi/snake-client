const stdin = process.stdin;
let connection;

let directions = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right"
};

const handleUserInput = () => {
  let interval = setInterval(() => {}, 100);
  stdin.on("data", key => {
    if (key) {
      console.log("key was pressed");
      clearInterval(interval);
      interval = setInterval(() => {
        connection.write(directions[key]);
      }, 100);
    }
    if (key === "\u0003") {
      process.exit();
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
