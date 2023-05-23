import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselItems = [
  {
    image: "../../assets/images/final-fantasy.jpg",
    name: "Final Fantasy VI",
    description:
      "Final Fantasy VI é um jogo eletrônico de RPG desenvolvido e publicado pela SquareSoft para o Super Nintendo Entertainment System. Lançado em 1994, é o sexto título principal da série Final Fantasy",
  },
  {
    image: "../../assets/images/super-mario-world.jpg",
    name: "Super Mario World",
    description:
      "Super Mario World é um jogo eletrônico de plataforma desenvolvido pela Nintendo Entertainment Analysis & Development e publicado pela Nintendo, em 1990, para o console Super Nintendo Entertainment System",
  },
  {
    image: "../../assets/images/fire-red-leaf-green.webp",
    name: "Pokemon FireRed e LeafGreen",
    description:
      "Pokémon FireRed Version e Pokémon LeafGreen Version são dois jogos eletrônicos de RPG de 2004 recriado pelo Pokémon Red e Blue de Game Boy em 1996. Eles foram desenvolvidos pela Game Freak e publicados pela The Pokémon Company e pela Nintendo para o Game Boy Advance",
  },
];

function IndividualIntervalsExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default IndividualIntervalsExample;
