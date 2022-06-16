import React, { FC } from "react";
import { TabItem, TabBarStyle } from "./styles";

export type TabProps = {
  label: string;
  index: string | number;
  width: number;
  onClick: (e?: React.MouseEvent) => void;
  isSelected: boolean;
  styleProps: TabBarStyle;
  tabItemCSS?: string;
};

export const TabHeader: React.FC<TabProps> = ({
  index,
  onClick,
  width,
  label,
  isSelected,
  styleProps,
  tabItemCSS = ""
}) => {
  return (
    <TabItem
      key={index}
      onClick={onClick}
      data-item={index}
      isSelected={isSelected}
      width={width}
      styleProps={styleProps}
      tabItemCSS={tabItemCSS}
    >
      {label}
    </TabItem>
  );
};

export const Tab: React.FC<Pick<TabProps, "label">> = ({ children }) => {
  return <>{children}</>;
};
