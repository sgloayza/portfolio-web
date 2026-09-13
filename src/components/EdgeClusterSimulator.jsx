import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { 
  X, Database, Server, Cpu, ShieldCheck, AlertTriangle, 
  Terminal as TerminalIcon, Play, RefreshCw, Trash2, CheckCircle2,
  Lock, Unlock, Activity, Zap, HardDrive, ArrowRight, Copy, Compass, Info,
  ArrowLeft, ExternalLink
} from 'lucide-react';

export default function EdgeClusterSimulator({ onBack }) {
  const { t } = useLanguage();
  const sim = t.projects.simulator;

  const [activeTab, setActiveTab] = useState('terminal'); // terminal | mutex | observability | cdc

  // --- CDC Simulation State ---
  const initialPrimaryDocs = [
    { id: 'doc-1', sensor_id: 'OrangePi-SectorNorth-01', temp: 41.5, ram_free_mb: 512, status: 'ACTIVE' },
    { id: 'doc-2', sensor_id: 'OrangePi-SectorSouth-02', temp: 39.8, ram_free_mb: 740, status: 'ACTIVE' }
  ];

  const initialHistoricDocs = [
    { id: 'doc-1', sensor_id: 'OrangePi-SectorNorth-01', temp: 41.5, cdc_op: 'INSERT', cdc_synced: true },
    { id: 'doc-2', sensor_id: 'OrangePi-SectorSouth-02', temp: 39.8, cdc_op: 'INSERT', cdc_synced: true },
    { 
      id: 'doc-purged', 
      sensor_id: 'OrangePi-Incident-03-PURGED', 
      temp: 48.2, 
      cdc_op: 'DELETE_PRESERVED', 
      cdc_synced: true,
      notes: 'PRESERVADO POR AUDITORÍA LEGAL (Zero Data Loss)' 
    }
  ];

  const [primaryDocs, setPrimaryDocs] = useState(initialPrimaryDocs);
  const [historicDocs, setHistoricDocs] = useState(initialHistoricDocs);
  const [isStreaming, setIsStreaming] = useState(false);
  const [lastCdcEvent, setLastCdcEvent] = useState(null);
  const [isPurged, setIsPurged] = useState(false);

  // Insert Telemetry
  const handleInsertTelemetry = () => {
    setIsStreaming(true);
    const newSensorNum = Math.floor(Math.random() * 90 + 10);
    const tempVal = (38 + Math.random() * 8).toFixed(1);
    const newDocId = `doc-${Date.now().toString().slice(-4)}`;
    const newDoc = {
      id: newDocId,
      sensor_id: `OrangePi-Gateway-${newSensorNum}`,
      temp: parseFloat(tempVal),
      ram_free_mb: 610,
      status: 'ACTIVE'
    };

    // Add to primary immediately
    setPrimaryDocs(prev => [newDoc, ...prev]);

    // Simulate Kafka Debezium Latency (~300ms)
    setTimeout(() => {
      setHistoricDocs(prev => [
        {
          ...newDoc,
          cdc_op: 'INSERT',
          cdc_synced: true,
          synced_at: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setLastCdcEvent(`INSERT -> ${newDoc.sensor_id} (${newDoc.temp}°C)`);
      setIsStreaming(false);
    }, 400);
  };

  // Simulate Accidental Wipe (deleteMany)
  const handleDeleteMany = () => {
    setIsPurged(true);
    setPrimaryDocs([]);
    setLastCdcEvent('ACCIDENTAL DELETE: db.telemetry_live.deleteMany({}) -> Primary wiped to 0!');
  };

  // Reset CDC
  const handleResetCdc = () => {
    setPrimaryDocs(initialPrimaryDocs);
    setHistoricDocs(initialHistoricDocs);
    setIsPurged(false);
    setLastCdcEvent(null);
  };

  // --- Mutex Simulation State ---
  const [task1Progress, setTask1Progress] = useState(0);
  const [isTask1Running, setIsTask1Running] = useState(false);
  const [mutexFeedback, setMutexFeedback] = useState(null);

  const handleRunTask1 = () => {
    if (isTask1Running) return;
    setIsTask1Running(true);
    setTask1Progress(0);
    setMutexFeedback({
      type: 'success',
      text: 'Tarea 1 en ejecución: Aprovisionando proxy Nginx (Candado Mutex = ACQUIRED).'
    });

    const interval = setInterval(() => {
      setTask1Progress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTask1Running(false);
          setMutexFeedback({
            type: 'info',
            text: sim.mutex.mutexReleased
          });
          return 100;
        }
        return prev + 25;
      });
    }, 600);
  };

  const handleRunTask2 = () => {
    if (isTask1Running) {
      setMutexFeedback({
        type: 'danger',
        text: sim.mutex.mutexAcquired
      });
    } else {
      setMutexFeedback({
        type: 'success',
        text: 'Tarea 2 ejecutada: Gateway estaba libre. Firmware actualizado exitosamente a v2.2.0.'
      });
    }
  };

  // --- Observability & Watchdog Simulation State ---
  const [ramUsage, setRamUsage] = useState(38);
  const [cpuUsage, setCpuUsage] = useState(22);
  const [showRawMetrics, setShowRawMetrics] = useState(false);
  const [copiedMetrics, setCopiedMetrics] = useState(false);
  const [remediationsCount, setRemediationsCount] = useState(0);
  const [watchdogLogs, setWatchdogLogs] = useState([
    `[${new Date().toLocaleTimeString()}] [HEALTHCHECK] RAM: 38% | CPU: 22% | Status: OPTIMAL | Node Exporter: ACTIVE (Port 9100)`
  ]);

  const handleStressRam = () => {
    setRamUsage(89);
    setCpuUsage(74);
    const newLog = `[${new Date().toLocaleTimeString()}] [WARNING] High RAM usage detected: 89% (>80% threshold)! Watchdog alert triggered!`;
    setWatchdogLogs(prev => [newLog, ...prev]);
  };

  const handleRemediate = () => {
    setRamUsage(34);
    setCpuUsage(18);
    setRemediationsCount(prev => prev + 1);
    const newLog = `[${new Date().toLocaleTimeString()}] [REMEDIATION] Ansible self-healing executed: Purged 3 zombie containers. RAM normalized to 34%.`;
    setWatchdogLogs(prev => [newLog, ...prev]);
  };

  const getRawMetricsText = () => {
    const memTotal = 4124344320;
    const memAvail = Math.round(memTotal * (1 - ramUsage / 100));
    const memFree = Math.round(memAvail * 0.68);
    const cpuUser = (cpuUsage * 142.8).toFixed(2);
    const load1 = ((cpuUsage / 100) * 2.75).toFixed(2);
    const isOptimal = ramUsage < 80;

    return `# HELP node_exporter_build_info A metric with a constant '1' value labeled by build info.
# TYPE node_exporter_build_info gauge
node_exporter_build_info{branch="HEAD",goversion="go1.21.5",version="1.7.0"} 1

# HELP node_memory_MemTotal_bytes Memory information field MemTotal_bytes.
# TYPE node_memory_MemTotal_bytes gauge
node_memory_MemTotal_bytes ${memTotal}

# HELP node_memory_MemAvailable_bytes Memory information field MemAvailable_bytes.
# TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes ${memAvail}

# HELP node_memory_MemFree_bytes Memory information field MemFree_bytes.
# TYPE node_memory_MemFree_bytes gauge
node_memory_MemFree_bytes ${memFree}

# HELP node_cpu_seconds_total Seconds the CPUs spent in each mode.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 149230.12
node_cpu_seconds_total{cpu="0",mode="system"} 3810.45
node_cpu_seconds_total{cpu="0",mode="user"} ${cpuUser}

# HELP node_load1 1m load average.
# TYPE node_load1 gauge
node_load1 ${load1}

# HELP node_filesystem_free_bytes Filesystem free space in bytes.
# TYPE node_filesystem_free_bytes gauge
node_filesystem_free_bytes{device="/dev/mmcblk0p1",fstype="ext4",mountpoint="/"} 18342797312

# HELP edge_watchdog_remediations_total Total self-healing actions triggered by edge watchdog.
# TYPE edge_watchdog_remediations_total counter
edge_watchdog_remediations_total ${remediationsCount}

# HELP gateway_health_status Gateway operational status (1 = healthy, 0 = degraded/alert).
# TYPE gateway_health_status gauge
gateway_health_status{host="gw-edge-01",cluster="production"} ${isOptimal ? 1 : 0}`;
  };

  const handleCopyMetrics = () => {
    navigator.clipboard.writeText(getRawMetricsText());
    setCopiedMetrics(true);
    setTimeout(() => setCopiedMetrics(false), 2200);
  };

  // --- Terminal Simulation State ---
  const [terminalOutput, setTerminalOutput] = useState([
    'Edge Infrastructure Orchestrator v2.1.0',
    'Type or click a command below to run live diagnostics...'
  ]);
  const [isTerminalRunning, setIsTerminalRunning] = useState(false);

  const runVerifyScript = () => {
    if (isTerminalRunning) return;
    setIsTerminalRunning(true);
    setTerminalOutput(prev => [...prev, '\n$ ./scripts/verify_cluster.sh']);

    const steps = [
      '====================================================',
      '  Edge Infrastructure Orchestrator Health Diagnostic ',
      '====================================================',
      'Checking Docker engine... [OK] Docker version 28.1.1',
      'Checking Docker Compose... [OK] Docker Compose v2.35.1',
      'Checking Ansible installation... [OK] ansible [core 2.16.3]',
      'Checking Python 3 environment... [OK] Python 3.12.3',
      'Validating Dynamic Inventory Plugin... [OK] issue_inventory.py passed',
      'All diagnostic checks completed successfully! (Exit 0)\n'
    ];

    steps.forEach((line, index) => {
      setTimeout(() => {
        setTerminalOutput(prev => [...prev, line]);
        if (index === steps.length - 1) setIsTerminalRunning(false);
      }, (index + 1) * 250);
    });
  };

  const runAnsiblePlaybook = () => {
    if (isTerminalRunning) return;
    setIsTerminalRunning(true);
    setTerminalOutput(prev => [...prev, '\n$ ./scripts/demo_ansible_live.sh']);

    const steps = [
      'PLAY [Simulacion de Aprovisionamiento y Autorrecuperacion en Edge] *************',
      'TASK [Gathering Facts] .................................................. [OK]',
      'TASK [[Paso 1/5] Inspeccionar salud fisica del nodo (RAM y CPU)] ......... [OK] -> RAM Total: 16GB',
      'TASK [[Paso 2/5] Desplegar exportador Prometheus Node Exporter:9100] .... [CHANGED]',
      'TASK [[Paso 3/5] Ejecutar Watchdog de Hardware] .......................... [CHANGED]',
      'TASK [[Paso 4/5] Remediar Contenedores Zombies (Self-Healing)] .......... [OK]',
      'TASK [[Paso 5/5] Resumen de metricas en vivo] ........................... [OK]',
      'PLAY RECAP: localhost: ok=6 changed=2 unreachable=0 failed=0',
      '✔ Prometheus Node Exporter LIVE at: http://localhost:9100/metrics\n'
    ];

    steps.forEach((line, index) => {
      setTimeout(() => {
        setTerminalOutput(prev => [...prev, line]);
        if (index === steps.length - 1) setIsTerminalRunning(false);
      }, (index + 1) * 280);
    });
  };

  return (
    <div className="simulator-page">
      {/* Dedicated Enterprise Top Header */}
      <header className="simulator-page-header">
        <div className="container sim-header-container">
          <div className="sim-header-left">
            <button onClick={onBack} className="btn btn-outline btn-sm sim-back-btn">
              <ArrowLeft size={16} />
              <span>{sim.btnBackPortfolio}</span>
            </button>
            <div className="sim-header-divider"></div>
            <div className="sim-header-brand">
              <span className="live-status-pill">
                <span className="live-status-dot animate-pulse"></span>
                <span>NOC LIVE CONTROL ROOM</span>
              </span>
              <h1 className="sim-page-title">{sim.title}</h1>
            </div>
          </div>

          <div className="sim-header-right">
            <LanguageToggle />
            <a 
              href="https://github.com/sgloayza/edge-infrastructure-orchestrator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
            >
              <ExternalLink size={14} />
              <span>{sim.viewGithubRepo}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Simulator Workspace Container */}
      <main className="simulator-page-workspace">
        <div className="container simulator-workspace-container">
          {/* Quick Mission Guide Card */}
          <div className="sim-main-mission-card glass-card">
            <Compass size={22} className="text-cyan flex-shrink-0" />
            <div className="mission-content">
              <span className="mission-tag">MODO DEMOSTRACIÓN DE ARQUITECTURA EN VIVO</span>
              <p className="mission-text">{sim[activeTab].scenarioDesc}</p>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="simulator-page-tabs-bar">
            <button 
              className={`sim-page-tab ${activeTab === 'terminal' ? 'active' : ''}`}
              onClick={() => setActiveTab('terminal')}
            >
              <TerminalIcon size={18} />
              <div className="tab-label-group">
                <span className="tab-kicker">ESCENARIO 1</span>
                <span className="tab-name">{sim.navTerminal}</span>
              </div>
            </button>
            <button 
              className={`sim-page-tab ${activeTab === 'mutex' ? 'active' : ''}`}
              onClick={() => setActiveTab('mutex')}
            >
              <Lock size={18} />
              <div className="tab-label-group">
                <span className="tab-kicker">ESCENARIO 2</span>
                <span className="tab-name">{sim.navMutex}</span>
              </div>
            </button>
            <button 
              className={`sim-page-tab ${activeTab === 'observability' ? 'active' : ''}`}
              onClick={() => setActiveTab('observability')}
            >
              <Activity size={18} />
              <div className="tab-label-group">
                <span className="tab-kicker">ESCENARIO 3</span>
                <span className="tab-name">{sim.navObservability}</span>
              </div>
            </button>
            <button 
              className={`sim-page-tab ${activeTab === 'cdc' ? 'active' : ''}`}
              onClick={() => setActiveTab('cdc')}
            >
              <Database size={18} />
              <div className="tab-label-group">
                <span className="tab-kicker">ESCENARIO 4</span>
                <span className="tab-name">{sim.navTopology}</span>
              </div>
            </button>
          </div>

          {/* Tab Body Content with Full Natural Spacing */}
          <div className="simulator-tab-content-pane glass-card">
          {/* TAB 1: CDC & KAFKA */}
          {activeTab === 'cdc' && (
            <div className="sim-pane-cdc">
              <div className="sim-mission-card">
                <Compass size={20} className="text-cyan flex-shrink-0" />
                <div>
                  <span className="mission-tag">ESCENARIO 4 / 4 · STREAMING CDC & KAFKA</span>
                  <p>{sim.cdc.scenarioDesc}</p>
                </div>
              </div>

              {isPurged && (
                <div className="hint-pill hint-pill-warning animate-pulse">
                  💥 <strong>¡Base Primaria Vaciada (0 Docs)!</strong> Observa a la derecha: la base de auditoría preservó el 100% de la telemetría (Zero Data Loss).
                </div>
              )}

              {/* Controls */}
              <div className="sim-controls-bar">
                <button 
                  className="btn btn-primary btn-sm btn-step-action"
                  onClick={handleInsertTelemetry}
                  disabled={isStreaming}
                >
                  <Zap size={15} />
                  <span>{sim.cdc.btnInsert}</span>
                </button>

                <button 
                  className="btn btn-danger-sm btn-sm btn-step-action"
                  onClick={handleDeleteMany}
                  disabled={primaryDocs.length === 0}
                >
                  <Trash2 size={15} />
                  <span>{sim.cdc.btnDelete}</span>
                </button>

                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={handleResetCdc}
                >
                  <RefreshCw size={15} />
                  <span>{sim.cdc.btnReset}</span>
                </button>
              </div>


              {/* Last Event Banner */}
              {lastCdcEvent && (
                <div className={`sim-event-banner ${isPurged ? 'banner-alert' : 'banner-stream'}`}>
                  <Activity size={16} />
                  <span><strong>{sim.cdc.lastEvent}</strong> {lastCdcEvent}</span>
                </div>
              )}

              {/* Cluster Nodes Flow */}
              <div className="sim-cluster-flow">
                {/* Node 1: Primary Mongo */}
                <div className={`cluster-node-card glass-card ${isPurged ? 'node-purged' : 'node-healthy'}`}>
                  <div className="node-card-header">
                    <div className="node-icon-title">
                      <Database size={18} className="node-icon-primary" />
                      <div>
                        <h5>{sim.cdc.primaryDbTitle}</h5>
                        <span className="node-meta">{sim.cdc.primaryDbPort}</span>
                      </div>
                    </div>
                    <span className={`node-status-pill ${isPurged ? 'pill-purged' : 'pill-healthy'}`}>
                      {isPurged ? sim.cdc.statusPurged : sim.cdc.statusHealthy}
                    </span>
                  </div>

                  <div className="node-docs-list">
                    <div className="docs-count-row">
                      <span>{sim.cdc.docsCount}</span>
                      <strong>{primaryDocs.length}</strong>
                    </div>
                    {primaryDocs.length === 0 ? (
                      <div className="empty-state-box">
                        <AlertTriangle size={18} className="text-danger" />
                        <span>¡0 registros en caliente! Los datos fueron purgados del nodo operativo.</span>
                      </div>
                    ) : (
                      primaryDocs.map((doc) => (
                        <div key={doc.id} className="doc-item doc-live">
                          <div className="doc-main">
                            <span className="doc-sensor">{doc.sensor_id}</span>
                            <span className="doc-temp">{doc.temp}°C</span>
                          </div>
                          <span className="doc-tag doc-tag-active">LIVE</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Kafka Connector Bridge */}
                <div className="cluster-bridge">
                  <div className={`bridge-line ${isStreaming ? 'line-pulsing' : ''}`}></div>
                  <div className="bridge-pill">
                    <Server size={14} />
                    <span>{sim.cdc.kafkaTitle}</span>
                  </div>
                  <span className="bridge-sub">{sim.cdc.kafkaTopic}</span>
                  <ArrowRight size={20} className="bridge-arrow" />
                </div>

                {/* Node 2: Historic Mongo Sink */}
                <div className="cluster-node-card glass-card node-historic">
                  <div className="node-card-header">
                    <div className="node-icon-title">
                      <ShieldCheck size={20} className="node-icon-historic" />
                      <div>
                        <h5>{sim.cdc.historicDbTitle}</h5>
                        <span className="node-meta">{sim.cdc.historicDbPort}</span>
                      </div>
                    </div>
                    <span className="node-status-pill pill-retention">
                      {sim.cdc.retentionBadge}
                    </span>
                  </div>

                  <div className="node-docs-list">
                    <div className="docs-count-row">
                      <span>{sim.cdc.docsCount}</span>
                      <strong>{historicDocs.length} (Inmutables)</strong>
                    </div>

                    {isPurged && (
                      <div className="zero-loss-alert">
                        <ShieldCheck size={16} />
                        <span>{sim.cdc.deleteNotice}</span>
                      </div>
                    )}

                    {historicDocs.map((doc) => (
                      <div key={doc.id} className={`doc-item ${doc.cdc_op === 'DELETE_PRESERVED' ? 'doc-purged-audit' : 'doc-replicated'}`}>
                        <div className="doc-main">
                          <span className="doc-sensor">{doc.sensor_id}</span>
                          <span className="doc-temp">{doc.temp}°C</span>
                        </div>
                        {doc.notes && <span className="doc-audit-note">{doc.notes}</span>}
                        <span className={`doc-tag ${doc.cdc_op === 'DELETE_PRESERVED' ? 'doc-tag-retained' : 'doc-tag-synced'}`}>
                          {doc.cdc_op === 'DELETE_PRESERVED' ? 'ZERO-LOSS RETAINED' : 'CDC SYNCED'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MUTEX CONCURRENCY CONTROL */}
          {activeTab === 'mutex' && (
            <div className="sim-pane-mutex">
              <div className="sim-mission-card">
                <Compass size={20} className="text-cyan flex-shrink-0" />
                <div>
                  <span className="mission-tag">ESCENARIO 2 / 4 · PREVENCIÓN DE COLISIONES MUTEX</span>
                  <p>{sim.mutex.scenarioDesc}</p>
                </div>
              </div>

              {isTask1Running && (
                <div className="hint-pill hint-pill-cyan animate-pulse">
                  👉 <strong>¡Paso 1 en curso!</strong> Presiona ahora el botón <strong>2️⃣ Paso 2</strong> antes de que termine para observar cómo Ansible rechaza la colisión.
                </div>
              )}

              <div className="mutex-demo-grid">
                {/* Gateway Card */}
                <div className={`gateway-card glass-card ${isTask1Running ? 'gateway-locked' : 'gateway-idle'}`}>
                  <div className="gateway-header">
                    <div className="gateway-title-box">
                      <Server size={22} className="cyan" />
                      <div>
                        <h5>{sim.mutex.gatewayTitle}</h5>
                        <span className="node-meta">{sim.mutex.gatewayIp}</span>
                      </div>
                    </div>
                    <div className={`mutex-status-tag ${isTask1Running ? 'status-tag-locked' : 'status-tag-free'}`}>
                      {isTask1Running ? <Lock size={14} /> : <Unlock size={14} />}
                      <span>{isTask1Running ? sim.mutex.statusLocked : sim.mutex.statusFree}</span>
                    </div>
                  </div>

                  {/* Progress Bar for Active Task */}
                  {isTask1Running && (
                    <div className="task-progress-box">
                      <div className="task-progress-labels">
                        <span>Tarea en progreso (Ansible Nginx Role)...</span>
                        <strong>{task1Progress}%</strong>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${task1Progress}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* Feedback Banner */}
                  {mutexFeedback && (
                    <div className={`mutex-feedback-banner feedback-${mutexFeedback.type}`}>
                      {mutexFeedback.type === 'danger' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                      <span>{mutexFeedback.text}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mutex-actions">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={handleRunTask1}
                      disabled={isTask1Running}
                    >
                      <Play size={15} />
                      <span>{sim.mutex.btnRunTask1}</span>
                    </button>

                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={handleRunTask2}
                    >
                      <Zap size={15} />
                      <span>{sim.mutex.btnRunTask2}</span>
                    </button>
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="mutex-info-card glass-card">
                  <h5>🛡️ ¿Cómo Protege el Candado Mutex al Hardware?</h5>
                  <p>
                    En dispositivos con memorias flash como <strong>Orange Pi</strong>, si dos operadores o webhooks disparan playbooks al mismo tiempo, las actualizaciones de paquetes (apt/dpkg) colisionan, corrompiendo el sistema operativo.
                  </p>
                  <ul className="mutex-features-list">
                    <li>
                      <CheckCircle2 size={16} className="cyan" />
                      <span><strong>Doble Estado:</strong> El inventario en Python compara <code>actual_firmware</code> con <code>target_firmware</code>.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="cyan" />
                      <span><strong>Exclusión Mutua:</strong> Si la tarea previa sigue en <code>In-Progress</code>, retorna inventario vacío (0 hosts) y frena el comando en seco.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROMETHEUS & WATCHDOG */}
          {activeTab === 'observability' && (
            <div className="sim-pane-observability">
              <div className="sim-mission-card">
                <Compass size={20} className="text-cyan flex-shrink-0" />
                <div>
                  <span className="mission-tag">ESCENARIO 3 / 4 · HARDWARE & WATCHDOG</span>
                  <p>{sim.observability.scenarioDesc}</p>
                </div>
              </div>

              {ramUsage > 80 && (
                <div className="hint-pill hint-pill-danger animate-pulse">
                  ⚠️ <strong>¡Alerta Crítica!</strong> Memoria saturada al 89%. Haz clic ahora en el botón <strong>2️⃣ Paso 2</strong> para ejecutar la auto-remediación con Ansible.
                </div>
              )}

              {/* Gauges Grid */}
              <div className="gauges-grid">
                {/* RAM Gauge */}
                <div className="gauge-card glass-card">
                  <div className="gauge-top">
                    <Activity size={18} className={ramUsage > 80 ? 'text-danger' : 'text-success'} />
                    <span>{sim.observability.ramGauge}</span>
                  </div>
                  <div className="gauge-value-row">
                    <strong className={ramUsage > 80 ? 'val-danger' : 'val-normal'}>{ramUsage}%</strong>
                    <span className="gauge-badge">{ramUsage > 80 ? 'CRITICAL ALERT' : 'OPTIMAL'}</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className={`progress-fill ${ramUsage > 80 ? 'fill-danger' : 'fill-cyan'}`} 
                      style={{ width: `${ramUsage}%` }}
                    ></div>
                  </div>
                </div>

                {/* CPU Gauge */}
                <div className="gauge-card glass-card">
                  <div className="gauge-top">
                    <Cpu size={18} className="text-cyan" />
                    <span>{sim.observability.cpuGauge}</span>
                  </div>
                  <div className="gauge-value-row">
                    <strong className="val-normal">{cpuUsage}%</strong>
                    <span className="gauge-badge">NORMAL</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-cyan" style={{ width: `${cpuUsage}%` }}></div>
                  </div>
                </div>

                {/* Disk Gauge */}
                <div className="gauge-card glass-card">
                  <div className="gauge-top">
                    <HardDrive size={18} className="text-cyan" />
                    <span>{sim.observability.diskGauge}</span>
                  </div>
                  <div className="gauge-value-row">
                    <strong className="val-normal">42%</strong>
                    <span className="gauge-badge">ROTATED LOGS</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-cyan" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="sim-controls-bar">
                <button className="btn btn-danger-sm btn-sm" onClick={handleStressRam}>
                  <AlertTriangle size={15} />
                  <span>{sim.observability.btnStress}</span>
                </button>
                <button className="btn btn-primary btn-sm" onClick={handleRemediate}>
                  <ShieldCheck size={15} />
                  <span>{sim.observability.btnRemediate}</span>
                </button>
                <button 
                  className={`btn ${showRawMetrics ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  onClick={() => setShowRawMetrics(!showRawMetrics)}
                  style={{ gap: '0.45rem' }}
                >
                  <Zap size={14} />
                  <span>{showRawMetrics ? sim.observability.btnMetricsHide : sim.observability.btnMetricsStream}</span>
                </button>
              </div>

              {/* Simulated Prometheus Raw /metrics Stream */}
              {showRawMetrics && (
                <div className="prometheus-raw-viewer glass-card">
                  <div className="raw-viewer-header">
                    <div className="raw-viewer-badge-group">
                      <span className="raw-endpoint-tag">GET http://localhost:9100/metrics</span>
                      <span className="raw-status-tag">HTTP/1.1 200 OK</span>
                      <span className="raw-mime-tag">Content-Type: text/plain; version=0.0.4</span>
                    </div>
                    <button className="btn btn-outline btn-sm copy-metrics-btn" onClick={handleCopyMetrics}>
                      {copiedMetrics ? <CheckCircle2 size={13} className="text-emerald" /> : <Copy size={13} />}
                      <span>{copiedMetrics ? sim.observability.metricsCopied : sim.observability.metricsCopy}</span>
                    </button>
                  </div>
                  <div className="raw-viewer-desc">
                    <p>{sim.observability.metricsDesc}</p>
                  </div>
                  <pre className="raw-metrics-pre">
                    <code>{getRawMetricsText()}</code>
                  </pre>
                </div>
              )}

              {/* Live Watchdog Console */}
              <div className="watchdog-console glass-card">
                <div className="console-bar">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="console-title">{sim.observability.watchdogLogTitle}</span>
                </div>
                <div className="console-log-content">
                  {watchdogLogs.map((log, idx) => (
                    <div key={idx} className={`console-line ${log.includes('WARNING') ? 'line-warning' : log.includes('REMEDIATION') ? 'line-remediation' : ''}`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ANSIBLE TERMINAL */}
          {activeTab === 'terminal' && (
            <div className="sim-pane-terminal">
              <div className="sim-mission-card">
                <Compass size={20} className="text-cyan flex-shrink-0" />
                <div>
                  <span className="mission-tag">ESCENARIO 1 / 4 · AUTOMATIZACIÓN ANSIBLE IAC</span>
                  <p>{sim.terminal.scenarioDesc}</p>
                </div>
              </div>

              <div className="sim-controls-bar">
                <button 
                  className="btn btn-primary btn-sm btn-step-action" 
                  onClick={runVerifyScript}
                  disabled={isTerminalRunning}
                >
                  <Play size={14} />
                  <span>{sim.terminal.btnVerify}</span>
                </button>

                <button 
                  className="btn btn-secondary btn-sm btn-step-action" 
                  onClick={runAnsiblePlaybook}
                  disabled={isTerminalRunning}
                >
                  <TerminalIcon size={14} />
                  <span>{sim.terminal.btnAnsible}</span>
                </button>

                <button 
                  className="btn btn-secondary btn-sm" 
                  onClick={() => setTerminalOutput(['Console cleared.'])}
                >
                  <span>{sim.terminal.btnClean}</span>
                </button>
              </div>

              <div className="terminal-emulator glass-card">
                <div className="console-bar">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="console-title">bash - sgloayza@edge-orchestrator:~</span>
                </div>
                <div className="terminal-screen">
                  {terminalOutput.map((line, idx) => (
                    <div key={idx} className={`term-line ${line.startsWith('$') ? 'term-prompt' : line.includes('[OK]') ? 'term-ok' : line.includes('[CHANGED]') ? 'term-changed' : ''}`}>
                      {line}
                    </div>
                  ))}
                  {isTerminalRunning && <div className="term-cursor">_</div>}
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </main>

      {/* Simulator Footer */}
      <footer className="simulator-page-footer">
        <div className="container sim-page-footer-container">
          <span className="sim-footer-note">
            💡 Demostración interactiva de arquitectura y automatización en tiempo real para Edge Infrastructure Orchestrator.
          </span>
          <button onClick={onBack} className="btn btn-secondary btn-sm">
            {sim.btnBackPortfolio}
          </button>
        </div>
      </footer>
    </div>
  );
}
