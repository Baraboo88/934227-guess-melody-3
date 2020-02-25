import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import withActivePlayer from '../../hocs/with-audio-player/with-audio-player';

const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/game/genre/:id" component={GenreQuestionScreenWrapped} />
        <Route exact path="/game/artist/:id" component={ArtistQuestionScreenWrapped} />
        <Route exact path="/" component={WelcomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};
export {App};
export default App;
