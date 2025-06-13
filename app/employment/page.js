import { Briefcase, BarChart, HardHat, Lightbulb, Download } from 'lucide-react';
import ChartComponent from '@/components/ChartComponent';

export const metadata = {
  title: 'Employment & Skills | Osun Child & Youth Development Insights',
  description: 'Analysis of youth unemployment, skills development programs like O-YES, and the growth of entrepreneurship in Osun State.',
};

const unemploymentData = [
  { name: 'Osun', rate: 11.7, underemployment: 25 },
  { name: 'National', rate: 33.3, underemployment: 22.8 },
  { name: 'Imo', rate: 50, underemployment: 18 },
  { name: 'Lagos', rate: 14, underemployment: 19 },
];

export default function EmploymentPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <div className="inline-block bg-console-blue p-4 rounded-full">
          <Briefcase className="w-16 h-16 text-console-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-console-light-gray">Employment & Skills Development</h1>
        <p className="text-lg text-console-gray max-w-3xl mx-auto">
          Examining the landscape of youth employment in Osun, from its remarkably low unemployment rate to the persistent challenges of underemployment and the crucial role of state-led skills programs.
        </p>
      </header>

      <main className="space-y-16">
        <section id="youth-unemployment" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <BarChart className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Youth Unemployment Landscape</h2>
          </div>
          <p className="text-console-gray">
            Osun State stands out in the Nigerian context for its remarkably low official unemployment rates, yet this headline figure masks a more complex reality of underemployment and job quality concerns. As of the fourth quarter of 2020, Osun's broad unemployment rate was a mere 11.7%—the lowest of all states in Nigeria. This figure is particularly striking when contrasted with the national unemployment rate, which hit 33.3% during the same period, and the rates in some states like Imo, which exceeded a staggering 50%. This exceptionally low figure for Osun is partly attributed to the large number of youths engaged in informal and agricultural work. According to the statistical definition used at the time, individuals engaged in such activities, even for a few hours a week, were counted as employed. Furthermore, the low rate reflects the significant impact of large-scale, state-driven empowerment programs that absorbed tens of thousands of young people into temporary public works jobs. However, the challenge of youth underemployment is prevalent. Many young Osun indigenes scrape by in subsistence farming, petty trading, or artisanal jobs that do not fully utilize their skills or educational qualifications. Graduate unemployment remains a persistent issue, with fresh diploma and degree holders entering a labor market with very limited formal-sector openings each year. The COVID-19 pandemic in 2020-21 further strained youth employment prospects, although Osun's economy, which is dominated by agriculture, commerce, and the public sector, proved somewhat more resilient compared to the oil-dependent economies of other states. The situation highlights a critical policy challenge: how to transition from creating temporary, low-skill jobs to fostering sustainable, high-quality employment that can provide a decent livelihood and career progression for the state's growing youth population. Addressing this requires a strategic focus on private sector development, attracting investment, and aligning skills training with the demands of a modern economy.
          </p>
          <ChartComponent
            chartType="BarChart"
            data={unemploymentData}
            series={[
                { type: 'Bar', dataKey: 'rate', name: 'Unemployment Rate (%)', fill: '#66f4e1' },
                { type: 'Bar', dataKey: 'underemployment', name: 'Underemployment Rate (%)', fill: '#1a344d' }
            ]}
            title="Unemployment vs. Underemployment Rates (Q4 2020)"
            description="Comparing Osun's rates with national and other state figures, highlighting the underemployment challenge."
          />
        </section>

        <section id="skills-programs" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <HardHat className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Skills Development Programs</h2>
          </div>
          <p className="text-console-gray">
            Over the past decade, Osun has implemented some of Nigeria's most ambitious youth empowerment schemes. The flagship program was the Osun Youth Empowerment Scheme (O-YES), launched in 2010. This program trained and engaged 20,000 volunteer youths in two-year cycles, deploying them to public works such as environmental sanitation, road maintenance, traffic control, and agriculture. O-YES provided participants with a modest stipend and valuable work experience. By 2017, the state claimed that the scheme had facilitated the creation of 18,000 permanent jobs for its alumni in various sectors, significantly contributing to Osun's low unemployment statistics. In late 2022, the new administration dissolved O-YES, citing the need to restructure it, and unveiled the "Imole Youth Corps (IYC)." The IYC is designed as a new flagship youth engagement program focusing on community service, leadership, and modern skills acquisition. Applications opened in early 2023, targeting 18-35 year-olds. However, implementation has been slow, leading to calls from youth groups for the government to expedite the program's launch. Beyond these large-scale public works schemes, Osun has partnered with federal programs and private initiatives. Many Osun youths have benefited from Nigeria's N-Power program, which offers temporary placements for young graduates in teaching, health, and tech. In 2023, the state launched the "Osun UpSkill Program," aiming to train 50,000 youths, entrepreneurs, and SMEs in digital skills and business development, a crucial step towards aligning the workforce with the modern economy. These efforts, though sometimes fragmented, are vital in addressing the youth skills gap and improving employability.
          </p>
        </section>

        <section id="entrepreneurship" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Lightbulb className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Vocational & Entrepreneurship</h2>
          </div>
          <p className="text-console-gray">
            Entrepreneurship is a rapidly growing avenue for Osun's youth. The state government, through its Ministry of Youth and Sports and Ministry of Commerce, runs periodic start-up grant programs and business plan competitions to encourage young entrepreneurs. Small and medium enterprise (SME) development programs, often in collaboration with the Bank of Industry or international donor agencies, have targeted youth-led businesses in agriculture, technology, and the creative industries. Osun's youths also participate actively in national entrepreneurship contests and have produced many successful small businesses in fashion, music, and agribusiness. To support this ecosystem, the state has facilitated workshops on financial literacy and provides some waivers on local fees for youth-owned businesses. However, access to finance remains a significant hurdle; many young people must rely on cooperative societies or family support to start their businesses, as formal bank lending is often inaccessible. The reliance on government intervention programs also poses a risk: when a program like O-YES ends, there is a danger of many youths falling back into joblessness. This underscores the pressing need for sustainable job creation in the private sector. Sectors with high potential in Osun include agriculture (where the state has a comparative advantage in cassava, cocoa, and palm produce) and tourism/culture (given the state's rich heritage sites like the Osun-Osogbo Grove). Government policies, such as the Osun Youth Policy (2020), rightly emphasize agripreneurship and ICT training, aligning with these opportunities. The focus is now shifting from temporary public works to equipping youths with marketable vocational and tech skills and fostering an entrepreneurial spirit that can drive sustainable economic growth.
          </p>
        </section>
      </main>
    </div>
  );
}
