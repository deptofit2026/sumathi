
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Key Projects</h1>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">Policy Based Load Balancing in Grid Environment</h3>
          <p className="text-sm text-foreground/70 mb-2">Apr 2010 – Mar 2011</p>
          <p className="text-foreground/80">Implemented a fuzzy-based system for efficient global load balancing in grid computing.</p>
        </Card>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">Hybrid Decomposition for Query Processing in Grid Databases</h3>
          <p className="text-sm text-foreground/70 mb-2">Aug 2008 – Aug 2009</p>
          <p className="text-foreground/80">Designed a secure and efficient resource management approach for grid database query processing.</p>
        </Card>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">Optimal Jamming Attacks and Network Defense Policies in Wireless Sensor Network</h3>
          <p className="text-foreground/80">Developed strategies to detect and defend against jamming attacks in sensor networks.</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">Optimizing Resources Conflict in Workflow Management System</h3>
          <p className="text-foreground/80">Proposed methods to minimize resource conflicts and improve efficiency in workflow systems.</p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Projects;
