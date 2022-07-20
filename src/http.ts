type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTION" | "TRACE" | "PATCH" | "CONNECT" | "CORS";

type ServerRequest<M extends HTTPMethod = HTTPMethod, P extends string = string> = {
    method: M,
    params: Record<P, string>
}

type Callback<
    M extends HTTPMethod = HTTPMethod, 
    P extends string = string
> = (serverRequest: ServerRequest<M, P>) => void


type ParseRouteParams<T extends string> = 
    T extends `${string}/:${infer Param}/${infer Rest}` 
        ? Param | ParseRouteParams<`/${Rest}`>
        : T extends `${string}/:${infer Param}${"" | "/"}` 
          ? Param 
          : never


type Demo = ParseRouteParams<"/api/users">
type Demo2 = ParseRouteParams<"/api/users/:userID" | "/api/order/:orderID">
 
type Demo3 = ParseRouteParams<"/api/users/:userId/orders/:orderID/:productID/">

const app = {
    get<T extends string>(path: T, cb: Callback<"GET", ParseRouteParams<T>>) {

    },
    post<T extends string>(path: T, cb: Callback<"POST", ParseRouteParams<T>>) {

    },
    put<T extends string>(path: T, cb: Callback<"PUT", ParseRouteParams<T>>) {

    }
}

// URLPattern
app.get("/api/users/:userId/orders/:orderId", (req) => {
    req.params.orderId
    if(req.method === "GET") {
    }
})

app.get("/users", (req) => {
})

app.post("/api/users/:userID", (req) => {
    if(req.method === "POST") {
        req.params.userID
    }
})

const aCallbackForAllMethods: Callback = (req) => {
    req.method
}

function request(method: HTTPMethod, url: URL) {

}

request("GET", new URL("https://fettblog.eu"))

export {}