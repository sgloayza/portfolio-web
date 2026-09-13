import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, CheckCircle2, Server, Activity } from 'lucide-react';

export default function MetricsBar() {
  const { t } = useLanguage();

  const getIcon = (id) => {
    switch (id) {
      case 'hours':
        return <Clock className="metric-icon cyan" size={28} />;
      case 'tasks':
        return <CheckCircle2 className="metric-icon emerald" size={28} />;
      case 'gateways':
        return <Server className="metric-icon violet" size={28} />;
      case 'stability':
        return <Activity className="metric-icon cyan" size={28} />;
      default:
        return <Activity className="metric-icon" size={28} />;
    }
  };

  return (
    <section id="metrics" className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {t.metrics.items.map((item) => (
            <div key={item.id} className="metric-card glass-card">
              <div className="metric-header">
                {getIcon(item.id)}
                <span className="metric-value text-gradient">{item.value}</span>
              </div>
              <h3 className="metric-label">{item.label}</h3>
              <p className="metric-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
