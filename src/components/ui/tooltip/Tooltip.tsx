import React, { forwardRef } from "react";

import * as RadixTooltip from "@radix-ui/react-tooltip";

import { StyledArrow, StyledContent } from "./Tooltip.styled";

type Side = "top" | "right" | "bottom" | "left";
type Align = "start" | "center" | "end";

interface TooltipProviderProps {
    /**
     * The duration from when the pointer enters the trigger until the tooltip opens, in milliseconds.
     * Default: `500`.
     */
    delayDuration?: number;
    /**
     * If a tooltip has opened, the duration during which other tooltips open instantly
     * (without waiting for `delayDuration`), in milliseconds.
     * Default: `300`.
     */
    skipDelayDuration?: number;
    /**
     * When `true`, the tooltip content stays open while the pointer is over it.
     * Set to `false` for stricter "hover the trigger only" behavior.
     * Default: `true`.
     */
    disableHoverableContent?: boolean;
    children: React.ReactNode;
}

/**
 * Required wrapper for `<Tooltip>`. Render it once near the root of your app — usually
 * around (or just inside) your top-level layout. It enables group-delay behavior via
 * `skipDelayDuration`: once one tooltip in the subtree has been seen, the next ones
 * open without waiting for `delayDuration`.
 *
 * A single `<Tooltip>` without a `<TooltipProvider>` ancestor will throw at runtime.
 */
const TooltipProvider = (props: TooltipProviderProps) => {
    const radixProps: Omit<React.ComponentProps<typeof RadixTooltip.Provider>, "children"> = {};
    if (props.delayDuration !== undefined) { radixProps.delayDuration = props.delayDuration; }
    if (props.skipDelayDuration !== undefined) { radixProps.skipDelayDuration = props.skipDelayDuration; }
    if (props.disableHoverableContent !== undefined) {
        radixProps.disableHoverableContent = props.disableHoverableContent;
    }

    return (
        <RadixTooltip.Provider {...radixProps}>
            {props.children}
        </RadixTooltip.Provider>
    );
};

interface TooltipProps {
    /**
     * The content to render inside the tooltip.
     */
    content: React.ReactNode;
    /**
     * Preferred side of the trigger to render the tooltip against. Will be flipped
     * automatically on collision unless `avoidCollisions` is `false`.
     * Default: `"top"`.
     */
    side?: Side;
    /**
     * Distance in pixels between the trigger and the tooltip.
     * Default: `6`.
     */
    sideOffset?: number;
    /**
     * Alignment along the chosen side.
     * Default: `"center"`.
     */
    align?: Align;
    /**
     * Offset in pixels from the `align` edge.
     * Default: `0`.
     */
    alignOffset?: number;
    /**
     * The duration from when the pointer enters the trigger until the tooltip opens.
     * Overrides the provider's `delayDuration` for this tooltip only.
     */
    delayDuration?: number;
    /**
     * When `true`, the tooltip will not flip to the opposite side on collision.
     * Default: `true` (collisions are avoided).
     */
    avoidCollisions?: boolean;
    /**
     * When `true`, renders an arrow pointing at the trigger.
     * Default: `true`.
     */
    arrow?: boolean;
    /**
     * Controlled open state. If omitted, the tooltip is uncontrolled.
     */
    open?: boolean;
    /**
     * Initial open state for the uncontrolled mode.
     */
    defaultOpen?: boolean;
    /**
     * Called when the open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Additional class name applied to the tooltip content.
     */
    className?: string;
    /**
     * The element that triggers the tooltip on hover/focus. Must be a single React element
     * that can receive a ref and event handlers (a DOM element or a component using forwardRef).
     */
    children: React.ReactElement;
}

/**
 * A tooltip that appears on hover or keyboard focus of its child trigger.
 *
 * Powered by Radix UI under the hood, so accessibility (ARIA, focus, escape, group delay)
 * is handled. The content is portalled to `document.body`, so it escapes stacking contexts
 * and renders above modals/drawers.
 *
 * Requires a `<TooltipProvider>` somewhere up the tree.
 *
 * @example
 * ```tsx
 * <TooltipProvider>
 *     <Tooltip content="Save changes" side="bottom">
 *         <Button>Save</Button>
 *     </Tooltip>
 * </TooltipProvider>
 * ```
 */
// eslint-disable-next-line react/no-multi-comp
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
    const {
        content,
        side = "top",
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        sideOffset = 6,
        align = "center",
        alignOffset = 0,
        delayDuration,
        avoidCollisions = true,
        arrow = true,
        open,
        defaultOpen,
        onOpenChange,
        className,
        children,
    } = props;

    const rootProps: React.ComponentProps<typeof RadixTooltip.Root> = {};
    if (open !== undefined) { rootProps.open = open; }
    if (defaultOpen !== undefined) { rootProps.defaultOpen = defaultOpen; }
    if (onOpenChange !== undefined) { rootProps.onOpenChange = onOpenChange; }
    if (delayDuration !== undefined) { rootProps.delayDuration = delayDuration; }

    return (
        <RadixTooltip.Root {...rootProps}>
            <RadixTooltip.Trigger asChild={true}>
                {children}
            </RadixTooltip.Trigger>
            <RadixTooltip.Portal>
                <StyledContent
                    ref={ref}
                    side={side}
                    sideOffset={sideOffset}
                    align={align}
                    alignOffset={alignOffset}
                    avoidCollisions={avoidCollisions}
                    className={className}
                >
                    {content}
                    {/* eslint-disable-next-line react/jsx-no-leaked-render */}
                    {arrow && <StyledArrow width={10} height={5} />}
                </StyledContent>
            </RadixTooltip.Portal>
        </RadixTooltip.Root>
    );
});

Tooltip.displayName = "Tooltip";
Tooltip.toString = () => StyledContent.toString();

const TooltipContentSelector = StyledContent.toString();

export {
    Tooltip,
    TooltipProvider,
    TooltipContentSelector,
};
export type { TooltipProps, TooltipProviderProps };
