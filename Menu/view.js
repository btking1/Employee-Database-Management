import { client } from "../index.js";
import { main } from "../index.js";

// handles VIEW funcitonality
export async function viewResponses(view) {
  const empTable = `select vemployeesandmanagers.id AS ID, CONCAT(vemployeesandmanagers.first_name, " ", vemployeesandmanagers.last_name)  
  AS employeeName, vrolesanddepts.title AS Title,
  vrolesanddepts.salary AS Salary, vrolesanddepts.name AS Dept, vemployeesandmanagers.manager_name AS Manager       
  from vemployeesandmanagers       
  inner join vrolesanddepts        
  on
  vemployeesandmanagers.role_id = vrolesanddepts.id;`;

  switch (view) {
    case "employees":
      client.query(empTable, (err, res) => {
        if (err) {
          throw err;
        } else {
          console.table(res);
          main();
        }
      });
      break;
    case "departments":
      client.query("SELECT * FROM departments", (err, res) => {
        if (err) {
          throw err;
        } else {
          console.table(res);
          main();
        }
      });
      break;
    case "roles":
      client.query("SELECT * FROM roles", (err, res) => {
        if (err) {
          throw err;
        }
        console.table(res);
        main();
      });
      break;
    default:
      console.log("Invalid selection");
      main();
      break;
  }
}
