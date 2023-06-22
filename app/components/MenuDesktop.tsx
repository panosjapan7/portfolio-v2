import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaHouse, FaUser } from "react-icons/fa6";

const MenuDesktop = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="absolute bottom-20 end-0.5 right-0 left-0 mx-auto w-max ">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3"
      >
        {[...Array(3).keys()].map((i) => (
          <AppIcon mouseX={mouseX} key={i} i={i} />
        ))}
      </motion.div>
    </div>
  );
};

function AppIcon({ mouseX, i }: { mouseX: MotionValue; i: number }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const links: string[] = ["/", "/about", "/links"];
  const icons = [FaHouse, FaUser, PiLinkSimpleBold];
  const IconComponent = icons[i];

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="cursor-pointer flex justify-center items-center"
    >
      <Link href={links[i]} style={{ height: "100%", width: "100%" }}>
        <IconComponent
          style={{ width: "80%", height: "80%", color: "#9B9B9B" }}
        />
      </Link>
    </motion.div>
  );
}

export default MenuDesktop;
