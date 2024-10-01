import DeviceForm from '@/components/shared/DeviceForm';
import DeviceList from '@/components/shared/DeviceList';

const DevicesPage = () => {
  return (
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Devices</h2>
        <DeviceForm />
        <DeviceList />
      </div>
  );
};

export default DevicesPage;
