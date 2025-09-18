import { useState } from "react";
import { school } from "../data/school";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ImageSplit from "../components/ImageSplit";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const mapsQuery = encodeURIComponent("Kasunganyanja Parish, Kibiito Sub County, Bunyangabu District, Uganda");

    return (
        <div>
            <PageHero size="lg" title="Contact Us" subtitle={school.location} />

            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <Card>
                        <h3 className="text-2xl font-bold">Get in touch</h3>
                        <p className="mt-2 text-lg text-black/85">
                            Phone: <strong>{school.contacts.phone}</strong><br />
                            Email: <strong>{school.contacts.email}</strong>
                        </p>
                        <p className="mt-2 text-black/80">
                            We welcome prospective parents, partners, and well-wishers. Reach out for admissions details,
                            school visits, or ways to support our learners.
                        </p>
                    </Card>

                    <Card>
                        <h4 className="font-semibold text-lg mb-2">Location Map</h4>
                        <div className="rounded-xl overflow-hidden border border-black/10">
                            <iframe
                                title="Map"
                                src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&ie=UTF8&iwloc=&output=embed`}
                                className="w-full h-64"
                                loading="lazy"
                            />
                        </div>
                    </Card>
                </div>

                <Card>
                    <h3 className="text-2xl font-bold">Send a Message</h3>
                    <form
                        className="mt-3 space-y-4"
                        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    >
                        <div>
                            <label className="block text-sm font-medium">Your Name</label>
                            <input className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Your Email</label>
                            <input type="email" className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black" rows={5} required />
                        </div>
                        <Button type="submit" size="lg">Send</Button>
                        {sent && <p className="text-green-600 text-sm">Thanks! We’ll respond soon.</p>}
                    </form>
                </Card>
            </div>

            <ImageSplit
                title="Visit the school"
                text="We’re located 25 km along the Fort Portal–Kasese Highway. Contact us to schedule a visit or join an open day."
                img="/images/hero-main.jpg"
            />
        </div>
    );
}
