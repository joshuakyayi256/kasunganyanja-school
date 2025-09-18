import { school } from "../data/school";

export default function Footer() {
    return (
        <footer className="mt-10 border-t">
            <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 md:grid-cols-3">
                <div>
                    <div className="font-semibold">{school.name}</div>
                    <div className="text-sm text-gray-600">{school.location}</div>
                </div>
                <div className="text-sm">
                    <div><span className="font-medium">Tel:</span> {school.contacts.phone}</div>
                    <div><span className="font-medium">Email:</span> {school.contacts.email}</div>
                </div>
                <div className="text-sm text-gray-600">
                    © {new Date().getFullYear()} {school.name}.Crafted by Synsify - All rights reserved.
                </div>
            </div>
        </footer>
    );
}
