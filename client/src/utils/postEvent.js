export async function postEvent(eventName, host, startAddress, endAddress, startLocation, endLocation, startTime) {
  let url = 'http://localhost:5000/event/create-event';
  let requestBody = {
    name: eventName,
    hostUsername: host,
    startAddress: startAddress,
    endAddress: endAddress,
    startLocation: {
        type: 'Point',
        coordinates: startLocation
    },
    endLocation:  {
        type: 'Point',
        coordinates: endLocation
    },
    startTime: startTime
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log('Resp ' + JSON.stringify(response));
        return response;
      })
      .catch((error) => {
        console.log('Error: ', error);
        return error;
      });
    const json = await response.json();

    return json;
  } catch (err) {
    return err;
  }
}
