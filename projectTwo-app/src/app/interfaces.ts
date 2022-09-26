export interface Product{
    id: Number,
    name: String,
    price: Number,
    releaseYear: Number,
    ratings: Number
}

export interface Users {
    id?: Number,
    name: String,
    username: String,
    password: String,
    products: Product[]
}