import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const LPRESCalendar = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="py-[50px] px-4 overflow-hidden">
      <h2 className="font-semibold text-green-900 text-3xl text-left md:text-4xl mb-5 md:text-center">
        L-PRES Events Calendar
      </h2>
      <p className="text-gray-600 max-w-[700px] mx-auto mb-5 text-left md:text-center">
        Events and initiatives designed to transform the landscape of Nigeria's
        livestock sector. Join us in these impactful events that bring together
        industry experts, stakeholders, and enthusiasts to foster
        knowledge-sharing, collaboration, and innovation.
      </p>

      <Carousel
        className="w-full max-w-[700px] mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default LPRESCalendar;
