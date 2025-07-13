"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/screenshots/codegpt.png", alt: "CodeGPT" },
  { src: "/images/screenshots/gemini.png", alt: "Gemini" },
];

export function AssistantCarousel() {
  return (
    <div className="w-full flex justify-content justify-center">
      <Carousel
        className="w-[75%]"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 75wv"
                  className="object-cover rounded-md"
                  priority={index === 0}
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

export function OldAssistantCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center">
          <Card>
            <CardContent>
              <Image
                src="/images/screenshots/codegpt.png"
                alt="CodeGPT"
                width="960"
                height="470"
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Card>
            <CardContent>
              <Image
                src="/images/screenshots/gemini.png"
                alt="Gemini"
                width="960"
                height="470"
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
