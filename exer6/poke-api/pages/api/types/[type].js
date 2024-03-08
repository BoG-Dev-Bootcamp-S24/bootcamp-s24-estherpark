export default async function handler(req, res) {
    const { type } = req.query;
    const URL = `https://pokeapi.co/api/v2/type/${type}`;

    if (req.method === "GET") {
        try {
            const response = await fetch(URL);

            if (response.ok) {
                const typeData = await response.json();
                const pokemonList = typeData.pokemon.map((entry) => entry.pokemon.name);

                res.status(200).json(pokemonList);
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
