import icon from '/src/assets/shared/logo.svg';
import iconHamburger from '/src/assets/shared/icon-hamburger.svg';
import iconClose from '/src/assets/shared/icon-close.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavigationItems from './NavigationItems';

function Navigation() {
  const [isMenuOpen,setisMenuOpen] = useState(false);
  const [activePage,setActivePage] = useState(null);
  
  console.log(activePage);
  return (
    <div className='sm:h-[20%]'>
      <header className="flexCenter py-6  sm:pt-[2.5rem] h-[10%] gap-8 w-full
      text-white   md:justify-around md:py-0 2xl: 2xl:pt-[2.5rem] ">
        <div className='w-1/2 2xl:w-1/2 md:w-[13%] flex md:items-center  '>
            <img className='size-[40px]  md:size-[48px]  ml-6 2xl:ml-16'   src={icon} alt="logo"   />     
            <div className='hidden 2xl:flex  2xl:w-full 2xl:ml-16 2xl:z-14 2xl:left-[50px] 2xl:relative  h-[1px] sm:w-[30%] relative border-white opacity-[25%] border-[0.01px]  z-11  '></div>
        </div>
        
        <button className='z-20 w-1/2 md:w-[17%]  flex justify-end items-center md:hidden'
                  onClick={() => setisMenuOpen(!isMenuOpen)}>
              <img className='mr-6 cursor-pointer p-8' src={isMenuOpen ? iconClose : iconHamburger} 
              alt={isMenuOpen ? "iconHamburger" : 'iconClose'} />
        </button>

        <ul className={`gap-3rem   pt-32 text-[1rem] gap-8  tracking-wider   md:bg-white/10 backdrop-blur-sm pl-16  
            fixed h-screen bg-[rgb(11,13,12,15%)] w-2/3 top-0 right-0 flex  z-10  flex-col  
            text-nowrap   transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:h-[96px] md:w-[83%] md:relative md:flex-row md:justify-around md:items-center md:translate-x-0 
            md:gap-12  md:bg-transparent md:py-[2.406rem] 2xl:w-1/2 2xl:z-13 2xl:relative   2xl:px-16 2xl:gap-[3rem]`}>

            <NavigationItems to={'/'} 
                            activePage={activePage} 
                            number={'00'} 
                            title={'HOME'} 
                            className={`2xl:ml-[6rem]`}/>
            <NavigationItems to={'/destination'} 
                            activePage={activePage} 
                            number={'01'} 
                            title={'DESTINATION'} />
            <NavigationItems to={'/crew'} 
                            activePage={activePage} 
                            number={'02'} 
                            title={'CREW'} />
            <NavigationItems to={'/technology'} 
                            activePage={activePage} 
                            number={'03'} 
                            title={'TECHNOLOGY'} 
                            className={`2xl:mr-16`} />
          
        </ul>
      </header>
    </div>
  );
}

export default Navigation;