'use client';

import React from 'react';
import ChartComponent from './ChartComponent';
import Accordion from './Accordion';
import { commonChartOptions, wrapLabels } from '../lib/utils';

const SectionElderly = () => {
    const elderlyIncomeData = {
        labels: ['No Regular Income', 'Income <₦20k/mo', 'Income ≥₦20k/mo'],
        datasets: [{ label: 'Income Status of Elderly (%)', data: [58.7, 29.7, 11.6], backgroundColor: ['#e53e3e', '#fbbf24', '#38b2ac'], borderColor: '#1e293b', borderWidth: 3, }]
    };
    const elderlyIncomeOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, legend: { position: 'right' }, title: { ...commonChartOptions.plugins.title, text: 'Financial Insecurity Among the Elderly' } }, scales: {} };

    const elderlyHealthFactorsData = {
        labels: wrapLabels(['Regular Income (Protective)', 'Regular Exercise (Protective)', 'Residential Satisfaction (Protective)', 'Ever Smoked (Risk Factor)', 'Any Worry (Risk Factor)'], 30),
        datasets: [{ label: 'Odds Ratio of Ill Health', data: [0.51, 0.67, 0.55, 3.28, 2.1], backgroundColor: ['#38b2ac', '#38b2ac', '#38b2ac', '#e53e3e', '#e53e3e'], borderColor: '#1e293b', borderWidth: 1, }]
    };
    const elderlyHealthFactorsOptions = { ...commonChartOptions, indexAxis: 'y', plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Protective & Risk Factors for Elderly Health' } }, scales: { x: { ...commonChartOptions.scales.x, beginAtZero: true, title: { display: true, text: 'Odds Ratio (Lower is Better)' } }, y: { ...commonChartOptions.scales.y } } };

    const elderlyLivingArrangementData = {
        labels: ['With Spouse & Children', 'With Children Only', 'Living Alone', 'With Other Relatives'],
        datasets: [{ label: 'Living Arrangement (%)', data: [45, 35, 12, 8], backgroundColor: ['#38b2ac', '#63b3ed', '#e53e3e', '#fbbf24'], borderColor: '#1e293b', borderWidth: 3, }]
    };
    const elderlyLivingArrangementOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Elderly Living Arrangements' } }, scales: {} };

    return (
        <section id="elderly" className="py-16 md:py-24 border-b-2 border-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-wider text-sky-400 sm:text-4xl uppercase">[ELDERLY_WELFARE::SOCIO_ECONOMIC_ANALYSIS]</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400 max-w-4xl mx-auto">
                    {`> Compiling geriatric data... Assessing the challenges of financial security, health, and social exclusion for Osun's growing elderly population.`}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose-custom">
                    <h3 className="text-2xl font-semibold mb-4 text-sky-400 uppercase tracking-wider">The Golden Years: A Triad of Challenges</h3>
                    <p>The elderly population in Osun, while representing a smaller demographic slice (5.9%), faces a profound and interconnected triad of challenges: financial precarity, declining health, and social isolation. The most glaring issue is financial insecurity. An astounding 58.7% of seniors report having no regular source of income. This leaves them entirely dependent on the support of their children and wider family, a traditional safety net that is itself fraying under the pressure of widespread economic hardship. For retired civil servants, the situation is often compounded by systemic delays in pension payments, creating a state of chronic financial anxiety and diminishing their quality of life and social standing.</p>
                    <p>This financial vulnerability is directly linked to health outcomes. Nearly half (46.4%) of the elderly report a health issue within a two-week period, with chronic conditions like hypertension and joint pain being common. Lack of income is a major barrier to seeking care. The data on health risk factors is telling: having a regular income is a strong protective factor against ill-health (Odds Ratio 0.51), demonstrating the direct link between economic stability and physical wellbeing. Mental health is a silent epidemic in this demographic. Loneliness, reported by 12.8%, and worry, reported by 39.9%, are significant risk factors for poor health. The prevalence of depression is estimated to be as high as 32% in similar Nigerian contexts, yet specialized geriatric mental healthcare is virtually non-existent in the state.</p>
                </div>
                <div className="space-y-8">
                    <ChartComponent chartId="elderlyIncomeChart" type="pie" data={elderlyIncomeData} options={elderlyIncomeOptions} footerText="Source: Osun State Elderly Survey (2017)" />
                    <ChartComponent chartId="elderlyHealthFactorsChart" type="bar" data={elderlyHealthFactorsData} options={elderlyHealthFactorsOptions} footerText="Source: Osun State Elderly Survey (2017)" />
                    <ChartComponent chartId="elderlyLivingArrangementChart" type="doughnut" data={elderlyLivingArrangementData} options={elderlyLivingArrangementOptions} footerText="Source: Synthesized Social Data" />
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-2xl font-semibold text-center mb-8 text-sky-400 uppercase tracking-wider">Social Protection Systems: Current State and Future Needs</h3>
                <div className="max-w-5xl mx-auto space-y-4">
                     <Accordion title="Government Social Protection Schemes" startOpen={true}>
                        <h4>Agba Osun Stipend</h4>
                        <p>The "Agba Osun" scheme is a direct cash transfer program targeting the most vulnerable elders. While critically important for those it reaches, its limited scope means it does not constitute a comprehensive social pension system. The selection process can be opaque, and the amount is often insufficient to cover basic needs fully. However, it represents an important government acknowledgment of the need for direct support to the elderly poor.</p>
                        <h4>Pensioners' Health Insurance</h4>
                        <p>A more systemic and impactful intervention has been the enrollment of all state pensioners into the Osun Health Insurance Scheme (O'HIS) at no cost to them. This has been a game-changer, removing the primary financial barrier to accessing healthcare for this group. Hospitals report a significant surge in visits from pensioners since the policy's implementation, leading to better management of chronic diseases like hypertension and diabetes. This single policy demonstrates the powerful impact that removing user fees can have on health-seeking behavior and outcomes for the elderly.</p>
                     </Accordion>
                     <Accordion title="Analysis: Intergenerational Dynamics & The Fading Support System">
                        <h4>The Traditional Model</h4>
                        <p>Historically, the elderly in Yoruba culture, predominant in Osun, held a respected position within the extended family structure. They were repositories of wisdom and were cared for by their children and the wider community as a matter of duty and honor. This informal social security system was highly effective in a stable, agrarian society where families lived in close proximity.</p>
                        <h4>The Modern Strain</h4>
                        <p>This traditional model is now under immense strain. Urbanization has led to the geographic dispersal of families, as younger generations move to cities in search of opportunities, leaving their aging parents behind in rural areas. National economic pressures, including high unemployment and inflation, have diminished the capacity of adult children to provide financial support to their parents. The shift from communal to more individualistic, nuclear family structures also weakens the bonds and obligations of the extended family.</p>
                        <h4>Emerging Consequences</h4>
                        <p>The consequence of this fading support system is an increase in elder neglect and isolation. The 12% of elderly living alone is a stark indicator of this trend. For many, the absence of family support translates directly into food insecurity, poor health outcomes, and profound loneliness. This social transition underscores the urgent need for the state to step in and create a formal, robust social protection system. Relying on a traditional model that no longer functions effectively is not a sustainable or humane policy. The challenge is to design formal systems that complement, rather than replace, the remaining strengths of family and community care.</p>
                     </Accordion>
                     <Accordion title="Systemic Gaps and Policy Recommendations">
                        <p>Despite these efforts, significant systemic gaps remain. There is no dedicated budget for geriatric care within the state's health ministry, and a critical shortage of healthcare professionals trained in the specific needs of older adults persists. Ageism is still prevalent in policy and practice. Key policy recommendations include: 1) The establishment of a universal, non-contributory social pension for all citizens above a certain age (e.g., 70) to provide a basic income floor. 2) Investing in training for healthcare workers in geriatrics and integrating geriatric care into the PHC system. 3) Strengthening partnerships with NGOs and CBOs to expand the reach of social support services, particularly in rural areas. 4) Launching public awareness campaigns to combat ageism and promote the value and dignity of older persons.</p>
                     </Accordion>
                 </div>
            </div>
        </section>
    );
};

export default SectionElderly;
