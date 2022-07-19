function load(file: string, encoding: string, callback: (result: string) => void): void {
    // The real work ahead
}

load("hello.txt", "utf8", (result) => {
    console.log(result)
})

function on(event: "OPEN" | "WRITE", cb: (msg: { kind: string, content: string }) => void): void {
    // The real work ahead
}

on("OPEN", (res) => {
    res.content
    res.kind
})

const promisiedLoad = promisify(load);
promisiedLoad("hello.txt", "utf-8").then(res => {
    console.log(res)
});

const promisifiedOn = promisify(on);
promisifiedOn("OPEN").then(res => {

})

function write(socket: any, content: string, callback: (worked: boolean) => void) {

}

const promisifiedWrite = promisify(write);

promisifiedWrite(null, "Some Content").then(res => {
    
})

function promisify<
    Args extends unknown[],
    Result,
>(fn: (...args: [...Args, (res: Result) => void]) => void) {
    return function(...args: Args): Promise<Result> {
        return new Promise((resolve) => {
            function cb(result: Result) {
                resolve(result);
            }

            fn.call(null, ...[...args, cb]);
        })
    }
}


export {}