function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = toRadians(lat2 - lat1);
  var dLon = toRadians(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function toRadians(angle) {
  return (angle * Math.PI) / 180;
}

export const getDistanceToSS = (position) => {
    const latSS = 43.319117967390994
    const lonSS = -1.986049496622158

    const distance = getDistance(position.coords.latitude, position.coords.longitude, latSS, lonSS)

    return distance
}
