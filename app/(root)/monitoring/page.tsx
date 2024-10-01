import { Button } from '@/components/ui/button';

const MonitoringPage = () => {
  return (
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Live Monitoring</h2>
        <div className="mb-4">
          {/* Placeholder for video stream */}
          <video className="w-full h-64 bg-gray-200"></video>
        </div>
        <Button className="mr-2">Start Feed</Button>
        <Button>Stop Feed</Button>
      </div>
  );
};

export default MonitoringPage;
