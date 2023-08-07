import { PropsWithChildren, ReactNode, useState } from "react";
import { Room } from "../../typesAndInterfaces/APIResponsesInterface";
import RoomDetails from "./RoomDetails";
import RoomModal from "./RoomModal";
import { AiOutlineCloseCircle } from "react-icons/ai";

type RoomCardProps = PropsWithChildren<{
  room: Room;
  children: ReactNode;
}>;

type StateModalType = {
  isShow: boolean;
  roomDetails: Room | null;
};

const RoomCard = ({ room, children }: RoomCardProps) => {
  const [isModal, setIsModal] = useState<StateModalType>({
    isShow: false,
    roomDetails: null,
  });

  return (
    <>
      <button
        className="hover:text-primary"
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
            className="absolute right-8 top-8"
            onClick={() =>
              setIsModal({
                ...isModal,
                isShow: false,
                roomDetails: null,
              })
            }
          >
            <AiOutlineCloseCircle fontSize={22} style={{ color: "#a87700" }} />
          </button>
          <RoomDetails room={isModal.roomDetails} />
        </RoomModal>
      ) : null}
    </>
  );
};

export default RoomCard;
