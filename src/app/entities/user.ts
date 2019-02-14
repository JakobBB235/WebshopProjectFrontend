import { Item } from "./item";

// This user matches the DTO from the backend
export class User {
    userId: number;
    username: string;
    password: string;
    email: string;
    role: string;
    enabled: boolean;
    
    items: Item[];

}