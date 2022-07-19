type VideoFormatURLs = {
    format480p: URL,
    format720p: URL,
    format1080p: URL,
    format4k: URL,
}

type SubtitleURLs = {
    en: URL,
    de: URL,
    fr: URL,
    pt: URL
}

type URLList = {
    [x: string]: URL // Indexed Type
}

function isVideoFormatAvailable(
    obj: VideoFormatURLs, key: string
): key is keyof VideoFormatURLs {
    return key in obj;
}

function isSubtitleAvailable(
    obj: SubtitleURLs, key: string
): key is keyof SubtitleURLs {
    return key in obj;
}

const list: Array<number> = [1, 2, 3]
async function doSomething() {
    return 2
}

const result = doSomething()

function isAvailable<T extends URLList>( // Generic Boundaries
    obj: T,
    key: PropertyKey
): key is keyof T {
    return key in obj;
}

declare const videos: VideoFormatURLs;
declare const format: string;

if(isAvailable(videos, format)) {
    switch(format) {
        case "format1080p": break;
        default:
            format
    }
}

declare const substitles: SubtitleURLs;
declare const language: string

if(isAvailable(substitles, language)) {
    switch(language) {
        case "en": break;
    }
}

function identity<T>(t: T): T {
    return t;
}

const name = identity("Stefan");

function loadFile<
    T extends URLList,
    K extends keyof T 
>(formatList: T, format: K): K {
    // The real work lies ahead
    return format
}

const loadedVideo = loadFile(videos, "format4k")
const loadedSubtitle = loadFile(substitles, "pt")


function saveVideos(videoList: Split<VideoFormatURLs>) {
    // The real work lies ahead
}

type Split<T extends object> = {
    [K in keyof T]: { // Mapped Types
        [P in K]: T[P] // Mapped Types
    }
}[keyof T] // Index Access Type

/*type AvailableFormats = {
    [K in keyof VideoFormatURLs]: { // Mapped Types
        [P in K]: VideoFormatURLs[P] // Mapped Types
    }
}[keyof VideoFormatURLs] // Index Access Type*/


type Person = {
    name: string,
    age: number
}

type AvailableVideoFormats = Split<VideoFormatURLs>;
type AvailableSubtitleURLs = Split<SubtitleURLs>

type AvailablePersonKeys = Split<Person>

saveVideos({
    format480p: new URL("...")
})

export {}