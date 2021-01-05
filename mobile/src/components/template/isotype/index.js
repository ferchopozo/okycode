import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const Isotype = (props) => {
  return (
    <Svg
      viewBox="0 0 2877 2810"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <Path
        d="M2876.46 1395.85L233.54 644.796.003 1466.609l2642.92 751.054 233.537-821.813z"
        fill="#41a330"
      />
      <G fill="#fff">
        <Path d="M1457.46 1401.73L227.06 638.493 1094.74-.003l362.72 1401.73z" />
        <Path d="M1456.32 1399.9l1213.12 790.408-881.663 619.046-331.462-1409.45z" />
      </G>
  </Svg>
  );
}
