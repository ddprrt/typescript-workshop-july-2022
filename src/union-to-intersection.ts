type Format320 = { format320p: string }
type Format480 = { format480p: string }
type Format720 = { format720p: string }
type Format1080 = { format1080p: string }

type Video =  Format320 | Format480 | Format720 | Format1080
  
type FormatKeys = keyof UnionToIntersection<Video>

type UnionToIntersection<T> = 
    (T extends any ? (x: T) => any : never) extends 
    (x: infer R) => any ? R : never

type Naked<T> = T extends any ? (x: T) => any : never;

type Demo = Naked<string | number | boolean>

type NonNaked<T> = { o: T } extends { o: any } ? (x: T) => any : never;

type DemoNonNaked = NonNaked<string | number | boolean>


// Co variance vs Contra variance
declare let b: string
declare let c: string | number
c = b;

type Fn<X> = (...args: X[]) => void
declare let f: Fn<string>
declare let g: Fn<string | number>
//@ts-expect-error
g = f;

export {}