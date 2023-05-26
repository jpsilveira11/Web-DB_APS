import styled from "styled-components";
import "./index.css";

interface IObjectKeys {
  [key: number]: string;
}

interface Props {
  randomnumber: number;
}

const colorDictionary = (randomnumber: number) => {
  if (randomnumber % 2 === 0) return "#1A9359";
  if (randomnumber % 3 === 0) return "#008572";
  return "#1A899A";
};

const CategoryCard = styled.div<Props>`
  height: 6rem;
  border-radius: 8px;
  background: ${(props) => colorDictionary(props.randomnumber)};
  padding: 12px;

  color: #fff;
  font-size: 18px;
  font-weight: 600;

  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export default CategoryCard;
