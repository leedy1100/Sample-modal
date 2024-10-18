import { scale } from "@/animation/style";
import { motion } from "framer-motion";
import React from "react";

type PrimaryButtonProps = {
  primary: string;
  confirm: () => void;
};

export default function PrimaryButton({
  primary,
  confirm,
}: PrimaryButtonProps) {
  return (
    <motion.button
      className="h-12 w-full rounded-2xl bg-black/75 font-bold text-white hover:bg-black active:bg-black/60"
      onClick={confirm}
      whileTap={scale.semiSmall}
    >
      {primary}
    </motion.button>
  );
}
