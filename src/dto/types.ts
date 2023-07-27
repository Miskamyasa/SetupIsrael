export type AvailableServices = "bat-mitzvah" | "party" | "corporate";

export type TargetAudience = "personal" | "business" | "mothers";

export interface Service {
  slug: string
  title: string
  description: string
  audience: TargetAudience[]
}
export type AvailablePrices = "personal" | "business";

export interface Price {
  slug: string
  title: string
  description: string
  price: number
  bullets: string[]
}

export interface Clients {
  id: number
  author: {name: string, lastName: string}
  comment: string
  imageSrc: string
}
