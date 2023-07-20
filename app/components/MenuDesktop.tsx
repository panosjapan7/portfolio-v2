import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaHouse, FaUser } from "react-icons/fa6";

const MenuDesktop = () => {
  const [activePage, setActivePage] = useState(0);

  let mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pageIndex = ["/", "/about", "/links"].indexOf(currentPath);

    setActivePage(pageIndex);
  }, []);

  return (
    <div className="absolute bottom-8 end-0.5 right-0 left-0 mx-auto w-max z-20">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3"
      >
        {[...Array(3).keys()].map((i) => (
          <AppIcon
            mouseX={mouseX}
            key={i}
            i={i}
            active={activePage === i}
            onClick={() => setActivePage(i)}
          />
        ))}
      </motion.div>
    </div>
  );
};

function AppIcon({
  mouseX,
  i,
  active,
  onClick,
}: {
  mouseX: MotionValue;
  i: number;
  active: boolean;
  onClick: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [60, 100, 60]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const links = ["/", "/about", "/links"];
  const icons = [FaHouse, FaUser, PiLinkSimpleBold];
  const IconComponent = icons[i];

  const handleClick = () => {
    onClick();
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width,
      }}
      className="cursor-pointer flex justify-center items-center rounded-full"
      onClick={handleClick}
    >
      <Link
        href={links[i]}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: active ? `2px solid  "#b8b7b7"` : "none",
            padding: 14,
          }}
        >
          <IconComponent
            style={{
              width: "100%",
              height: "100%",
              color: "#9B9B9B",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default MenuDesktop;
