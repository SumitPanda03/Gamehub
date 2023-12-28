import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {IconType} from 'react-icons'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'


interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // index signature
  const iconMap: {[key: string]: IconType} = {
    pc : FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    linux : FaLinux,
    mac : FaApple,
    android : FaAndroid,
    nintentdo : SiNintendo,
    web : BsGlobe,
    ios : MdPhoneIphone
  }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
            ))}
        </HStack>
    );
};

export default PlatformIconList;
