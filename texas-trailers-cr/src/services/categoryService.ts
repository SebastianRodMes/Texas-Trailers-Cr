import {collection, getDocs, query,  orderBy} from 'firebase/firestore'
import { db } from '../config/firebase';

//defining the type Category
export interface Category {
    id:string;
    name:string;
    order:number;
    active:boolean;
    imageUrl:string
}


//function to get all categories from firestore
export const getAllCategories = async ():Promise<Category[]> => {
    try {
        //reference to the categories collection
        const categoriesCollection = collection(db, 'categories');
        //query to order by 'order' field ascending
        const q = query(categoriesCollection, orderBy('order', 'asc'));
        //obtain the documents
        const querySnapshot = await getDocs(q);
        //map the documents to Category type
        const categories: Category[] = querySnapshot.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
        } as Category));

        return categories;



    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
     }
}