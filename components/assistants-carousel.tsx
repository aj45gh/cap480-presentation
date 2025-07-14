"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "codegpt", alt: "CodeGPT" },
  { src: "gemini", alt: "Gemini" },
  { src: "v0", alt: "v0" },
  { src: "cursor", alt: "Cursor" },
  { src: "tabnine", alt: "Tabnine" },
  { src: "copilot", alt: "Copilot" },
];

export function AssistantCarousel() {
  return (
    <div className="w-full flex justify-content justify-center">
      <Carousel
        className="w-[75%]"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video w-full">
                <Image
                  src={`/images/screenshots/${image.src}.png`}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 75wv"
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
