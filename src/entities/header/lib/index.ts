import {useLocation} from 'react-router';
import {BaseRoutes} from 'shared/Routes';

export const routes = [
  {name: 'Home', path: BaseRoutes.Home},
  {name: 'Destination', path: BaseRoutes.Destination},
  {name: 'Crew', path: BaseRoutes.Crew},
  {name: 'Technology', path: BaseRoutes.Technology},
];

export function useTitle() {
  const pathname = useLocation().pathname;

  switch (pathname) {
    case BaseRoutes.Destination:
      return {num: '01', title: 'Pick your destination'};
    case BaseRoutes.Crew:
      return {num: '02', title: 'Meet your crew'};
    case BaseRoutes.Technology:
      return {num: '03', title: 'SPACE LAUNCH 101'};
    default:
      return null;
  }
}
