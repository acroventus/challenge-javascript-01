const express = require("express");
const axios = require("axios").default;

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvendio al Challenge Javascript 01 >=)");
});

app.get("/films", async (req, res) => {
  // Esta llamada funciona sin problemas

  const films = await axios.get("https://swapi.dev/api/films");
  res.send(films.data);
});

app.get("/startships-costs-film-1", async (req, res) => {
  // Este endpoint devuelve siempre 0, debería devolver el total de costos de naves espaciales.

  const film1 = await axios.get("https://swapi.dev/api/films/1/");

  let starshipTotalCost = 0;

  film1.data.starships.forEach(async (starshipUrl) => {
    const starship = await axios.get(starshipUrl);
    starshipTotalCost += starship.cost_in_credits;
  });

  res.send({ starshipTotalCost });
});

app.get("/startships-costs-film-1", async (req, res) => {
  // Este endpoint devuelve siempre 0, debería devolver el total de costos de naves espaciales.

  const film1 = await axios.get("https://swapi.dev/api/films/1/");

  let starshipTotalCost = 0;

  film1.data.starships.forEach(async (starshipUrl) => {
    const starship = await axios.get(starshipUrl);
    starshipTotalCost += starship.cost_in_credits;
  });

  res.send({ starshipTotalCost });
});

app.get("/planets", async (req, res) => {
  // Sin usuar loops (for, foreach, while, dowhile, forin, forof) completar la respuesta definida.

  const planets = await axios.get("https://swapi.dev/api/planets/");

  res.send({
    namesArray: [],
    rotationPeriodProm: null,
    orbitalPeriodProm: null,
    populationTotal: null,
  });
});


app.get("/vehicles", async (req, res) => {
  // Devolver los nombres, modelos y numero de pasajeros por vehiculos agrupados por film en el que aparece.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
