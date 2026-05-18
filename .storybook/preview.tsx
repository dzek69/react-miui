import React from "react";
import type { Preview } from "@storybook/react";
import {cssReset, injectGlobalStyles, ToasterProvider, TooltipProvider} from "../src";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) =>{
            injectGlobalStyles();
            return (
                <>
                    <style id={"miui-css-reset"} dangerouslySetInnerHTML={{__html: cssReset}}/>
                    <style>
                        {`.docblock-argstable textarea[id] { box-sizing: content-box; }`}
                        {`#storybook-root { height: 100%; }`}
                    </style>
                    {/* transform creates a stacking context — mirrors what real apps */}
                    {/* often do above ToasterProvider and surfaces the toast-under-modal bug. */}
                    <div style={{transform: "translateZ(0)"}}>
                        <ToasterProvider>
                            <TooltipProvider>
                                <Story/>
                            </TooltipProvider>
                        </ToasterProvider>
                    </div>
                </>
            );
        },
    ]

};

export default preview;
