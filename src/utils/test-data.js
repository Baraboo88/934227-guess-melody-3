export const welcomeScreenMockData = {
  numberOfErrors: 4,
  onStartButtonClick: () => {}
};

export const questions = [
  {
    id: 1,
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  },
  {
    id: 2,
    type: `artist`,
    song: {
      artist: `Jim Snow`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/0.6750575244607682`,
      artist: `John Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/0.4076094808626085`,
      artist: `Jack Beam`,
    }, {
      picture: `https://api.adorable.io/avatars/128/0.6972088175637985`,
      artist: `Jim Snow`,
    }],
  }
];

export const userAnswer = [false, false, false, false];
