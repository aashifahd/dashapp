import {
  AdjustmentsVerticalIcon,
  ArrowsUpDownIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  HomeIcon,
  InformationCircleIcon,
  PhotoIcon,
  WalletIcon,
} from "@heroicons/react/16/solid";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

import { Link } from "react-router-dom";

export function SideBar() {
  const navItems = [
    {
      group: "up",
      topItems: [
        {
          title: "Dashboard",
          icon: HomeIcon,
          link: "/dashboard",
        },
        {
          title: "Trade",
          icon: ArrowsUpDownIcon,
          link: "/trade",
        },
        {
          title: "Actions",
          icon: AdjustmentsVerticalIcon,
          link: "/actions",
        },
        ,
        {
          title: "Wallet",
          icon: WalletIcon,
          link: "/wallet",
        },
        ,
        {
          title: "NFT",
          icon: PhotoIcon,
          link: "/nft",
        },
      ],

      bottomItems: [
        {
          title: "Support",
          icon: HeartIcon,
          link: "/support",
        },
        {
          title: "Notification",
          icon: ChatBubbleLeftRightIcon,
          link: "/notification",
        },
        {
          title: "Dashify Info",
          icon: InformationCircleIcon,
          link: "/actions",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-zinc-900 w-[321px] min-h-screen p-8 text-zinc-950 dark:text-gray-50">
      <img src={logo} alt="Logo" style={{ height: 52, width: 164 }} />

      <div className="flex flex-col justify-between flex-1">
        <div className="mt-8">
          {navItems.map((item) => {
            return item.topItems.map((navItem) => {
              return (
                <Link
                  key={navItem.title}
                  to={navItem.link}
                  className="flex items-center  space-x-2 hover:bg-gray-100 hover:text-zinc-950 p-4 rounded-md"
                >
                  <navItem.icon className="w-6 h-6 mr-2" />
                  {navItem.title}
                </Link>
              );
            });
          })}
        </div>

        <div>
          <div>
            {navItems.map((item) => {
              return item.bottomItems.map((navItem) => {
                return (
                  <Link
                    key={navItem.title}
                    to={navItem.link}
                    className="flex items-center space-x-2 hover:bg-gray-100 hover:text-zinc-950 p-4 rounded-md"
                  >
                    <navItem.icon className="w-6 h-6 mr-2" />
                    {navItem.title}
                  </Link>
                );
              });
            })}
          </div>

          <div className="mt-4">
            <Link
              to={"/profile"}
              className="flex items-center font-semibold space-x-2 hover:bg-gray-100 hover:text-zinc-950 p-4 rounded-md gap-4"
            >
              <img
                class="h-8 w-8 rounded-full ring-2 ring-white/50"
                src={profile}
                alt="Profile Image"
              />
              <span>Aashif Ahd</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
