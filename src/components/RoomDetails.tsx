import { Room } from "../typesAndInterfaces/APIResponsesInterface";

interface RoomDetailsProps {
  room: Room | null;
}

const RoomDetails = ({ room }: RoomDetailsProps) => {
  return (
    <div className="room_details">
      {room ? (
        <div>
          <p>{room.name}</p>
          <p>type {room.id}</p>
          <p>{room.occupancy.maxAdults} max Adults</p>
          <p>{room.occupancy.maxChildren} max Children</p>
          <p>{room.longDescription}</p>
        </div>
      ) : (
        <p>No room</p>
      )}
    </div>
  );
};

export default RoomDetails;
