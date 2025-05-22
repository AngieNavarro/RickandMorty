export interface personaje {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    ulr: string
  },
  image: string,
  episode: [],
  url: string,
  created: string
}
