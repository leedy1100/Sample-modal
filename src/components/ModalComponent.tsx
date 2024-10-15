"use client";

import React, { useState } from "react";
import BasicModal from "./common/modal/BasicModal";
import { AnimatePresence } from "framer-motion";

export default function ModalComponent() {
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const confirm = (type: string) => {
    closeModal(type);
  };

  const cancel = (type: string) => {
    closeModal(type);
  };

  const goSite = (type: string) => {
    closeModal(type);
  };

  const closeModal = (type: string) => {
    switch (type) {
      case "one":
        setIsOne(false);
        break;
      case "two":
        setIsTwo(false);
        break;
      case "three":
        setIsThree(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          className="bg-gray-200 rounded p-2 active:bg-gray-400"
          onClick={() => setIsThree(true)}
        >
          two button modal open(확인/이동)
        </button>
        <button
          className="bg-gray-200 rounded p-2 active:bg-gray-400"
          onClick={() => setIsTwo(true)}
        >
          two button modal open(취소/확인)
        </button>
        <button
          className="bg-gray-200 rounded p-2 active:bg-gray-400"
          onClick={() => setIsOne(true)}
        >
          one button modal open
        </button>
      </div>
      <AnimatePresence>
        {isOne && (
          <BasicModal
            confirm={() => confirm("one")}
            cancel={() => cancel("one")}
            title="확인 모달입니다."
            primary="확인"
            buttonType="one"
          />
        )}
        {isTwo && (
          <BasicModal
            confirm={() => confirm("two")}
            cancel={() => cancel("two")}
            title="확인/취소 모달입니다."
            information="확인 시 우측 버튼, 취소 시 좌측 버튼을 눌러주세요."
            secondary="취소"
            primary="확인"
          />
        )}
        {isThree && (
          <BasicModal
            confirm={() => cancel("three")}
            cancel={() => cancel("three")}
            title="다음 절차 진행 모달입니다."
            information="지금 절차 진행 시 우측 버튼, 나중에 진행을 원한다면 좌측 버튼을 눌러주세요."
            secondary="확인"
            primary="이동하기"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
