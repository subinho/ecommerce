export interface ProductInfo {
    _id: string;
    name: string;
    image: {}[];
    slug: {};
    price: number;
    desc: string;
    sale: boolean;
    discount: number;
    quantity?: number;

}