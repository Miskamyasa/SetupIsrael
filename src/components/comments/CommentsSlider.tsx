import "./CommentsSlider.css";
import { createSignal, For } from "solid-js";
import clients from "../../dto/clients.js";

export default function CommentsSlider() {
  const [currentClient, setCurrentClient] = createSignal(0);
  const handleClick = (index: () => number): void => {
    const id = index();
    setCurrentClient(id);
  };

  return (
    <div class="flex  mt-7 flex-col lg:flex-row">
      <div class="flex lg:w-8/12 flex-col lg:flex-row items-center lg:items-start">
        <div class="lg:w-3/6 my-8 lg:my-0 lg:mr-3 relative z-4">
          <div class="w-full">
            <img
              alt="dots"
              class="absolute z-[-1] lg:right-14 -right-6 -top-7"
              src="./svg/hero-dots.svg"
            />
            <img
              alt="ellipse"
              class="absolute z-[-1] -left-6 bottom-7"
              src="./svg/ellipse.svg"
            />
          </div>
          <img
            alt="image"
            class=" rounded-full rounded-tr-none w-96 h-96  object-cover object-top "
            src={clients[currentClient()].imageSrc}
          />
        </div>
        <div class="lg:w-3/6 lg:mt-10 text-center lg:text-left md:mb-6">
          <h3 class="text-2xl font-semibold">{`${
            clients[currentClient()].author.name
          } ${clients[currentClient()].author.lastName}`}</h3>
          <p>{clients[currentClient()].comment}</p>
        </div>
      </div>
      <div class="relative lg:w-72 flex justify-center w-full">
        <For each={clients}>
          {(client, index) => (
            <div
              class={`image__container-${client.id}  `}
              onClick={[handleClick, index]}
            >
              <img
                alt="image"
                class={`image-${client.id} rounded-full hover:scale-125 transition
                   ease-in-out duration-150 cursor-pointer object-cover object-top avatar__size lg:absolute`}
                src={client.imageSrc}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
