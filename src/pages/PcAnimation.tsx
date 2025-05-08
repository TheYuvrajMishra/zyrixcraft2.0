import React from 'react';
import { MacbookScroll } from '../components/MacbookScroll';
import DashBoard from '../assets/DashBoard.jpg'
const PcAnimation: React.FC = () => {
  return (
    <div className="overflow-hidden  dark:bg-[#0b0b0f] w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with React. <br /> No kidding.
          </span>
        }
        src={DashBoard}
        showGradient={false}
      />
    </div>
  );
};

export default PcAnimation;
