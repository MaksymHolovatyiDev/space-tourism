import {useState} from 'react';
import {PlanetData} from 'shared/Types';

export const useCurrentPlanet = (data: PlanetData[]) => {
  const [planet, setPlanet] = useState<PlanetData>(data[0]);
  return {planet, setPlanet};
};
