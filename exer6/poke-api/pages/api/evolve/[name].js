export default async function handler(req, res) {
    const { name } = req.query;
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    if (req.method === "GET") {
        try {
            const response = await fetch(URL);

            if (response.ok) {
                const speciesData = await response.json();
                const evolvesTo = speciesData.evolves_to;

                if (evolvesTo.length > 0) {
                    const nextEvolution = evolvesTo[0].species.name;
                    res.status(200).json({ NextEvolution: nextEvolution });
                } else {
                    res.status(200).json({ CurrentEvolution: name });
                }
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
