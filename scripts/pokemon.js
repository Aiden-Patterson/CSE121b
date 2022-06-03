const output = (pokemon) => {
      let pokemonName = document.createElement("h3");
      pokemonName.textContent = "Name: " + pokemon.name;
  
      let pokedex = document.createElement("h4");
      pokedex.textContent = "Pokedex: " + pokemon.id;
  
      let type1 = document.createElement("h4");
      type1.textContent = "Type 1: " + pokemon.types[0].type.name;
      let type2 = document.createElement("h4");
      if(pokemon.types.length == 2)
      {
        type2.textContent = "Type 2: " + pokemon.types[1].type.name;
      }
      else
      {
        type2.textContent = "Type 2: N/A";
      }
  
      let sprite = document.createElement("img")
      sprite.setAttribute("src", pokemon.sprites.front_default);
      sprite.setAttribute("alt", pokemon.templeName);
  
      article = document.createElement("article");
      article.appendChild(pokemonName);
      article.appendChild(pokedex);
      article.appendChild(type1);
      article.appendChild(type2);
      article.appendChild(sprite);
  
      document.querySelector("#pokemon").appendChild(article);
  };

  const reset = () => {
    document.querySelector('#pokemon').innerHTML = '';
  }
async function getPokemon(){
  reset();
  for(let i = 1; i <= 6; i++)
  {
    let rand_id = Math.floor(Math.random() * 898)
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/' + rand_id);
    const data = await result.json();
    output(data);
  }
}

document.querySelector("#randomPokemon").addEventListener("click", getPokemon);