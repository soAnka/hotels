import { useParams } from "react-router-dom";
import { RootState } from "./store/store";
import { Room } from "./APIResponsesInterface";
import { useAppSelector } from "./store/hooks";

const RoomDetails = () => {
  const { id, roomId } = useParams();
  const { rooms, loading } = useAppSelector((state: RootState) => state.rooms);

  if (loading !== "succeeded") {
    return <p>loading</p>;
  }
  console.log(loading);
  const hotelId: string = id ? id.slice(1, id?.length) : "";
  const roomIdd = roomId?.slice(1, roomId?.length);

  const roomDetailsData = rooms[hotelId].rooms.find(
    (room: Room) => room.id === roomIdd
  );

  return (
    <div>
      <h2>Room</h2>
      {roomDetailsData && (
        <div>
          <h2>{roomDetailsData.name}</h2>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
