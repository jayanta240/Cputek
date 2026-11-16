import { BookOpen, BookOpenCheck, CalendarDays, FileSearch, FileText, Gauge, Globe2, GraduationCap, Languages, MessageCircle, PlayCircle, Search, ShieldCheck } from 'lucide-react';

export const productsData = [
  {
    id: 'ai-learning-management-system',
    title: 'AI-Powered Learning Management System',
    icon: BookOpen,
    heroEyebrow: 'Workplace learning, reimagined',
    heroPanelEyebrow: 'Your learning workspace',
    heroPanelTitle: 'Knowledge, in the flow of work',
    sectionEyebrow: 'A smarter way to build capability',
    sectionHeading: 'Learning shaped around real work',
    ctaEyebrow: 'Turn knowledge into everyday progress',
    ctaTitle: 'Help every employee learn in the flow of work.',
    ctaDescription: 'See how the AI-Powered Learning Management System can connect your organization’s knowledge with the work your teams do every day.',
    heroHighlights: [
      { icon: FileText, title: 'Company knowledge', detail: 'Handbooks, SOPs and training videos' },
      { icon: MessageCircle, title: 'Ask in plain language', detail: 'Get answers grounded in approved content' },
      { icon: BookOpenCheck, title: 'Practice and improve', detail: 'Role-based paths, scenarios and quizzes' },
      { icon: Languages, title: 'Built for every team', detail: 'Multilingual and image-based support' },
    ],
    description:
      'Turn company documents and existing learning materials into an active, personalized trainer employees can ask for guidance whenever they need it.',
    faqs: [
      { question: 'What types of learning content can the platform use?', answer: 'The platform can use a range of existing company learning materials, including employee handbooks, standard operating procedures, training documents and slide presentations. It can also make recorded training videos part of the knowledge employees can refer to. Bringing these resources together helps teams find relevant information without searching through multiple separate files. The exact content available depends on the materials the organization chooses to provide.' },
      { question: 'Can employees ask questions about company policies and procedures?', answer: 'Yes. Employees can type questions in everyday language instead of searching manually through lengthy policy documents or procedure files. The platform uses the company content made available to it to find relevant information and provide a helpful response. This can make it easier for employees to understand internal processes while carrying out their daily responsibilities. Answers are grounded in the connected content, so keeping that content accurate and up to date is important.' },
      { question: 'Does the platform support different employee roles?', answer: 'Yes. Learning paths and practice activities can be organized around different job roles, departments or areas of responsibility. This helps employees focus on the procedures, policies and practical knowledge they need in their own work. For example, a new team member can follow introductory learning, while an experienced employee can focus on role-specific updates. The structure can be adapted to the organization's training goals and the content it provides.' },
      { question: 'Can the system help create quizzes and learning materials?', answer: 'The platform can use existing company materials as a starting point for creating learning support resources. These may include concise summaries, practice questions, quizzes and short revision activities based on the supplied content. Employees can use these resources to revisit important information and reinforce what they have learned. The usefulness of the generated material depends on the clarity, relevance and quality of the source documents.' },
      { question: 'Can employees use the platform in different languages?', answer: 'The platform is designed to support multilingual learning experiences for organizations with teams that use different languages. This can help employees read learning material and seek guidance in a language supported by the product's implementation. The languages available may depend on the configuration and language capabilities selected for the deployment. This makes it easier to plan a learning experience for a diverse workforce.' },
    ],
    overview:
      'Connect trusted company knowledge with personalized learning employees can use in the flow of work.',
    contentSections: [
      {
        title: 'From course library to active trainer',
        paragraphs: [
          'Traditional corporate learning management systems store only digital courses, and administrators check completion dates for HR records. Employees complete mandatory tests once a year, but workers quickly forget the details after finishing the final exam. The CPUTEK system connects directly to company documents, and it turns existing files into an active personal trainer. The database connects to standard operating procedures, employee handbooks, and recorded video presentations.',
          'Workers type plain questions into the computer, and the software finds the correct answer inside the company library. A customer service representative asks how to handle a difficult complaint, and the system immediately delivers approved advice. Staff members no longer open five different manuals to complete a daily task, so productivity increases across the entire office.',
        ],
      },
      {
        title: 'Personalized Workplace Training',
        paragraphs: [
          'The software creates custom training paths for different roles, and it tests employees with practical work scenarios. Workers practice customer conversations through text prompts, and the system identifies knowledge gaps across every department. The software supports multiple languages for international offices, and employees read technical instructions in their native language. Workers submit images to ask technical questions, and the platform answers queries about complex industrial machinery.',
          'The system creates short practice quizzes after each lesson, and employees remember important procedures through regular repetition. The platform tracks worker progress over time, and managers review team scores to plan future instruction. The human resources department monitors individual completion rates, and supervisors check how well new hires understand safety rules. The training adapts to each employee\'s skill level, so experienced workers move quickly through basic topics.',
        ],
      },
      {
        title: 'Transforming Internal Documentation',
        paragraphs: [
          'Organizations rarely need to hire outside agencies to build new courses, because the software uses existing corporate files. The platform takes current manuals, and it writes short training scripts for the company team. The system reads long slide decks, and it builds interactive quizzes from the main points.',
          'The development process starts with thorough research into job tasks, so the training matches actual workplace needs. The platform diagnoses worker weaknesses, and then it designs targeted lessons to fix specific performance issues. Companies upload old instructional videos, and the software generates written summaries for quick reference. Employees review these summaries before starting a shift, and teams maintain high quality standards across every project.',
        ],
        capabilities: [
          'The software scans corporate handbooks to create role-based learning journeys for new hires.',
          'Workers ask natural questions in plain text, and the system gives accurate answers from approved manuals.',
          'The platform identifies capability gaps across teams, and it generates custom practice quizzes to test staff knowledge.',
          'The system transforms old slide presentations into short microlearning modules to save preparation time.',
          'The software supports multiple languages, so international workers read instructions in their preferred language.',
        ],
      },
    ],
  },
  {
    id: 'ai-knowledge-layer-for-websites',
    title: 'AI Knowledge Layer for Websites',
    icon: Globe2,
    heroEyebrow: 'Your website, ready to help',
    heroPanelEyebrow: 'A better visitor experience',
    heroPanelTitle: 'Answers that move people forward',
    sectionEyebrow: 'From browsing to understanding',
    sectionHeading: 'Turn every visit into a guided experience',
    ctaEyebrow: 'Make every visit more helpful',
    ctaTitle: 'Give every visitor a clearer way forward.',
    ctaDescription: 'See how the AI Knowledge Layer can guide people through your website, answer questions, and help them find the right information.',
    heroHighlights: [
      { icon: Search, title: 'Find the right answer', detail: 'Search across trusted website knowledge' },
      { icon: MessageCircle, title: 'Ask naturally', detail: 'Get conversational, relevant guidance' },
      { icon: PlayCircle, title: 'See how it works', detail: 'Follow screenshots and video walkthroughs' },
      { icon: Globe2, title: 'Help every visitor', detail: 'Support customers, patients and students' },
    ],
    description:
      'Turn static websites into conversational guides that answer questions, explain tasks, and recommend the right products using your trusted company content.',
    faqs: [
      { question: 'What information can the AI Knowledge Layer use?', answer: 'The AI Knowledge Layer can be connected to information that an organization approves for use on its website. Sources may include website pages, product details, user manuals, policy documents and existing frequently asked questions. Visitors can then ask questions across this connected knowledge instead of opening and searching each resource separately. The scope and accuracy of its responses depend on the content that is integrated and maintained.' },
      { question: 'How does it help website visitors?', answer: 'Visitors can type questions in natural language, much like they would ask a member of the support team. The knowledge layer uses the connected website information to provide a relevant response and, where configured, direct visitors to useful pages or resources. This can reduce the effort involved in navigating large websites or searching through long product descriptions. It also gives visitors a more guided way to understand the information an organization publishes.' },
      { question: 'Can it guide users through complex tasks?', answer: 'Yes. The knowledge layer can guide users through a task by presenting instructions in a clear, step-by-step format. Where suitable supporting material is available, the experience can also include screenshots or video walkthroughs to make the process easier to follow. This can be useful when visitors need help understanding a feature, completing a process or locating a specific option. The guidance depends on the quality of the source instructions and the features configured for the website.' },
      { question: 'Can it recommend products or services?', answer: 'Yes. When product or service information is connected, visitors can describe what they are looking for and receive guidance based on those details. The knowledge layer can help explain relevant features, highlight differences and point visitors towards options that may fit their stated requirements. This makes it easier to explore a catalog without reading every listing individually. Recommendations depend on the completeness and accuracy of the product or service information provided.' },
      { question: 'Which types of websites can use this product?', answer: 'The knowledge layer can be adapted for websites that contain useful information visitors need help finding or understanding. Examples include business websites, online product catalogs, enterprise portals and educational platforms. It may also support other information-rich digital experiences where users frequently ask questions about published content. The final setup is shaped around the website's purpose, its information sources and the needs of its visitors.' },
    ],
    overview:
      'Website visitors waste time clicking through confusing navigation menus, and customers struggle to find exact specifications inside long documents. The CPUTEK knowledge engine turns static websites into conversational guides, and users type questions directly into a search box. The platform connects to product catalogs, user manuals, policy documents, and frequently asked questions.\n\nThe software reads the visitor query, and it provides a direct answer with links to the right web pages. This platform works for public retail stores, enterprise software portals, universities, and regional hospitals. The engine acts as an informed digital assistant, and it helps visitors without human staff involvement.',
    contentSections: [
      {
        title: 'Conversational Website Guidance',
        paragraphs: [
          'When a user visits a software website to create an invoice, the system clearly explains the steps. The software displays screenshots of the computer screen, and it shares video walkthroughs to assist the buyer. The engine asks follow-up questions to understand the request, and it confirms that the user completes the action correctly.',
          'A patient visits a medical portal to check surgery preparation rules, and the system lists the exact instructions. The patient gets answers without waiting on the phone, and clinic staff can focus on urgent medical tasks. Students visit university portals to ask about admission requirements, and the engine instantly lists required application documents. The system directs applicants to the right submission forms, and administrative offices receive fewer basic email inquiries.',
        ],
      },
      {
        title: 'Product Recommendations and User Testing',
        paragraphs: [
          'An industrial customer visits an equipment store to buy packaging tools and specifies daily box volume. The artificial intelligence compares available machines, and it recommends the right model with a clear technical explanation. The platform guides the customer to the checkout page, and the store completes the sale quickly.',
          'The system also tests website visitors with short scenario quizzes to explain complex technical products. Corporate websites explain complex consulting services, and the system answers questions using official company publications. Buyers compare warranty terms across different machinery models, and the software highlights differences in plain language. The system records frequent customer questions, and marketing teams update product pages to clarify confusing technical terms.',
        ],
        capabilities: [
          'The engine indexes product pages, manuals, and documents, turning static websites into interactive guides.',
          'Visitors ask questions in conversational text, and the software returns step-by-step instructions with links to relevant pages.',
          'The system shows screenshots and video demonstrations to help customers complete complex technical tasks.',
          'The platform analyzes customer requirements, and it recommends specific equipment based on daily operational needs.',
          'Companies install the tool across corporate portals, e-commerce stores, universities, and healthcare facilities.',
        ],
      },
    ],
  },
  {
    id: 'ai-compliance-intelligence-platform',
    title: 'AI Compliance Intelligence Platform',
    icon: ShieldCheck,
    heroEyebrow: 'Compliance clarity, across every operation',
    heroPanelEyebrow: 'Your compliance command center',
    heroPanelTitle: 'See obligations. Act with confidence.',
    sectionEyebrow: 'From regulation to readiness',
    sectionHeading: 'Make compliance specific, visible and actionable',
    ctaEyebrow: 'Be ready for what changes next',
    ctaTitle: 'Turn compliance obligations into clear action.',
    ctaDescription: 'See how the AI Compliance Intelligence Platform can help your teams track requirements, evidence, and risk across locations.',
    heroHighlights: [
      { icon: FileSearch, title: 'Know what applies', detail: 'Map regulations to your business operations' },
      { icon: CalendarDays, title: 'Stay ahead of deadlines', detail: 'Track filings, inspections and permits' },
      { icon: Gauge, title: 'Understand task risk', detail: 'Prioritize overdue tasks and evidence gaps' },
      { icon: GraduationCap, title: 'Close knowledge gaps', detail: 'Turn compliance needs into employee training' },
    ],
    description:
      'Understand which regulations apply to your business, track the evidence and actions they require, and give every team a clear view of compliance risk.',
    faqs: [
      { question: 'How does the platform identify which regulations apply to a business?', answer: 'The platform uses information about an organization to help identify regulatory requirements that may be relevant to its operations. This context can include the industry, business activities, employee numbers and locations where the organization operates. Using these details, the system can help organize applicable obligations into a more structured view for the responsible teams. The results should still be reviewed by qualified compliance or legal professionals before being treated as a definitive interpretation.' },
      { question: 'Can it track compliance deadlines?', answer: 'Yes. The platform can help organize recurring compliance activities such as statutory filings, inspections, permit renewals and other assigned tasks. Teams can use a schedule to see upcoming requirements and identify items that have passed their due dates. This gives responsible employees and managers a clearer view of work that needs attention. Actual deadlines and task status should be checked against the relevant official requirements and records.' },
      { question: 'How does it help prepare for audits?', answer: 'Teams can bring together relevant records such as internal policies, inspection reports, certificates and other supporting documents. The platform can help organize this material as audit evidence and highlight areas where expected documentation may be missing. This can make preparation more structured and help teams identify follow-up actions before an audit takes place. Final evidence requirements should always be confirmed with the applicable auditor or authority.' },
      { question: 'Can managers see compliance risks across departments?', answer: 'The platform is designed to give managers a clearer view of compliance tasks and areas that may need attention. Teams can prioritize work using indicators such as overdue activities, missing evidence and the potential impact of an unresolved requirement. This can help managers understand where follow-up is needed and coordinate responsibility across departments. Risk indicators are decision-support information and should be considered alongside professional compliance review.' },
      { question: 'Does the platform replace legal or compliance professionals?', answer: 'No. The platform is intended to support compliance teams by organizing information, tracking activities and helping highlight possible gaps or upcoming obligations. It does not replace the professional judgment needed to interpret laws, assess an organization's circumstances or make formal compliance decisions. Qualified legal and compliance professionals should review relevant requirements and determine the appropriate actions. The system is a support tool for their work, not a substitute for expert advice.' },
    ],
    overview:
      'Standard compliance programs only track filing dates on a calendar, and managers receive warnings when deadlines approach. But traditional software cannot explain how new laws impact specific factory operations or corporate contracts. The CPUTEK compliance platform reads government notifications, and it determines which legal rules apply to the business.\n\nThe engine connects public regulations with company policies, business licenses, and internal operational data. The system alerts compliance teams to required actions and tracks evidence to prepare for upcoming legal audits. Senior leaders view overall compliance health across all branch locations, and legal teams prevent unexpected fines.',
    contentSections: [
      {
        title: 'Custom Compliance Universe and Applicability',
        paragraphs: [
          'Every business operates under unique conditions, so the platform avoids giving every company the same generic checklist. A company enters its industry sector, business activities, employee numbers, and active office locations. The software calculates the exact legal universe for that business and assigns responsible owners to each requirement.',
          'The platform builds a complete schedule for tax returns, environmental inspections, factory permits, and labor filings. The calendar marks finished tasks in green, upcoming dates in yellow, and overdue items in red. Department managers check the calendar every morning, and team leaders plan document submissions weeks before official deadlines. The system alerts managers when regional authorities update licensing fees, and accounting teams adjust quarterly budgets accordingly.',
        ],
      },
      {
        title: 'Audit Evidence and Risk Scoring',
        paragraphs: [
          'Managers upload company policies and inspection reports, and the software compares these files against current government rules. The engine detects missing evidence, and it warns managers when company policies fail to meet legal standards. The platform calculates a numerical risk score between 1 and 100 for every pending task.',
          'The score considers overdue days, missing documents, past submission delays, and potential financial fines. When a task receives a high risk rating, the software directs managers to collect evidence immediately. The system stores approved documents in a digital evidence vault, and external auditors can quickly inspect records during official reviews. The software links compliance gaps to worker training and creates microlearning lessons for affected employees.',
        ],
        capabilities: [
          'The platform monitors government regulations, and it maps new requirements to affected corporate departments.',
          'The applicability engine creates a tailored legal schedule based on company location, employee numbers, and business operations.',
          'The system compares internal policies with external laws to identify missing documentation and partial compliance gaps.',
          'The engine calculates a clear numerical risk score based on overdue status, missing evidence, and potential financial penalties.',
          'The platform converts new legal requirements into employee training modules to quickly close workplace knowledge gaps.',
        ],
      },
      {
        title: 'Conclusion',
        paragraphs: [
          'Corporate organizations accumulate vast amounts of written knowledge, but workers lose valuable hours searching through disorganized file systems. The CPUTEK platform connects these static documents to conversational software tools, and employees receive immediate answers to daily business questions. The learning management system trains staff through personalized lessons, and it turns existing operating manuals into interactive quizzes.',
          'The website knowledge engine guides digital visitors through complex catalogs, and it recommends specific products to prospective buyers. The compliance platform tracks regulatory updates across jurisdictions and calculates risk scores to prevent severe financial penalties. By adopting these coordinated systems, companies reduce operational confusion and improve staff training. Organizations convert raw corporate data into active intelligence, and workers perform daily tasks with greater confidence and accuracy.',
        ],
      },
    ],
  },
];
