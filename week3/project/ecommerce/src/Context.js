import {createContext,useState,useContext, useEffect} from 'react';
const productUrl = 'https://fakestoreapi.com/products';

const AppContext = createContext();
const AppProvider = ({children}) => {
    
    const [favorites, setFavorites] = useState( []);
  
    const useFetch =( (url,setLoading,setProduct) => {
        
        useEffect(() => {
            
                setLoading(true)
                    fetch(url)
                    .then(data => data.json())
                        .then(data => {
                            setProduct(data)
                            setLoading(false);
                        })
                        .catch(err => {
                            
                            setLoading(false);
                            console.log(err)
                        })}, [])})

   
   return (
        <AppContext.Provider value={{favorites,setFavorites,useFetch}}>
          {children}
        </AppContext.Provider>
       
    )}

export const  useFavourites = () => {
   return  useContext(AppContext)
}
export {AppContext,AppProvider};
