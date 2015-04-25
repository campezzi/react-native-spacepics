var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

class ErrorWidget extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.message}>{this.props.message}</Text>
      </View>
    );
  }
}
module.exports = ErrorWidget;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 10,
  },
});