import React,{useRef,useState,useEffect} from 'react'
import TrendingCard from './TrendingCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from '../constants/data';
function Trending() {
    const {arrivals} = data;
    const containerRef = useRef(null);
    const [canScrollBack, setCanScrollBack] = React.useState(false);
    const [canScrollForward, setCanScrollForward] = React.useState(true);

    const handleScrollBack = () => {
        containerRef.current.scrollBy({
          left: -300,
          behavior: 'smooth',
        });
      };
    
      const handleScrollForward = () => {
        containerRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      }
      useEffect(() => {
        const container = containerRef.current;
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
    <div className=''>
      <h1 className='text-4xl'>Popular places</h1>
      <div className='flex justify-between'>
        <h2>some reasons this should be your one-stop-shop</h2>
        <div>
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
      className='flex overflow-x-auto scrollbar-hide overflow-y-hidden h-[500px] px-4 '
      
      >
        {arrivals.map((item)=>(
            <div className='mr-4'>
                <TrendingCard key={item.id} data={item} />
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Trending
