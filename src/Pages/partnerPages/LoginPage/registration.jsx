import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import PartnerSignup from './partnerSignup';
import PartnerLogin from './partnerLogin'



const Registration = () => {

    const data = [
        {
            label: "Login",
            value: "Login",
            icon: UserCircleIcon,
            desc: 
          <PartnerLogin/>
            ,
        },
        {
            label: "Registration",
            value: "Registration",
            icon: UserCircleIcon,
            desc:
               <PartnerSignup/>
            ,
        },

    ];
    return (
        <>
            <Tabs value="Login">
                <TabsHeader className="w-96 mx-auto flex justify-center">
                    {data.map(({ label, value, icon }) => (
                        <Tab
                            key={value}
                            value={value}
                            className="w-40"
                        >
                            <div className="flex items-center gap-2">
                                {React.createElement(icon, { className: "w-5 h-5" })}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </>
    )
}
export default Registration