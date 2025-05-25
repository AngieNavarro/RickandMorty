import { episode } from "./episode.model";

export interface espisode_info {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string,
  },
  results: episode[]
}
