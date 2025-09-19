import Card from "./ui/Card";

const ROWS = [
  ["08:00 – 08:30", "Arrival & Morning Prep"],
  ["08:30 – 10:30", "Lessons (Literacy / Numeracy / Science)"],
  ["10:30 – 11:00", "Break"],
  ["11:00 – 13:00", "Lessons (Social Studies / RE / Swahili)"],
  ["13:00 – 14:00", "Lunch & Play"],
  ["14:00 – 15:30", "Practice / Clubs / Reading"],
  ["15:30 – 16:30", "Physical Education / Sports"],
  ["16:30 – 17:00", "Reflection & Dismissal"],
];

export default function DailySchedule() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
        Daily Schedule (8:00 – 5:00 PM)
      </h3>
      <Card className="mt-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-sm text-black/60">
            <tr>
              <th className="py-2 pr-4">Time</th>
              <th className="py-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([time, activity]) => (
              <tr key={time} className="border-t border-black/10">
                <td className="py-3 pr-4 whitespace-nowrap">{time}</td>
                <td className="py-3">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
