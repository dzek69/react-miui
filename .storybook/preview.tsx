import React from "react";
import type { Preview } from "@storybook/react";
import {cssReset, injectGlobalStyles, ToasterProvider} from "../src";

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
                    <ToasterProvider>
                        <Story/>
                    </ToasterProvider>
                </>
            );
        },
    ]

};

export default preview;
