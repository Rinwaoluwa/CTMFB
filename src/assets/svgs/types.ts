import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import bulb from "./icons/bulb.svg";
import line_chart from "./icons/line-chart.svg";
import loan from "./icons/loan.svg";
import note from "./icons/note.svg";
import paper_plane from "./icons/paper-plane.svg";
import phone from "./icons/phone.svg";
import remita from "./icons/remita.svg";
import tv from "./icons/tv.svg";
import biometrics from "./icons/finger-print.svg";
import clipboard from "./icons/clipboard.svg";
import star from "./icons/star.svg";
import bell from "./icons/bell.svg";
import moon from "./icons/moon.fill.svg";
import triangles from "./icons/Union.svg";
import home from "./icons/u_home-alt.svg";
import history from "./icons/history.svg";
import card from "./icons/credit-card.svg";
import boxes from "./icons/box-grouped.svg";
import send from "./icons/send.svg";

export const ICONS = {
    bulb,
    line_chart,
    loan,
    note,
    paper_plane,
    phone,
    remita,
    tv,
    biometrics,
    clipboard,
    star,
    bell,
    moon,
    triangles,
    home,
    history,
    card,
    boxes,
    send,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}
  
export type Props = IconProps;
