export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "2f2736cb15msh8a83d4e98e4ee1bp1b5e81jsn154da48c3104",
    "x-rapidapi-host": "car-data.p.rapidapi.com",
  }

  const response = await fetch("https://car-data.p.rapidapi.com/cars?limit=10&page=0", {
    headers: headers,
  })

  const result = await response.json();
  
  return result
}
