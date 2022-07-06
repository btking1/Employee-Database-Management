import iq from "inquirer";

function handleViewCommand() {}
function handleAddCommand() {}
function handleUpdateCommand() {}

async function promptUser() {
  const response = await iq.prompt([
    {
      type: "Input",
      name: "action-type",
      message: "What would you like to do?",
    },
  ]);

  return response;
}

//function parse action type

async function ParseInputType() {
  let response = await promptUser();
  let action = response["action-type"];
  

  action = action.split(" ", 1);
  action = action[0].toLowerCase();

  let details = response["action-type"];
  details = details.substring(action.length + 1);

  console.log(`DETAILS + ${details}`);

  switch (action) {
    case "view":
      handleViewCommand();
      break;
    case "add":
      handleAddCommand();
      break;
    case "update":
      handleUpdateCommand();
      break;
    default:
      console.log("Invalid input. Try again");
      //   reponse = await promptUser();
      ParseInputType();
      break;
  }
  //   console.log(response);
}

ParseInputType();
