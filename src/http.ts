type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTION" | "TRACE" | "PATCH" | "CONNECT" | "CORS";

type ServerRequest<M extends HTTPMethod = HTTPMethod> = {
    method: M
}

type Callback<M extends HTTPMethod = HTTPMethod> = (serverRequest: ServerRequest<M>) => void


const app = {
    get(path: string, cb: Callback<"GET">) {

    },
    post(path: string, cb: Callback<"POST">) {

    },
    put(path: string, cb: Callback<"PUT">) {

    }
}

app.get("https://fettblog.eu", (req) => {
    if(req.method === "GET") {

    }
})

app.post("https://fettblog.eu", (req) => {
    if(req.method === "POST") {

    }
})

const aCallbackForAllMethods: Callback = (req) => {
    req.method
}

function request(method: HTTPMethod, url: URL) {

}

request("GET", new URL("https://fettblog.eu"))

export {}