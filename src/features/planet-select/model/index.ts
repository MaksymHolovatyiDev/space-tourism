import {useState} from 'react';
import {PlanetData} from 'shared';

export const useCurrentPlanet = (data: PlanetData[]) => {
  const [planet, setPlanet] = useState<PlanetData>(data[0]);
  return {planet, setPlanet};
};
