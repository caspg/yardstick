import { getServerData, dataKeys } from './serverData'

const defaultMapsOptions = {
  zoom: 4,
  center: { lat: 52, lng: 13 },
}

function getMapsOptions() {
  const selectedBrewery = getServerData(dataKeys.selectedBrewery)

  if (!selectedBrewery) {
    return defaultMapsOptions
  }

  return {
    zoom: 10,
    center: { lat: selectedBrewery.latitude, lng: selectedBrewery.longitude },
  }
}

function initMap() {
  const mapOptions = getMapsOptions()
  const breweries = getServerData(dataKeys.breweries)
  const map = new google.maps.Map(document.getElementById('map'), mapOptions)

  breweries.forEach(brewery => {
    const marker = new google.maps.Marker({
      position: {
        lat: brewery.latitude,
        lng: brewery.longitude,
      },
      map,
    })
    const infowindow = new google.maps.InfoWindow({
      content: brewery.name,
    })

    google.maps.event.addListener(
      map,
      'click',
      (_infoWindow => () => {
        _infoWindow.close()
      })(infowindow),
    )

    google.maps.event.addListener(
      marker,
      'click',
      ((_marker, _infowindow) => {
        return () => {
          _infowindow.open(map, _marker)
        }
      })(marker, infowindow),
    )
  })
}

export { initMap }
