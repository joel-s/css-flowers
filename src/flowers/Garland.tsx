import styled from "styled-components";
import Flower from "./Flower";
import { range } from "../utils/util";

const GarlandDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  height: 20vmin;
`;

interface GarlandProps {
  petalShape: string;
}

const numPetalsArray = [...range(5, 9), ...range(9, 5, -1)];

export default function Garland({ petalShape }: GarlandProps) {
  return (
    <GarlandDiv>
      {numPetalsArray.map((numPetals, index) => (
        <Flower
          size={8}
          numPetals={numPetals}
          petalShape={petalShape}
          key={index}
        />
      ))}
    </GarlandDiv>
  );
}
