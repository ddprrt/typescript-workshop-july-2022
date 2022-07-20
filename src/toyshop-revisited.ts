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

type Toy = Puzzle | BoardGame | Doll


type GetKind<Group, Kind> = Group extends { kind: Kind } ? Group : never

/**

Group = Puzzle | BoardGame | Doll 
Kind = "puzzle"

Puzzle extends { kind: "puzzle" } ==> Puzzle
BoardGame extends { kind: "puzzle" } ==> never
Doll extends { kind: "puzzle" } ==> never

Puzzle | never | never
Puzzle

 */

type GroupedToys = {
    [Key in Toy["kind"]]: GetKind<Toy, Key>[]
}

function groupToys(toys: Toy[]) {
    const groups: GroupedToys = {
        boardgame: [],
        doll: [],
        puzzle: []
    }

    for(let element of toys) {
        if(element.kind === "boardgame") {
            groups.boardgame.push(element)
        }
    }

    return groups
}




export {}