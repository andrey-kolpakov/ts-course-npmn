"use strict";
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Hello ${user.login}`);
    }
}
const user1 = {
    login: 'user1',
    email: 'email@email.com',
    password: '123456',
    isOnline: false,
    lastVisited: new Date()
};
const user2 = {
    login: 'user2',
    email: 'email@email.com',
    password: '',
    isOnline: false,
    lastVisited: new Date()
};
const admin1 = {
    login: 'admin',
    email: 'email@email.com',
    password: '123456',
    isOnline: false,
    lastVisited: new Date(),
    role: 'admin'
};
login(user1);
login(user2);
login(admin1);
