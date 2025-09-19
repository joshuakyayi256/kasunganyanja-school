import { useState } from "react";
import { school } from "../data/school";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EnrollmentApply from "../components/EnrollmentApply";
import VisitScheduler from "../components/VisitScheduler";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const mapsQuery = encodeURIComponent(
    "Kasunganyanja Parish, Kibiito Sub County, Bunyangabu District, Uganda"
  );

  return (
    <div>
      <PageHero
        size="lg"
        title="Contact & Admissions"
        subtitle={school.location}
      />

      <section className="section grid lg:grid-cols-2 gap-8">
        <Reveal>
          <Card>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-lg text-black/85">
              Phone: <strong>{school.contacts.phone}</strong>
              <br />
              Email: <strong>{school.contacts.email}</strong>
            </p>
            <p className="mt-2 text-black/80">
              We welcome prospective parents, partners, and well-wishers. Reach
              out for admissions details, school visits, or ways to support our
              learners.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <EnrollmentApply />
        </Reveal>
      </section>

      <section className="section grid lg:grid-cols-2 gap-8">
        <Reveal>
          <Card>
            <h4 className="text-lg font-semibold mb-2">Location Map</h4>
            <div className="rounded-xl overflow-hidden border border-black/10">
              <iframe
                title="Map"
                src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <VisitScheduler />
        </Reveal>
      </section>

      <section className="section">
        <Card>
          <h3 className="text-2xl font-bold">Send a Message</h3>
          <form
            className="mt-3 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium">Your Name</label>
              <input
                className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black"
                rows={5}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg">
                Send
              </Button>
            </div>
            {sent && (
              <p className="text-green-600 text-sm">
                Thanks! We’ll respond soon.
              </p>
            )}
          </form>
        </Card>
      </section>
    </div>
  );
}
