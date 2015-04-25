var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
} = React;

class PictureOfTheDay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.props.picture.url }} />
      </View>
    );
  }
}
module.exports = PictureOfTheDay;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: Image.resizeMode.contain,
  },
});