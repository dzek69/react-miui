import { styled } from "../../../theme";
import { StyledInput } from "../input/Input.styled";
import {
    suffixButton,
    timeInput,
    wheelFocusRing,
    wheelHighlight,
    wheelItem,
    wheelPadder,
    wheelsContainer,
    wheelSeparator,
    wheelViewport,
    wheelWrapper,
} from "./TimePicker.css";

const StyledTimeInput = styled(StyledInput, timeInput);

const StyledSuffixButton = styled("button", suffixButton);

const StyledWheelsContainer = styled("div", wheelsContainer);

const StyledWheelViewport = styled("div", wheelViewport);

const StyledWheelWrapper = styled("div", wheelWrapper);

const StyledWheelPadder = styled("div", wheelPadder);

const StyledWheelItem = styled("div", wheelItem);

const StyledWheelHighlight = styled("div", wheelHighlight);

const StyledWheelSeparator = styled("div", wheelSeparator);

const StyledWheelFocusRing = styled("div", {
    ...wheelFocusRing,
    [StyledWheelViewport.toString() + ":focus-visible + &"]: {
        borderColor: "$focusColor",
    },
});

export {
    StyledTimeInput,
    StyledSuffixButton,
    StyledWheelsContainer,
    StyledWheelViewport,
    StyledWheelWrapper,
    StyledWheelPadder,
    StyledWheelItem,
    StyledWheelHighlight,
    StyledWheelSeparator,
    StyledWheelFocusRing,
};
