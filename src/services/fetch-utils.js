export async function getPokemons(searchFilter) {
  const rawResponse = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${searchFilter}`);
  const data = await rawResponse.json(); 

  return data;
}