// Base de datos simulada (nuestros usuarios) 
const users = [ 
  { id: 1, name: "Ana" }, 
  { id: 2, name: "Luis" }, 
  { id: 3, name: "María" } 
];


//CALLBACK 
const getUserById = (id,callback) => {
    return setTimeout(() => {
        console.log("Actividad 1 - Callbacks");
        const user = users.find(user => user.id === id);
        if(user) {
            callback(null,user);
        } else {
            callback(`User with id ${id} not found`);
        }
    }, 1500);
}

let id = 3;
getUserById(id, (error,user) => {
    if(error) {
        return console.log(error);
    }
    console.log("User found:", user);
});

//PROMISES

const getUserByIdPromise = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Actividad 2 - Promesas");
            const user = users.find(user => user.id === id);
            if(user) {
                resolve(user);
            } else {
                reject(`User with id ${id} not found`);
            }
        }, 1500);
    });
}

getUserByIdPromise(1)
    .then(user => console.log("User found:", user))
    .catch(error => console.log(error));



//ASYNC AWAIT
const fetchUser = async (id) => {
    try {
        console.log("Actividad 3 - Async/Await");
        const user = await getUserByIdPromise(id);
        console.log("User found:", user);
    } catch (error) {
        console.log(error);
    }
}

fetchUser(5);