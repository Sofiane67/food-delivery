export class ProductModel{
    id:string;
    category:string;
    name:string;
    price:number;
    description:string;
    image:string;

    constructor(
        id: string,
        category: string,
        name: string,
        price: number,
        description: string,
        image: string,
    ){
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}