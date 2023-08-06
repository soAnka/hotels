import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { Room } from "../typesAndInterfaces/APIResponsesInterface";
import RoomModal from "./RoomModal";
import RoomDetails from "./RoomDetails";

type RoomCardProps = PropsWithChildren<{
  room: Room;
  children: ReactNode;
}>;

export type StateType = {
  isShow: boolean;
  roomDetails: Room | null;
};

const RoomCard = ({ room, children }: RoomCardProps) => {
  const [isModal, setIsModal] = useState<StateType>({
    isShow: false,
    roomDetails: null,
  });

  return (
    <>
      <button
        key={room.id}
        onClick={() =>
          setIsModal({
            ...isModal,
            isShow: true,
            roomDetails: room,
          })
        }
      >
        {children}
      </button>
      {isModal.isShow ? (
        <RoomModal>
          <button
            onClick={() =>
              setIsModal({
                ...isModal,
                isShow: false,
                roomDetails: null,
              })
            }
          >
            close
          </button>
          <p>lorem ipsum</p>
          <RoomDetails room={isModal.roomDetails} />
        </RoomModal>
      ) : null}
    </>
  );
};

export default RoomCard;
