var React = require('react-native');
var NasaApi = require('./Util/NasaApi.js');
var Loading = require('./Components/Loading.js');
var PictureOfTheDay = require('./Components/PictureOfTheDay.js');
var ErrorWidget = require('./Components/ErrorWidget.js');
var DateBrowser = require('./Components/DateBrowser.js');
var Title = require('./Components/Title.js');

var {
  StyleSheet,
  View,
} = React;

class SpacePics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      picture: null,
      error: null,
      date: new Date(Date.now()),
    };
  }

  componentDidMount() {
    this._fetchPicture();
  }

  render() {

    var innerNode;
    var title;

    // if we have an error
    if (this.state.error !== null) {
      innerNode = <ErrorWidget title="NASA API Error" message={this.state.error} />;
      title = 'Error';
    }

    // if we don't have a picture
    else if (this.state.picture === null) {
      innerNode = <Loading title="Getting Image..." />;
      title = 'Loading...';
    }

    // if we have a picture
    else {
      innerNode = <PictureOfTheDay picture={this.state.picture} />;
      title = this.state.picture.title;
    }

    return (
      <View style={styles.container}>
        <Title title={title} />
        {innerNode}
        <DateBrowser date={this.state.date} onChange={this._onDateChange.bind(this)} />
      </View>
    );

  }

  _onDateChange(newDate) {
    this.setState({
      date: newDate
    });
    this._fetchPicture();
  }

  _fetchPicture() {
    this.setState({
      error: null,
      picture: null,
    });
    NasaApi.apod(this.state.date).then((pictureData) => {
      this.setState({
        picture: pictureData,
        hasError: false,
      });
    }).catch((err) => {
      this.setState({
        picture: null,
        error: err,
      });
    });
  }

}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = SpacePics;