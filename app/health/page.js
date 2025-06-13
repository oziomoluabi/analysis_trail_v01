import { HeartPulse, Stethoscope, Activity, ShieldCheck, Download } from 'lucide-react';
import ChartComponent from '@/components/ChartComponent';

export const metadata = {
  title: 'Health & Well-Being | Osun Child & Youth Development Insights',
  description: 'Deep dive into the health and well-being of children and youth in Osun, covering nutrition, healthcare access, adolescent health, and public health programs.',
};

const malnutritionData = [
  { name: 'Stunting (Osun)', rate: 7.2 },
  { name: 'Stunting (National)', rate: 37 },
  { name: 'Wasting (Osun)', rate: 6 },
  { name: 'Wasting (National)', rate: 22 },
];

export default function HealthPage() {
  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <div className="inline-block bg-console-blue p-4 rounded-full">
          <HeartPulse className="w-16 h-16 text-console-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-console-light-gray">Health & Well-Being</h1>
        <p className="text-lg text-console-gray max-w-3xl mx-auto">
          Analyzing the critical health indicators for Osun's children and youth. This section explores nutrition, disease prevalence, healthcare infrastructure, and key state and partner-led health interventions.
        </p>
      </header>

      <main className="space-y-16">
        <section id="child-health-nutrition" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Activity className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Child Health & Nutrition</h2>
          </div>
          <p className="text-console-gray">
            Osun State fares comparatively well on child health indicators, with rates of malnutrition that are among the lowest in Nigeria. Only about 7.2% of children under five are stunted (chronically malnourished), an impressively low prevalence compared to the 37% national stunting rate. Similarly, the rate of underweight children is around 6% in Osun, versus over 22% nationally. Studies have noted that Osun has "the lowest" child undernutrition rates in the country, a success attributed to better maternal education and childcare practices prevalent in the southwest. However, malnutrition still exists in pockets of Osun. Local clinics encounter cases of severe acute malnutrition, and activists, supported by UNICEF, have called for more efforts to "curb child malnutrition." Health outcomes like infant and under-5 mortality in Osun are also better than the national average. Nigeria's under-five mortality was about 102 per 1000 live births in 2021, meaning 1 in 10 children died before their fifth birthday. Southwestern states generally have much lower child mortality than the north. Osun's relative success is linked to its higher immunization coverage and primary healthcare reach. For example, only about 8% of children in Osun received no vaccinations at all (zero-dose), compared to approximately 18% nationally. The state has achieved high coverage for routine immunizations and has benefited from national campaigns against polio and other preventable diseases, as well as the recent COVID-19 vaccination drives which strengthened the overall public health infrastructure and awareness. This comprehensive approach to primary healthcare has built a strong foundation for child survival and development, making the state a model in many respects. Yet, vigilance is required to ensure these gains are not eroded by economic pressures or new public health challenges. The continued investment in primary health centers, nutritional support programs, and maternal health education is critical to sustaining this positive trajectory and ensuring that every child in Osun not only survives but thrives. The focus is now shifting from just survival to ensuring optimal growth and development, which requires a more nuanced understanding of nutritional needs and the social determinants of health.
          </p>
           <ChartComponent
            chartType="BarChart"
            data={malnutritionData}
            series={[{ type: 'Bar', dataKey: 'rate', name: 'Rate (%)', fill: '#66f4e1' }]}
            title="Child Malnutrition Rates: Osun vs. National"
            description="Comparing key malnutrition indicators in Osun State against the national average (2018)."
          />
        </section>

        <section id="adolescent-health" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Adolescent Health</h2>
          </div>
          <p className="text-console-gray">
            Youth in Osun enjoy better health metrics than many of their peers across Nigeria. The teenage pregnancy rate is relatively low, consistent with the southwest's lower incidence of early childbearing. Nationally, about 30% of women aged 20-24 were married before the age of 18, but in Osun, this share is in the single digits, likely under 10%. This means most girls in Osun delay marriage and childbearing compared to the national pattern, which significantly reduces adolescent maternal health risks. Despite this positive trend, sexual and reproductive health education for youth remains a critical area of focus. NGOs and state agencies actively organize programs on HIV/AIDS awareness, family planning, and the prevention of Female Genital Mutilation (FGM). Osun has a historically high rate of FGM, and recent campaigns supported by UNICEF and the National Orientation Agency have engaged communities to end the practice. Another emerging concern is mental health. Like youth across Nigeria, young people in Osun face rising stress, substance abuse, and depression. However, the state has limited mental health services, typically confined to a small psychiatric unit in the state hospital with very few school counselors. The recent passage of Nigeria's new Mental Health Act in 2022 provides a framework for improvement, and Osun will need to domesticate and implement this law to adequately address the growing mental healthcare needs of its youth. This will require significant investment in training mental health professionals, integrating mental health services into primary care, and launching public awareness campaigns to reduce stigma. The well-being of adolescents is a cornerstone of future development, and addressing both their physical and mental health needs is a critical investment in the state's human capital.
          </p>
        </section>

        <section id="healthcare-access" className="p-8 bg-console-dark/50 rounded-lg border border-console-blue space-y-6">
          <div className="flex items-center gap-4">
            <Stethoscope className="w-10 h-10 text-console-cyan" />
            <h2 className="text-3xl font-bold text-console-light-gray">Healthcare Access & Facilities</h2>
          </div>
          <p className="text-console-gray">
            The Osun State government has taken significant steps to expand healthcare access for its citizens, particularly children and families. A flagship policy in this effort is the Osun Health Insurance Scheme (OHIS), launched in 2018. OHIS aims to provide affordable health coverage for residents, significantly reducing the burden of out-of-pocket healthcare costs which can be catastrophic for low-income families. Under OHIS, enrollees pay a small premium for coverage of a wide range of basic health services. For example, a Caesarean section that might cost N300,000 out-of-pocket would cost an insured family only N30,000, with the scheme covering the rest. This financial protection encourages people to seek timely medical care instead of delaying it due to cost. The scheme has been particularly beneficial for pregnant women, infants, and persons with disabilities, with the state recently enrolling all disabled persons for free coverage. As of 2023, thousands of families in Osun have joined OHIS. However, the majority of the population still relies on the free services provided at government-run primary healthcare centers (PHCs). The state has an extensive network of PHCs in virtually every ward, offering essential services like immunizations, growth monitoring, and basic curative care. While the distribution is wide, these centers often face challenges such as staff shortages, inconsistent drug supplies, and inadequate facilities, particularly in rural areas. Continual support, increased funding, and improved management are necessary to ensure that these PHCs can deliver quality care consistently to all communities. Bridging the gap between the insured and uninsured, and strengthening the primary healthcare system as a whole, remain the central challenges in achieving universal health coverage in Osun State.
          </p>
        </section>
      </main>
    </div>
  );
}
