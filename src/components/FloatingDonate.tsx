import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function FloatingDonate() {
    return (
        <div className="fixed bottom-5 right-5 z-40">
            <Button asChild size="lg">
                <Link to="/donate">Donate Now</Link>
            </Button>
        </div>
    );
}
