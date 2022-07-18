const enum Direction {
    Up, Down, Left, Right
}

function move(dir: Direction) {
    switch(dir) {
        case Direction.Up:
            break;
        case Direction.Down:
            break;
        case Direction.Left:
            break;
        case Direction.Right:
            break;
        default: 
            dir
    }
}

move(Direction.Up)
move(Direction.Down)

move(Direction.Down | Direction.Left)
move(10_000_000)
move(10.3)

const x = Direction.Up ^ Direction.Down;
const y = Direction.Left | Direction.Right;

const enum UserRoles {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}

const enum Roles {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}

function closeThread(threadId: number, user: UserRoles) {
    switch(user) {
        case UserRoles.Admin: break;
        case UserRoles.User: break;
        case UserRoles.Moderator: break;
        default:
            user
    }
}

closeThread(1000, UserRoles.Admin)
//closeThread(1000, "Admin")
//closeThread(1000, Roles.Admin)

export {}