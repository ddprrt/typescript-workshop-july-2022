type ID = {
    id: number
}

type Name = {
    name: string
}

/** Overload start */
function generateLabel(input: string): Name
function generateLabel(input: number): ID
function generateLabel(input: ID): ID
function generateLabel(input: number | ID): ID
function generateLabel(input: string | number | ID): Name | ID
/** Overload end */
function generateLabel(input: string | number | ID): Name | ID { // Actual implementation
    if(typeof input === "string") {
        return {
            name: input
        }
    } else if(typeof input === "number") {
        return {
            id: input
        }
    } else {
        return {
            id: input.id
        }
    }
}

const z = generateLabel(1234)
const y = generateLabel("Stefan")

declare const input: string | number | ID;

const x = generateLabel(input)
const copy_z = generateLabel(z)

type IsString<T> = T extends string ? T : never;

type Demo = IsString<"Hello">
type Demo2 = IsString<1234>


type Inputs = string | number | ID ;

type Result<T extends Inputs> = T extends string ? Name : ID

function generateLabel2<T extends Inputs>(input: T): Result<T>
function generateLabel2(input: Inputs): Result<Inputs> {
    if(typeof input === "string") {
        return {
            name: input
        }
    } else if(typeof input === "number") {
        return {
            id: input
        }
    } else {
        return {
            id: input.id
        }
    }
}

const generated_name = generateLabel2("Stefan")
const generated_id = generateLabel2(1234)
const copied_id = generateLabel2(z)

declare const input2: ID | number

const w2 = generateLabel2(input2)
//const v2 = generateLabel2(generated_name)
const demo = generateLabel2(123)

export {}