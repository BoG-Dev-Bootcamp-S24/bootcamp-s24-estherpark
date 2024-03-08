export default async function handler(req, res) {
    const { name } = req.query;
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    if (req.method === "GET") {
        try {
            const response = await fetch(URL);

            if (response.ok) {
                const pokeData = await response.json();
                const types = pokeData.types.map((type) => type.type.name);
                const pokemonInfo = {
                    PokemonName: pokeData.forms[0].name,
                    Sprite: pokeData.sprites.front_default,
                    Types: types,
                };

                res.status(200).json(pokemonInfo);
            } else {
                res.status(400).json({ error: "Invalid data" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
