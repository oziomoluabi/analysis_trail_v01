'use client';

import React from 'react';
import ChartComponent from './ChartComponent';
import Accordion from './Accordion';
import { commonChartOptions, wrapLabels } from '../lib/utils';

const SectionChildYouth = () => {
    const educationData = {
        labels: ['Male', 'Female'],
        datasets: [{ label: 'Out-of-School Children Rate (%)', data: [14.88, 11.5], backgroundColor: ['#e53e3e', '#38b2ac'], borderColor: '#1e293b', borderWidth: 1, borderRadius: 0, barPercentage: 0.6, }]
    };
    const educationOptions = { ...commonChartOptions, indexAxis: 'y', plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Out-of-School Rates by Gender (2021)' } }, scales: { x: { ...commonChartOptions.scales.x, beginAtZero: true, max: 20, ticks: { callback: (v) => v + '%' } }, y: { ...commonChartOptions.scales.y } } };

    const primaryCompletionData = {
        labels: ['Rural Children', 'Urban Children'],
        datasets: [{ label: 'Primary Completion Rate (%)', data: [77, 92], backgroundColor: ['#fbbf24', '#63b3ed'], borderColor: '#1e293b', borderWidth: 1, borderRadius: 0, barPercentage: 0.6, }]
    };
    const primaryCompletionOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Primary Completion: Rural vs. Urban' } }, scales: { x: { ...commonChartOptions.scales.x, ticks: { callback: (v) => v + '%' } }, y: { ...commonChartOptions.scales.y, beginAtZero: true, max: 100 } } };

    const youthUnemploymentData = {
        labels: ['Osun State', 'National Avg', 'South-West Avg'],
        datasets: [{ label: 'Youth Unemployment Rate (%)', data: [18.5, 25.7, 19.2], backgroundColor: ['#38b2ac', '#e53e3e', '#63b3ed'], borderColor: '#1e293b', borderWidth: 1, borderRadius: 0, barPercentage: 0.7, }]
    };
    const youthUnemploymentOptions = { ...commonChartOptions, plugins: { ...commonChartOptions.plugins, legend: { display: false }, title: { ...commonChartOptions.plugins.title, text: 'Youth Unemployment Comparison (15-34 yrs)' } }, scales: { x: { ...commonChartOptions.scales.x }, y: { ...commonChartOptions.scales.y, beginAtZero: true, max: 30, ticks: { callback: (v) => v + '%' } } } };

    return (
        <section id="youth" className="py-16 md:py-24 bg-slate-800/50 my-12 border-y-2 border-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-wider text-sky-400 sm:text-4xl uppercase">[CHILD_&_YOUTH::DEVELOPMENT_ANALYSIS]</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400 max-w-4xl mx-auto">
                    {`> Querying database for youth sector... Exploring intersecting challenges in education, skills acquisition, and employment pathways for Osun's youngest citizens.`}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="prose-custom">
                    <h3 className="text-2xl font-semibold mb-4 text-sky-400 uppercase tracking-wider">The Education Equation: Access, Quality, and Outcomes</h3>
                    <p>Education stands as the primary pillar for harnessing the potential of Osun&apos;s youth bulge, yet the sector is fraught with systemic challenges. The high rate of out-of-school children, with approximately 100,000 identified in early 2025, is a critical issue. While gender disparity exists (14.88% male vs. 11.5% female), the problem is widespread and deeply rooted in socio-economic factors. Household poverty forces children into labor—such as street hawking, farming, or artisanal mining—to supplement family income, effectively prioritizing immediate survival over long-term educational investment. This creates a cycle of poverty and limited opportunity that is difficult to break.</p>
                    <p>Within the school system, the quality of education is severely hampered by a critical teacher shortage. The projected deficit of 11,000 teachers translates into overcrowded classrooms, with pupil-to-teacher ratios far exceeding recommended standards in many public schools. This not only diminishes the quality of instruction but also places immense strain on the existing teaching workforce, leading to burnout and reduced effectiveness. Furthermore, infrastructural deficits are rampant. Many schools lack basic amenities like functional libraries, science laboratories, and adequate sanitation facilities. The absence of modern teaching aids and digital literacy tools further disadvantages students, failing to prepare them for a technology-driven global economy.</p>
                    <p>Despite these significant hurdles, there are bright spots. Osun&apos;s improved performance in the NECO SSCE rankings—climbing to 7th nationally with a 71% pass rate in 2024—signals that targeted interventions and increased focus can yield positive results. This achievement reflects the resilience of students and teachers and suggests potential in the state&apos;s educational framework. However, such successes must be contextualized by the persistent rural-urban divide. The 15-percentage-point gap in primary school completion rates between urban (92%) and rural (77%) children highlights a deep-seated inequality in access and quality that must be addressed to ensure equitable development across the state.</p>
                </div>
                <div className="space-y-8">
                    <ChartComponent chartId="educationChart" type="bar" data={educationData} options={educationOptions} footerText="Source: MICS-6 (2021)" />
                    <ChartComponent chartId="primaryCompletionChart" type="bar" data={primaryCompletionData} options={primaryCompletionOptions} footerText="Source: NDHS 2023-24 (Southwest Zone)" />
                    <ChartComponent chartId="youthUnemploymentChart" type="bar" data={youthUnemploymentData} options={youthUnemploymentOptions} footerText="Source: NBS & State-level Surveys (Synthesized)" />
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-2xl font-semibold text-center mb-8 text-sky-400 uppercase tracking-wider">Deep Dive: Youth Empowerment and Future Skills</h3>
                <div className="max-w-5xl mx-auto space-y-4">
                    <Accordion title="Osun Youth Empowerment Scheme (OYES): Detailed Analysis" startOpen={true}>
                        <h4>Programmatic Goals and Structure</h4>
                        <p>Launched in 2010, OYES was a pioneering social protection program designed as a &apos;work-for-pay&apos; volunteer scheme. Its primary objective was to mitigate the high youth unemployment by engaging tens of thousands of youths in productive community service. Cadets were deployed to various areas of need, including traffic control (O-Traffic), sanitation (O-Clean), public works, and as teaching assistants in schools. The program aimed not just to provide a temporary stipend but to instill a work ethic, discipline, and a sense of civic responsibility. It also included modules on skill acquisition and entrepreneurship to prepare participants for post-scheme opportunities.</p>
                        <h4>Challenges and Critiques</h4>
                        <p>Despite its successes, OYES faced significant operational challenges. Its heavy reliance on state government funding made it vulnerable to fiscal shocks and changes in political administration, leading to inconsistencies in implementation and payment. Critics pointed to the lack of a clear and robust exit strategy for many participants, who struggled to find permanent employment after their two-year tenure. Furthermore, the scheme was often subject to political interference in its recruitment and deployment processes, which sometimes compromised its meritocratic ideals.</p>
                    </Accordion>
                    <Accordion title="O-MEALS School Feeding Programme: Detailed Breakdown">
                        <h4>Objectives and Operational Scale</h4>
                        <p>The O-MEALS program provides a daily meal to over 252,000 pupils in public primary schools. Its core objectives are multi-faceted: 1) to improve the nutritional status of children, thereby enhancing their cognitive development and learning capacity; 2) to increase school enrollment and attendance rates, particularly among children from low-income families; and 3) to stimulate the local economy by creating a market for local farmers and employment for caterers (predominantly women).</p>
                        <h4>Nutritional and Logistical Challenges</h4>
                        <p>While laudable, the program&apos;s nutritional goals are not always met. Reports have highlighted issues with the quality and quantity of food served, with meals sometimes lacking essential micronutrients or being smaller than specified. Logistical hurdles, including delays in funding disbursement to caterers, can lead to inconsistent service delivery. The success of O-MEALS in boosting enrollment has, in some cases, exacerbated the problem of overcrowded classrooms and stretched school infrastructure, highlighting the need for a coordinated approach.</p>
                    </Accordion>
                    <Accordion title="Analysis: Digital Literacy and the Future Skills Gap">
                        <h4>The Emerging Challenge</h4>
                        <p>While basic education remains a challenge, a new and widening gap is emerging in digital literacy and future-ready skills. The global economy is increasingly driven by technology, automation, and digital services. For Osun&apos;s youth to compete and thrive, they need more than basic literacy and numeracy; they require proficiency in digital tools, critical thinking, problem-solving, and collaboration. The current education system, with its infrastructural deficits and outdated curriculum, is ill-equipped to provide these skills at scale.</p>
                        <h4>Current State of Digital Skills</h4>
                        <p>Access to computers and the internet is highly unequal, with a significant urban-rural and public-private school divide. Many students in public schools may complete their secondary education with little to no hands-on computer experience. While several private initiatives and tech hubs (e.g., in Osogbo) are working to bridge this gap, their reach is limited. This creates a two-tier system where a small segment of youth gains valuable digital skills while the majority is left behind, unprepared for the jobs of the future.</p>
                        <h4>Policy Imperatives</h4>
                        <p>Addressing this gap requires a multi-pronged policy approach. Firstly, massive investment is needed to equip public schools with computer labs and reliable internet connectivity. Secondly, the curriculum must be reformed to integrate digital literacy from the primary level upwards. Thirdly, teacher training is paramount; educators themselves need to be upskilled to effectively teach these new subjects. Finally, fostering public-private partnerships with tech companies and local hubs can help scale up vocational training programs in areas like coding, data analytics, digital marketing, and cybersecurity, providing clear pathways to employment for graduates.</p>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default SectionChildYouth;
