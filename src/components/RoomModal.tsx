import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalType = PropsWithChildren<{
  children: ReactNode | HTMLDivElement | any;
}>;

const RoomModal = ({ children }: ModalType) => {
  const el = useRef<null | HTMLDivElement>(null);

  if (!el.current) {
    el.current = document.createElement("div");
  }

  useEffect(() => {
    const modalContainer = document.getElementById("roomModal");
    modalContainer?.appendChild(el.current!);
    return () => {
      modalContainer?.removeChild(el.current!);
    };
  }, []);

  return createPortal(<div>{children}</div>, el.current);
};

export default RoomModal;
