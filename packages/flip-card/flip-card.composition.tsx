import React from "react";

import { FlipCard } from "./flip-card";
import {
  customFlipLabel,
  details,
  Icon,
  iconDataTestId,
  title,
  Wrapper,
} from "./test";

export const BasicFlipCard = () => {
  return (
    <Wrapper>
      <FlipCard
        title={title}
        icon={<Icon data-testid={iconDataTestId} />}
        details={details}
      />
    </Wrapper>
  );
};
export const CustomMoreLabelFlipCard = () => {
  return (
    <Wrapper>
      <FlipCard
        title={title}
        icon={<Icon data-testid={iconDataTestId} />}
        flipLabel={customFlipLabel}
        details={details}
      />
    </Wrapper>
  );
};
