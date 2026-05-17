import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Div } from "../../native";
import { Button } from "../button/Button";
import { toast, useToaster } from "./Toaster";

const docs = [
    "Toast notifications powered by [sonner](https://sonner.emilkowal.ski).",
    "",
    "## Setup",
    "",
    "Wrap your app (typically once, near the root) with `ToasterProvider`.",
    "It mounts sonner's `<Toaster />` and renders children unchanged:",
    "",
    "```tsx",
    "import { ToasterProvider } from \"react-miui\";",
    "",
    "export const App = () => (",
    "    <ToasterProvider position={\"bottom-center\"} richColors>",
    "        <YourApp />",
    "    </ToasterProvider>",
    ");",
    "```",
    "",
    "`ToasterProvider` accepts every prop sonner's `<Toaster />` accepts",
    "(`position`, `theme`, `richColors`, `expand`, `closeButton`, `duration`, …).",
    "",
    "## Triggering toasts",
    "",
    "```tsx",
    "// 1. Legacy hook — back-compat. (text, timeout?) => id",
    "const notify = useToaster();",
    "notify(\"Saved!\", 3000);",
    "",
    "// 2. Sonner's `toast` re-exported — full API surface.",
    "toast.success(\"Saved!\");",
    "toast.error(\"Failed\", { description: \"Try again\" });",
    "toast.promise(saveAsync(), { loading: \"…\", success: \"ok\", error: \"x\" });",
    "```",
].join("\n");

const meta: Meta = {
    title: "Components/UI/Toaster",
    tags: ["autodocs", "ui"],
    parameters: { docs: { description: { component: docs } } },
    argTypes: {
        text: { control: { type: "text" } },
        time: { control: { type: "number", step: 100 } },
    },
};

type Story = StoryObj;

const Primary: Story = {
    name: "useToaster hook (legacy API)",
    args: { text: "Lorem ipsum dolor sit amet", time: 5000 },
    render: (args) => {
        const notify = useToaster();
        const { text, time } = args as { text: string; time: number };
        const handleClick = () => { notify(text || "Lorem ipsum dolor sit amet", time); };

        return (
            <Div css={{ minHeight: 200 }}>
                <Button onClick={handleClick}>Show toast</Button>
            </Div>
        );
    },
};

const Variants: Story = {
    name: "Variants (success / error / info / warning)",
    render: () => (
        <Div css={{ display: "flex", gap: 8, flexWrap: "wrap", minHeight: 200 }}>
            <Button onClick={() => { toast("Default toast"); }}>Default</Button>
            <Button onClick={() => { toast.success("Profile saved"); }}>Success</Button>
            <Button onClick={() => { toast.error("Couldn't save profile"); }}>Error</Button>
            <Button onClick={() => { toast.info("New version available"); }}>Info</Button>
            <Button onClick={() => { toast.warning("Storage almost full"); }}>Warning</Button>
            <Button onClick={() => { toast.message("Plain message"); }}>Message</Button>
        </Div>
    ),
};

const WithDescription: Story = {
    name: "With description",
    render: () => {
        const handleClick = () => {
            toast.success("File uploaded", { description: "report.pdf · 2.3 MB" });
        };
        return (
            <Div css={{ minHeight: 200 }}>
                <Button onClick={handleClick}>Toast with description</Button>
            </Div>
        );
    },
};

const WithAction: Story = {
    name: "With action button",
    render: () => {
        const handleClick = () => {
            toast("Event has been created", {
                // eslint-disable-next-line no-console
                action: { label: "Undo", onClick: () => { console.log("Undo"); } },
            });
        };
        return (
            <Div css={{ minHeight: 200 }}>
                <Button onClick={handleClick}>Toast with action</Button>
            </Div>
        );
    },
};

const fakeSave = () => new globalThis.Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.3) {
            resolve({ name: "settings.json" });
        }
        else {
            reject(new Error("Network error"));
        }
    }, 1500);
});

const PromiseBased: Story = {
    name: "Promise-based",
    render: () => {
        const handleClick = () => {
            toast.promise(fakeSave(), {
                loading: "Saving…",
                success: (data) => `${data.name} saved`,
                error: (err: Error) => err.message,
            });
        };
        return (
            <Div css={{ minHeight: 200 }}>
                <Button onClick={handleClick}>Run promise toast</Button>
            </Div>
        );
    },
};

const Loading: Story = {
    name: "Manual loading + dismiss",
    render: () => {
        const handleClick = () => {
            const id = toast.loading("Working on it…");
            setTimeout(() => { toast.success("All done!", { id }); }, 2000);
        };
        return (
            <Div css={{ minHeight: 200 }}>
                <Button onClick={handleClick}>Show loading</Button>
            </Div>
        );
    },
};

const CustomDuration: Story = {
    name: "Custom duration",
    render: () => (
        <Div css={{ display: "flex", gap: 8, minHeight: 200 }}>
            <Button onClick={() => { toast("Gone in 1s", { duration: 1000 }); }}>1 second</Button>
            <Button onClick={() => { toast("Sticks 10s", { duration: 10000 }); }}>10 seconds</Button>
            <Button onClick={() => { toast("Sticky", { duration: Infinity }); }}>Sticky</Button>
        </Div>
    ),
};

const DismissAll: Story = {
    name: "Stack & dismiss all",
    render: () => {
        const handleShowThree = () => {
            toast("First");
            toast("Second");
            toast("Third");
        };
        const handleDismiss = () => { toast.dismiss(); };
        return (
            <Div css={{ display: "flex", gap: 8, minHeight: 200 }}>
                <Button onClick={handleShowThree}>Show three</Button>
                <Button onClick={handleDismiss}>Dismiss all</Button>
            </Div>
        );
    },
};

export { Primary, Variants, WithDescription, WithAction, PromiseBased, Loading, CustomDuration, DismissAll };

export default meta;
