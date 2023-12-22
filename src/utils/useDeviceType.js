import { useEffect, useState } from 'react';
import { DEVICE_TYPE, MAX_MOBILE_SIZE, MAX_TABLET_SIZE } from '../constants';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE.desktop);

  useEffect(() => {
    function updateDeviceType() {
      let deviceType = DEVICE_TYPE.desktop;
      if (window.innerWidth <= MAX_MOBILE_SIZE) {
        deviceType = DEVICE_TYPE.mobile;
      } else if (window.innerWidth <= MAX_TABLET_SIZE) {
        deviceType = DEVICE_TYPE.tablet;
      }
      setDeviceType(deviceType);
    }
    window.addEventListener('resize', updateDeviceType);
    updateDeviceType();
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};
