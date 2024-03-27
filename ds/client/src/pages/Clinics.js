import React, { useState }  from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import cli1 from '../img/clinics1.png'
import heart from '../img/heart.png'
import cli2 from '../img/clinics2.png'
import cli3 from '../img/clinics3.png'



function Clinics() {

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleBookingClick = () => {
        setIsBookingModalOpen(true);
    };

    const handleModalCloseClick = () => {
        setIsBookingModalOpen(false);
    };


  return (
    <div className='bg-navbg rounded-xl'>
        <NavBar />
        <div className="">
            
            <form className="w-11/12 rounded-2xl flex items-center mx-auto h-36 bg-white">
                <div className="flex p-10 w-full justify-between ">
                    <div className="">
                        <h1 className='text-6xl text-blue-600 font-semibold mr-10% '>Clinics</h1>

                    </div>
                    
                    <div className="flex items-center gap-10">
                        <div className="w-411">
                            
                            <input type="search" id="search-dropdown" className="h-12 block p-2.5 w-full z-20 text-sm text-gray-900 bg-white border-2 border-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg" placeholder="Search..." required />
                            
                        </div>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="h-12 w-60 flex justify-between items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border-2 border-gray-400 rounded-lg" type="button">
                            ...
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        
                        <div className="relative w-60 ">
                            
                            <input datepicker datepicker-title="Flowbite datepicker" type="text" className="h-12 bg-white border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Select date"/>
                        </div>
                    </div>
                </div>
                
                

            </form>

        </div>


        <div className=" flex flex-col justify-center items-center py-5">
            
        <div className="flex flex-col w-11/12 justify-center items-center">


            <div className="flex w-full  gap-6 p-3 rounded-2xl bg-white items-center mt-10">
                <div className="w-heroimg">
                    <img src={cli1} alt="" />
                </div>
                <div className="w-full bg-white">
                    <div className="flex w-full justify-between ">
                        <div className="flex flex-col gap-3">
                            <h1 className='text-2xl font-bold text-bigtext'>Dent X</h1>
                            <p className='text-base text-smalltext'>Almaty, Abaya 108 / Medeu District</p>
                            <div className="flex gap-4">

                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <p className='font-bold text-bigtext'>110+ Reviews</p>


                            </div>
                            <div className="flex gap-4 items-center">
                                <p className="bg-white border-blue-600 border w-9 text-bigtext text-sm font-semibold justify-center items-center p-1.5 rounded "><span>4.2</span></p>
                                <p className='font-semibold'>Very good</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-base text-smalltext font-semibold'>Starting from</p>
                            <p className='text-2xl text-blue-700 font-bold'>$30 min</p>
                        </div>
                    </div>
                    <hr className='w-full bg-gray-500 my-4' />
                    <div className=" flex gap-6 items-center">
                        <div className="w-12 h-12 flex justify-center items-center border border-blue-600 rounded-xl">
                            <img src={heart} alt="" />
                        </div> 
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-7 w-full' onClick={handleBookingClick}>Book</button>
        
                    </div>
                    
                </div>
                
            </div>
            {isBookingModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="bg-white p-8 rounded-lg">
            <button onClick={handleModalCloseClick}>Close</button>
            <h2 id="modalTitle">Book an Appointment</h2>
            <form id="bookingForm">
                <label id="fnameLabel" htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" required aria-describedby="fnameLabel" />
                {/* Rest of the form inputs */}
            </form> 
        </div>
    </div>
)}
            <div className="flex w-full  gap-6 p-3 rounded-2xl bg-white items-center mt-10">
                <div className="w-heroimg">
                    <img src={cli2} alt="" />
                </div>
                <div className="w-full p-3 bg-white">
                    <div className="flex w-full justify-between ">
                        <div className="flex flex-col gap-3">
                            <h1 className='text-2xl font-bold text-bigtext'>White Story</h1>
                            <p className='text-base text-smalltext'>Almaty, Rozabakyeva 30 / Bostandyk District</p>
                            <div className="flex gap-4">

                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <p className='font-bold text-bigtext'>110+ Reviews</p>


                            </div>
                            <div className="flex gap-4 items-center">
                                <p className="bg-white border-blue-600 border w-9 text-bigtext text-sm font-semibold justify-center items-center p-1.5 rounded "><span>4.2</span></p>
                                <p className='font-semibold'>Very good</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-base text-smalltext font-semibold'>Starting from</p>
                            <p className='text-2xl text-blue-700 font-bold'>$30 min</p>
                        </div>
                    </div>
                    <hr className='w-full bg-gray-500 my-4' />
                    <div className=" flex gap-6 items-center">
                        <div className="w-12 h-12 flex justify-center items-center border border-blue-600 rounded-xl">
                            <img src={heart} alt="" />
                        </div> 
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-7 w-full'>Book</button>
                    </div>
                </div>
            </div>

            <div className="flex w-full  gap-6 p-3 rounded-2xl bg-white items-center mt-10">
                <div className="w-heroimg">
                    <img src={cli3} alt="" />
                </div>
                <div className="w-full p-3 bg-white">
                    <div className="flex w-full justify-between ">
                        <div className="flex flex-col gap-3">
                            <h1 className='text-2xl font-bold text-bigtext'>Q & M Dental Centre</h1>
                            <p className='text-base text-smalltext'>Almaty, Mamyr-4 55a / Auezov District</p>
                            <div className="flex gap-4">

                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <p className='font-bold text-bigtext'>110+ Reviews</p>


                            </div>
                            <div className="flex gap-4 items-center">
                                <p className="bg-white border-blue-600 border w-9 text-bigtext text-sm font-semibold justify-center items-center p-1.5 rounded "><span>4.2</span></p>
                                <p className='font-semibold'>Very good</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-base text-smalltext font-semibold'>Starting from</p>
                            <p className='text-2xl text-blue-700 font-bold'>$30 min</p>
                        </div>
                    </div>
                    <hr className='w-full bg-gray-500 my-4' />
                    <div className=" flex gap-6 items-center">
                        <div className="w-12 h-12 flex justify-center items-center border border-blue-600 rounded-xl">
                            <img src={heart} alt="" />
                        </div> 
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-7 w-full'>Book</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        

        <Footer />
    </div>
  )
}

export default Clinics