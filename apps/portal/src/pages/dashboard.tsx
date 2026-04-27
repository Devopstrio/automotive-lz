import React from 'react';

// Devopstrio Automotive Landing Zone
// Executive Connected Cloud Dashboard 

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
            {/* Dark Mode Enterprise Header */}
            <header className="border-b border-slate-800 bg-[#0f172a] sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded border border-cyan-500/50 bg-cyan-900/40 flex items-center justify-center font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h1 className="text-lg font-bold text-slate-100 tracking-wider">Automotive Command Center</h1>
                    </div>
                    <nav className="flex gap-6 text-sm font-semibold uppercase tracking-widest text-[#94a3b8]">
                        <a href="#" className="text-cyan-400 border-b-2 border-cyan-400 pb-5 pt-5">Global View</a>
                        <a href="#" className="hover:text-cyan-300 transition-colors pt-5 pb-5">Connected Fleet</a>
                        <a href="#" className="hover:text-cyan-300 transition-colors pt-5 pb-5">Smart Factories</a>
                        <a href="#" className="hover:text-cyan-300 transition-colors pt-5 pb-5">Dealer Network</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-8 py-8">

                {/* Global Automotive KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Global Fleet Telemetry', value: '4.2M', trend: 'Vehicles Syncing', color: 'cyan' },
                        { title: 'Factory Network Health', value: '99.8%', trend: 'Global OEE Avg', color: 'emerald' },
                        { title: 'Predictive Anomalies', value: '142', trend: 'Active Alerts', color: 'rose' },
                        { title: 'OTA Campaign Status', value: '78%', trend: 'v2.4 Rolled Out', color: 'blue' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${kpi.color}-500/10 rounded-full blur-2xl`}></div>
                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.title}</h4>
                            <div className={`text-4xl font-black text-white mt-2 font-mono`}>{kpi.value}</div>
                            <p className={`text-xs text-slate-400 font-bold mt-2 flex items-center gap-1.5`}>
                                <span className={`w-1.5 h-1.5 rounded-full bg-${kpi.color}-500`}></span>
                                {kpi.trend}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                    {/* Live Factory & Vehicle Maps / Grids */}
                    <div className="xl:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-xl relative">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-sm uppercase tracking-widest font-bold text-slate-100">Live Production & Mobility Operations</h2>
                            <div className="flex gap-2">
                                <span className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase border border-slate-700 text-slate-400">Map View</span>
                                <span className="bg-cyan-900/40 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Grid View</span>
                            </div>
                        </div>

                        <div className="space-y-4">

                            {/* Plant / Factory Object */}
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded border border-emerald-500/50 bg-emerald-900/20 text-emerald-400 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-200">Berlin Gigafactory (EV-Line-01)</h3>
                                        <p className="text-xs text-slate-400 font-mono mt-1">OEE: 96.4% | Last Sync: 2s ago | Production Target: On-Track</p>
                                    </div>
                                </div>
                                <span className="text-xs text-emerald-400 font-bold tracking-widest uppercase bg-emerald-900/30 px-2 py-1 rounded border border-emerald-800">Nominal</span>
                            </div>

                            {/* Connected Vehicle Cluster Alert Object */}
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-rose-900/50 shadow-[inset_0_0_20px_rgba(225,29,72,0.05)] flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded border border-rose-500/50 bg-rose-900/20 text-rose-400 flex items-center justify-center animate-pulse">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-200">High-Voltage Thermal Fault Cluster</h3>
                                        <p className="text-xs text-slate-400 font-mono mt-1">VIN-Group-A | 14 Vehicles | DTC: P0A7D | Triggered Preventive Maintenance</p>
                                    </div>
                                </div>
                                <span className="text-xs text-rose-400 font-bold tracking-widest uppercase bg-rose-900/30 px-2 py-1 rounded border border-rose-800 flex items-center gap-1">
                                    Investigating
                                </span>
                            </div>

                            {/* EV Charging Network Status */}
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded border border-blue-500/50 bg-blue-900/20 text-blue-400 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-200">European Charging Network (Supercharger Segment C)</h3>
                                        <p className="text-xs text-slate-400 font-mono mt-1">Utilization: 88% | Offline Stalls: 4 | Grid Draw Constraint Detected</p>
                                    </div>
                                </div>
                                <span className="text-xs text-blue-400 font-bold tracking-widest uppercase bg-blue-900/30 px-2 py-1 rounded border border-blue-800">Degraded</span>
                            </div>

                        </div>
                    </div>

                    {/* Quick Ops & Firmware Rollouts */}
                    <div className="flex flex-col gap-6">

                        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                            <h2 className="text-sm uppercase tracking-widest font-bold text-slate-100 mb-4">OTA Firmware Campaigns</h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                                        <span>v2.4.1 (ADAS Critical Patch)</span>
                                        <span className="text-cyan-400">78%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-cyan-400 h-full w-[78%]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                                        <span>v3.0.0 (Infotainment Overhaul)</span>
                                        <span className="text-emerald-400">12%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-emerald-400 h-full w-[12%]"></div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-[10px] uppercase font-bold tracking-widest py-2.5 rounded shadow transition-colors text-center w-full">
                                Manage Fleet Deployments
                            </button>
                        </div>

                        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-xl">
                            <h2 className="text-sm uppercase tracking-widest font-bold text-slate-100 mb-4">Dealer Network Analytics</h2>
                            <p className="text-xs text-slate-400 mb-4 leading-relaxed">System syncing local inventory telemetry globally. 42 Dealer APIs exhibiting latency higher than 300ms.</p>
                            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-widest py-2.5 rounded shadow transition-colors text-center">
                                View Dealer Ecosystem
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
