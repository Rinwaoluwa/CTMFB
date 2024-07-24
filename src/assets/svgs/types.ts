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
