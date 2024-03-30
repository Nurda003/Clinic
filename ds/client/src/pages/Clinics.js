import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import cli1 from '../img/clinics1.png'
import heart from '../img/heart.png'
import cli2 from '../img/clinics2.png'
import cli3 from '../img/clinics3.png'

import Datepicker from "tailwind-datepicker-react"

function Clinics() {
    const options = {
        title: 'Choose a booking date',
        autoHide: 'true',
        todayBtn: 'true',
        clearBtn: 'false',
        clearBtnText: 'Clear',
        maxDate: new Date('2030-01-01'),
        minDate: new Date('2024-01-01'),
        theme: {
            background: 'dark:bg-white',
            todayBtn: '',
            clearBtn: '',
            icons: 'dark:bg-white dark:text-black light:bg-white light:text-black',
            text: 'dark:text-black dark:hover:bg-blue-200',
            disabledText: 'dark:hidden light:hidden',
            input: 'dark:bg-white dark:text-black light:bg-white',
            inputIcon: '',
            selected: 'dark:bg-blue-200 dark:text-white ',
        },
        icons: {
            prev: function() {
                return <span >Prev</span>;
            },
            next: function() {
                return <span>Next</span>;
            },
        },
        datepickerClassNames: 'top-12',
        defaultDate: new Date('2024-03-27'),
        language: 'en',
        disabledDates: [],
        weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        inputNameProp: 'date',
        inputIdProp: 'date',
        inputPlaceholderProp: 'Select Date',
        inputDateFormatProp: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        },
    };
    
    const [show, setShow] = useState(false);
    
    function handleChange(selectedDate) {
        console.log(selectedDate);
    };

    function handleClose(state) {
        setShow(state);
    };

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleBookingClick = () => {
        setIsBookingModalOpen(true);
    };

    const handleModalCloseClick = () => {
        setIsBookingModalOpen(false);
    };

    const [clinics, setClinics] = useState([]);

    function addClinic(newClinic) {
        setClinics([...clinics, newClinic]);
    }

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/clinics');
                setClinics(response.data)
                console.log(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        

        fetchClinics()
    }, [])



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


            {clinics.map(clinic => ( 
                <div key={clinic._id} className="flex w-full gap-6 p-3 rounded-2xl bg-white items-center mt-10">
                    <div className="w-heroimg">
                    <img src={cli2} alt="" />
                </div>
                <div className="w-full p-3 bg-white">
                    <div className="flex w-full justify-between ">
                        <div className="flex flex-col gap-3">
                        
                    {/*... rest of your code ... */}
                    <h1 className='text-2xl font-bold text-bigtext'>{clinic.name}</h1>
                    <p className='text-base text-smalltext'>{clinic.address}</p>
                    {/*... rest of your code ... */}
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
            ))}


            {isBookingModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="bg-navbg p-8 rounded-lg">
            <button onClick={handleModalCloseClick}>Close</button>
            <h2 id="modalTitle">Book an Appointment</h2>
            <form id="bookingForm">
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <label id="fnameLabel" htmlFor="fname" className='text-lg text-bigtext ml-1 font-medium'>First Name:</label>
                        <input type="text" id="fname" name="fname" className='p-2 border border-gray-400 rounded-xl mt-2' required aria-describedby="fnameLabel" placeholder='First name' />
                    </div>
                    <div className="flex flex-col">
                        <label id="fnameLabel" htmlFor="fname" className='text-lg text-bigtext ml-1 font-medium'>Last Name:</label>
                        <input type="text" id="fname" name="fname" required aria-describedby="fnameLabel" className='p-2 border  mt-2 border-gray-400 rounded-xl' placeholder='Last name'/>
                    </div>

                </div>
                <div className="flex flex-col mt-2">
                    <div className="flex flex-col">
                        <label id="emailLabel" htmlFor="email" className='text-lg text-bigtext ml-1 font-medium'>Email:</label>
                        <input type="email" id="email" name="email" required aria-describedby="emailLabel" className='p-2 border border-gray-400 rounded-xl mt-2' placeholder='Email'/>
                    </div>
                    <div className="flex flex-col">
                        <label id="phoneNumber" htmlFor="phione" className='text-lg text-bigtext ml-1 mt-2 font-medium'>Phone number:</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                </svg>
                            </div>
                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label id="emailLabel" htmlFor="email" className='text-lg text-bigtext ml-1 mt-2 font-medium'>Date:</label>
                        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />

                    </div>
                    <div className="flex flex-col mt-2">
                        
                        <label for="message" className="text-lg text-bigtext ml-1 mt-2 font-medium">Message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your message here..."></textarea>

                    </div>
                    <button className='w-1/2 mx-auto mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-4' >Book an appointment</button>
                    
                </div>
                
                
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
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-7 w-full' onClick={handleBookingClick}>Book</button>
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
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-7 w-full' onClick={handleBookingClick}>Book</button>
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