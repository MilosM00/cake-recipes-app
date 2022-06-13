import React from "react";

const Recipes = (props) =>{

    const [inputValue, setInputValue] = React.useState("");

    const inputEvent = (e) =>{
        setInputValue(e.target.value);
    };

    return(
    
        <div className="recipes">

            <p className="title">CAKE RECIPES</p>
            <input className="input-search" onChange={inputEvent} value={inputValue} type="text" placeholder="Find Recipe..." />

            {
                props.recipes.filter((value) =>{

                    if(inputValue === ``){
                        return value;
                    }

                    else if(value.title.toLowerCase().includes(inputValue.toLowerCase())){
                        return value;
                    }

                }).map((item, index) =>{
                    return(

                        <div key={index} className="overlay-recipe">

                            <p className="title-recipe">{item.title}</p>
                            <p className="time-recipe">Preparation Time: {item.time}</p>
                            <p className="bake-recipe"> Bake Time: {item.bake}</p>
                            <p className="ingredients-recipe">Primary Ingredients: {item.ingredients}</p>
                            <p className="about-recipe">{item.about}</p>
                            <img className="cake-image" src={item.url} alt="" />

                        </div>
                    );
                })
            }



        </div>
        
    );
};

export default Recipes;