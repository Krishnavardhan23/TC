import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { LuCheckSquare } from "react-icons/lu";
import { BsPersonLinesFill } from "react-icons/bs";
import { VscSaveAs } from "react-icons/vsc";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
interface TwitterSidebarButton
{
  title:string;
  icon:React.ReactNode;
}

const sidebarMenuItems:TwitterSidebarButton[]=[
  {
    title:'Home',
     icon:<IoHomeSharp/>
  },
  {
    title:'Explore',
     icon:<IoSearchOutline/>
  },
  {
    title:'Notifications',
     icon:<FaRegBell/>
  },
  {
    title:'Messages',
     icon:<MdMailOutline/>
  },
  {
    title:'Grok',
     icon:<LuCheckSquare/>
  },
  {
    title:'Bookmarks',
     icon:<VscSaveAs/>
  },
  {
    title:'Communities',
     icon:<BsPersonLinesFill/>
  },
  {
    title:'Premium',
     icon:<RiTwitterXLine/>
  },
  {
    title:'Verified Orgs',
     icon:<AiFillThunderbolt/>
  },
  {
    title:'Profile',
     icon:<IoPerson/>
  },
  {
    title:'More',
     icon:<CiCircleMore/>
  }
]
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3  pt-1 ml-28">
          <div className="text-2xl h-fit w-fit hover:bg-gray-700 rounded-full p-4 cursor-pointer transition-all ">
            <RiTwitterXLine/>
          </div>
          <div className="mt-1 text-xl fontsemibold pr-4">
            <ul>
              {sidebarMenuItems.map(item=>
                <li className="flex justify-start items-center gap-5 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer" key={item.title}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>) 
              } 
            </ul>
            <div className="mt-5 px-3 ">
              <button className="py-2 px-4  bg-[#1d9bf0]  rounded-full w-full  text-lg">Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
