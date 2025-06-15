import React, { useState } from 'react';

const SOSButton = () => {
  const sender = {
    name: 'Aryan Talekar',
    phone: '+91 87670 37674',
  };

  const emergencyContacts = ['+918767037674'];

  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          link: `https://maps.google.com/?q=${latitude},${longitude}`,
        });
        setError('');
      },
      (err) => {
        setError('Unable to access location. Please enable location services.');
        console.error(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const emergencyMessage = `EMERGENCY ALERT

Name: ${sender.name}
Phone: ${sender.phone}
Location: ${location?.link || 'Not available'}

Please respond immediately.`;

  const sendSMS = () => {
    if (!location) return;
    emergencyContacts.forEach((number) => {
      window.open(`sms:${number}?&body=${encodeURIComponent(emergencyMessage)}`, '_blank');
    });
  };

  const sendWhatsApp = () => {
    if (!location) return;
    emergencyContacts.forEach((number) => {
      const formattedNumber = number.replace('+', '');
      window.open(`https://wa.me/${formattedNumber}?text=${encodeURIComponent(emergencyMessage)}`, '_blank');
    });
  };

  const share = async () => {
    if (!location || !navigator.share) return;
    try {
      await navigator.share({
        title: 'Emergency Alert',
        text: emergencyMessage,
        url: location.link,
      });
    } catch (err) {
      console.log('Sharing failed', err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(location.link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 w-full max-w-xl bg-slate-800/90 rounded-xl shadow-xl p-8 space-y-6 text-gray-100">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Emergency Assistance</h1>
          <p className="text-sm text-gray-400">
            Quickly alert your trusted contacts with your live location.
          </p>
        </div>

        <button
          onClick={getLocation}
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-medium transition"
        >
          Get Current Location
        </button>

        {error && <p className="text-sm text-red-400 text-center">{error}</p>}

        {location && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Live Location Link:</label>
              <div className="flex items-center gap-2">
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline text-sm break-all"
                >
                  {location.link}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="bg-slate-700 hover:bg-slate-600 text-xs px-2 py-1 rounded"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={sendSMS}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
              >
                Send via SMS
              </button>
              <button
                onClick={sendWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Send via WhatsApp
              </button>
              {navigator.share && (
                <button
                  onClick={share}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
                >
                  Share with Other Apps
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOSButton;
