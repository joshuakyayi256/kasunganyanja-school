import React from "react";

type State = { hasError: boolean; error?: any };

export default class DevErrorBoundary extends React.Component<React.PropsWithChildren, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
    }

    componentDidCatch(error: any, info: any) {
        console.error("❌ React error boundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 16 }}>
                    <h2 style={{ color: "#ff6b6b" }}>Something crashed on this page.</h2>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {String(this.state.error?.message || this.state.error)}
                    </pre>
                </div>
            );
        }
        return this.props.children;
    }
}
