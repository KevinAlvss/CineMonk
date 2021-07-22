import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ChooseDay from './pages/chooseDay';
import ChooseMovie from './pages/chooseMovie';
import ChooseHour from './pages/chooseHour';

function Routes() {
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/escolher-filme" component={ChooseDay} />
            <Route path="/filme/:data" component={ChooseMovie} />
            <Route path="/horario" component={ChooseHour} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;