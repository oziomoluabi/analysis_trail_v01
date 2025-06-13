'use client';

import React from 'react';
import ChartComponent from './ChartComponent';
import { commonChartOptions } from '../lib/utils';
import Accordion from './Accordion';
import MapComponent from './MapComponent';

const SectionOverview = () => {
    const ageDistributionData = {
        labels: ['Youth (0-24)', 'Working Age (25-59)', 'Elderly (60+)'],
        datasets: [{ label: 'Age Distribution (%)', data: [51.5, 42.6, 5.9], backgroundColor: ['#38b2ac', '#63b3ed', '#e53e3e'], borderColor: '#1e293b', borderWidth: 3, hoverOffset: 8, }]
    };
    const ageDistributionOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Osun State Age Distribution (2025 Proj.)' } }, scales: {} };

    const ruralUrbanData = {
        labels: ['Urban Population', 'Rural Population'],
        datasets: [{ label: 'Population Distribution (%)', data: [59.7, 40.3], backgroundColor: ['#63b3ed', '#38b2ac'], borderColor: '#1e293b', borderWidth: 3, hoverOffset: 8, }]
    };
    const ruralUrbanOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Rural-Urban Population Share (2024)' } }, scales: {} };

    const economicSectorsData = {
        labels: ['Agriculture', 'Services', 'Industry'],
        datasets: [{ label: 'Contribution to State GDP (%)', data: [35, 55, 10], backgroundColor: ['#38b2ac', '#63b3ed', '#fbbf24'], borderColor: '#1e293b', borderWidth: 3, hoverOffset: 8, }]
    };
    const economicSectorsOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Economic Sector Contribution to GDP' } }, scales: {} };

    return (
        <section id="overview" className="py-16 md:py-24 border-b-2 border-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-wider text-sky-400 sm:text-4xl uppercase">[OSUN_STATE::EXECUTIVE_SUMMARY]</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400 max-w-4xl mx-auto">
                    {`> execute(analysis) -> Loading state profile... Synthesizing key development indicators to map the interconnected dynamics of Osun's population, economy, and infrastructure.`}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="card p-6 bg-slate-800 border border-slate-700 transition duration-300 hover:border-teal-400 hover:bg-slate-700/80">
                    <div className="text-4xl font-bold text-sky-400">4.6M</div>
                    <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">Projected Pop. (2025)</p>
                </div>
                <div className="card p-6 bg-slate-800 border border-slate-700 transition duration-300 hover:border-teal-400 hover:bg-slate-700/80">
                    <div className="text-4xl font-bold text-teal-400">51.5%</div>
                    <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">Youth Population (0-24)</p>
                </div>
                <div className="card p-6 bg-slate-800 border border-slate-700 transition duration-300 hover:border-teal-400 hover:bg-slate-700/80">
                    <div className="text-4xl font-bold text-sky-400">8.52%</div>
                    <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">Monetary Poverty</p>
                </div>
                <div className="card p-6 bg-slate-800 border border-slate-700 transition duration-300 hover:border-teal-400 hover:bg-slate-700/80">
                    <div className="text-4xl font-bold text-red-500 animate-pulse-slow">42%</div>
                    <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">Multidimensional Poverty</p>
                </div>
            </div>
            
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose-custom">
                    <h3 className="text-2xl font-semibold mb-4 text-sky-400 uppercase tracking-wider">State Profile: Demographics and Economy</h3>
                    <p>Osun State, located in the south-western geopolitical zone of Nigeria, presents a fascinating case study in development dynamics. Its projected 2025 population of 4.6 million people is characterized by a significant &quot;youth bulge.&quot; With adolescents (10-19 years) comprising 23.7%, children (0-14 years) making up 34.3%, and young adults (15-24 years) at 17.2%, over half the population is under the age of 25. This demographic structure is a double-edged sword: it offers a vast potential workforce and a source of innovation, but simultaneously places immense strain on public services like education, healthcare, and job creation infrastructure. The dependency ratio is high, challenging the capacity of the working-age population to support both the young and the elderly.</p>
                    <p>The state&apos;s economy is predominantly agrarian, with agriculture contributing an estimated 35% to the state&apos;s GDP. Key crops include yam, cassava, maize, and cocoa, which has historically been a major cash crop. However, the services sector, encompassing trade, transportation, and public administration, has grown to become the largest contributor at approximately 55%. The industrial sector, including small-scale manufacturing and processing, remains relatively underdeveloped, contributing around 10%. This economic structure highlights a vulnerability to fluctuations in agricultural output and a need to diversify into higher value-added industries to create sustainable employment for its burgeoning youth population.</p>
                </div>
                <div className="space-y-8">
                    <ChartComponent chartId="ageDistributionChart" type="doughnut" data={ageDistributionData} options={ageDistributionOptions} footerText="Source: Osun State Projections (2025)" />
                    <ChartComponent chartId="ruralUrbanChart" type="pie" data={ruralUrbanData} options={ruralUrbanOptions} footerText="Source: NDHS 2023-24 Survey" />
                    <ChartComponent chartId="economicSectorsChart" type="doughnut" data={economicSectorsData} options={economicSectorsOptions} footerText="Source: Synthesized State Economic Data" />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-2xl font-semibold text-center mb-8 text-sky-400 uppercase tracking-wider">Strategic Analysis Matrix</h3>
                <div className="max-w-5xl mx-auto space-y-4">
                     <Accordion title="State SWOT Analysis" startOpen={true}>
                        {/* SWOT content as before */}
                        <h4>Strengths</h4>
                        <ul><li>Youthful Population</li><li>Agricultural Potential</li><li>Cultural Heritage</li><li>Relative Peace and Security</li></ul>
                        <h4>Weaknesses</h4>
                        <ul><li>High Multidimensional Poverty</li><li>Infrastructure Deficit</li><li>Underdeveloped Industrial Base</li><li>Public Finance Constraints</li></ul>
                        <h4>Opportunities</h4>
                        <ul><li>Agro-Processing Value Chain</li><li>Digital Economy</li><li>Tourism Development</li><li>Renewable Energy</li></ul>
                        <h4>Threats</h4>
                        <ul><li>Youth Unemployment/Underemployment</li><li>Climate Change</li><li>Macroeconomic Instability</li><li>Erosion of Social Safety Nets</li></ul>
                     </Accordion>
                     <Accordion title="Infrastructure and Geographic Analysis">
                        <h4>Infrastructure Deep Dive</h4>
                        <p>Access to reliable infrastructure remains a primary constraint on growth. The state&apos;s road network, while connecting major towns, deteriorates significantly in rural areas, creating logistical bottlenecks for agriculture. The dependence on a fragile national power grid stifles industrial ambition and forces businesses into costly self-generation, eroding profitability.</p>
                        <div className="mt-6">
                            <MapComponent />
                        </div>
                     </Accordion>
                </div>
            </div>
        </section>
    );
};

export default SectionOverview;
