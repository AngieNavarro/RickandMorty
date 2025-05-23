import { location } from "./location.model"

export interface location_info {
  info: {
    count: number,
    pages: number,
    next: number,
    prev: string
  },
  results: location[]
}
