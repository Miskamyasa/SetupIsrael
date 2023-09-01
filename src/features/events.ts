import { EventEmitter } from "eventemitter3";


const availableEvents = [
  "contact",
  "details",
] as const;

export type AvailableEvents = typeof availableEvents[number];

export class Events extends EventEmitter<AvailableEvents> {
  constructor() {
    super();
  }

  emit(event: AvailableEvents, params: Record<string, unknown>) {
    return super.emit(event, params);
  }
}

export const events = new Events();

events.on("contact", (params) => {
  if (__DEV__) {
    console.info("contact", params);
  }
});

events.on("details", (params) => {
  if (__DEV__) {
    console.info("details", params);
  }
});
