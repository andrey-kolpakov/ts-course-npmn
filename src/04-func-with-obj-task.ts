interface UserInterface{
    login: string
    email: string
    password: string
    isOnline: boolean
    lastVisited : Date 
}

interface AdminInterface{
    login: string
    email: string
    password: string
    isOnline: boolean
    lastVisited: Date 
    role: string
}

function login(user: {login: string, password: string}) :void{

    if(user.login.length > 0 && user.password.length > 0){
        console.log(`Hello ${user.login}`)
    }
}


const user1: UserInterface = {
    login: 'user1',
    email: 'email@email.com',
    password: '123456',
    isOnline: false,
    lastVisited: new Date()
}

const user2: UserInterface = {
    login: 'user2',
    email: 'email@email.com',
    password: '',
    isOnline: false,
    lastVisited: new Date()
}

const admin1: AdminInterface = {
    login: 'admin',
    email: 'email@email.com',
    password: '123456',
    isOnline: false,
    lastVisited: new Date(),
    role: 'admin'
}

login(user1)
login(user2) 
login(admin1)