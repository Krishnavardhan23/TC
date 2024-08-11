import React from 'react';
import Image from 'next/image';
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineFileUpload } from 'react-icons/md';
const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-700 transition-all cursor-pointer'> 
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-1  rounded-full'>
                    <Image 
                        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" 
                        alt="Profile" 
                        width={50} 
                        height={50} 
                    />
                </div>
                <div className='col-span-11'>
                    <h5>Krishna vardhan</h5>
                    <p>Is it just me or everyone else?Do You feel the code quality
                        decrease as the project size increases?Just refactored a lot of bad code
                    </p>
                    <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
                        <div><FiMessageCircle/></div>
                        <div><FaRetweet /></div>
                        <div><FaRegHeart /></div>
                        <div><MdOutlineFileUpload /></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;
