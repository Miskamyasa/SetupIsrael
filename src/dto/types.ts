export type AvailableServices = "selfie" | "events" | "productions";

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

export interface Person {
  name: string
  lastName: string
}

export interface Clients {
  id: number
  author: Person
  comment: string
  imageSrc: string
}
