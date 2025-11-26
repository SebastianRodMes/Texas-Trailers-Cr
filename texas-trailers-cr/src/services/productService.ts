import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../config/firebase';

export interface ProductSpecs {
    axles: string,
    capacity: string,
    dimensions: string

}

export interface Product {
    id: string,
    name:string, 
    categoryId: string,
    description: string,
    price: number,
    active: boolean,
    views: number,
    images: string[],
    specs: ProductSpecs


}

export const getAllProducts = async (): Promise<Product[]> => {
 try{
    //reference to the categories collection
    const productsCollection = collection(db, 'products');
    //query to order by 'order' field ascending
    const q = query(productsCollection, where('active','==', true));

    //obtain the documents
    const querySnapshot = await getDocs(q)

    //map the documents to Product type
   const products: Product[] = querySnapshot.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
        } as Product));

        return products;

 }catch (error){
    console.error(error);
    throw error;
 };
};
