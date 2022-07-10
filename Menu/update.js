import inquirer from "inquirer";
import { client } from "../index.js";
import { main } from "../index.js";
import { Roles } from "./add.js";

// maps and returns all employees
function Employees() {
  return client
    .promise()
    .query("SELECT * FROM employees")
    .then((res) => {
      return res[0].map((employee) => {
        return {
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      });
    });
}
// updates employee's roles
export async function updateResponse() {
  const currEmp = await Employees();
  const roles = await Roles();
  const updateSql = `UPDATE employees SET role_id = ? WHERE id = ?`;

  await inquirer
    .prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee would you like to update?",
            choices: currEmp,
        },
      {
        type: "list",
        name: "role",
        message: "Enter new role",
        choices: [...roles],
      },
    ])
    .then((answers) => {
        client.query(updateSql, [answers.role, answers.employee], (err, res) => {
            if (err) {
            throw err;
            }
            console.log(`${answers.employee} role updated to ${answers.role}`);
        });
        }
    );
    main();
}
   