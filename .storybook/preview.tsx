import type { Preview } from "@storybook/react";
import { cssReset } from "../src";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <>
                <style id={"miui-css-reset"} dangerouslySetInnerHTML={{__html: cssReset}}/>
                <style>
                    {`.docblock-argstable textarea[id] { box-sizing: content-box; }`}
                    {`#storybook-root { height: 100%; }`}
                </style>
                <Story/>
            </>
        ),
    ]

};

export default preview;
