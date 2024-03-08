// pages/api/battle.js
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { pokemon1, pokemon2 } = req.body;

            const data1 = await fetchPokemonData(pokemon1);
            const data2 = await fetchPokemonData(pokemon2);

            const winner = compareBaseStats(data1, data2);

            res.status(200).json({ Winner: winner });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}

async function fetchPokemonData(pokemonName) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(URL);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Invalid data");
    }
}

function compareBaseStats(pokemon1, pokemon2) {
    const baseStat1 = pokemon1.base_experience;
    const baseStat2 = pokemon2.base_experience;

    return baseStat1 > baseStat2 ? pokemon1.name : pokemon2.name;
}
