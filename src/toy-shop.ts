type ToyBase = {
    name: string,
    description: string,
    stock: number
}

type Puzzle = ToyBase & {
    pieces: number,
    age: number,
    kind: "puzzle"
}

type Doll = ToyBase & {
    material: "plush" | "plastic"
    kind: "doll"
}

interface BoardGame extends ToyBase {
    players: number,
    age: number
    kind: "boardgame"
}

type Videogame = ToyBase & {
    system: string,
    cartridge: boolean,
    age: number,
    kind: "videogame"
}

type Bricks = ToyBase & {
    brand: "Lego" | "Mega Construx" | "Cada",
    kind: "bricks"
}

type Toy = Puzzle | BoardGame | Doll | Videogame | Bricks



function assertNever(input: never) {
    throw Error("This can't be happening")
}

function printToy(toy: Toy) {
    switch(toy.kind) {
        case "boardgame": 
            return "It's a boardgame"
        case "doll":
            return "It's a doll"
        case "puzzle":
            return "It's a puzzle"
        case "videogame":
            return "It's a videogame"
        case "bricks":
            return "It's bricks"
        default:
            assertNever(toy)
    }
}


type ToyKind = Toy["kind"]// Index Access Type

type GroupedToys = { // Mapped Type. You can only map over string, number, symbol
    [Key in ToyKind]: Toy[]
}

type BoardGameKeys = keyof BoardGame; // "description" | "name" | "players" | "age" | "kind"


// Type access modifiers. -? ? readonly -readonly
type BoardgameWithOptionalProperties = {
    [Key in keyof BoardGame]?: BoardGame[Key]
}

type BoardgameWithRequiredProperties = {
    [Key in keyof BoardgameWithOptionalProperties]-?: BoardGame[Key]
}

function groupToys(toys: Toy[]) {
    const toyGroups: GroupedToys = {
        boardgame: [],
        doll: [],
        videogame: [],
        puzzle: [],
        bricks: []
    }

    toyGroups.boardgame = []

    for(let el of toys) {
        toyGroups[el.kind].push(el)
    }

    return toyGroups;
}


type Dice = 1 | 2 | 3 | 4 | 5 | 6

function isDice(dice: number): dice is Dice { // Type predicate 
    //return dice >= 1 || dice <= 6;
    return [1, 2, 3, 4, 5, 6].includes(dice)
}

class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

function checkPerson(person: Person) {
    if(person instanceof Person) {

    }
}

checkPerson(new Person("Stefan"))
checkPerson({ name: "Stefan" })

function rollDice(dice: number) {
    if(isDice(dice)) {
        dice
        // Then I know, it's a dice ..
    } else {
        dice
    }
}



export {}