import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@radix-ui/react-scroll-area";
import React from "react";

export const ScrollingList: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <ScrollArea className="w-full h-full">
      <ScrollAreaViewport className="w-full h-full">
        <div className="flex gap-2 sm:gap-[10px] w-full">{children}</div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical" className="bg-gray-200">
        <ScrollAreaThumb className="bg-gray-400" />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal" className="bg-gray-200">
        <ScrollAreaThumb className="bg-gray-400" />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner className="bg-gray-200" />
    </ScrollArea>
  );
};
