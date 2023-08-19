import { useState } from "react";

const useNotification = function () {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [noticeType, setNoticeType] = useState("");

  const showNotice = (msg: string, notice: string) => {
    setShow(true);
    setMessage(msg);
    setNoticeType(notice);
  };
  return { showNotice, message, show, noticeType, setShow };
};

export default useNotification;
