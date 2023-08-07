import type { ParentProps } from "solid-js";

import { Button as Btn } from "@kobalte/core";

import { events, type AvailableEvents } from "../../features/events";


interface ButtonProps extends ParentProps {
  eventName?: AvailableEvents
  eventParams?: Record<string, unknown>
  color?: string
}

export default function Button(props: ButtonProps) {
  const onClick = () => {
    if (props.eventName) {
      events.emit(props.eventName, props.eventParams || {});
    }
  };

  return (
    <Btn.Root
      class="button"
      onClick={onClick}>
      {props.children}
    </Btn.Root>
  );
}
