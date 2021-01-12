import React, { useRef, useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { LinkR } from "../link/link";

export const HoriNavbar = () => {
  const [scrollStart, setscrollStart] = useState(false);
  const [scrollEnd, setscrollEnd] = useState(true);

  const ref = React.useRef<HTMLUListElement>(null);

  const handleScroll = (e: any) => {
    if (e.target.scrollLeft !== 0) {
      setscrollStart(true);
      if (e.target.scrollWidth - e.target.clientWidth === e.target.scrollLeft) {
        setscrollEnd(false);
      } else {
        setscrollEnd(true);
      }
    }

    if (e.target.scrollLeft < 1) {
      setscrollStart(false);
    }
  };

  return (
    <div className="horiNavBar">
      {scrollStart && (
        <div
          className="scroll left"
          onClick={() => {
            console.log(ref);
            // @ts-ignore
            ref.current.scrollLeft -= ref.current?.clientWidth - 300;
          }}
        >
          <ChevronLeftIcon />
        </div>
      )}
      <ul onScroll={handleScroll} ref={ref}>
        <LinkR to="Wallpapers"></LinkR>
        <LinkR to="People"></LinkR>
        <LinkR to="Architecture"></LinkR>
        <LinkR to="Current Events"></LinkR>
        <LinkR to="Exprimental"></LinkR>
        <LinkR to="Fashion"></LinkR>
        <LinkR to="film"></LinkR>
        <LinkR to="Health & wellness"></LinkR>
        <LinkR to="interiors"></LinkR>
        <LinkR to="Street"></LinkR>
        <LinkR to="Technology"></LinkR>
        <LinkR to="Travel"></LinkR>
        <LinkR to="Work"></LinkR>
        <LinkR to="Animal"></LinkR>
        <LinkR to="Food & drink"></LinkR>
        <LinkR to="Spirituality"></LinkR>
        <LinkR to="Arts & Culture"></LinkR>
        <LinkR to="History"></LinkR>
      </ul>
      {scrollEnd && (
        <div
          className="scroll right"
          onClick={() => {
            console.log(ref);
            // @ts-ignore
            ref.current.scrollLeft += ref.current?.clientWidth - 300;
          }}
        >
          <ChevronRightIcon />
        </div>
      )}
    </div>
  );
};
