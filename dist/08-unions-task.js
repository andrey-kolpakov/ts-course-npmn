"use strict";
// create a function that change level of incoming developer
function gradeDeveloper(developer, newLevel) {
    developer.level = newLevel;
    return developer;
}
let developerInstance = {
    login: 'developer',
    skills: ['TS', 'JS'],
    level: 'junior'
};
console.log(developerInstance);
gradeDeveloper(developerInstance, 'middle');
console.log(developerInstance);
