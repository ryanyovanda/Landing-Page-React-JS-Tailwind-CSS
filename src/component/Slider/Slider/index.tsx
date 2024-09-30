import { FC } from 'react';
// import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Work: FC<ProjectPhoto> = ({thumbnail, link}) => {
    return (
        <div className='h-72 w-[27rem] bg-light-grey flex justify-center items-center 
                        hover:shadow-custom-gallery cursor-pointer relative group'>
            <img src={thumbnail} alt='project photo' />
            <a href={link} target='_blank' className='hidden bg-white group-hover:block absolute rounded-lg text-sm p-2'>
                <span className='flex gap-2'>
                    <span>Visit the website &nbsp;</span>
                    <Icon icon={faArrowUp} className='rotate-[45deg]' />
                </span>
            </a>
        </div>
    )
}

export default SliderGallery;