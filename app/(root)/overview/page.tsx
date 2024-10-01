// src/pages/dashboard/overview.tsx
import { Card, CardContent } from '@/components/ui/card';

const OverviewPage = () => {
  return (
      <Card>
        <CardContent>
          <h2 className="text-2xl font-bold mt-2 mb-4">Waste Detection Overview</h2>
          <div className="h-96 bg-gray-200">
            {/* Placeholder for map integration */}
            <div id="map" className="w-full h-full"></div>
          </div>
        </CardContent>
      </Card>
  );
};

export default OverviewPage;
