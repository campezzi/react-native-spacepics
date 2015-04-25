var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;

class Title extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
module.exports = Title;

styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 35,
    backgroundColor: '#dedede',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});