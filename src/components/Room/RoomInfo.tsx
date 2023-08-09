import { BsFillPersonFill } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";

interface RoomInfoProps {
  name: string;
  maxChildren: number;
  maxAdults: number;
  longDescription?: string;
}

const RoomInfo = ({
  name,
  maxChildren,
  maxAdults,
  longDescription,
}: RoomInfoProps) => {
  return (
    <div className="room_info_container">
      <p className="room_info_name mb-2 text-sm font-medium">{name}</p>
      <div className="room_icons_container ">
        <div className="room_info_icons">
          <div className="icons_box ">
            <FaBabyCarriage size={14} />
            <p className="ml-1 text-xs font-bold">{maxChildren}</p>
          </div>
          <div className=" icons_box">
            <BsFillPersonFill size={16} />
            <p className="ml-1 text-xs font-bold">{maxAdults}</p>
          </div>
        </div>
        {longDescription ? (
          <p className="room_info_description">{longDescription}</p>
        ) : null}
      </div>
    </div>
  );
};

export default RoomInfo;
