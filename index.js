/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

// let message = ''

// for (const user of users) {
//     message += `Id=${user.id} Hi, ${user.name} from ${user.address.city}!\n`
// }

// alert(message);

// let message1 = ''

// let userIdGet=Number(prompt('Enter the user Id you wont to take out'))

// for (const user of users) {
//    for (const todo of todos){
//     if (userIdGet===user.id && userIdGet===todo.userId) message1 += `This is your user: ${user.username} and the list todo:${todo.title}\n`
//    }
// }

// alert(message1);

// welcomeUser :: () => undefined
function welcomeUser() {
    let welcomeMessage =
      'Welcome to the AMAZING TODO APP!!!!\n\nAvailable users:\n\n'
  
    for (const user of users) {
      welcomeMessage += `${user.id}: ${user.name} - ${user.address.city}\n`
    }
  
    alert(welcomeMessage)
  }
  
  // getUserId :: () => number
  function getUserId() {
    return Number(prompt(`What's your ID?`))
  }
  
  // findUser :: () => User { id, name, username, etc.... }
  function findUser() {
    for (const user of users) {
      if (user.id === userId) {
        return user
      }
    }
  }
  
  function findUserTodos() {
    let userTodos = []
  
    for (const todo of todos) {
      if (todo.userId === userId) {
        userTodos.push(todo)
      }
    }
  
    return userTodos
  }
  
  function alertUserTheirTodos() {
    let finalMessage = ''
  
    finalMessage += `Welcome, ${userFound.username}, here are your todos:\n\n`
  
    for (const todo of userTodos) {
      finalMessage += `- ${todo.title}`
      if (todo.completed) finalMessage += ` (✅)\n`
      else finalMessage += ` (❌)\n`
    }
  
    alert(finalMessage)
  }
  
  welcomeUser()
  let userId = getUserId()
  let userFound = findUser()
  let userTodos = findUserTodos()
  alertUserTheirTodos()
  