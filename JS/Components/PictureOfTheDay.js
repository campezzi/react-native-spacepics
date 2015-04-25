var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

class PictureOfTheDay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.picture.title}</Text>
        </View>
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
  titleContainer: {
    padding: 15,
    paddingTop: 35,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});