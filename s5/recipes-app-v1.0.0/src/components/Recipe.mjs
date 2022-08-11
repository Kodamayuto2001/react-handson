import React from "react";
import IngredientsList from "./IngredientsList.mjs";
import Instrunctions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingreditnes} />
            <Instrunctions title="Gooking Instructions" steps={steps} />
        </section>
    )
}

export default Recipe;