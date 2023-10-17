import './index.scss';

import {withProviders} from './providers';

import {Routing} from 'pages';

function App() {
  return <Routing />;
}

const MainApp = withProviders(App);
export default MainApp;
