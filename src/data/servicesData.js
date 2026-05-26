import Service1 from '../assets/images/Service/Service1.png'
import Service2 from '../assets/images/Service/Service2.png'
import Service3 from '../assets/images/Service/Service3.jpeg'
import Service4 from '../assets/images/Service/Service4.png'
import Service5 from '../assets/images/Service/Service5.png'
import Service6 from '../assets/images/Service/Service6.png'

const commonStandards = [
  'British Standards (BS 8666)',
  'American Standards (ACI 318)',
  'European Standards (Eurocode 2)',
  'Australian Standards (AS 3600)',
  'Indian Standards (IS 456/ SP 34/ IS 2502)'
];

export const servicesData = [
  {
    id: '3d-rebar-modelling',
    title: '3D REBAR',
    subtitle: 'MODELLING',
    tagline: 'BIM-Driven 3D Rebar Modelling',
    shortDesc: 'Highly accurate BIM-driven 3D reinforcement models for clash-free coordination and efficient construction',
    description: `Our BIM-driven 3D rebar modelling service delivers highly accurate reinforcement models that integrate seamlessly with structural and architectural BIM environments. Using advanced BIM technologies, we ensure precise reinforcement placement, improved interdisciplinary coordination, and enhanced buildability across complex construction projects. Our approach supports large-scale infrastructure and high-rise developments while optimizing models for fabrication and on-site installation.`,

    bgImage: Service1,
    cardImage: Service1,

    features: [
      'Clash-free 3D reinforcement modelling for complex structures',
      'Parametric rebar modelling using advanced BIM tools',
      'Support for large-scale infrastructure and high-rise projects',
      'Creation of modular assemblies and prefabrication models',
      'Model-based quantity extraction',
      'Compliance with international reinforcement standards',
      'Visualization of reinforcement congestion areas',
      'Reinforcement modelling optimized for fabrication and site installation',
      'Data-rich BIM models for enhanced project coordination'
    ],

    benefits: [
      'Improved coordination between disciplines',
      'Early clash detection and resolution',
      'Enhanced buildability verification',
      'Reduced site rework and construction delays',
      'Better visualization for engineers and contractors',
      'Improved material planning and quantity accuracy',
      'Faster decision-making during project coordination',
      'Better communication with project stakeholders',
      'Reduced risk of reinforcement conflicts on site'
    ],

    standards: commonStandards
  },

  {
    id: '2d-reinforcement-detailing',
    title: '2D SHOP',
    subtitle: 'DRAWINGS',
    tagline: 'Precision 2D Reinforcement Detailing & Shop Drawings',
    shortDesc: 'Code-compliant 2D reinforcement shop drawings for accurate fabrication and efficient site execution',

    description: `Our 2D reinforcement detailing services deliver precise and code-compliant shop drawings that support efficient fabrication and accurate on-site installation. With a strong focus on constructability and clarity, we produce reinforcement drawings that enable contractors, fabricators, and site teams to execute reinforcement works efficiently and without ambiguity. Our detailing approach ensures seamless coordination with structural design drawings and supports even the most complex reinforcement configurations.`,

    bgImage: Service2,
    cardImage: Service2,

    features: [
      'Detailed reinforcement shop drawings for fabrication and construction',
      'Accurate bar marks, shapes, and dimensions',
      'Reinforcement detailing compliant with international codes and standards',
      'Clear section details and callouts',
      'Detailed lap splices, anchorage, and bending information',
      'Coordination with structural design drawings',
      'Revision management for design updates',
      'Fabrication-friendly drawing clarity and annotations',
      'Support for complex reinforcement configurations'
    ],

    benefits: [
      'Improved fabrication accuracy',
      'Clear instructions for site installation teams',
      'Reduced errors and rework on site',
      'Faster reinforcement installation',
      'Better coordination between engineers, fabricators, and contractors',
      'Optimized steel usage and material planning',
      'Improved construction workflow efficiency',
      'Enhanced drawing clarity and readability',
      'Support for smooth project execution'
    ],

    standards: commonStandards
  },

  {
    id: 'bar-bending-schedules',
    title: 'BAR BENDING',
    subtitle: 'SCHEDULES',
    tagline: 'Optimized Bar Bending Schedules (BBS)',
    shortDesc: 'Accurate and optimized BBS for efficient fabrication, material control, and streamlined construction workflows',

    description: `Our bar bending schedule (BBS) services provide accurate and well-structured reinforcement data to support efficient fabrication and site installation. Generated from detailed reinforcement models and drawings, our schedules ensure precise bar quantities, cutting lengths, and bending information. This enables fabricators and contractors to streamline production, reduce material wastage, and maintain better control over project costs and execution.`,

    bgImage: Service3,
    cardImage: Service3,

    features: [
      'Accurate bar marks, shapes, and cutting lengths',
      'Model-based reinforcement data extraction',
      'Compliance with machine limitations',
      'Clear bending shapes and dimensions',
      'Bar grouping and scheduling optimization',
      'Support for complex reinforcement configurations',
      'Compliance with project specifications and international standards',
      'Data formatted for fabrication and site coordination',
      'Integration with reinforcement detailing drawings'
    ],

    benefits: [
      'Reduced material waste and steel loss',
      'Accurate material planning and procurement',
      'Faster bar cutting and bending processes',
      'Reduced manual calculation errors',
      'Better coordination between detailing and fabrication teams',
      'Enhanced cost control through optimized steel usage',
      'Streamlined reinforcement production workflow',
      'Improved construction scheduling and planning',
      'Reliable data for project documentation'
    ],

    standards: commonStandards
  },

  {
    id: 'rebar-estimation',
    title: 'REBAR',
    subtitle: 'ESTIMATION',
    tagline: 'Model-Based Rebar Estimation & Quantity Intelligence',
    shortDesc: 'Highly accurate BIM-driven rebar quantity take-offs for cost planning, procurement, and project control',

    description: `Our model-based rebar estimation services leverage BIM-driven data to deliver highly accurate reinforcement quantity analysis. By extracting quantities directly from detailed reinforcement models, we provide reliable insights that support cost planning, procurement strategies, and effective material management throughout the project lifecycle. Our data-driven approach ensures alignment between design, detailing, and estimation workflows for better project control and efficiency.`,

    bgImage: Service4,
    cardImage: Service4,

    features: [
      'Model-based reinforcement quantity extraction',
      'Detailed bar-wise and element-wise quantity breakdowns',
      'Integration with 3D reinforcement models and detailing drawings',
      'Reinforcement data structured for procurement planning',
      'Material quantity reports for project teams',
      'Support for large and complex reinforcement structures',
      'Reinforcement quantities aligned with bar bending schedules (BBS)',
      'Project-specific quantity reporting formats',
      'Data suitable for cost estimation and project planning'
    ],

    benefits: [
      'Highly accurate reinforcement quantity estimates',
      'Reliable data for cost planning and budgeting',
      'Improved procurement strategy and material forecasting',
      'Reduced risk of quantity discrepancies',
      'Better material control during construction',
      'Faster decision-making for project stakeholders',
      'Improved coordination between design, estimation, and procurement teams',
      'Enhanced project cost management',
      'Reduced manual calculation errors'
    ],

    standards: commonStandards
  },

  {
    id: 'general-arrangement-drawings',
    title: 'GA',
    subtitle: 'DRAWINGS',
    tagline: 'Integrated GA Drawings & Structural Coordination',
    shortDesc: 'Coordinated GA drawings for clear structural layouts, reinforcement alignment, and seamless project execution',

    description: `Our integrated GA (General Arrangement) drawing services provide clear and coordinated structural layouts that support accurate reinforcement detailing and smooth project execution. By aligning structural design information with reinforcement requirements and other project disciplines, we ensure clarity, consistency, and seamless coordination across the construction workflow. These drawings serve as a reliable reference for both detailing teams and on-site execution.`,

    bgImage: Service5,
    cardImage: Service5,

    features: [
      'Preparation of comprehensive general arrangement (GA) drawings',
      'Clear structural layouts for beams, slabs, columns, and foundations',
      'Coordination with structural design drawings and specifications',
      'Integration with reinforcement detailing and BIM models',
      'Alignment of structural elements with reinforcement requirements',
      'Detailed sections, elevations, and structural references',
      'Consistent drawing standards and annotations',
      'Clear reference drawings for detailing and construction teams',
      'Support for complex structural configurations'
    ],

    benefits: [
      'Improved structural clarity for project teams',
      'Better coordination between structural, architectural, and BIM teams',
      'Reduced misinterpretation of design intent',
      'Enhanced accuracy in reinforcement detailing',
      'Improved communication across project stakeholders',
      'Faster decision-making during project coordination',
      'Reduced design conflicts during construction',
      'Support for efficient construction planning',
      'Smoother workflow between design and detailing teams'
    ],

    standards: commonStandards
  },

  {
    id: 'site-support-reconciliation',
    title: 'SITE',
    subtitle: 'SUPPORT',
    tagline: 'Site Support & Reinforcement Reconciliation',
    shortDesc: 'Technical site support and reinforcement reconciliation for accurate execution, validation, and project control',

    description: `Our site support and reinforcement reconciliation services provide essential technical assistance during the construction phase. We work closely with project teams to validate reinforcement installation, address technical queries, and reconcile reinforcement quantities against drawings and schedules. This ensures accuracy, transparency, and smooth coordination between design, detailing, and site execution teams throughout the project lifecycle.`,

    bgImage: Service6,
    cardImage: Service6,

    features: [
      'Technical support for site teams and contractors',
      'Reinforcement validation against approved drawings and BBS',
      'Support for site queries and technical clarifications',
      'Coordination with engineers, contractors, and project teams',
      'Review of reinforcement installation compliance',
      'Assistance in resolving reinforcement discrepancies',
      'Documentation and reporting for reinforcement reconciliation',
      'Verification of fabrication and installation quantities',
      'Coordination between design, detailing, and site teams'
    ],

    benefits: [
      'Improved accuracy in reinforcement quantities',
      'Reduced risk of material discrepancies',
      'Better coordination between office and site teams',
      'Faster resolution of site technical issues',
      'Improved construction workflow efficiency',
      'Enhanced transparency in reinforcement usage',
      'Reduced project delays caused by reinforcement issues',
      'Better material management and cost control',
      'Support for smooth and efficient project delivery'
    ],

    standards: commonStandards
  }
];

// Helper function (unchanged)
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};