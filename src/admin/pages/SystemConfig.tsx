import React, { useState } from 'react';
import { Settings, Store, Truck, CreditCard, Mail, MessageSquare, Save, Globe, Package } from 'lucide-react';
import { SystemConfig } from '../types';

const SystemConfigPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'store' | 'shipping' | 'payment' | 'email' | 'sms'>('store');
  
  const [config, setConfig] = useState<SystemConfig>({
    storeName: "Cosmetics Shop",
    storeAddress: "123 Beauty Street, Cosmopolis",
    storeLogo: "",
    shippingSettings: {
      freeShippingThreshold: 50,
      defaultShippingFee: 10,
      shippingZones: [
        { id: 1, name: "Local", countries: ["Vietnam"], shippingFee: 5, estimatedDeliveryDays: 2 },
        { id: 2, name: "Domestic", countries: ["Vietnam"], shippingFee: 10, estimatedDeliveryDays: 5 },
        { id: 3, name: "International", countries: ["USA", "UK", "France"], shippingFee: 25, estimatedDeliveryDays: 10 }
      ]
    },
    paymentSettings: {
      enabledGateways: ['cod', 'card', 'vnpay'],
      vnpay: {
        enabled: true,
        tmnCode: "YOUR_TMN_CODE",
        hashSecret: "YOUR_HASH_SECRET",
        returnUrl: "http://localhost:3000/return",
        paymentUrl: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
      },
      momo: undefined
    },
    emailSettings: {
      smtpHost: "smtp.example.com",
      smtpPort: 587,
      smtpUsername: "your-email@example.com",
      smtpPassword: "your-password",
      fromEmail: "noreply@cosmeticsshop.com",
      fromName: "Cosmetics Shop"
    },
    smsSettings: {
      provider: "Twilio",
      apiKey: "your-api-key",
      senderId: "COSMETICS"
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      shippingSettings: {
        ...prev.shippingSettings,
        [name]: parseFloat(value)
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the configuration to your backend
    console.log('Saving configuration:', config);
    alert('Configuration saved successfully!');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">System Configuration</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--admin-border)] mb-6">
        <button
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === 'store'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('store')}
        >
          <Store className="w-4 h-4 mr-2" />
          Store Info
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === 'shipping'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('shipping')}
        >
          <Truck className="w-4 h-4 mr-2" />
          Shipping
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === 'payment'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('payment')}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Payment
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === 'email'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('email')}
        >
          <Mail className="w-4 h-4 mr-2" />
          Email
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === 'sms'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('sms')}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          SMS
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Store Information Tab */}
        {activeTab === 'store' && (
          <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
            <h2 className="text-xl font-semibold text-[var(--admin-text-primary)] mb-4">Store Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={config.storeName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                  Store Address
                </label>
                <input
                  type="text"
                  name="storeAddress"
                  value={config.storeAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                  Store Logo
                </label>
                <div className="flex items-center">
                  <div className="border-2 border-dashed border-[var(--admin-border)] rounded-lg p-4 text-center mr-4">
                    <div className="bg-[var(--admin-bg-secondary)] w-16 h-16 rounded-lg flex items-center justify-center mx-auto">
                      <Globe className="w-8 h-8 text-[var(--admin-text-secondary)]" />
                    </div>
                    <p className="text-xs text-[var(--admin-text-secondary)] mt-2">Current Logo</p>
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full"
                    />
                    <p className="text-xs text-[var(--admin-text-secondary)] mt-1">Upload a new logo (max 2MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shipping Settings Tab */}
        {activeTab === 'shipping' && (
          <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
            <h2 className="text-xl font-semibold text-[var(--admin-text-primary)] mb-4">Shipping Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                  Free Shipping Threshold ($)
                </label>
                <input
                  type="number"
                  name="freeShippingThreshold"
                  value={config.shippingSettings.freeShippingThreshold}
                  onChange={handleShippingChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                  Default Shipping Fee ($)
                </label>
                <input
                  type="number"
                  name="defaultShippingFee"
                  value={config.shippingSettings.defaultShippingFee}
                  onChange={handleShippingChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
                />
              </div>
            </div>

            <h3 className="text-lg font-medium text-[var(--admin-text-primary)] mb-4">Shipping Zones</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[var(--admin-border)]">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Zone Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Countries</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Fee ($)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Est. Delivery</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--admin-border)]">
                  {config.shippingSettings.shippingZones.map((zone, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{zone.name}</td>
                      <td className="px-4 py-4 text-sm text-[var(--admin-text-primary)]">{zone.countries.join(', ')}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">${zone.shippingFee}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{zone.estimatedDeliveryDays} days</td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)]">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Payment Settings Tab */}
        {activeTab === 'payment' && (
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">Payment Settings</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-2">Enabled Gateways</h3>
              <div className="flex flex-wrap gap-4">
                {(['cod', 'card', 'bank_transfer', 'vnpay', 'momo'] as const).map(gateway => (
                  <label key={gateway} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={config.paymentSettings.enabledGateways.includes(gateway)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setConfig(prev => ({
                            ...prev,
                            paymentSettings: {
                              ...prev.paymentSettings,
                              enabledGateways: [...prev.paymentSettings.enabledGateways, gateway]
                            }
                          }));
                        } else {
                          setConfig(prev => ({
                            ...prev,
                            paymentSettings: {
                              ...prev.paymentSettings,
                              enabledGateways: prev.paymentSettings.enabledGateways.filter(g => g !== gateway)
                            }
                          }));
                        }
                      }}
                      className="rounded text-[var(--text-accent)] focus:ring-[var(--text-accent)]"
                    />
                    <span className="ml-2 capitalize text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                      {gateway === 'vnpay' ? 'VNPay' : 
                       gateway === 'momo' ? 'MoMo' : 
                       gateway === 'bank_transfer' ? 'Bank Transfer' : 
                       gateway === 'cod' ? 'Cash on Delivery' : gateway}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {config.paymentSettings.vnpay && config.paymentSettings.enabledGateways.includes('vnpay') && (
              <div className="border border-[var(--border)] dark:border-[var(--border)] rounded-lg p-4 mb-4">
                <h3 className="text-lg font-medium text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-3">VNPay Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                      TMN Code
                    </label>
                    <input
                      type="text"
                      value={config.paymentSettings.vnpay.tmnCode}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        paymentSettings: {
                          ...prev.paymentSettings,
                          vnpay: {
                            ...prev.paymentSettings.vnpay!,
                            tmnCode: e.target.value
                          }
                        }
                      }))}
                      className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                      Hash Secret
                    </label>
                    <input
                      type="password"
                      value={config.paymentSettings.vnpay.hashSecret}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        paymentSettings: {
                          ...prev.paymentSettings,
                          vnpay: {
                            ...prev.paymentSettings.vnpay!,
                            hashSecret: e.target.value
                          }
                        }
                      }))}
                      className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                      Return URL
                    </label>
                    <input
                      type="text"
                      value={config.paymentSettings.vnpay.returnUrl}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        paymentSettings: {
                          ...prev.paymentSettings,
                          vnpay: {
                            ...prev.paymentSettings.vnpay!,
                            returnUrl: e.target.value
                          }
                        }
                      }))}
                      className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                      Payment URL
                    </label>
                    <input
                      type="text"
                      value={config.paymentSettings.vnpay.paymentUrl}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        paymentSettings: {
                          ...prev.paymentSettings,
                          vnpay: {
                            ...prev.paymentSettings.vnpay!,
                            paymentUrl: e.target.value
                          }
                        }
                      }))}
                      className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Email Settings Tab */}
        {activeTab === 'email' && (
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">Email Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  SMTP Host
                </label>
                <input
                  type="text"
                  name="smtpHost"
                  value={config.emailSettings.smtpHost}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      smtpHost: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  SMTP Port
                </label>
                <input
                  type="number"
                  name="smtpPort"
                  value={config.emailSettings.smtpPort}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      smtpPort: parseInt(e.target.value)
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  SMTP Username
                </label>
                <input
                  type="text"
                  name="smtpUsername"
                  value={config.emailSettings.smtpUsername}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      smtpUsername: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  SMTP Password
                </label>
                <input
                  type="password"
                  name="smtpPassword"
                  value={config.emailSettings.smtpPassword}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      smtpPassword: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  From Email
                </label>
                <input
                  type="email"
                  name="fromEmail"
                  value={config.emailSettings.fromEmail}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      fromEmail: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  From Name
                </label>
                <input
                  type="text"
                  name="fromName"
                  value={config.emailSettings.fromName}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    emailSettings: {
                      ...prev.emailSettings,
                      fromName: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
            </div>
          </div>
        )}

        {/* SMS Settings Tab */}
        {activeTab === 'sms' && (
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">SMS Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  Provider
                </label>
                <input
                  type="text"
                  name="provider"
                  value={config.smsSettings.provider}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    smsSettings: {
                      ...prev.smsSettings,
                      provider: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  API Key
                </label>
                <input
                  type="password"
                  name="apiKey"
                  value={config.smsSettings.apiKey}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    smsSettings: {
                      ...prev.smsSettings,
                      apiKey: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                  Sender ID
                </label>
                <input
                  type="text"
                  name="senderId"
                  value={config.smsSettings.senderId}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    smsSettings: {
                      ...prev.smsSettings,
                      senderId: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="flex items-center px-6 py-2 bg-[var(--text-accent)] text-white rounded-lg hover:bg-[var(--text-accent)]/90 transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
};

export default SystemConfigPage;