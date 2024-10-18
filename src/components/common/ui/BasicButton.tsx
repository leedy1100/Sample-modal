import { scale } from "@/animation/style";
import { motion } from "framer-motion";
import React from "react";

type BasicButtonProps = {
  secondary: string;
  cancel?: () => void;
};

export default function BasicButton({ secondary, cancel }: BasicButtonProps) {
  return (
    <motion.button
      className="h-12 w-full rounded-2xl bg-gray-300/75 font-bold hover:bg-gray-300 active:bg-gray-300/60"
      onClick={cancel}
      whileTap={scale.semiSmall}
    >
      {secondary}
    </motion.button>
  );
}
