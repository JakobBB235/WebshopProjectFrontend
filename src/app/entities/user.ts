import { Item } from "./item";

export class User {
    userId: number;
    username: string;
    password: string;
    email: string;
    role: string;
    enabled: boolean;
    
    items: Item[];
}