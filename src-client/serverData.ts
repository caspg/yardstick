const NAMESPACE = 'yardstick'
enum dataKeys {
  breweries = 'breweries',
  selectedBrewery = 'selectedBrewery',
}

function getServerData(key: dataKeys) {
  return window[NAMESPACE] && window[NAMESPACE][key]
}

export { getServerData, dataKeys }
