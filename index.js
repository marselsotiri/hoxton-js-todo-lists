/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let message = ''

for (const user of users) {
    message += `Id=${user.id} Hi, ${user.name} from ${user.address.city}!\n`
}

alert(message);

let message1 = ''

let userIdGet=Number(prompt('Enter the user Id you wont to take out'))

for (const user of users) {
   for (const todo of todos){
    if (userIdGet===user.id && userIdGet===todo.userId) message1 += `This is your user: ${user.username} and the list todo:${todo.title}\n`
   }
}

alert(message1);