import clsx from "clsx";
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

const modalVariants = {
  start: {
    opacity: 0,
    scale: 0.8,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
    },
    exit: {
      opacity: 0,
    },
  },
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
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center">
      <div className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-50"></div>
      <motion.div
        className={clsx(
          // Z-index
          "z-[11]",
          // 여백 및 간격
          "mx-10 gap-5 p-5",
          // 레이아웃 관련 클래스
          "flex flex-col items-center justify-center",
          // 크기 관련 클래스
          "min-h-[120px] w-[300px] rounded-2xl",
          // 색상 관련 클래스
          "bg-white text-gray-700",
          // 쉐도우
          "shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]",
        )}
        variants={modalVariants}
        initial="start"
        animate="end"
        exit="exit"
      >
        {/* title */}
        <div className="whitespace-normal break-keep font-bold">{title}</div>
        {/* information text */}
        {information && (
          <div className="whitespace-normal break-keep text-sm">
            {information}
          </div>
        )}
        {/* action one button */}
        {buttonType === "one" && (
          <motion.button
            className="w-full text-end font-bold text-blue-500 active:text-blue-900"
            onClick={confirm}
          >
            {primary}
          </motion.button>
        )}
        {/* action two button */}
        {buttonType === "two" && (
          <div className="flex w-full justify-between gap-5">
            <motion.button
              className="h-12 w-full rounded-xl bg-gray-200 font-bold"
              onClick={cancel}
              whileTap={{ scale: 0.95 }}
            >
              {secondary}
            </motion.button>
            <motion.button
              className="h-12 w-full rounded-xl bg-black font-bold text-white"
              onClick={confirm}
              whileTap={{ scale: 0.95 }}
            >
              {primary}
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
