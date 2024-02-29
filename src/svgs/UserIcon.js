import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 16 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.83725 0.650024C5.00073 0.650024 2.70066 2.94967 2.69998 5.78603L2.69998 5.7873H3.44998L2.69998 5.78476L2.69998 5.78603C2.69108 8.61412 4.97538 10.9141 7.8038 10.9237L7.8064 10.9237H7.83725C10.6742 10.9237 12.9736 8.62424 12.9736 5.7873C12.9736 2.95056 10.6744 0.650024 7.83725 0.650024ZM4.19998 5.7873C4.19998 3.77878 5.82874 2.15002 7.83725 2.15002C9.84556 2.15002 11.4736 3.77858 11.4736 5.7873C11.4736 7.79581 9.84488 9.42366 7.83637 9.42366H7.80755C5.80792 9.41616 4.1932 7.78981 4.19998 5.78984V5.7873ZM1.75 17.7867C1.75 16.9894 2.30533 16.0845 3.44188 15.3385C4.55835 14.6057 6.12445 14.1119 7.84455 14.1119C9.55559 14.1119 11.1226 14.6011 12.2421 15.3298C13.3822 16.0719 13.9391 16.9717 13.9391 17.7661C13.9391 18.1512 13.8152 18.4377 13.5916 18.6789C13.3521 18.9372 12.9676 19.1737 12.411 19.3685C11.2884 19.7614 9.68255 19.9119 7.84455 19.9119C6.01519 19.9119 4.40853 19.7667 3.28249 19.3781C2.72404 19.1854 2.3382 18.9508 2.09786 18.694C1.87403 18.4549 1.75 18.1706 1.75 17.7867ZM7.84455 12.6119C5.85282 12.6119 3.99665 13.1801 2.6188 14.0845C1.26103 14.9757 0.25 16.2831 0.25 17.7867C0.25 18.5531 0.520062 19.2034 1.00274 19.7191C1.4689 20.2171 2.10198 20.5575 2.79319 20.7961C4.16647 21.2699 5.98208 21.4119 7.84455 21.4119C9.71836 21.4119 11.5348 21.2644 12.9065 20.7843C13.597 20.5427 14.2278 20.1989 14.6916 19.6987C15.1714 19.1813 15.4391 18.5308 15.4391 17.7661C15.4391 16.2597 14.4196 14.9574 13.0604 14.0726C11.6806 13.1745 9.82532 12.6119 7.84455 12.6119Z"
      fill={props.color}
    />
  </Svg>
);
export default UserIcon;
