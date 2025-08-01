import { Avatar } from "@mantine/core";
import { IconBellRingingFilled, IconBriefcaseFilled,IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header =()=>{
    return <div className="w-full bg-mine-shaft-950 px-8 text-white h-24 flex justify-between items-center font-[Source Code Pro]">

        <div className="flex gap-2 items-center text-bright-sun-500">
            <IconBriefcaseFilled className="h-10 w-10"/>
            <div className="text-2xl font-bold">JobConnect</div>
        </div>


        {NavLinks()}

        <div className="flex gap-4 items-center">
            
            <div className="flex items-center gap-2 bg-mine-shaft-800 p-1.5 rounded-full">
                <div>Abhishek</div>
                <Avatar src="DSC_0132.JPG" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-800 p-1.5 rounded-full">
            <IconSettings/>
            </div>
            <div className="bg-mine-shaft-800 p-1.5 rounded-full">
            <IconBellRingingFilled/>
            </div>

        </div>

    </div>
}
export default Header;