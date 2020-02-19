import React, {PureComponent} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player';

const withActivePlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this._renderPlayer = this._renderPlayer.bind(this);
      this.state = {
        activePlayerId: 0
      };

    }


    _renderPlayer(src, id) {
      return (
        <AudioPlayer
          src={src}
          isPlaying={id === this.state.activePlayerId}
          onPlayButtonClick={() => {
            this.setState({activePlayerId: this.state.activePlayerId === id ? -1 : id});
          }}
        />
      );
    }

    render() {
      return <Component {...this.props} renderPlayer={(src, id) => this._renderPlayer(src, id)} />;
    }
  }

  return WithAudioPlayer;
};

export default withActivePlayer;
