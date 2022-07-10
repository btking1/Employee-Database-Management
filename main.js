import iq from "inquirer";
import mysql from "mysql2";
import cTable from "console.table";

import { viewResponses } from "./Menu/view.js";
import { addResponse } from "./Menu/add.js";
import { updateResponse } from "./Menu/update.js";

// creates connection to database
export const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Adventstar789*",
  database: "company",
});
client.connect((err) => {
  if (err) {
    throw err;
  }
});
// MAIN MENU
export async function main() {
  const mainMenu = [
    {
      type: "list",
      name: "mainMenu",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add an employee",
        "Add a department",
        "Add a role",
        "Update an employee role",
        "Exit",
      ],
    },
  ];
  await iq.prompt(mainMenu).then((answers) => {
    switch (answers.mainMenu) {
      case "View all employees":
        viewResponses("employees");
        break;
      case "View all departments":
        viewResponses("departments");
        break;
      case "View all roles":
        viewResponses("roles");
        break;
      case "Add a department":
        addResponse("departments");
        break;
      case "Add a role":
        addResponse("roles");
        break;
      case "Add an employee":
        addResponse("employees");
        break;
      case "Update an employee role":
        updateResponse("employees");
        break;
      case "Exit":
        client.end();
        console.log("Goodbye!");
        break;
    }
  });
}

main();
