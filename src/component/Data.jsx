import React from 'react'
import { useState, useContext, useEffect} from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title="
const AppContext = React.createContext();



    const Data = ({children}) =>{
        const [searchTerm, setSearchTerm] = useState("The lost world...")
        const [books, setBooks] = useState([]);
        const [loading, setLoading] = useState(true);
        const  [resultTitle, setResultTitle] = useState();
    
        const FetchBooks = useCallback(async() => {
            setLoading(true)
            try{
                const response = await fetch(`${URL}$
                {searchTerm}`);
                const data =  await response.json()
                console.log(data)
                const {docs} = data
            }catch (error){
                console.log(error)
                setLoading(false)
            }
            
        },[searchTerm]);
    
        useEffect(() => {
            FetchBooks();
        },[searchTerm, FetchBooks]);
    
        return (
            <AppContext.Provider value={{
                loading, 
                books, 
                setSearchTerm, 
                resultTitle, 
                setResultTitle
            }}>
                {children}
             </AppContext.Provider>
        );
        
    }
    

    

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, Data}

