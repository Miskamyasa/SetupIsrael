import { createSignal, For } from "solid-js";

import "./Slider.css";
import clients from "../../dto/clients.js";

export default function SliderTest() {
  const [currentClient, setCurrentClient] = createSignal(0);
  const handleClick = (index: () => number): void => {
    const id = index();
    setCurrentClient(id);
  };

  return (
    <div>
      <div class="flex slider mt-7">
        <div class="flex w-9/12 ">
          <div class="w-3/6">
            <img
              alt="image"
              class="transition ease-in duration-200  rounded-full rounded-tr-none w-96 h-96  object-cover object-top"
              src={clients[currentClient()].imageSrc}
            />
          </div>
          <div class="w-3/6">
            <h3>{`${clients[currentClient()].author.name} ${
              clients[currentClient()].author.lastName
            }`}</h3>
            <p>{clients[currentClient()].comment}</p>
          </div>
        </div>
        <div class="w-3/12 grid grid-cols-5 grid-rows-auto gap-2">
          <For each={clients}>
            {(client, index) => (
              <div 
                class={`image__container-${client.id}`}
                onClick={[handleClick, index]} 
              >
                <img
                  alt="image"
                  class={`image-${client.id} rounded-full hover:scale-125 transition
                   ease-in-out duration-300 cursor-pointer object-cover object-top`}
                  src={client.imageSrc}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
