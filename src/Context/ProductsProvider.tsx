import { ReactElement, createContext, useState } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
	Category: string;
	rating: number;
};

const initState: ProductType[] = [
	{
		sku: "product1",
		name: "Sofa",
		price: 9.99,
		Category: "Sofa",
		rating: 4.5,
	},
	{
		sku: "product2",
		name: "Premium Sofa",
		price: 19.99,
		Category: "Sofa",
		rating: 4,
	},
	{
		sku: "product3",
		name: "Deluxe Mattress",
		price: 29.99,
		Category: "Bedroom",
		rating: 4.9,
	},
	{
		sku: "product4",
		name: "Deluxe Bed",
		price: 9.99,
		Category: "Bedroom",
		rating: 3.5,
	},
	{
		sku: "product5",
		name: "Table Chair",
		price: 19.99,
		Category: "Office",
		rating: 3.9,
	},
	{
		sku: "product6",
		name: "Single Chair",
		price: 29.99,
		Category: "Office",
		rating: 2.3,
	},
	{
		sku: "product7",
		name: "Single Chair",
		price: 29.99,
		Category: "Office",
		rating: 3.4,
	},
	{
		sku: "product8",
		name: "Single Chair",
		price: 29.99,
		Category: "Office",
		rating: 1.6,
	},
	{
		sku: "product9",
		name: "Single Chair",
		price: 29.99,
		Category: "Office",
		rating: 4.9,
	},
];

export type useProductContextType = { products: ProductType[] };

const initContextState: useProductContextType = { products: [] };

const ProductsContext = createContext<useProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initState);
	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
