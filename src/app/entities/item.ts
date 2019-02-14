import { User } from "./user";

// This item matches the DTO from the backend
export class Item {
    itemId: number;
    name: string;
    inStock: number;  
    description: string;
    isActive: boolean;
    category: string;
    priceForOneItem: number;
    weightMeasurement: string;
    priceBasedOnWeight: number;
    dateTimeCreated: Date;
    dateTimeEdited: Date;
    expirationDate: Date;

    // user: User;
    userId: number;
}