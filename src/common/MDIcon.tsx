import {FC} from "react";
import * as MDIcons from 'react-icons/md'
import {MDIconsType} from "./types/Header/MDIconType";

const MDIcon: FC<{ iconName: MDIconsType }> = ({iconName}) => {
    const Icon = MDIcons[iconName]

    return <Icon/>

}

export default MDIcon
