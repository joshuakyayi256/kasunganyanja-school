import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Stat from "../components/Stat";
import FloatingDonate from "../components/FloatingDonate";
import ImageSplit from "../components/ImageSplit";
import { school } from "../data/school";
import { Users, GraduationCap, Landmark, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

const features = [
    { icon: ShieldCheck, title: "Safe & Caring", text: "We foster discipline, respect, and character—children learn in a secure, loving environment." },
    { icon: Sparkles, title: "Creative Learning", text: "Active literacy, numeracy, and science with hands-on activities that spark curiosity." },
    { icon: HeartHandshake, title: "Community First", text: "Parents, teachers, and local leaders partner to support each learner’s journey." },
];

export default function Home() {
    return (
        <>
            <PageHero
                size="xl"
                bgImage="/images/hero-main.jpg"
                title={school.name}
                subtitle={`A licensed mixed day school (P1–P7) committed to “${school.motto}”.`}
                right={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button asChild><Link to="/about">Learn More</Link></Button>
                        <Button asChild variant="outline"><Link to="/donate">Donate</Link></Button>
                        <Badge>Founded {school.founded}</Badge>
                        <Badge>{school.enrollment}+ learners</Badge>
                    </div>
                }
            />

            {/* Impact counters */}
            <section className="max-w-6xl mx-auto px-4 pb-10 grid sm:grid-cols-3 gap-4">
                <Card>
                    <div className="flex items-center gap-3">
                        <Users className="size-5" />
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold"><Stat value={school.enrollment} />+</div>
                            <div className="text-sm text-black/70">Students</div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <GraduationCap className="size-5" />
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold">P1–P7</div>
                            <div className="text-sm text-black/70">Full Primary</div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <Landmark className="size-5" />
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold">{school.founded}</div>
                            <div className="text-sm text-black/70">Founded</div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* What makes us different */}
            <section className="max-w-6xl mx-auto px-4 pb-12">
                <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {features.map((f, i) => (
                        <motion.div key={f.title}
                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }} transition={{ duration: .5, delay: i * .05 }}
                        >
                            <Card>
                                <div className="p-2 rounded-xl bg-black/5 inline-block mb-2">
                                    <f.icon className="size-5" />
                                </div>
                                <h3 className="font-semibold text-lg">{f.title}</h3>
                                <p className="mt-2 text-black/80 text-lg">{f.text}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Campus life image split */}
            <ImageSplit
                title="Learning that shapes character"
                text="Academic excellence grows alongside values: responsibility, honesty, and service. Our teachers model strong character and nurture children to be confident, curious, and kind."
                img="/images/campus-1.jpg"
            />
            <ImageSplit
                reverse
                title="Parents as partners"
                text="We keep parents close to the learning process through meetings, open days, and friendly communication. Together we help each learner thrive."
                img="/images/campus-2.jpg"
            />

            <FloatingDonate />
        </>
    );
}
