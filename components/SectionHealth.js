'use client';

import React from 'react';
import ChartComponent from './ChartComponent';
import Accordion from './Accordion';
import { commonChartOptions, wrapLabels } from '../lib/utils';

const SectionHealth = () => {
    const mentalHealthData = {
        labels: wrapLabels(['Distress (Public Uni Students)', 'Distress (Private Uni Students)', 'Psychosocial Dysfunction (Adolescents)', 'Depression (Pediatric, National)'], 25),
        datasets: [{ label: 'Prevalence Rate (%)', data: [40.4, 43.6, 10.7, 12], backgroundColor: ['#38b2ac', '#63b3ed', '#fbbf24', '#e53e3e'], borderColor: '#1e293b', borderWidth: 1, }]
    };
    const mentalHealthOptions = { ...commonChartOptions, indexAxis: 'y', plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Mental Health Prevalence in Youth Groups' } }, scales: { x: { ...commonChartOptions.scales.x, beginAtZero: true, max: 50, ticks: { callback: (v) => v + '%' } }, y: { ...commonChartOptions.scales.y } } };

    const childHealthData = {
        labels: wrapLabels(['Stunting (Chronic Malnutrition)', 'Wasting (Acute Malnutrition)', 'Underweight', 'Malaria Positivity (RDT, <2 yrs)'], 25),
        datasets: [{ label: 'Prevalence Rate (%)', data: [30.9, 10.1, 19.5, 36.8], backgroundColor: ['#e53e3e', '#fbbf24', '#f97316', '#38b2ac'], borderColor: '#1e293b', borderWidth: 1, }]
    };
    const childHealthOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Key Child Health & Nutrition Challenges' } }, scales: { x: { ...commonChartOptions.scales.x, ticks: { callback: (v) => v + '%' } }, y: { ...commonChartOptions.scales.y, beginAtZero: true, max: 40 } } };

    const oopExpenditureData = {
        labels: ['Out-of-Pocket (OOP)', 'Government', 'Donors & Insurance'],
        datasets: [{ label: 'Health Expenditure Source (%)', data: [72, 18, 10], backgroundColor: ['#e53e3e', '#63b3ed', '#38b2ac'], borderColor: '#1e293b', borderWidth: 3, }]
    };
    const oopExpenditureOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Source of Health Expenditure (National Avg.)' } }, scales: {} };

    return (
        <section id="health" className="py-16 md:py-24 bg-slate-800/50 my-12 border-y-2 border-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-wider text-sky-400 sm:text-4xl uppercase">[HEALTH_&_WELLBEING::SYSTEM_DIAGNOSTICS]</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400 max-w-4xl mx-auto">
                    {`> Accessing health sector data... Probing the "hidden epidemic" of mental health alongside physical health challenges and structural healthcare deficits.`}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose-custom">
                    <h3 className="text-2xl font-semibold mb-4 text-sky-400 uppercase tracking-wider">The Mental Health Crisis: Prevalence and Systemic Barriers</h3>
                    <p>Mental health represents a profound, yet often overlooked, public health crisis in Osun State. Reflecting national estimates where up to 30% of the population experiences some form of mental illness, the data from Osun points to a particularly high burden among its youth. The staggering rates of mental distress among university students—40.4% in public and 43.6% in private institutions—are alarming. These figures are not abstract statistics; they represent young people struggling with intense academic pressure, financial anxiety, and uncertainty about the future. The 10.7% prevalence of psychosocial dysfunction among in-school adolescents indicates that these pressures begin much earlier, rooted in the educational system and broader societal stressors.</p>
                    <p>The crisis is exacerbated by a catastrophic deficit in professional care. With an estimated national total of only 250-350 psychiatrists for a population exceeding 200 million, the system is fundamentally broken. This translates to a near-total absence of accessible, affordable mental healthcare for the vast majority. This vacuum is filled by stigma and misinformation. Mental illness is frequently misinterpreted through a cultural lens as a spiritual attack or a personal failing, rather than a medical condition. This leads families to seek help from traditional or religious healers, often delaying or preventing effective clinical treatment. Sufferers are ostracized, leading to social isolation and a reluctance to seek any help at all, driving the epidemic further underground.</p>
                </div>
                <div className="space-y-8">
                    <ChartComponent chartId="mentalHealthChart" type="bar" data={mentalHealthData} options={mentalHealthOptions} footerText="Source: Various Academic Studies (2022-2025)" />
                    <ChartComponent chartId="childHealthChart" type="bar" data={childHealthData} options={childHealthOptions} footerText="Source: State Nutritional & Health Surveys (2023)" />
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-2xl font-semibold text-center mb-8 text-sky-400 uppercase tracking-wider">Healthcare System: Financing and Access</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="prose-custom">
                        <h4 className="text-xl font-semibold mb-4 text-teal-400 uppercase tracking-wider">Maternal and Child Health: Persistent Challenges</h4>
                        <p>The health of children in Osun is a critical indicator of the state&apos;s overall development, and the data reveals persistent, significant challenges. Malnutrition is rampant and multifaceted. A stunting rate of 30.9% indicates that nearly one in three children suffers from chronic malnutrition, leading to irreversible physical and cognitive developmental damage. A wasting rate of 10.1% points to acute malnutrition, which carries a high risk of mortality. These figures suggest that while programs like O-MEALS may help with daily hunger, they are not sufficient to resolve the deep-rooted issues of household food insecurity and poor dietary diversity.</p>
                        <p>The state&apos;s healthcare system is structured around Primary Health Care Centers (PHCCs), but their effectiveness is severely undermined by a maldistribution of resources. PHCCs in rural areas are frequently understaffed, lack essential drugs and equipment, and may not have access to reliable power or clean water. This forces many rural dwellers to bypass their local PHCCs, undertaking costly and time-consuming journeys to seek care in urban general hospitals, which in turn become overburdened.</p>
                    </div>
                    <div className="space-y-8">
                        <ChartComponent chartId="oopExpenditureChart" type="doughnut" data={oopExpenditureData} options={oopExpenditureOptions} footerText="Source: World Bank, Nigeria Health Financing (National Avg)" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-4 mt-12">
                     <Accordion title="Analysis: Healthcare Financing and Out-of-Pocket Expenditure" startOpen={true}>
                        <h4>The Dominance of Out-of-Pocket Payments</h4>
                        <p>The single greatest barrier to accessing healthcare in Osun, as in the rest of Nigeria, is cost. Healthcare financing is dominated by out-of-pocket (OOP) payments, which nationally account for over 70% of total health expenditure. This means that for the vast majority of families, a serious illness can be a catastrophic financial event, capable of wiping out savings and pushing them into poverty. This reliance on OOP payments is a direct consequence of chronic underfunding of the health sector by the government. The Abuja Declaration of 2001, in which African Union countries pledged to allocate at least 15% of their annual budget to health, has consistently not been met in Nigeria at both federal and state levels.</p>
                        <h4>The Role of Health Insurance</h4>
                        <p>Health insurance is the most effective mechanism for mitigating the risks of high OOP payments. The Osun Health Insurance Scheme (OHIS) is the state&apos;s primary vehicle for this. It aims to provide a basic package of care for a premium, pooling risk across the population. While it has achieved success in covering the formal sector and, notably, pensioners, its penetration in the massive informal sector is extremely low. The reasons are twofold: affordability (even small premiums can be a burden for those with irregular incomes) and a lack of trust and awareness. Expanding coverage to the informal sector is the single most important challenge for OHIS and is key to achieving Universal Health Coverage (UHC).</p>
                        <h4>Implications for Health Equity</h4>
                        <p>A system so reliant on a person&apos;s ability to pay is inherently inequitable. It creates a two-tier system where the wealthy can access high-quality private care, while the poor are left with underfunded, understaffed public facilities or no care at all. This exacerbates health disparities between urban and rural areas, and between different socio-economic groups. Achieving health equity requires a fundamental shift in financing, with a greater commitment to public funding and innovative strategies to subsidize insurance premiums for the poor and vulnerable.</p>
                     </Accordion>
                </div>
            </div>
        </section>
    );
};

export default SectionHealth;
