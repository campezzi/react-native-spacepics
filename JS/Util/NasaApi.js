const NASA_API_KEY = 'o4es5iNpXDSR12rP3kFXetCiLV1lASr2riFU7viQ';

var NasaApi = {

  apod: function(date) {
    dateString = getDateString(date);
    url = `https://api.data.gov/nasa/planetary/apod?api_key=${NASA_API_KEY}&date=${dateString}`
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error;
        return new Promise((resolve) => resolve(data));
      });
  }

};
module.exports = NasaApi;

function getDateString(date) {
  var year = date.getFullYear();
  var month = pad(date.getMonth()+1);
  var day = pad(date.getDate());
  return `${year}-${month}-${day}`
}

function pad(number) {
  var str = '' + number;
  while (str.length < 2) {
    str = '0' + str;
  }
  return str;
}