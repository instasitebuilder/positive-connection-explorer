import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Welcome to CodeHive</CardTitle>
            <CardDescription className="text-center">
              Your platform for collaborative coding and learning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Start your coding journey with peer programming sessions, HR interview practice, and more.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;