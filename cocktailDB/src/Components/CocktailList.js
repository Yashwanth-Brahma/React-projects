import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <main className="cocktailList">
      <h2>Cocktails</h2>
      {console.log(cocktails)}
      <div>
        <ul>
          {cocktails.map((item) => {
            const { id, image, drink, info, glass } = item;
            return (
              <li key={id}>
                <img src={image} alt="coc" />
                <div>
                  <h3>{drink}</h3>
                  <p className="glass">{glass}</p>
                  <p className="alco">{info}</p>
                  <Link to={`/cocktail/${id}`}>
                    <button>Details</button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default CocktailList;
