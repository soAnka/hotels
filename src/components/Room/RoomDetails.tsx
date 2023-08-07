import { Room } from "../../typesAndInterfaces/APIResponsesInterface";
import { FaBabyCarriage } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

interface RoomDetailsProps {
  room: Room | null;
}

const RoomDetails = ({ room }: RoomDetailsProps) => {
  return (
    <div className="room_details p-8">
      {room ? (
        <div>
          <div className="room_details_header my-2">
            <p className="text-lg font-bold">{room.name}</p>
            <p>
              Room Type: <span className="text-light italic">{room.id}</span>
            </p>
          </div>
          <div className="content mt-4 flex">
            <div className="my-2 flex flex-col items-center rounded-2xl border border-cyan-400 p-2">
              <div className="m-2 flex items-center justify-center">
                <BsFillPersonFill style={{ color: "#37b0d4" }} />
                <p className="ml-1">Max. adults </p>
              </div>
              <p className="font-bold">{room.occupancy.maxAdults}</p>
            </div>
            <div className="m-2 flex flex-col items-center rounded-2xl border border-cyan-400 p-2">
              <div className="m-2 flex items-center justify-center">
                <FaBabyCarriage style={{ color: "#37b0d4" }} />
                <p className="ml-1">Max. children </p>
              </div>
              <p className="font-bold">{room.occupancy.maxChildren}</p>
            </div>
          </div>
          <p className=" my-4 font-thin text-gray-800">
            {room.longDescription}
          </p>
        </div>
      ) : (
        <p>No room</p>
      )}
    </div>
  );
};

export default RoomDetails;
