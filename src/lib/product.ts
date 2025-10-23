export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice?: number;
    discount: number;
    image: string;
    category: string;
    rating: number;
    inStock: boolean;
    url: string;
}