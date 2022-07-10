import inquirer from "inquirer";
("inquirer");
import { client } from "../index.js";
import { main } from "../index.js";

// maps and returns all managers
function Managers() {
  return client
    .promise()
    .query("SELECT * FROM employees")
    .then((res) => {
      return res[0].map((manager) => {
        return {
          name: `${manager.first_name} ${manager.last_name}`,
          value: manager.id,
        };
      });
    });
}
// function that maps roles and returns
export function Roles() {
  return client
    .promise()
    .query("SELECT * FROM roles")
    .then((res) => {
      return res[0].map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
    });
}
// handles add funcitonality
export async function addResponse(add) {
  const deptSql = `INSERT INTO ${add} (name) VALUES (?);
 `;

  const roleSql = `INSERT INTO ${add} (title, salary, department_id) VALUES (?, ?, ?)`;

  const empSql = `INSERT INTO ${add} (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

  switch (add) {
    // DEPT
    case "departments":
      await inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the name of the department?",
          },
          {
            type: "input",
            name: "Dept_manager",
            message: "Who is the manager of the department?",
          },
        ])
        .then((answers) => {
          client.query(deptSql, [answers.name], (err, res) => {
            if (err) {
              throw err;
            } else {
              console.log("Department added successfully");
              main();
            }
          });
        });
      break;
    //   ROLES
    case "roles":
      await inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of the role?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the role?",
          },
          {
            type: "input",
            name: "department_id",
            message: "What is the department id of the role?",
          },
        ])
        .then((answers) => {
          client.query(
            roleSql,
            [answers.title, answers.salary, answers.department_id],
            (err, res) => {
              if (err) {
                throw err;
              } else {
                console.log("Role added successfully");
                main();
              }
            }
          );
        });
      break;
    //   EMPLOYEES
    case "employees":
      const roles = await Roles();
      const manager = await Managers();

      await inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the first name of the employee?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee?",
          },
          {
            type: "list",
            name: "role_id",
            message: "What is there role?",
            choices: roles,
          },
          {
            type: "list",
            name: "manager",
            message: "What is the name of their manager?",
            choices: manager,
          },
        ])
        .then((answers) => {
          let empAnswers = [
            answers.first_name,
            answers.last_name,
            answers.role_id,
            answers.manager,
          ];
          // ADD TO DATABASE
          client.query(empSql, empAnswers, (err, res) => {
            if (err) {
              throw err;
            } else {
              console.log("Employee added successfully");
              main();
            }
          });
        });
  }
}
