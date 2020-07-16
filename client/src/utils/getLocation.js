export default async function getNearby(search) {
    const url = `http://localhost:5000/nearby/businesses/?searchString=${search}`;
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
  