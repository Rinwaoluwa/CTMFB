import React from 'react';

import {ICONS, IconProps} from './types';

export default function Icon({name, size = 24, style, ...props}: IconProps) {
  const IconImplementation = ICONS[name];
  return IconImplementation ? (
    <IconImplementation
      width={25}
      height={25}
      {...props}
      style={style}
    />
  ) : null;
}
