export class Item {
    id: number;
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
}