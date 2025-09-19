import Button from "./ui/Button";
import Card from "./ui/Card";
import { Link } from "react-router-dom";

export default function EnrollmentApply() {
  return (
    <Card>
      <h3 className="text-2xl font-bold">Enrollment</h3>
      <p className="mt-2 text-black/80">
        We admit learners from Primary 1 to Primary 7. Admissions are rolling;
        priority is given to families within Kasunganyanja Parish and nearby
        communities.
      </p>
      <ul className="mt-3 list-disc pl-5 text-black/80">
        <li>
          Requirements: birth certificate copy, passport photo, previous report
          (if any).
        </li>
        <li>Interviews: short reading & numeracy check (P2–P7).</li>
        <li>Financial assistance available for vulnerable families.</li>
      </ul>
      <div className="mt-4 flex gap-3">
        <Button asChild>
          <Link to="mailto:baniinah@gmail.com">Apply Online</Link>
        </Button>
        <Button asChild variant="outline">
          <a href="tel:+256757158407">Call Admissions</a>
        </Button>
      </div>
    </Card>
  );
}
