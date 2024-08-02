// html değişkenler
const pokeContainer = document.querySelector(".poke-container");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");

const pokemonCount = 151;
// renk değişkenler
const bgColor = {
  grass: "#8BD369",
  fire: "#FF603F",
  water: "#3399FF",
  bug: "#AABB22",
  normal: "#AAAA99",
  flying: "#9AA8FA",
  poison: "#B76EA4",
  electric: "#FFD34E",
  ground: "#E2C56A",
  fairy: "#F1A8EC",
  psychic: "#FF6EA4",
  fighting: "#C56E5C",
  rock: "#C5B679",
  dragon: "#7766EE",
  ice: "#66CCFF",
};

// olay izleyicileri
searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
});

searchInput.addEventListener("input", (e) => {
  console.log(searchInput.value);
  const searchValue = searchInput.value.toLowerCase();
  const pokeNames = document.querySelectorAll(".poke-name");
  pokeNames.forEach((pokeName) => {
    if (pokeName.innerHTML.toLowerCase().includes(searchValue)) {
      pokeName.parentElement.parentElement.style.display = "block";
    } else {
      pokeName.parentElement.parentElement.style.display = "none";
    }
  });
});

// api isteği
const fetchPokemons = async () => {
  for (let i = 1; i < pokemonCount; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

// kart oluşturma
const createPokemonCard = (pokemon) => {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.className = "pokemon";
  pokemonDiv.classList.add("pokecard");
  console.log(pokemon);

  const pokeId = pokemon.id.toString().padStart(3, "0");
  const pokeType = pokemon.types[0].type.name;

  const pokeBg = bgColor[pokeType];
  pokemonDiv.style.backgroundColor = `${pokeBg}`;

  pokemonDiv.innerHTML = `<div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="pokemon">
            </div>
            
            <div class="poke-info">
                <span class="poke-id">#${pokeId}</span>
                <h3 class="poke-name">${pokemon.name}</h3>
                <div class="small">
                    <small class="poke-exp">
                        <i class="fa-solid fa-flask"></i> ${pokemon.base_experience} exp
                    </small>
                    <small class="poke-exp">
                        <i class="fa-solid fa-scale-balanced"></i> ${pokemon.weight} kg
                    </small>
                </div>
                <div class="poke-type">
                    <i class="fa-brands fa-uncharted"></i> ${pokeType}
                </div>
            </div>`;
  pokeContainer.appendChild(pokemonDiv);
};
fetchPokemons();
