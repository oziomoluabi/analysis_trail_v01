import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, HeartPulse, Briefcase, Shield, Users, ArrowRight, Rss, Download } from 'lucide-react';
import ChartComponent from '@/components/ChartComponent';

const outOfSchoolData = [
  { name: '2019', 'Osun Rate (%)': 15 },
  { name: '2020', 'Osun Rate (%)': 14 },
  { name: '2021', 'Osun Rate (%)': 13 },
  { name: '2022', 'Osun Rate (%)': 11.5 },
  { name: '2023', 'Osun Rate (%)': 10 },
  { name: '2024', 'Osun Rate (%)': 9.5 },
];

const unemploymentData = [
  { name: 'Osun', Rate: 11.7 },
  { name: 'National', Rate: 33.3 },
  { name: 'Lagos', Rate: 14 },
  { name: 'Bauchi', Rate: 27 },
];

const dimensions = [
  { title: 'Education', icon: BookOpen, href: '/education', description: 'Analyze literacy, school enrollment, infrastructure gaps, and key educational programs shaping the future of Osun\'s youth.' },
  { title: 'Health & Well-Being', icon: HeartPulse, href: '/health', description: 'Investigate child nutrition, adolescent health, healthcare access, and the performance of public health interventions.' },
  { title: 'Employment & Skills', icon: Briefcase, href: '/employment', description: 'Explore the youth unemployment landscape, skills development initiatives, and the rise of entrepreneurship.' },
  { title: 'Child Protection', icon: Shield, href: '/protection', description: 'Review legal frameworks, child labor statistics, and institutional efforts to protect vulnerable children from harm.' },
  { title: 'Civic Engagement', icon: Users, href: '/civic-engagement', description: 'Understand youth participation in governance, the role of councils, and programs fostering community involvement.' },
];

const newsItems = [
    { tag: 'Program Launch', title: 'Osun UpSkill Program Trains 50,000 Youths in Digital Literacy', description: 'The state\'s new "Osun UpSkill Program" is making significant strides in equipping 50,000 youths with critical digital skills and business development knowledge, aiming to boost employability and foster innovation across the region.' },
    { tag: 'Success Story', title: 'Academic Performance Soars: Osun Ranks 7th in NECO SSCE', description: 'In a landmark achievement, Osun State has secured its best NECO SSCE performance in 18 years, climbing to the 7th position nationally with an impressive 71% pass rate in critical subjects.' },
    { tag: 'Policy Update', title: 'Movement for Good to End FGM Launched in Partnership with UNICEF', description: 'Osun has launched a major initiative to combat Female Genital Mutilation, collaborating with UNICEF and community leaders to engage families and abandon the harmful traditional practice through education and support systems.' },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Level 1: Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-console-light-gray leading-tight">
            Nurturing Tomorrow: Child & Youth Development Across <span className="text-console-cyan">Osun State</span>
          </h1>
          <p className="text-lg text-console-gray">
            A real-time, interactive data hub providing deep insights into the five key dimensions of youth development. Track progress, understand challenges, and explore the initiatives shaping the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard" className="px-6 py-3 bg-console-cyan text-console-dark font-bold rounded-md hover:bg-console-light-cyan transition-all shadow-lg shadow-console-cyan/20 flex items-center gap-2">
              Explore the Data Dashboard
            </Link>
            <button className="px-6 py-3 bg-transparent border-2 border-console-blue text-console-gray font-bold rounded-md hover:bg-console-blue hover:text-console-light-gray transition-all flex items-center gap-2">
              <Download size={20} /> Download Full Report
            </button>
          </div>
        </div>
        <div className="relative h-96 md:h-full w-full rounded-lg border-2 border-console-blue bg-console-dark/50 p-4 shadow-2xl shadow-console-dark">
          <Image src="/osun-map.svg" alt="Interactive Map of Osun State" layout="fill" objectFit="contain" unoptimized />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE</div>
        </div>
      </section>

      {/* Data Dashboard Teaser */}
      <section className="text-center">
         <h2 className="text-3xl font-bold text-console-light-gray mb-2">Data Dashboard Teaser</h2>
         <p className="text-console-gray mb-8">Live indicators from across our key dimensions.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChartComponent 
              chartType="LineChart"
              data={outOfSchoolData}
              series={[{ type: 'Line', dataKey: 'Osun Rate (%)', stroke: '#66f4e1', strokeWidth: 2, dot: { r: 4, fill: '#66f4e1' } }]}
              title="Out-of-School Children Trend"
              description="Illustrative trend showing a decline in the percentage of out-of-school children."
            />
            <ChartComponent 
              chartType="BarChart"
              data={unemploymentData}
              series={[{ type: 'Bar', dataKey: 'Rate', fill: '#1a344d', stroke: '#66f4e1' }]}
              title="Unemployment Rate Comparison (Q4 2020)"
              description="Comparing Osun's low unemployment rate to national and other state averages."
            />
         </div>
      </section>

      {/* Level 1: Overview of Key Dimensions */}
      <section>
        <h2 className="text-3xl font-bold text-center text-console-light-gray mb-12">Overview of Key Dimensions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dimensions.map((item, index) => (
            <Link href={item.href} key={index} className="group block p-6 bg-console-dark/50 rounded-lg border border-console-blue hover:border-console-cyan hover:bg-console-blue/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <item.icon className="w-10 h-10 text-console-cyan mt-1 transition-transform group-hover:scale-110" />
                <div>
                  <h3 className="text-xl font-bold text-console-light-gray group-hover:text-console-cyan transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-console-gray">{item.description}</p>
                  <div className="mt-4 text-sm font-semibold text-console-cyan flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Level 1: Latest News & Highlights */}
      <section>
        <h2 className="text-3xl font-bold text-center text-console-light-gray mb-12">Latest News & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
                 <div key={index} className="relative p-6 bg-console-dark/50 rounded-lg border border-console-blue overflow-hidden">
                    <div className="absolute top-4 right-4 text-xs font-mono bg-console-blue text-console-cyan px-2 py-1 rounded">{news.tag}</div>
                    <Rss className="w-8 h-8 text-console-cyan/50 mb-4"/>
                    <h3 className="text-lg font-bold text-console-light-gray mb-2">{news.title}</h3>
                    <p className="text-sm text-console-gray flex-grow">{news.description}</p>
                    <a href="#" className="mt-4 inline-block text-sm font-semibold text-console-cyan hover:underline">Read Full Story &rarr;</a>
                 </div>
            ))}
        </div>
      </section>
      
    </div>
  );
}
