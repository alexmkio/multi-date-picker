import React, { forwardRef, useRef } from "react";
import CloseIcon from "@icons/close";

type PopupModalProps = {
  children: React.ReactNode;
};

type PopupModalTriggerProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type PopupModalContentProps = {
  children: React.ReactNode;
  onClose?: () => void;
  onCloseProp?: () => void;
  ref?: React.Ref<HTMLDialogElement>;
  header?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const PopupModal = ({ children }: PopupModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      disableBodyScroll();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      enableBodyScroll();
    }
  };

  const allowedChildren = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return false;
    return child.type === PopupModalTrigger || child.type === PopupModalContent;
  });

  return (
    <>
      {React.Children.map(allowedChildren, (child) => {
        if (!React.isValidElement(child)) return child;

        if (child.type === PopupModalTrigger) {
          return React.cloneElement(
            child as React.ReactElement<PopupModalTriggerProps>,
            { onClick: openDialog }
          );
        }

        if (child.type === PopupModalContent) {
          return React.cloneElement(
            child as React.ReactElement<PopupModalContentProps>,
            { ref: dialogRef, onClose: closeDialog }
          );
        }

        return child;
      })}
    </>
  );
};

const PopupModalTrigger = forwardRef<HTMLDivElement, PopupModalTriggerProps>(
  ({ children, onClick }, ref) => (
    <div ref={ref} onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  )
);

PopupModalTrigger.displayName = "PopupModalTrigger";

const PopupModalContent = forwardRef<HTMLDialogElement, PopupModalContentProps>(
  ({ children, onClose, onCloseProp, header, icon: Icon }, ref) => (
    <dialog
      ref={ref}
      className="w-screen max-w-[841px] rounded-ss-xl rounded-se-xl sm:rounded-xl popup-dialog"
    >
      <div className="flex items-center px-4 py-2 gap-[6px] bg-white sticky top-0">
        {Icon ? (
          <div className="w-[25px] h-[25px] flex items-center justify-center">
            <Icon />
          </div>
        ) : null}
        {header ? (
          <div className="grow text-black font-bold text-base leading-[19.36px]">
            {header}
          </div>
        ) : null}
        <button
          onClick={() => {
            onCloseProp && onCloseProp();
            onClose && onClose();
          }}
          className="w-[40px] h-[40px] flex items-center justify-center"
        >
          <CloseIcon className="text-black size-[17px]" />
        </button>
      </div>
      <div className="bg-light-grayish-blue px-6 py-8">{children}</div>
    </dialog>
  )
);

PopupModalContent.displayName = "PopupModalContent";

export { PopupModal, PopupModalTrigger, PopupModalContent };
