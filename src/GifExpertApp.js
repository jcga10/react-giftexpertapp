import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories=['One Punch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    //const hanldeAdd= ()=>{
        //setCategories([...categories,'HunterXHunter'] );
        //setCategories(cats=>[...cats,'HunterXHunter']);
    //};

    return (
        <>
            <h2>GiftExpertAPP</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/> 
               
            <ol>
                { categories.map( category=>(
                    <GifGrid 
                    key={category}
                    category={category} 
                    />
                 ) )
                }
            </ol>


        </>
    )
}
