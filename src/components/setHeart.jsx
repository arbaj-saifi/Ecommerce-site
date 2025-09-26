import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SetHeart = ({ Heart, setHeart }) => {
  return (
    <div>
      <button onClick={() => setHeart((prev) => prev + 1)}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
      </button>
    </div>
  );
};

export default SetHeart;
