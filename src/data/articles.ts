import citn1 from '../assets/CITN1.png';
import citn2 from '../assets/CITN2.png';
import citn3 from '../assets/CITN3.mp4';
import gtco1 from '../assets/gtco_image1.png';
import gtco2 from '../assets/gtco_image2.jpg';
import gtco3 from '../assets/gtco_image3.jpg';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Education' | 'Systems & Capacity' | 'Livelihoods' | 'Child Protection';
  date: string;
  readTime: string;
  image: string;
  content: string;
  video?: string;
  gallery?: string[];
  galleryDescription?: string;
}

export const articlesData: Article[] = [
  {
    id: 'beyond-awareness-gtco-autism-conference',
    title: 'Beyond Awareness: LANI Foundation Reflects on Autism Acceptance and Inclusion at the 16th GTCO Autism Conference',
    excerpt: 'Autism awareness has grown significantly over the years, but awareness alone does not create inclusion. The more important question is whether our homes, schools, workplaces and communities are becoming places where individuals on the autism spectrum can participate, contribute and thrive.',
    category: 'Education',
    date: 'July 28, 2026',
    readTime: '5 min read',
    image: gtco2,
    gallery: [gtco1, gtco3],
    galleryDescription: 'Photos from the 16th Annual GTCO Autism Conference at the MUSON Centre, Onikan, Lagos.',
    content: `
      Autism awareness has grown significantly over the years, but awareness alone does not create inclusion. The more important question is whether our homes, schools, workplaces and communities are becoming places where individuals on the autism spectrum can participate, contribute and thrive.

      This was one of the central reflections from the 16th Annual GTCO Autism Conference, which LANI Foundation attended on 27 and 28 July 2026 at the MUSON Centre, Onikan, Lagos.

      The two-day conference brought together autism specialists, advocates, parents, caregivers, educators and individuals with lived experience to share knowledge, exchange perspectives and explore practical approaches to autism acceptance and inclusion.

      ### From Awareness to Practical Action

      Across the conference sessions, discussions went beyond understanding autism to examining the practical steps required to support individuals on the spectrum and their families.

      Key areas explored included understanding and responding to behaviour in homes and classrooms, practical strategies for communication and regulation, daily routines, autism and mental health, family support, school and classroom readiness, and the development of inclusive learning environments.

      The conversations also looked beyond childhood and education. Participants explored employment pathways for adults on the spectrum and the importance of creating neuroinclusive spaces across different stages of life.

      These discussions reinforced an important point: autism inclusion cannot stop at awareness. It must be reflected in the environments and opportunities we create.

      ![LANI Foundation delegation at the 16th Annual GTCO Autism Conference.](${gtco1})

      > “Awareness is only the beginning. Acceptance must become action.”

      ### Learning, Connection and Collaboration

      For LANI Foundation, the conference provided an opportunity not only to learn but also to connect with people and organisations working across different areas of autism support and inclusion.

      Engagements with specialists, advocates, parents and other stakeholders offered valuable perspectives on the realities faced by individuals on the spectrum and their families. They also created room to explore potential collaborations that could extend autism education, caregiver support and inclusive practices to more communities.

      At LANI Foundation, we recognise that lasting community impact is strengthened through collaboration. Building more inclusive communities requires schools, employers, healthcare professionals, civil society organisations, advocates, parents and community leaders to work together and translate knowledge into practical action.

      ![Engaging with specialists, advocates, and stakeholders during the sessions.](${gtco2})

      ### Inclusion Must Extend Across Communities

      One of the strongest takeaways from the conference was the need to think about inclusion beyond individual programmes or awareness campaigns.

      A truly inclusive community is one where consideration for neurodiversity is reflected in the way spaces are designed, services are delivered, education is provided and opportunities are created.

      For schools, this may mean strengthening classroom readiness and adopting more inclusive learning practices. For employers, it may mean creating pathways into meaningful employment for adults on the spectrum. For families and caregivers, it may mean having access to better information, support and practical tools.

      Each of these steps contributes to a broader culture of acceptance.

      ![Exploring neuroinclusive systems and education tools with stakeholders.](${gtco3})

      ### Continuing the Conversation

      LANI Foundation commends GTCO for sustaining the Autism Conference and for continuing to provide a platform for meaningful conversations around autism, inclusion and the wellbeing of individuals on the spectrum and their families.

      We left the conference better informed, inspired and even more committed to supporting inclusive communities where every individual is seen, respected, supported and given the opportunity to reach their full potential.

      At LANI Foundation, we believe awareness is only the beginning. Real progress occurs when awareness becomes acceptance, and acceptance is translated into practical and measurable action.

      We invite schools, employers, healthcare professionals, civil society organisations, autism advocates, parents and community leaders to partner with us in advancing autism awareness, caregiver support, inclusive education, community sensitisation and employment opportunities for individuals on the spectrum.

      If your organisation is interested in working with LANI Foundation in any of these areas, we welcome the opportunity to connect and explore how we can contribute to more inclusive communities together.
    `
  },
  {
    id: 'lani-champions-excellence-citn',
    title: 'LANI Foundation Champions Academic Excellence at the 54th CITN Induction Ceremony',
    excerpt: "LANI Foundation recently participated in the 54th Induction Ceremony of the Chartered Institute of Taxation of Nigeria (CITN), presenting prize awards to top-performing students and reinforcing our commitment to academic excellence, capacity building, and youth empowerment.",
    category: 'Education',
    date: 'April 30, 2026',
    readTime: '5 min read',
    image: citn1,
    video: citn3,
    gallery: [citn2],
    galleryDescription: 'Photos from the Bolton White Event Centre, Abuja.',
    content: `
      LANI Foundation recently participated in the 54th Induction Ceremony of the Chartered Institute of Taxation of Nigeria (CITN), held on April 30, 2026, at the Bolton White Event Centre, Abuja. The event brought together tax professionals, industry leaders, policymakers, and newly inducted members, underscoring CITN’s continued commitment to excellence and professional integrity within Nigeria’s taxation ecosystem.

      As part of the ceremony, we proudly supported the recognition of outstanding academic achievement, presenting prize awards to top-performing students across key specializations. This initiative reflects the Foundation’s broader mandate to promote education, capacity development, and youth empowerment by celebrating merit and encouraging high standards of scholarship.

      ### Recognising Excellence, Inspiring Futures

      The award recipient demonstrated exceptional academic performance, receiving the award for the Best Female in Extractive Industries Taxation—a field of growing importance to national development. Through this recognition, we seek to motivate emerging professionals and reinforce the values of discipline, integrity, and excellence in professional practice.

      Speaking at the ceremony, we reaffirmed our belief that investing in people, especially young professionals, is essential for sustainable development. Recognising academic excellence not only rewards individual achievement but also contributes to building a stronger pipeline of skilled professionals equipped to serve both public and private sectors.

      ### Strengthening Partnerships for National Development

      The CITN Induction Ceremony also provided an important platform for engagement with key stakeholders in the taxation and policy community. We commend the leadership of CITN for its consistent efforts in upholding professional standards and fostering continuous learning within the taxation profession.

      We look forward to deepening collaborations with professional bodies, academic institutions, and development partners to advance shared objectives around education, professional development, and socio-economic transformation.

      ### Our Commitment

      We remain committed to:

      * Supporting education and professional excellence
      * Empowering young leaders and emerging professionals
      * Partnering with institutions that drive integrity, learning, and national progress

      By celebrating excellence today, we help shape the leaders of tomorrow.
    `
  },
  {
    id: 'beyond-balance-sheet',
    title: 'Beyond the Balance Sheet: The True Value of Systems Capacity in Local NGOs',
    excerpt: 'Why professional auditing models, template designs, and standard operating procedures are key to long-term community development success.',
    category: 'Systems & Capacity',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    content: `
      In the development sector, success is frequently measured by immediate deliverables: the number of food packs distributed, wells dug, or scholarships awarded. While these inputs are vital, the long-term impact of community organizations is frequently determined by their systems capacity.

      LANI Foundation's "Systems & Capacity Strengthening" initiative focuses on training smaller, community-based organisations (CBOs) to adopt audit-ready practices. By refining internal governance templates, operational manuals, and financial trackers, we help local NGOs lock in funding and expand operations.

      ### The Pillars of NGO Systemization

      1. **Standardized Operations**: Creating replicable manuals for programs and finance.
      2. **Audit Readiness**: Preparing templates that align with international donor compliance requirements.
      3. **Transparent Reporting**: Designing data dashboards that keep stakeholder confidence high.

      When a local grassroots initiative transitions to a formalized, structured model, its capacity to manage funds increases by over 40%, paving the way for durable, long-term community partnerships.
    `
  },
  {
    id: 'pathways-home-migrants',
    title: 'Pathways Home: Successful Livelihood Integration for Returned Migrants',
    excerpt: 'How offering vocational startup grants, carpentry equipment, and micro-grants creates sustainable independence for migrants resettling in West Africa.',
    category: 'Livelihoods',
    date: 'April 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    content: `
      Resettling after returning from forced migration is an emotional and economic journey. Without stable pathways to livelihood creation, returned migrants face severe vulnerability and pressure to embark on unsafe journeys again.

      LANI Foundation's Social Inclusion program focuses on structured economic reintegration. By matching returned migrants with vocational experts and providing customized setup grants, we help individuals establish sustainable livelihoods in trades ranging from climate-smart agriculture to wood crafts.

      ### Vocational Integration Results

      * **Startup Grants Provided**: Micro-capital kits that cover tool purchases and rent for workshops.
      * **Business Mentorship**: 6 months of coaching on marketing, supply chain, and local finance.
      * **Cooperative Building**: Encouraging returnees to pool resources for shared workshops to lower overhead costs.

      Economic security is the ultimate shield against irregular migration, and by funding local setups, LANI Foundation empowers young adults to build stable futures in their home communities.
    `
  },
  {
    id: 'strengthening-the-shield',
    title: 'Strengthening the Shield: Community-Led Child Protection Audits',
    excerpt: "How educating community structures and implementing safety audits inside local children's care homes is actively saving vulnerable lives.",
    category: 'Child Protection',
    date: 'March 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    content: `
      Child protection is not simply a legislative concept; it requires real-world physical and operational shields inside children's care centers, schools, and foster systems.

      LANI Foundation's Child Protection division operates direct interventions to raise safety standards in care homes. This includes performing complete safety mappings, conducting first-aid certifications for caregivers, and funding the installation of safety kits.

      ### Core Program Components

      * **Emergency Safety Mapping**: Helping care homes establish clearly visible evacuation maps and fire safety systems.
      * **Caregiver Safeguarding Workshops**: Equipping staff with child rights guidelines, trauma-informed support practices, and emotional safety skills.
      * **Continuous Auditing**: Semi-annual reviews to identify and address security/sanitation risks inside community spaces.

      Empowering communities with localized training transforms protection protocols from dry text into active, life-saving practices.
    `
  }
];
