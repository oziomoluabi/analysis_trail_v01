import { Users, Landmark, Vote, Award, Download } from 'lucide-react';
import ChartComponent from '@/components/ChartComponent';

export const metadata = {
  title: 'Youth Participation & Civic Engagement | Osun Child & Youth Development Insights',
  description: 'Exploring the role of youth in Osun\'s civic and political landscape, from demographics and inclusion to the impact of youth organizations and community programs.',
};

const youthParticipationData = [
  { name: 'Voter Turnout (Youth)', value: 65 },
  { name: 'Political Appointments (Youth)', value: 15 },
  { name: 'Community Volunteering', value: 45 },
  { name: 'Org Membership', value: 30 },
];


export default function CivicEngagementPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <div className="inline-block bg-console-blue p-4 rounded-full">
          <Users className="w-16 h-16 text-console-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-console-light-gray">Youth Participation & Civic Engagement</h1>
        <p className="text-lg text-console-gray max-w-3xl mx-auto">
          Analyzing how Osun's youth are shaping their communities and influencing policy through political participation, volunteerism, and active engagement in youth-led organizations.
        </p>
      </header>

      <main className="space-y-16">
        <section id="demographics-inclusion" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Vote className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Demographics & Political Inclusion</h2>
          </div>
          <p className="text-console-gray">
            Youth form a significant and influential portion of Osun State's population, with an estimated 55-60% of residents being under the age of 30. This "youth bulge" is increasingly translating into tangible civic and political influence. The passage of Nigeria's "Not Too Young To Run Act" in 2018, which lowered the age requirements for elective offices, has empowered a new generation of young Osun indigenes to seek leadership roles. In the 2023 general elections, for example, several candidates in their early 30s successfully ran for seats in the State House of Assembly. At the local government level, it is becoming more common for youths under 35 to be appointed as supervisors and councilors, signaling a growing trust in young leaders. Voter turnout among youth in Osun spiked during recent elections, mirroring a national trend of youth mobilization. The 2023 presidential election, in particular, saw youth emerge as a driving force, especially in support of reformist candidates. The government of Osun has also actively worked to involve youth in governance through appointments, with the current administration including several young special advisers and assistants who focus on youth affairs, the digital economy, and social media engagement. This deliberate inclusion is a recognition that the state's future policies must reflect the aspirations and priorities of its largest demographic group.
          </p>
        </section>

        <section id="youth-organizations" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Landmark className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Youth Organizations & Councils</h2>
          </div>
          <p className="text-console-gray">
            Osun has an active and vibrant ecosystem of youth organizations. The state chapter of the National Youth Council of Nigeria (NYCN) serves as an umbrella body for various youth groups and has been vocal on critical issues like unemployment, famously urging the governor to expedite the launch of the Imole Youth Corps. In addition to advocacy, the NYCN organizes community service activities. Osun youths are also represented in the Nigerian Youth Parliament (NYP), a national legislative simulation for young people. In a notable event, Osun's NYP representatives hosted the Osun Emerging Leaders Summit on International Youth Day 2023, drawing dynamic young leaders from across the state to discuss entrepreneurship, leadership, and civic engagement. Such events indicate a thriving culture of youth civic participation, where young people are networking, voicing their concerns, and being recognized for their positive impact. Furthermore, local youth parliaments exist at tertiary institutions like Osun State University and various polytechnics, and community youth associations regularly engage with local officials on development projects, creating a multi-layered structure for youth representation and action.
          </p>
        </section>

        <section id="engagement-programs" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Civic Engagement Programs</h2>
          </div>
          <p className="text-console-gray">
            The state government has initiated several programs to encourage youth volunteerism and community service. Apart from the Imole Youth Corps, which is fundamentally a civic service scheme, the state supports initiatives like the Osun Youth Ambassadors, a volunteer network that carries out environmental clean-ups, blood donation drives, and peer education on social issues. Osun's youths have historically been active in social causes. During the #EndSARS protests in October 2020, many young people in Osun joined the nationwide demonstrations against police brutality, conducting peaceful marches in Osogbo and Ile-Ife. The state government responded by engaging youth representatives in dialogues and setting up a judicial panel of inquiry, where youth activists gave powerful testimonies, an episode that strengthened youth consciousness of their civic rights. Partnerships with international organizations have further bolstered youth engagement. The Open Society Initiative, the U.S. government's YALI Network, and the British Council have all run programs in Osun focusing on civic education, leadership training, and using arts for social advocacy. These programs enhance the skills and confidence of young people, empowering them to participate more effectively in civic life and hold their leaders accountable. Youth-led NGOs like Kimpact Development Initiative also conduct social accountability projects, training young citizens to track budgets and monitor constituency projects, fostering transparency and a sense of ownership in governance.
          </p>
          <ChartComponent
            chartType="BarChart"
            data={youthParticipationData}
            series={[{ type: 'Bar', dataKey: 'value', name: 'Participation Metric (%)', fill: '#66f4e1' }]}
            title="Youth Participation Metrics (Illustrative)"
            description="Illustrative data showing different forms of youth civic engagement in Osun State."
          />
        </section>
      </main>
    </div>
  );
}
