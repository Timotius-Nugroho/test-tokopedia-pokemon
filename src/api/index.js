const GET_ALL_POKEMONS = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    results {
      id
      name
      dreamworld
      artwork
    }
  }
}`;

const GET_POKEMON = `query pokemon($name: String!) {
  pokemon(name: $name) {
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}`;

export const getAllPokemon = async (limit, offset) => {
  try {
    const dataFromServer = await fetch(
      "https://graphql-pokeapi.graphcdn.app/",
      {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: GET_ALL_POKEMONS,
          variables: {
            limit,
            offset,
          },
        }),
        method: "POST",
      }
    );

    const result = await dataFromServer.json();
    return result.data.pokemons;
  } catch (error) {
    console.log(error);
    return "err";
  }
};

export const getPokemon = async (name) => {
  const dataFromServer = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_POKEMON,
      variables: {
        name,
      },
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => res.data.pokemon)
    .catch((err) => {
      return "err";
    });

  return dataFromServer;
};
