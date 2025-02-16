import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Product Strategy", value: 95 },
  { name: "Agile/Scrum", value: 90 },
  { name: "Financial Analysis", value: 85 },
  { name: "User Research", value: 88 },
  { name: "Data Analytics", value: 82 },
];

export default function SkillsChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}
