import { motion } from "framer-motion";
import React from "react";

type TextButtonProps = {
  primary: string;
  confirm: () => void;
};

export default function TextButton({ primary, confirm }: TextButtonProps) {
  return (
    <motion.button
      className="w-full text-end font-bold text-blue-500 active:text-blue-900"
      onClick={confirm}
    >
      {primary}
    </motion.button>
  );
}
