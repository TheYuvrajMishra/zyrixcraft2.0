import React from 'react';
import { MacbookScroll } from '../components/MacbookScroll';
import DashBoard from '../assets/DashBoard.jpg'
const PcAnimation: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-[#0B0B0F] w-full">
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
