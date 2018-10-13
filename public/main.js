function initMap() {
  let locations = {
    'Ye Olde Pub': { lat: 51, lng: 0 },
    'Das Neue Brauhaus': { lat: 52, lng: 13 },
    'Stary Browar': { lat: 52, lng: 21 },
    'Il Vecchio Birrificio': { lat: 41, lng: 12 },
  }
  var uluru = { lat: 51, lng: 0 }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: locations['Das Neue Brauhaus'],
  })

  for (var key in locations) {
    if (locations.hasOwnProperty(key)) {
      var marker = new google.maps.Marker({
        position: locations[key],
        map: map,
      })
    }
  }
}
