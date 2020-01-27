const BASE_URL = 'http://api.citybik.es/v2/'

const fetchData = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`)
  const data = await response.json()
  return data
}

export default fetchData