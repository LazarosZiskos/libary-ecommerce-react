/* eslint-disable react/prop-types */

import { RxStarFilled } from "react-icons/rx";
import { TbStarHalfFilled } from "react-icons/tb";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      <div className="book__ratings">
        {new Array(Math.floor(rating)).fill(0).map(() => (
          <>
            <RxStarFilled/>
          </>
        ))}

        {!Number.isInteger(rating) && (
          <>
            <TbStarHalfFilled />
          </>
        )}
      </div>
    </div>
  );
};

export default Rating;
