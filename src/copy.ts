const defaultOptions = {
    src: "source",
    dest: "dist",
    mode: "w"
}

function copy(options: Partial<typeof defaultOptions>) {

}

copy({
    src: "../source"
})


export {}