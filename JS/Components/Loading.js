var React = require('react-native');
var {
  StyleSheet,
  ActivityIndicatorIOS,
  Text,
  View,
} = React;

class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS animating={true} />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
module.exports = Loading;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
  }
});