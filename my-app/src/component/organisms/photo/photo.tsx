import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  photo: string;
}

const Photo: React.FC<Props> = ({ photo }) => {
  const [isHover, setisHover] = useState<Boolean>(false);

  return (
    <div className="photo" onMouseEnter={() => setisHover(true)} onMouseLeave={() => setisHover(false)}>
      <img src={photo} style={{ width: "100%", display: "block" }} alt="" />
      <AddIcon className={isHover ? "icon ishover" : "icon"} />
      <div className={isHover ? "name ishover" : "name"}>
        <Avatar className=" avatar">OP</Avatar>
        <h3>Imani Faith</h3>
      </div>
      <div className={isHover ? "overlay" : undefined}></div>
    </div>
  );
};

export default Photo;
