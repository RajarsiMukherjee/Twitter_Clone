// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Article } from "../Article/Article";
import { Suggested } from "../Suggested/Suggested";
import { Search } from "../TwitterSearch/TwitterSearch";
import "./Widgets.css";
// import React, { useState, useCallback } from "react";
 
// import debounce from "lodash/debounce";
// import { db } from "../../Configs/firebase";
import { menuItemUnstyledClasses } from "@mui/base";

export const Widgets = () => {
    // const [value, setValue] = useState("");
    // const [prof, setProf] = useState("");

    
    // const handleChange = (e) => {
    //     const { value } = e.target;
    //     setValue(value);
    //     if(value)
    //     {
    //         handleSearch(value);
    //     }
    // };
      //console.log(prof)

        //   data.forEach(doc => {
        //     array.push(doc.data().displayName)
        // });  
        // setProf(array)    //console.log(data,"DATA AT 21")
        // var ans="an";
        
    

    //   const handleSearch =  useCallback(
    //     debounce(async(value) => {
    //         let array = [];
    //         const data = await db.collection("users").get()
    //         data.forEach(doc => {
    //             array.push(doc.data().displayName)
    //         }); 
    //         var arr = []; 
    //         for(var i=0; i<array.length;i++){
    //             if(array[i].includes(value)){
    //                 data.forEach(doc => {
    //                     if(array[i] === doc.data().displayName)
    //                     {
    //                         arr.push(doc.data());
    //                     }
    //                 });
    //             }
    //         }
    //         setProf(arr);
           
    //     }, 1000),
    //     []
    //   );
    //   console.log(prof);
    return(
        <div className="widgets">

            {/* Search Component */}
            <Search/>
             

            <div className="widget_cont1">
                <h2>What's Happening</h2>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <div className="widget_explore_link">
                    Show More
                </div>
            </div>

            <div className="widget_cont2">
                <h2>Who to follow</h2>
                <Suggested/>
                <div className="widget_people_link">
                    Show More
                </div>
            </div>

        </div>
    )
}