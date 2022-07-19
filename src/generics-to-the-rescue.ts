type Person = {
    name: string,
    age: number
}

const me: Person = {
    name: "Stefan",
    age: 40
}

const anotherPerson: Person = {
    name: "Not Stefan",
    age: NaN
}

function update<T extends keyof Person>(key: T) {
    const value = anotherPerson[key];
    me[key] = anotherPerson[key]
}

update("name")

function isAvailable<T>( // Generic Boundaries
    obj: T,
    key: PropertyKey
): key is keyof T {
    return key in obj;
}


interface Employee extends Person {
    jobTitle: string
}


function listPerson<T extends Person>(p: T) {
    const meAgain: Person = {
        name: "Stefan",
        age: 40
    }

    for(let key in p) {
        console.log(p[key])
    }
}

const againAPerson = {
    name: "Stefan",
    age: 40,
    profession: "Software Developer"
}

listPerson(againAPerson)
listPerson(me)

export {}