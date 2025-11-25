import {useState, useEffect} from 'react';
import { getAllCategories } from '../services/categoryService';
import type { Category } from '../services/categoryService'; //It's been imported this way since it is a type only import

export const useCategories = () =>{
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState<String | null>(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try{
                setLoading(true);
                const data = await getAllCategories();
                setCategories(data);
            }catch(err){
                setError('Error loading categories');
                console.error(err);
            }finally{
                setLoading(false);
            }
        };
        fetchCategories();
    }, []) // [] it means "only run this when the component loads"
    return {categories, loading, error};
};