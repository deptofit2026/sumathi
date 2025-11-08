
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-2">Nivedha Prabha R</h2>
              <p className="text-sm text-foreground/70">Assistant Professor, Department of Information Technology.</p>
              <div className="mt-4 text-sm text-foreground/80">
                <p><strong>Email:</strong> nivedharam88@gmail.com</p>
                <p><strong>Phone:</strong> +91 9600363582</p>
                <p><strong>Location:</strong> (City, India)</p>
              </div>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Profile</h3>
              <p className="text-foreground/80 leading-relaxed">Passionate and student-focused educator with expertise in computer science, dedicated to fostering academic excellence, innovation, and effective student mentorship. Eager to resume an academic career that blends teaching, research, and continuous learning.</p>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ul className="list-disc pl-5 text-foreground/80">
                <li>Master of Engineering, Computer Science & Engineering — Anna University (2009-2011)</li>
                <li>Bachelor of Engineering, Computer Science & Engineering — Anna University (2005-2009)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Certifications & Awards</h3>
              <ul className="list-disc pl-5 text-foreground/80">
                <li>NCACT (2012)</li>
                <li>NCCT (2012)</li>
                <li>ICEST (2011)</li>
                <li>ETICSE (2011)</li>
                <li>NCRAIT (2011)</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
