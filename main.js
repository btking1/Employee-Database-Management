import iq from "inquirer";
import mysql from "mysql2";
import cTable from "console.table";

function doQuery(sql, client) {
  client.query(sql, (err, res) => {
    if (err) throw err;
    else {
      console.log(res);
    }
  });
}

function initializeDbClient() {
  const client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Adventstar789*",
    database: "company",
  });
  client.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log("Connection to DB successful");
    }
  });
  return client;
}
// pass param ["table"] into handleViewCommand




async function handleViewCommand() {
  let sql = "";
  let columns = await iq.prompt({
    type: "input",
    name: "columns",
    message: 'Enter Column name or "All"',
  });

  let col = columns["columns"].toLowerCase();

  switch (col) {
    case "all":
      console.log("User said view all" + table);
      sql = "SELECT * FROM " + table;
      break;
    default:
      sql = `SELECT ${col} FROM ${table}`;
      break;
  }
  return sql;
}
function handleAddCommand() {
  
}
function handleUpdateCommand() {}

function closeServer(client) {
  client.end((err) => {
    if (err) throw err;
    else {
      console.log("connection to DB server closed");
    }
  });
}

async function promptUser() {
  // view all dept, roles, or employees
  const response = await iq.prompt([
    {
      type: "list",
      name: "action-type",
      message: "What would you like to do?",
      choices: ["View", "Add", "Update", "Exit"],
    },
  ]);
  const cmd = response["action-type"];

  // if (cmd === "Exit") {
  //   closeServer(client);
  // }
  return response["action-type"];
}

//function parse action type

// async function ParseInputType() {
//   let response = await promptUser();
//   let action = response["action-type"];

//   switch (action) {
//     case "view":
//       handleViewCommand();
//       break;
//     case "add":
//       handleAddCommand();
//       break;
//     case "update":
//       handleUpdateCommand();
//       break;

// ParseInputType();
async function chooseTable() {
  const table = await iq.prompt([
    {
      type: "list",
      name: "table",
      message: "Choose a table",
      choices: ["Departments", "Roles", "Employees"],
    },
  ]);
  return table["table"];
}

async function main() {
  let client = initializeDbClient();
  let response = await promptUser(client);
  if (response != "Exit") {
    var table = await chooseTable();
  }
  // console.log(table);
  // console.log(response);

  let sqlCommand = "";

  switch (response) {
    case "View":
      sqlCommand = await handleViewCommand(table);
      break;

    case "Add":
      // sqlCommand = await
      break;

    case "Update":
      // sqlCommand = await
      break;

    case "Exit":
      closeServer(client);
      break;
  }
  /* SEND QUERY */
  console.log(sqlCommand);
  doQuery(client, sqlCommand);
}
main();
