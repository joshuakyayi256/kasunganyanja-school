import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "./ui/Button";

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
                <div className="min-h-[400px] flex items-center justify-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100 m-4">
                    <div className="max-w-md text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-red-50 text-red-500 mb-6">
                            <AlertTriangle className="size-8" />
                        </div>
                        <h2 className="text-2xl font-black text-navy mb-4">Something went wrong</h2>
                        <p className="text-slate-500 mb-6 text-sm">
                            The application encountered an unexpected error. This has been logged for our technical team.
                        </p>
                        
                        <div className="bg-white p-4 rounded-2xl border border-red-100 text-left mb-8 overflow-auto">
                            <pre className="text-[10px] font-mono text-red-600 whitespace-pre-wrap">
                                {String(this.state.error?.message || this.state.error)}
                            </pre>
                        </div>

                        <Button 
                            onClick={() => window.location.reload()} 
                            color="navy" 
                            className="flex items-center gap-2 mx-auto"
                        >
                            <RefreshCw className="size-4" /> Reload Page
                        </Button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}