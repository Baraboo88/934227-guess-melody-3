import React, {PureComponent} from 'react';

const withActivePlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlayerId: 0
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          activePlayerId={this.state.activePlayerId}
          onPlayButtonClick={(id) => {
            this.setState({activePlayerId: this.state.activePlayerId === id ? -1 : id});
          }}
        />
      );
    }
  }

  return WithAudioPlayer;
};

export default withActivePlayer;
