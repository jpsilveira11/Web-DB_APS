import "./index.css";
import { useState, useEffect } from "react";
import { NavbarWelcome } from "../../components/navbar/navbar.tsx";
import axios from "axios";

import Categories from "../../components/categories/index.tsx";
import PriceCard from "../../components/price-card/index.tsx";
import InformationCard from "../../components/information-card/index.tsx";
import TopGamesCard from "../../components/top-games-card/index.tsx";
import ControlCarousel from "../../components/carousel/carousel.tsx";
import Container from "react-bootstrap/Container";

import { plans, carouselData } from "../../models/index.ts";

export default function Welcome() {
  const [jogos, setJogos] = useState([]);
  const [topGames, setTopGames] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios
      .get("/api/tabela/categorias")
      .then((response) => {
        setCategories(response.data.resultados);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getGames = () => {
    axios
      .get("/api/categorias/")
      .then((response) => {
        setJogos(response.data.resultados);
        setTopGames([...jogos.slice(0, 6)]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getGamesByCatetory = () => {
    axios
      .get("/api/tabela/categorias/RPG")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCategories();
    getGames();
    getGamesByCatetory();
  }, []);

  return (
    <>
      <ControlCarousel carouselData={carouselData} />

      <Container>
        <section className="mt-10">
          <h1>Jogos destaques</h1>

          <TopGamesCard topGames={jogos}></TopGamesCard>
        </section>

        <section>
          <InformationCard />
        </section>

        <section>
          <h1>Categorias</h1>

          <Categories categories={categories} />
        </section>

        <section>
          <h1>Nossos Planos</h1>

          <div className="plans-wrapper">
            {plans.map((plan, index) => (
              <PriceCard planInfos={plan} key={index} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
