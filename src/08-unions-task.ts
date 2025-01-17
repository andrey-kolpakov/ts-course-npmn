type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// create a function that change level of incoming developer
function gradeDeveloper(developer: Developer, newLevel: Level):Developer {

    developer.level = newLevel
    return developer
}

let developerInstance: Developer = {
    login: 'developer',
    skills: ['TS', 'JS'],
    level: 'junior'
}

console.log(developerInstance)

gradeDeveloper(developerInstance, 'middle')

console.log(developerInstance)