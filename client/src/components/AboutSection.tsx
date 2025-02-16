import { motion } from "framer-motion";
import SkillsChart from "./SkillsChart";
import { CalendarDays, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experience = [
  {
    title: "Senior Product Manager",
    company: "Your Company Name",
    period: "2020 - Present",
    description: "Your role description",
  },
  {
    title: "Product Manager",
    company: "Previous Company Name",
    period: "2018 - 2020",
    description: "Your previous role",
  },
];

const education = [
  {
    degree: "Your Degree",
    school: "Your University",
    year: "2018",
  },
  {
    degree: "Your Previous Degree",
    school: "Your Previous School",
    year: "2016",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                Your professional summary here. Describe your experience,
                expertise, and what makes you unique in the fintech space.
              </p>

              <SkillsChart />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Experience</h3>
                  </div>

                  <div className="space-y-4">
                    {experience.map((job) => (
                      <div key={job.title} className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Education</h3>
                  </div>

                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.degree} className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}