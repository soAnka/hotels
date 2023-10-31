import { PropsWithChildren, ReactNode, useState } from "react";
import { Room } from "../../typesAndInterfaces/APIResponsesInterface";
import RoomModal from "./RoomModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RoomInfo from "./RoomInfo";

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
          <div className="h-40 w-full rounded-t-2xl rounded-r-2xl bg-[url('../../images/modal_photo.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <button
            className="absolute right-6 top-6"
            onClick={() =>
              setIsModal({
                ...isModal,
                isShow: false,
                roomDetails: null,
              })
            }
          >
            <AiOutlineCloseCircle fontSize={26} style={{ color: "#a87700" }} />
          </button>
          <div className="bg-black p-2 text-center text-xs font-light text-white">
            ROOM DETAILS
          </div>
          <RoomInfo
            name={room.name}
            maxChildren={room.occupancy.maxChildren}
            maxAdults={room.occupancy.maxAdults}
            longDescription={room.longDescription}
          />
        </RoomModal>
      ) : null}
    </>
  );
};

export default RoomCard;
