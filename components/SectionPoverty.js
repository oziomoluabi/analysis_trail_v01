'use client';

import React from 'react';
import ChartComponent from './ChartComponent';
import Accordion from './Accordion';
import { commonChartOptions } from '../lib/utils';

const SectionPoverty = () => {
    const povertyComparisonData = {
        labels: ['Monetary Poverty', 'Multidimensional Poverty'],
        datasets: [{ label: 'Poverty Rate (%)', data: [8.52, 42], backgroundColor: ['#38b2ac', '#e53e3e'], borderColor: '#1e293b', borderWidth: 1, borderRadius: 0, barPercentage: 0.5, }]
    };
    const povertyComparisonOptions = { ...commonChartOptions, indexAxis: 'y', plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'The Two Poverties: Income vs. Deprivation' } }, scales: { x: { ...commonChartOptions.scales.x, beginAtZero: true, max: 50, title: { display: true, text: 'Percentage (%)', color: '#e2e8f0' } }, y: { ...commonChartOptions.scales.y } } };

    const mpiComponentsData = {
        labels: ['Health Deprivation', 'Education Deprivation', 'Living Standards Deprivation'],
        datasets: [{ label: 'Contribution to MPI (%)', data: [28, 30, 42], backgroundColor: 'rgba(229, 62, 62, 0.4)', borderColor: '#e53e3e', pointBackgroundColor: '#e53e3e', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: '#e53e3e', borderWidth: 2, }]
    };
    const mpiComponentsOptions = { ...commonChartOptions, indexAxis: 'r', plugins: { ...commonChartOptions.plugins, title: { ...commonChartOptions.plugins.title, text: 'Drivers of Multidimensional Poverty' } }, scales: { r: { ...commonChartOptions.scales.y, beginAtZero: true, max: 50, pointLabels: { font: { size: 12 } }, ticks: { backdropColor: 'rgba(0,0,0,0.5)' } } } };

    const childLaborData = {
        labels: ['Children in Labor (5-17 yrs)'],
        datasets: [{ label: 'Rate (%)', data: [39.2], backgroundColor: ['#fbbf24'], borderColor: '#1e293b', borderWidth: 1, borderRadius: 0, barPercentage: 0.4, }]
    };
    const childLaborOptions = { ...commonChartOptions, indexAxis: 'y', plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'National Child Labor Rate (2022)' } }, scales: { x: { ...commonChartOptions.scales.x, beginAtZero: true, max: 50, ticks: { callback: (v) => v + '%' } }, y: { ...commonChartOptions.scales.y } } };

    return (
        <section id="poverty" className="py-16 md:py-24 border-b-2 border-slate-800">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-wider text-sky-400 sm:text-4xl uppercase">[POVERTY_&_INCLUSION::DECONSTRUCTION]</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400 max-w-4xl mx-auto">
                    {`> Deconstructing poverty... Analyzing the dual challenge of low income poverty versus high multidimensional deprivation and strategic efforts for vulnerable groups.`}
                </p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose-custom">
                    <h3 className="text-2xl font-semibold mb-4 text-sky-400 uppercase tracking-wider">Beyond Income: Deconstructing Deprivation</h3>
                    <p>The poverty narrative in Osun State is a study in contrasts. The remarkably low monetary poverty rate of 8.52% suggests that a relatively small fraction of the population lives on less than the national poverty line. This metric, however, conceals a more pervasive issue: multidimensional poverty. The alarming 42% multidimensional poverty index (MPI) reveals that nearly half the population suffers from overlapping deprivations across health, education, and living standards, even if their daily income is technically above the poverty threshold. This disparity is the central challenge for social policy in the state.</p>
                    <p>An analysis of the components driving the MPI shows that deficits in living standards are the largest contributor (approx. 42%). This includes lack of access to clean drinking water, inadequate sanitation, flooring made from natural materials, and reliance on polluting cooking fuels like firewood or charcoal. Deprivations in education (approx. 30%), such as households where no member has completed six years of schooling, and health (approx. 28%), including malnutrition or child mortality, are also major factors. This breakdown clearly indicates that policy must prioritize investments in basic infrastructure—water, sanitation, and clean energy—alongside strengthening health and education systems to make a meaningful dent in poverty.</p>
                    <p>This landscape of deprivation creates a fertile ground for vulnerability, particularly for children. The national statistic of 39.2% of children engaged in child labor is a direct consequence of this poverty. In Osun, this manifests in towns like Ikire and Ilesa, where children are drawn into activities like farm labor, street hawking, and even hazardous work in artisanal mining to support their families. This not only violates their rights but also truncates their education, perpetuating an intergenerational cycle of poverty. The economic pressure on households is a more potent driver of school dropout than any lack of aspiration. Consequently, addressing child labor requires robust social protection programs that alleviate economic distress for families, making it feasible for them to keep their children in school.</p>
                </div>
                 <div className="space-y-8">
                    <ChartComponent chartId="povertyComparisonChart" type="bar" data={povertyComparisonData} options={povertyComparisonOptions} footerText="Source: NBS & State Reports" />
                    <ChartComponent chartId="mpiComponentsChart" type="radar" data={mpiComponentsData} options={mpiComponentsOptions} footerText="Source: MPI Data Synthesis" />
                     <ChartComponent chartId="childLaborChart" type="bar" data={childLaborData} options={childLaborOptions} footerText="Source: Nigeria Child Labour Survey (2022)" />
                 </div>
            </div>
            <div className="mt-20">
                 <h3 className="text-2xl font-semibold text-center mb-8 text-sky-400 uppercase tracking-wider">Vulnerability Framework: Institutions and Economy</h3>
                 <div className="max-w-5xl mx-auto space-y-4">
                     <Accordion title="Child Protection Framework: Status and Gaps">
                        <h4>Legal and Institutional Framework</h4>
                        <p>Osun State has domesticated the national Child's Right Act, providing a legal basis for protecting children from abuse, neglect, and exploitation. The Ministry of Women, Children and Social Affairs is the primary government body tasked with implementing this law. Its responsibilities include investigating cases of abuse, providing shelter and psychosocial support to victims, and running public awareness campaigns. The framework is further supported by the Violence Against Persons (Prohibition) Act, which offers broader protections against all forms of violence.</p>
                        <h4>Implementation Challenges</h4>
                        <p>Despite the legal framework, enforcement remains weak. The social welfare system is underfunded and understaffed, limiting its capacity to respond effectively to the high volume of cases. There is a shortage of trained social workers, counselors, and child protection officers. Furthermore, deeply entrenched cultural norms and the stigma associated with reporting abuse, particularly sexual violence, mean that many cases go unreported. The justice system can also be slow and not always child-friendly, which can re-traumatize victims.</p>
                     </Accordion>
                     <Accordion title="Inclusion for Persons with Disabilities (PWDs): Progress and Hurdles" startOpen={true}>
                        <h4>Legislative Milestones</h4>
                        <p>The passage of the Osun State Discrimination Against PWDs (Prohibition) Law in 2024 and the subsequent establishment of the Bureau for People with Disabilities in 2025 are landmark achievements. This legislation moves beyond a charity-based model to a rights-based approach. It mandates non-discrimination in employment, education, and healthcare. Critically, it includes provisions for accessibility, requiring public buildings to incorporate features like ramps, accessible restrooms, and designated parking. The Bureau is tasked with overseeing the implementation of this law, advocating for PWD rights, and coordinating programs to enhance their social and economic inclusion.</p>
                        <h4>Persistent Barriers to Inclusion</h4>
                        <p>The primary challenge now lies in implementation and enforcement. Many existing public and private buildings remain inaccessible, and retrofitting them is a costly and slow process. In the education sector, there is a severe lack of specialized learning materials and trained special needs teachers. Social stigma and negative stereotypes about the capabilities of PWDs also persist, creating barriers to employment and social participation. A concerted effort involving public investment, private sector collaboration, and a shift in societal attitudes is needed to translate its provisions into a lived reality.</p>
                     </Accordion>
                     <Accordion title="The Role of the Informal Economy">
                        <h4>A Double-Edged Sword</h4>
                        <p>The informal economy in Osun, as in the rest of Nigeria, is vast and acts as a massive employer of last resort. It encompasses a wide range of activities, from small-scale farming and retail trade (market women) to artisanal work and transportation services (motorcycle taxis). For many, it is the only available source of livelihood, providing a crucial buffer against absolute poverty and unemployment. It demonstrates incredible resilience and entrepreneurial spirit at the grassroots level.</p>
                        <h4>Challenges and Vulnerabilities</h4>
                        <p>However, work in the informal sector is characterized by precarity. Incomes are often low and irregular, and there is a complete lack of social protection—no pensions, health insurance, or paid leave. Workers are vulnerable to exploitation, police harassment, and economic shocks. The lack of formal registration also means these businesses have little to no access to credit from formal financial institutions, which severely limits their ability to grow and scale. This "informality trap" keeps millions locked in low-productivity activities, hindering overall economic development. Policy aimed at poverty reduction must therefore include strategies for formalizing the informal sector, not through punitive measures, but by providing incentives such as simplified registration, access to microfinance, and inclusion in social security schemes.</p>
                     </Accordion>
                 </div>
            </div>
        </section>
    );
};

export default SectionPoverty;
