import { Shield, Gavel, Hand, Users, Download } from 'lucide-react';
import ChartComponent from '@/components/ChartComponent';

export const metadata = {
  title: 'Child Protection & Welfare | Osun Child & Youth Development Insights',
  description: 'Examining the legal frameworks, challenges, and interventions related to child protection in Osun State, including child labor, abuse, and juvenile justice.',
};

const childLaborData = [
  { name: 'Osun', rate: 12.5 },
  { name: 'SW Average', rate: 15 },
  { name: 'National', rate: 31.5 },
  { name: 'Bauchi', rate: 55 },
];

export default function ProtectionPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <div className="inline-block bg-console-blue p-4 rounded-full">
          <Shield className="w-16 h-16 text-console-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-console-light-gray">Child Protection & Welfare</h1>
        <p className="text-lg text-console-gray max-w-3xl mx-auto">
          A comprehensive review of the systems in place to protect children's rights and welfare in Osun, from legal frameworks to on-the-ground enforcement against labor, abuse, and trafficking.
        </p>
      </header>

      <main className="space-y-16">
        <section id="legal-framework" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Gavel className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Legal Framework & Institutions</h2>
          </div>
          <p className="text-console-gray">
            Osun State has a strong legal basis for child protection, having been one of the early states to domesticate the national Child Rights Act (CRA) of 2003. Osun's Child Rights Law mirrors the federal act, explicitly prohibiting child marriage, child labor, abuse, and all forms of exploitation. This proactive legal stance is significant, as all 17 southern states have domesticated the CRA, unlike many northern states where, as of 2020, about 11 states had yet to do so. The CRA guarantees fundamental rights to education, health, and protection for all children under the age of 18. A key component of its implementation was the establishment of Family Courts at both state and local levels to handle juvenile justice and child welfare cases. In Osun, these specialized courts are operational and hear cases involving child custody, maintenance, and juvenile offenses. Crucially, they apply a rehabilitation approach rather than punitive sentencing for children in conflict with the law, ensuring that the child's best interest is the primary consideration. The state also has a functional Child Protection Network, a coalition of government agencies and civil society organizations that works to monitor and respond to child rights violations, creating a framework for collaborative action. This robust legal and institutional foundation provides a powerful tool for safeguarding children, but its effectiveness ultimately depends on consistent enforcement and public awareness.
          </p>
        </section>

        <section id="child-labor" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Hand className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Child Labor Prevalence</h2>
          </div>
          <p className="text-console-gray">
            Child labor exists in Osun but at significantly lower levels than in much of Nigeria. The 2021 MICS data indicates that about 31.5% of Nigerian children aged 5-17 are engaged in child labor, according to the ILO/SDG definition. In Osun and other southwestern states, this figure is far lower, roughly estimated to be around 10-15%. By contrast, the worst-affected states, such as Bauchi, have over half of their children (~55%) involved in child labor. Common forms of child labor in Osun include hawking goods on the street, working as apprentices in workshops, or farming in rural areas. Extreme or hazardous labor, such as children working in artisanal mining sites or as domestic servants, is less common but can still be found. The government, through the Ministry of Women Affairs and Social Welfare, conducts periodic raids on locations known for using child labor and has rescued children, especially those trafficked from other states. Law enforcement agencies like the NSCDC (Civil Defence Corps) and the police have units that enforce child labor laws and often warn that parents who subject their children to labor or begging will be prosecuted. However, enforcement remains an ongoing battle, as poverty is the primary driver. Many families in Osun's villages involve their children in subsistence farming or petty trade simply to augment their household income. To combat this, Osun's State Universal Basic Education Board (SUBEB) has partnered with UNICEF on campaigns that stress the importance of schooling over child labor. Some NGOs also provide conditional support, such as free school uniforms and meals, to incentivize poor families to keep their children in school rather than at work.
          </p>
          <ChartComponent
            chartType="BarChart"
            data={childLaborData}
            series={[{ type: 'Bar', dataKey: 'rate', name: 'Prevalence Rate (%)', fill: '#66f4e1' }]}
            title="Child Labor Prevalence (% age 5-17)"
            description="Comparing Osun's estimated child labor rate with regional, national, and high-prevalence states."
          />
        </section>

        <section id="abuse-trafficking" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Abuse & Trafficking</h2>
          </div>
          <p className="text-console-gray">
            Child abuse—whether physical, sexual, or emotional—is taken very seriously in Osun, with the state's CRA-based law prescribing stiff penalties for offenders. High-profile enforcement actions, such as arrests publicized in the media, serve as a deterrent. The state also focuses on prevention, with the Ministry of Women Affairs running awareness programs on positive parenting and establishing Children's Parliament forums where young people can discuss their rights and report abuse safely. Regarding child trafficking, Osun is not a major source state compared to others like Edo. However, the internal trafficking of children for domestic work or street hawking does occur. Osun's proximity to the economic hub of Lagos means some trafficked children pass through or originate from the state. The National Agency for Prohibition of Trafficking in Persons (NAPTIP) has a liaison office covering the Southwest and has handled cases involving teenage girls trafficked for housemaid jobs and boys sent to work in quarries or on plantations. Osun State collaborates with NAPTIP and NGOs on joint operations to intercept such activities and rescue children. Furthermore, the government has embraced initiatives to end female genital mutilation (FGM), a harmful traditional practice still present in the state. With a prevalence of about 45% among adult women, one of the highest in the country, the state, in partnership with UNICEF, launched the "Movement for Good to End FGM" in 2023, which focuses on training community leaders and traditional birth attendants to abandon the practice.
          </p>
        </section>
      </main>
    </div>
  );
}
