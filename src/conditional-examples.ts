async function doSomething(input: number, checkMark: boolean) {
    return input;
}

type GetFunctionReturnType<Fn extends Function> = 
    Fn extends (...args: any[]) => infer ReturnType ? ReturnType : never;

type GetFunctionArguments<Fn extends Function> = 
    Fn extends (...args: infer Arguments) => any ? Arguments : never;

type UnpackPromise<T> = T extends Promise<infer Val> ? Val : T

type Demo = UnpackPromise<GetFunctionReturnType<typeof doSomething>>
type Demo2 = RemoveNull<GetFunctionReturnType<typeof document.querySelector>>

type Demo3 = GetFunctionArguments<typeof doSomething>
type Demo4 = GetFunctionArguments<typeof document.querySelector>

type RemoveNull<T> = T extends null ? never : T;

export {}