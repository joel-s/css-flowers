import styled from "styled-components";
import Flower from "./Flower";
import { range } from "../utils/util";

const GarlandDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 20vmin;
`;

interface GarlandProps {
  petalShape: string;
}

export default function Garland({ petalShape }: GarlandProps) {
  return (
    <GarlandDiv>
      {range(3, 9).map((numPetals) => (
        <Flower size={7} numPetals={numPetals} petalShape={petalShape} />
      ))}
    </GarlandDiv>
  );
}
