export type AvailableServices = "bat-mitzvah" | "party" | "corporate";

export type TargetAudience = "personal" | "business" | "mothers";

export interface Service {
  slug: string
  title: string
  description: string
  audience: TargetAudience[]
}
export type AvailablePrices = "regular" | "premium";

export interface Price {
  slug: string
  title: string
  description: string
  price: number
  bullets: string[]
}