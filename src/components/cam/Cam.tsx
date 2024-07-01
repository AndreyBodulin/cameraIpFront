import React, { FC } from "react";
import styles from "./Cam.module.scss";
import { Checkbox } from "antd";

type CamProps = {
  name: string;
  rtsp: string;
  url: string;
  onCheck: (rtsp: string, url: string) => void;
};

export const Cam: FC<CamProps> = ({ name, url, rtsp, onCheck }) => {
  return (
    <div className={styles.container}>
      <Checkbox onChange={() => onCheck(rtsp, url)}>{name}</Checkbox>
    </div>
  );
};
