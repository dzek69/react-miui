import type { ComponentProps } from "@stitches/react";

import { StyledCard } from "./Card.styled";

type CardProps = ComponentProps<typeof StyledCard>;

export { StyledCard as Card };
export type { CardProps };
