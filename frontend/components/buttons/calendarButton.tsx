import { Icon } from '@iconify/react';
import ScaleOnHover from '../animations/scaleOnHover';
import SubtleScale from '../animations/subtleScale';

const CalendarButton = () => {
  return (
    <ScaleOnHover>
      <a
        className='flex flex-row text-white bg-primary-lightOrange border-2 border-primary-lightOrange hover:border-primary-darkOrange hover:bg-primary-darkOrange duration-300 rounded-lg items-center gap-4 p-2'
        href='https://bit.ly/3AOYya8'>
        <Icon icon='akar-icons:calendar' color='white' className='text-xl' />
        <div className='mr-2'>Add Calendar</div>
      </a>
    </ScaleOnHover>
  );
};

export default CalendarButton;
