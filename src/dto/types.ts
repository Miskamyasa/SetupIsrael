export type AvailableServices = "bat-mitzvah" | "party" | "corporate"

export type TargetAudience = "personal" | "business" | "mothers"

export interface Service {
  slug: string
  title: string
  description: string
  audience: TargetAudience[]
}
