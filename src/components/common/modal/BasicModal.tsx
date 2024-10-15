import { motion } from "framer-motion";
import React from "react";

type ModalProps = {
  confirm: () => void;
  cancel?: () => void;
  title: string;
  information?: string;
  buttonType?: "one" | "two";
  secondary?: string;
  primary?: string;
};

export default function BasicModal({
  confirm,
  cancel,
  title,
  information,
  buttonType = "two",
  secondary = "취소",
  primary = "확인",
}: ModalProps) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-10">
      <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="flex flex-col justify-center items-center gap-5 w-[300px] min-h-[120px] bg-white rounded-2xl z-[11] mx-10 p-5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0, delay: 0.1 } }}
      >
        {/* title */}
        <div className="font-bold break-keep whitespace-normal">{title}</div>
        {/* information text */}
        {information && (
          <div className="text-sm break-keep whitespace-normal">
            {information}
          </div>
        )}
        {buttonType === "one" && (
          <motion.button
            className="w-full text-end font-bold text-blue-500 active:text-blue-900"
            onClick={confirm}
          >
            {primary}
          </motion.button>
        )}
        {/* action button */}
        {buttonType === "two" && (
          <div className="flex gap-5">
            <motion.button
              className="font-bold w-[120px] h-12 bg-gray-200 rounded-xl"
              onClick={cancel}
              whileTap={{ scale: 0.9 }}
            >
              {secondary}
            </motion.button>
            <motion.button
              className="font-bold w-[120px] h-12 bg-black text-white rounded-xl"
              onClick={confirm}
              whileTap={{ scale: 0.9 }}
            >
              {primary}
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
