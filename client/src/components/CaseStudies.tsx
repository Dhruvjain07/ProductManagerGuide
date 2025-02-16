import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Users, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Digital Payment Platform Redesign",
    problem: "Legacy system with poor user experience and high transaction failure rate",
    solution: "Led complete platform redesign with modern architecture",
    impact: [
      "45% increase in user satisfaction",
      "30% reduction in transaction failures",
      "$2M additional revenue"
    ]
  },
  {
    title: "Investment Analytics Dashboard",
    problem: "Lack of real-time investment insights for retail investors",
    solution: "Developed AI-powered analytics dashboard",
    impact: [
      "85% user adoption rate",
      "60% increase in trade volume",
      "4.8/5 user rating"
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b">
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Problem:</h4>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Impact:</h4>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
