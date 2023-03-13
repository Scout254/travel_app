import React,{useState,useRef,useEffect} from 'react';
import DestinationCard from './DestinationCard';
import data from '../constants/data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Destination() {
  const { featured } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const handleScrollBack = () => {
    const container = containerRef.current as HTMLDivElement;
    container.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const handleScrollForward = () => {
    const container = containerRef.current as HTMLDivElement;
    container.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement;
    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        setCanScrollBack(false);
      } else {
        setCanScrollBack(true);
      }
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        setCanScrollForward(false);
      } else {
        setCanScrollForward(true);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Top Destinations</h1>
        <div className='flex justify-between'>
        
        <ArrowBackIcon
            onClick={handleScrollBack}
            className={`cursor-pointer ${!canScrollBack && 'opacity-50'}`}
          />
          <ArrowForwardIcon
            onClick={handleScrollForward}
            className={`cursor-pointer ${!canScrollForward && 'opacity-50'}`}
          />
      </div>
      </div>
      <div 
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide overflow-y-hidden h-96 px-4 ">
        {featured.map((item) => (
          <div key={item.id} className="mr-4">
            <DestinationCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
