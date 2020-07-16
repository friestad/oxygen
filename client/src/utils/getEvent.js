export async function getEvents(lat, long) {
  const url = `http://localhost:5000/event/all/?lat=${lat}&long=${long}`;
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

export async function getEvent(eventName, host) {
    const url = `http://localhost:5000/event/?name=${eventName}&username=${host}`;
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
  
  