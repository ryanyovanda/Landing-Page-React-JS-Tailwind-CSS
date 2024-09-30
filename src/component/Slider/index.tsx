import { FC, useRef, useEffect } from 'react';
import SliderGallery from './Slider';
import { CAROUSEL_1, CAROUSEL_2 } from '../../constants/ProjectList';

const Slider: FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 240;
        }
    }, []);

    return (
        <div className='w-full h-svh flex flex-col gap-10 py-14 relative'>
            <div className='w-full overflow-x-auto overflow-y-hidden hide-scrollbar'>
                <div className='flex gap-10 min-w-max'>
                    { CAROUSEL_1.map((photo, key) => (
                        <SliderGallery key={key} {...photo}/>
                    ))}
                </div>
            </div>
            <div ref={scrollRef} className='w-full overflow-x-auto overflow-y-hidden hide-scrollbar'>
                <div className='flex gap-10 min-w-max'>
                    { CAROUSEL_2.map((photo, key) => (
                        <Work key={key} {...photo}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider;