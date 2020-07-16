export default async function getNearby(latitude, longitude) {
  const url = `http://localhost:5000/resource/nearby-businesses/?lat=${latitude}&long=${longitude}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    const json = await response.json();

    return json;
  } catch (err) {
    return err;
  }
}
