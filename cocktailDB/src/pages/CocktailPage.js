import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const CocktailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (data.drinks) {
        const {
          idDrink: id,
          strDrink: drink,
          strCategory: category,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instructions,
          strDrinkThumb: thumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          id,
          drink,
          thumb,
          info,
          category,
          glass,
          instructions,
          ingredient,
        };
        console.log("inside");
        setDetails(newCocktail);
        setLoading(false);
      } else {
        setDetails(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (details === null) {
    return <h2>no details present</h2>;
  }
  const {
    drink,
    thumb,
    info,
    category,
    glass,
    instructions,
    ingredient,
  } = details;

  return (
    <div className="cocktail">
      <h1>{drink}</h1>
      <section className="imgSection">
        <img src={thumb} alt="cocktail" />
      </section>
      <section className="infoSection">
        <p>
          <span className="var">Name</span>:{drink}
        </p>
        <p>
          <span className="var"> Category</span>:{category}
        </p>
        <p>
          <span className="var">Info</span>:{info}
        </p>
        <p>
          <span className="var">Glass</span>:{glass}
        </p>
        <p>
          <span className="var">Instructons</span>:{instructions}
        </p>
        <p>
          <span className="var">Ingredient</span>:
          {ingredient.map((item, i) => {
            return item ? <span key={i}>{item}</span> : null;
          })}
        </p>
      </section>
    </div>
  );
};

export default CocktailPage;
