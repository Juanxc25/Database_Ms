export class UserDto {
    name: string;
    email: string;
    password: string;
}

export class UptadeUserDto {
    id: number;
    name?: string;
    email?: string;
    password?: string;
}