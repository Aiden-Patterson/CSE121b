const output = (pokemon) => {
  let gameName = document.createElement("h2");
  gameName.textContent = "Game: " + pokemon.name;
  document.querySelector("#gameName").textContent = "Game: " + pokemon.name;
  for(let i = 1; i <= 6; i++)
  {
      let rand = Math.floor(Math.random() * pokemon.pokemon_entries.length);
      let pokemonName = document.createElement("h3");
      pokemonName.textContent = "Name: " + pokemon.pokemon_entries[rand].pokemon_species.name;
  
      let pokedex = document.createElement("h4");
      //pokedex.textContent = "Pokedex: " + pokemon.id;
  
      let type1 = document.createElement("h4");
     // type1.textContent = "Type 1: " + pokemon.types[0].type.name;
      let type2 = document.createElement("h4");
      //if(pokemon.types.length == 2)
      {
        //type2.textContent = "Type 2: " + pokemon.types[1].type.name;
      }
      //else
      //let species_url = pokemon.pokemon_entries[rand].pokemon-species.url;
      //const x = await fetch(species_url)
      //let sprite = getSprite(species_url)
      //sprite.setAttribute("src", sprites.front_default);
      //sprite.setAttribute("alt", pokemon.templeName);
  
      article = document.createElement("article");
      article.appendChild(pokemonName);
      //article.appendChild(pokedex);
      //article.appendChild(type1);
      //article.appendChild(type2);
      //article.appendChild(sprite);
  
      document.querySelector("#pokemon").appendChild(article);
    }
  };

  const reset = () => {
    document.querySelector('#pokemon').innerHTML = '';
  }
  generation = document.querySelector('#games')


async function getPokemon(){
  reset();
    const result = await fetch('https://pokeapi.co/api/v2/pokedex/' + generation.value)
    const data = await result.json();
    output(data);
}

async function getSprite(url){
  const species = await fetch(url)
  const x = await species.json();
  let pokemon_url = x.varieties[0].pokemon.url;

  const i = await fetch(pokemon_url)
  const sprite_url = await i.json();

  return i;
}

document.querySelector("#randomPokemon").addEventListener("click", getPokemon);