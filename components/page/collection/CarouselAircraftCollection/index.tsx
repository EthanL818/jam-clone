'use client'
import React from 'react'

import { IconButton } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { AircraftCollection } from '@/types/AircraftCollection';
import { AircraftCard } from './AircraftCard';

interface carouselProps {
    collections: AircraftCollection[],
    css?: string
}
function CarouselAircraftCollecton({ collections, css }: carouselProps) {
    return (
        <Carousel
            className='flex items-center justify-center'
            infiniteLoop
            useKeyboardArrows
            preventMovementUntilSwipeScrollTolerance
            swipeScrollTolerance={50}
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                    <div
                        className={`${hasPrev ? "absolute" : "hidden"
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            zIndex={2}
                            className='ml-4'
                        >
                            <BiLeftArrowAlt />
                        </IconButton>
                    </div>
                );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
                return (
                    <div
                        className={`${hasNext ? "absolute" : "hidden"
                            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            className='mr-4'
                        >
                            <BiRightArrowAlt />
                        </IconButton>
                    </div>
                );
            }}
        >
            {collections.map((aircraft, index) => (
                <AircraftCard aircraft={aircraft} css={css} key={index} />
            ))}
        </Carousel>
    )
}

export default CarouselAircraftCollecton