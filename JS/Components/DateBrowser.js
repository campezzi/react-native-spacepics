var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} = React;

class DateBrowser extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor="#bbb" onPress={this._handleDateChange.bind(this,-1)}>
          <Text style={styles.buttonText}>&laquo;</Text>
        </TouchableHighlight>
        <Text style={styles.title}>{this._friendlyDate()}</Text>
        <TouchableHighlight style={styles.button} underlayColor="#bbb" onPress={this._handleDateChange.bind(this,+1)}>
          <Text style={styles.buttonText}>&raquo;</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _friendlyDate() {
    var date = this.props.date;
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  _handleDateChange(offset) {
    var newDate = new Date(this.props.date);
    newDate.setDate(newDate.getDate() + offset);
    this.props.onChange(newDate);
  }

}
module.exports = DateBrowser;

var styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cecece',
  },
  button: {
    flex: 0.15,
    padding: 15,
  },
  buttonText: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    flex: 0.85,
    textAlign: 'center',
  },
});