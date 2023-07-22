import { EventEmitter } from "eventemitter3"


const availableEvents = [
  "contact",
  "birthday",
] as const

export type AvailableEvents = typeof availableEvents[number]

export class Events extends EventEmitter<AvailableEvents> {
  constructor() {
    super()
  }

  emit(event: AvailableEvents, params: Record<string, unknown>) {
    return super.emit(event, params)
  }
}

export const events = new Events()
