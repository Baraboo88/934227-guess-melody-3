import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying
    };
    this._buttonClickHandler = this._buttonClickHandler.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    audio.ontimeupdate = () => {
      this.setState({
        progress: audio.currentTime
      });
    };
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }
  _buttonClickHandler() {
    this.setState({isPlaying: !this.state.isPlaying});
    this.props.onPlayButtonClick();
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${this.state.isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={this.state.isLoading}
          onClick={this._buttonClickHandler}
          data-test = 'test-play-button'
        />
        <div className="track__status">
          <audio ref={this._audioRef}/>
        </div>
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default AudioPlayer;
