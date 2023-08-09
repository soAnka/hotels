import { Room } from "../../typesAndInterfaces/APIResponsesInterface";
import RoomCard from "./RoomCard";
import RoomInfo from "./RoomInfo";

interface AvailableRoomsProps {
  rooms: Room[];
  numberChildren: number;
  numberAdults: number;
  type: string;
}

const AvailableRooms = ({
  rooms,
  numberAdults,
  numberChildren,
  type,
}: AvailableRoomsProps) => {
  const filtered = rooms?.filter(
    (room: Room) =>
      room.occupancy.maxChildren >= numberChildren &&
      room.occupancy.maxAdults >= numberAdults
  );

  return (
    <>
      {filtered?.length !== 0 ? (
        filtered.map((room: Room) => (
          <div key={room.id}>
            {type === "cardItem" ? (
              <div className="available_rooms_card">
                <RoomCard key={room.id} room={room}>
                  <RoomInfo
                    name={room.name}
                    maxChildren={room.occupancy.maxChildren}
                    maxAdults={room.occupancy.maxAdults}
                  />
                </RoomCard>
              </div>
            ) : (
              <RoomCard key={room.id} room={room}>
                <p className="text-left">{room.name}</p>
              </RoomCard>
            )}
          </div>
        ))
      ) : (
        <p>No rooms matching children and/or adults criteria</p>
      )}
    </>
  );
};

export default AvailableRooms;
