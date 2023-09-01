import type { ParentProps } from "solid-js";
import { Button } from "@kobalte/core";
import { events, type AvailableEvents } from "../../features/events";


export function ClientButton(props: ParentProps & {
  eventName?: AvailableEvents,
  eventParams?: Record<string, unknown>,
}) {
  const onClick = () => {
    if (props.eventName) {
      events.emit(props.eventName, props.eventParams || {});
    }
  };

  return (
    <Button.Root
      class="button"
      onClick={onClick}>
      {props.children}
    </Button.Root>
  );
}
