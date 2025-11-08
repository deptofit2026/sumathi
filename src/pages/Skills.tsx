
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Skills = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Skills & Technologies</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Core Technologies</h3>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Grid Computing </li>
              <li>Cloud Computing</li>
              <li>Computer Networks</li>
              <li>Database Management Systems (DBMS)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Networking Knowledge</h3>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Cisco Certified Network Associate (CCNA 1)</li>
              <li>Cisco Certified Network Associate (CCNA 2)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Programming & Technical Skills</h3>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
