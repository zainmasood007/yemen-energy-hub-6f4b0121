// Inverter Products Data
// Real products from alqatta.com
// Specs marked as placeholders where unconfirmed

import { Product } from './types';

export const inverterProducts: Product[] = [
  // OPTI-Solar SP1000
  {
    id: 'opti-sp1000',
    slug: 'sp1000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP1000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP1000 Handy Ultra',
    nameEn: 'OPTI-Solar SP1000 Handy Ultra Inverter',
    
    shortDescAr: 'انفرتر 1000 واط بموجة صافية - الخيار الأول للكرفانات والمشاريع الصغيرة',
    shortDescEn: '1000W pure sine wave inverter - First choice for caravans and small projects',
    
    fullDescAr: `انفرتر OPTI-Solar SP1000 هو بداية رحلتك في عالم الطاقة الشمسية. بقدرة 1000 واط وموجة صافية، يوفر طاقة نظيفة للأجهزة الحساسة.

**المميزات:**
- موجة صافية لجميع الأجهزة
- شاحن شمسي MPPT مدمج
- نظام 12 فولت سهل التركيب
- شاشة عرض واضحة

**مثالي لـ:**
- الكرفانات والرحلات
- الإضاءة الأساسية
- الأجهزة الصغيرة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP1000 is the start of your solar energy journey. With 1000W power and pure sine wave, it provides clean power for sensitive devices.

**Features:**
- Pure sine wave for all devices
- Built-in MPPT solar charger
- Easy 12V system setup
- Clear display screen

**Ideal for:**
- Caravans and trips
- Basic lighting
- Small appliances

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'موجة صافية - آمن لجميع الأجهزة الإلكترونية', en: 'Pure sine wave - safe for all electronic devices' },
      { ar: 'نظام 12 فولت - بطارية واحدة تكفي', en: '12V system - one battery is enough' },
      { ar: 'MPPT مدمج - أقصى استفادة من الألواح', en: 'Built-in MPPT - maximum panel utilization' },
      { ar: 'خفيف وصغير - سهل التركيب والنقل', en: 'Light and compact - easy to install and move' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '1000', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '2000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '12', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
      { keyAr: 'كفاءة التحويل', keyEn: 'Conversion Efficiency', value: '93+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '30', unit: 'A' },
      { keyAr: 'الحماية', keyEn: 'Protection', value: 'شحن زائد، تفريغ عميق، قصر دائرة' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'انفرتر مثالي للبداية في اليمن. سهل الفهم والتركيب، مع حماية مدمجة.',
      explanationEn: 'Ideal starter inverter for Yemen. Easy to understand and install, with built-in protection.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'يعمل بكفاءة في جميع مناخات اليمن',
      climateNotesEn: 'Works efficiently in all Yemen climates',
    },

    useCases: [
      {
        titleAr: 'الكرفانات والرحلات',
        titleEn: 'Caravans & Trips',
        descAr: 'الخيار الأول للرحلات البرية والتخييم',
        descEn: 'First choice for road trips and camping',
        icon: 'Caravan',
      },
      {
        titleAr: 'الغرف والاستراحات',
        titleEn: 'Rooms & Cabins',
        descAr: 'إضاءة ومراوح وشحن أجهزة',
        descEn: 'Lighting, fans, and device charging',
        icon: 'Lamp',
      },
      {
        titleAr: 'المزارع الصغيرة',
        titleEn: 'Small Farms',
        descAr: 'تشغيل أجهزة الري البسيطة والإنارة',
        descEn: 'Run simple irrigation devices and lighting',
        icon: 'Leaf',
      },
      {
        titleAr: 'نقاط البيع المتنقلة',
        titleEn: 'Mobile POS',
        descAr: 'تشغيل أجهزة الكاشير والإنترنت في المواقع المؤقتة',
        descEn: 'Run POS and internet in temporary locations',
        icon: 'Store',
      },
    ],

    recommendedForAr: [
      'المبتدئين في الطاقة الشمسية',
      'الكرفانات والمركبات الترفيهية',
      'الميزانيات المحدودة',
      'الأحمال الخفيفة (أقل من 800 واط)',
    ],
    recommendedForEn: [
      'Solar energy beginners',
      'Caravans and RVs',
      'Limited budgets',
      'Light loads (under 800W)',
    ],
    notRecommendedForAr: [
      'المنازل الكاملة',
      'الأجهزة عالية الاستهلاك',
      'التوسع المستقبلي الكبير',
    ],
    notRecommendedForEn: [
      'Full homes',
      'High-consumption appliances',
      'Major future expansion',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل الثلاجة؟',
        questionEn: 'Can it run a refrigerator?',
        answerAr: 'ثلاجة صغيرة (أقل من 150 لتر) نعم. الثلاجات الكبيرة تحتاج قدرة أعلى.',
        answerEn: 'Small refrigerator (under 150L) yes. Large refrigerators need higher capacity.',
      },
      {
        questionAr: 'كم بطارية أحتاج؟',
        questionEn: 'How many batteries do I need?',
        answerAr: 'بطارية واحدة 12 فولت (100-200 أمبير) تكفي للاستخدام الأساسي.',
        answerEn: 'One 12V battery (100-200Ah) is enough for basic use.',
      },
      {
        questionAr: 'كم لوح شمسي يحتاج؟',
        questionEn: 'How many solar panels does it need?',
        answerAr: 'لوح واحد 400W أو اثنين 200W كافية لشحن البطارية يومياً.',
        answerEn: 'One 400W panel or two 200W panels are enough to charge the battery daily.',
      },
      {
        questionAr: 'هل مناسب للاستخدام الدائم في المنزل؟',
        questionEn: 'Is it suitable for permanent home use?',
        answerAr: 'للأحمال الخفيفة فقط. للمنزل الكامل، ننصح بـ SP5000 أو أعلى.',
        answerEn: 'For light loads only. For full home, we recommend SP5000 or higher.',
      },
      {
        questionAr: 'ما الفرق بين SP1000 و SP1200؟',
        questionEn: 'What is the difference between SP1000 and SP1200?',
        answerAr: 'SP1200 يدعم ألواح أكبر وقدرة إخراج أعلى (1200W مقابل 1000W).',
        answerEn: 'SP1200 supports larger panels and higher output (1200W vs 1000W).',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp1200',
        pros: { ar: ['أرخص', 'أخف'], en: ['Cheaper', 'Lighter'] },
        cons: { ar: ['قدرة أقل', 'لا يدعم ألواح كبيرة'], en: ['Lower power', 'No large panel support'] },
      },
    ],

    relatedProductSlugs: ['sp1200', 'sp3000', '12v-100ah-lithium', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر OPTI-Solar SP1000 - انفرتر كرفانات وطاقة متنقلة في اليمن',
    seoTitleEn: 'OPTI-Solar SP1000 - Caravan and Portable Power Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP1000 Handy Ultra بقدرة 1000 واط. موجة صافية، MPPT مدمج، نظام 12 فولت. مثالي للكرفانات والرحلات.',
    seoDescriptionEn: 'OPTI-Solar SP1000 Handy Ultra with 1000W power. Pure sine wave, built-in MPPT, 12V system. Ideal for caravans and trips.',
    seoKeywordsAr: ['انفرتر 1000 واط', 'OPTI-Solar SP1000', 'انفرتر كرفان', 'طاقة متنقلة'],
    seoKeywordsEn: ['1000W inverter', 'OPTI-Solar SP1000', 'caravan inverter', 'portable power'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP1200
  {
    id: 'opti-sp1200',
    slug: 'sp1200',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP1200 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP1200 Handy Ultra',
    nameEn: 'OPTI-Solar SP1200 Handy Ultra Inverter',
    
    shortDescAr: 'أول انفرتر 12 فولت يدعم الألواح التجارية الكبيرة - 1200 واط صافي',
    shortDescEn: 'First 12V inverter supporting large commercial panels - 1200W pure',
    
    fullDescAr: `انفرتر OPTI-Solar SP1200 هو الوحيد في فئة 12 فولت الذي يدعم الألواح الشمسية الكبيرة (حتى 580 واط). مثالي لمن يريد نظام بطارية واحدة مع ألواح عالية الكفاءة.

**ميزة فريدة:**
- يقبل ألواح تجارية كبيرة (حتى 580W)
- أقصى استفادة من الألواح الحديثة
- نظام 12V بسيط

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP1200 is the only 12V inverter that supports large solar panels (up to 580W). Ideal for those wanting a single-battery system with high-efficiency panels.

**Unique Feature:**
- Accepts large commercial panels (up to 580W)
- Maximum utilization of modern panels
- Simple 12V system

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'يدعم ألواح حتى 580 واط - الوحيد في فئة 12 فولت', en: 'Supports panels up to 580W - only one in 12V class' },
      { ar: 'نظام بطارية واحدة - بساطة في التركيب والتكلفة', en: 'Single battery system - simplicity in installation and cost' },
      { ar: '1200 واط صافي - أقوى من SP1000', en: '1200W pure - stronger than SP1000' },
      { ar: 'MPPT عالي الجهد - كفاءة أعلى', en: 'High voltage MPPT - higher efficiency' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '1200', unit: 'W' },
      { keyAr: 'القدرة اللحظية', keyEn: 'Peak Power', value: '2400', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '12', unit: 'V' },
      { keyAr: 'أقصى جهد PV', keyEn: 'Max PV Voltage', value: '150+', unit: 'V' },
      { keyAr: 'أقصى قدرة PV', keyEn: 'Max PV Power', value: '580', unit: 'W' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
      { keyAr: 'كفاءة التحويل', keyEn: 'Conversion Efficiency', value: '93+', unit: '%' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 3,
        dustResistance: 4,
      },
      explanationAr: 'مثالي لمن يريد الجمع بين بساطة نظام 12V وكفاءة الألواح الحديثة الكبيرة.',
      explanationEn: 'Ideal for those wanting to combine 12V system simplicity with modern large panel efficiency.',
      bestRegionsAr: ['جميع المناطق'],
      bestRegionsEn: ['All regions'],
      climateNotesAr: 'مناسب لجميع مناخات اليمن',
      climateNotesEn: 'Suitable for all Yemen climates',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'إضاءة ومراوح وتلفزيون مع ألواح حديثة كبيرة',
        descEn: 'Lighting, fans, and TV with modern large panels',
        icon: 'Home',
      },
      {
        titleAr: 'المحلات التجارية الصغيرة',
        titleEn: 'Small Shops',
        descAr: 'إضاءة وأجهزة كاشير ونقاط بيع',
        descEn: 'Lighting, POS devices, and sales points',
        icon: 'Store',
      },
      {
        titleAr: 'الاستراحات والمخيمات',
        titleEn: 'Cabins & Camps',
        descAr: 'طاقة شمسية للمواقع البعيدة عن الشبكة',
        descEn: 'Solar power for off-grid locations',
        icon: 'Tent',
      },
      {
        titleAr: 'المزارع الصغيرة',
        titleEn: 'Small Farms',
        descAr: 'تشغيل مضخات صغيرة وإنارة',
        descEn: 'Run small pumps and lighting',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'من يريد استخدام ألواح كبيرة مع نظام 12V',
      'المنازل ذات الأحمال الخفيفة',
      'الميزانية المتوسطة',
    ],
    recommendedForEn: [
      'Those wanting large panels with 12V system',
      'Homes with light loads',
      'Medium budget',
    ],
    notRecommendedForAr: [
      'الأحمال عالية الاستهلاك',
      'التوسع الكبير مستقبلاً',
    ],
    notRecommendedForEn: [
      'High-consumption loads',
      'Major future expansion',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين SP1200 و SP1000؟',
        questionEn: 'What is the difference between SP1200 and SP1000?',
        answerAr: 'SP1200 يدعم ألواح أكبر (حتى 580W) وقدرة إخراج أعلى (1200W). SP1000 أرخص وأخف.',
        answerEn: 'SP1200 supports larger panels (up to 580W) and higher output (1200W). SP1000 is cheaper and lighter.',
      },
      {
        questionAr: 'لماذا أختار SP1200 بدلاً من SP3000؟',
        questionEn: 'Why choose SP1200 over SP3000?',
        answerAr: 'SP1200 يعمل ببطارية واحدة 12V فقط (أرخص)، بينما SP3000 يحتاج بطاريتين 24V.',
        answerEn: 'SP1200 works with just one 12V battery (cheaper), while SP3000 needs two 24V batteries.',
      },
      {
        questionAr: 'هل يشغل ثلاجة متوسطة؟',
        questionEn: 'Can it run a medium fridge?',
        answerAr: 'ثلاجة 10 قدم يمكن تشغيلها، لكن مع أحمال أخرى قليلة فقط.',
        answerEn: "10ft fridge can run, but with only few other loads.",
      },
      {
        questionAr: 'كم لوح Vertex يمكن توصيله؟',
        questionEn: 'How many Vertex panels can be connected?',
        answerAr: 'لوح واحد Vertex 580W كافي. الجهد العالي يسمح باستخدام ألواح حديثة مباشرة.',
        answerEn: 'One Vertex 580W panel is enough. High voltage allows using modern panels directly.',
      },
      {
        questionAr: 'هل يحتاج صيانة؟',
        questionEn: 'Does it need maintenance?',
        answerAr: 'لا، فقط تأكد من التهوية الجيدة وتنظيف فلتر الغبار كل 6 أشهر.',
        answerEn: 'No, just ensure good ventilation and clean dust filter every 6 months.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp1000',
        pros: { ar: ['يدعم ألواح كبيرة', 'قدرة أعلى'], en: ['Supports large panels', 'Higher power'] },
        cons: { ar: ['سعر أعلى'], en: ['Higher price'] },
      },
      {
        productSlug: 'sp3000',
        pros: { ar: ['بطارية واحدة تكفي', 'أرخص'], en: ['One battery enough', 'Cheaper'] },
        cons: { ar: ['قدرة أقل', 'توسعة محدودة'], en: ['Lower power', 'Limited expansion'] },
      },
    ],

    relatedProductSlugs: ['sp1000', 'sp3000', '12v-100ah-lithium'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden'],

    seoTitleAr: 'انفرتر OPTI-Solar SP1200 - انفرتر 12 فولت يدعم ألواح 580W',
    seoTitleEn: 'OPTI-Solar SP1200 - 12V Inverter Supporting 580W Panels',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP1200 Handy Ultra. الوحيد في فئة 12V الذي يدعم الألواح الكبيرة. 1200 واط صافي.',
    seoDescriptionEn: 'OPTI-Solar SP1200 Handy Ultra. Only 12V inverter supporting large panels. 1200W pure sine.',
    seoKeywordsAr: ['انفرتر SP1200', 'OPTI-Solar', 'انفرتر 12 فولت'],
    seoKeywordsEn: ['SP1200 inverter', 'OPTI-Solar', '12V inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP3000
  {
    id: 'opti-sp3000',
    slug: 'sp3000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP3000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP3000 Handy Ultra',
    nameEn: 'OPTI-Solar SP3000 Handy Ultra Inverter',
    
    shortDescAr: 'الحل الاقتصادي المتطور - انفرتر 24 فولت بتقنية الجهد العالي',
    shortDescEn: 'Advanced economic solution - 24V inverter with high voltage technology',
    
    fullDescAr: `انفرتر OPTI-Solar SP3000 يوفر توازن مثالي بين القدرة والتكلفة. بنظام 24 فولت، يقلل من تكاليف الكابلات مع توفير 3000 واط من الطاقة النظيفة.

**توفير حقيقي في التمديدات:**
- جهد أعلى = تيار أقل = كابلات أرفع
- تكلفة تأسيسية أقل
- كفاءة أعلى

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP3000 provides ideal balance between power and cost. With 24V system, it reduces cable costs while providing 3000W of clean power.

**Real savings in wiring:**
- Higher voltage = lower current = thinner cables
- Lower installation cost
- Higher efficiency

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '3000 واط صافي - يغطي معظم احتياجات المنزل الصغير', en: '3000W pure - covers most small home needs' },
      { ar: 'نظام 24V - توفير في كابلات التوصيل', en: '24V system - savings on connection cables' },
      { ar: 'سعر اقتصادي - أفضل قيمة في فئته', en: 'Economic price - best value in its class' },
      { ar: 'MPPT عالي الكفاءة - استفادة قصوى من الشمس', en: 'High efficiency MPPT - maximum sun utilization' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '3000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '24', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT مدمج / Built-in MPPT' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 4,
        powerOutageSupport: 4,
        dustResistance: 4,
      },
      explanationAr: 'خيار ممتاز للمنازل الصغيرة والمتوسطة في اليمن. يوفر طاقة كافية للاحتياجات الأساسية.',
      explanationEn: 'Excellent choice for small and medium homes in Yemen. Provides enough power for basic needs.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah'],
      climateNotesAr: 'يعمل بكفاءة في جميع مناخات اليمن',
      climateNotesEn: 'Works efficiently in all Yemen climates',
    },

    useCases: [
      {
        titleAr: 'المنازل الصغيرة',
        titleEn: 'Small Homes',
        descAr: 'إضاءة، مراوح، تلفزيون، ثلاجة صغيرة',
        descEn: 'Lighting, fans, TV, small fridge',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب',
        titleEn: 'Offices',
        descAr: 'أجهزة كمبيوتر وإضاءة',
        descEn: 'Computers and lighting',
        icon: 'Building',
      },
    ],

    recommendedForAr: [
      'المنازل الصغيرة (2-3 غرف)',
      'الميزانية المتوسطة',
      'الأحمال حتى 2500 واط',
    ],
    recommendedForEn: [
      'Small homes (2-3 rooms)',
      'Medium budget',
      'Loads up to 2500W',
    ],
    notRecommendedForAr: [
      'المنازل الكبيرة',
      'تشغيل المكيفات',
      'الأحمال الثقيلة',
    ],
    notRecommendedForEn: [
      'Large homes',
      'Running AC units',
      'Heavy loads',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل مكيف؟',
        questionEn: 'Can it run an AC?',
        answerAr: 'لا، 3000 واط لا تكفي لتشغيل مكيف. تحتاج SP5000 أو أعلى.',
        answerEn: 'No, 3000W is not enough to run an AC. You need SP5000 or higher.',
      },
      {
        questionAr: 'كم بطارية أحتاج؟',
        questionEn: 'How many batteries do I need?',
        answerAr: 'بطاريتين 12 فولت على التوالي، أو بطاريات ليثيوم 24 فولت.',
        answerEn: 'Two 12V batteries in series, or 24V lithium batteries.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp5000',
        pros: { ar: ['أرخص', 'كهرباء أقل مطلوبة'], en: ['Cheaper', 'Less power required'] },
        cons: { ar: ['قدرة أقل', 'لا يشغل مكيف'], en: ['Lower power', 'Cannot run AC'] },
      },
    ],

    relatedProductSlugs: ['sp5000', 'sp1200', 'us5000', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر OPTI-Solar SP3000 - الحل الاقتصادي للمنازل في اليمن',
    seoTitleEn: 'OPTI-Solar SP3000 - Economic Solution for Homes in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP3000 بقدرة 3000 واط ونظام 24 فولت. الخيار الاقتصادي للمنازل الصغيرة.',
    seoDescriptionEn: 'OPTI-Solar SP3000 with 3000W power and 24V system. Economic choice for small homes.',
    seoKeywordsAr: ['انفرتر 3000 واط', 'SP3000', 'انفرتر منزلي'],
    seoKeywordsEn: ['3000W inverter', 'SP3000', 'home inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // OPTI-Solar SP5000
  {
    id: 'opti-sp5000',
    slug: 'sp5000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP5000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP5000 Handy Ultra',
    nameEn: 'OPTI-Solar SP5000 Handy Ultra Inverter',
    
    shortDescAr: 'الأكثر طلباً للمنازل - العمود الفقري لأنظمة الطاقة المنزلية في اليمن',
    shortDescEn: 'Most requested for homes - Backbone of home energy systems in Yemen',
    
    fullDescAr: `انفرتر OPTI-Solar SP5000 هو الخيار الأول للمنازل اليمنية. بقدرة 5000 واط ونظام MPPT عالي الجهد، يوفر طاقة كافية لتشغيل منزل كامل بما في ذلك المكيف.

**لماذا SP5000 هو الأكثر مبيعاً؟**
- 5000 واط تكفي لمعظم المنازل
- يشغل مكيف 1 طن + أحمال أخرى
- MPPT عالي الجهد = كفاءة أعلى
- موثوقية مثبتة في آلاف المنازل اليمنية

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP5000 is the first choice for Yemeni homes. With 5000W power and high-voltage MPPT, it provides enough power to run a complete home including AC.

**Why is SP5000 the best-seller?**
- 5000W is enough for most homes
- Runs 1-ton AC + other loads
- High-voltage MPPT = higher efficiency
- Proven reliability in thousands of Yemeni homes

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '5000 واط صافي - يشغل منزل كامل بما فيه المكيف', en: '5000W pure - runs complete home including AC' },
      { ar: 'الأكثر مبيعاً في اليمن - موثوقية مثبتة', en: 'Best-seller in Yemen - proven reliability' },
      { ar: 'MPPT عالي الجهد - كفاءة 98%', en: 'High-voltage MPPT - 98% efficiency' },
      { ar: 'نظام 48V - الأكثر كفاءة للمنازل', en: '48V system - most efficient for homes' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '5000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'شاحن شمسي', keyEn: 'Solar Charger', value: 'MPPT عالي الجهد / High Voltage MPPT' },
      { keyAr: 'كفاءة MPPT', keyEn: 'MPPT Efficiency', value: '98+', unit: '%' },
      { keyAr: 'أقصى تيار شحن', keyEn: 'Max Charge Current', value: '80', unit: 'A' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'SP5000 هو المعيار الذهبي للمنازل اليمنية. قدرته تكفي لجميع الاحتياجات المنزلية مع هامش أمان.',
      explanationEn: 'SP5000 is the gold standard for Yemeni homes. Its capacity covers all home needs with safety margin.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'مثالي لجميع مناطق اليمن. يعمل بكفاءة حتى في أشد الحرارة.',
      climateNotesEn: 'Ideal for all Yemen regions. Works efficiently even in extreme heat.',
    },

    useCases: [
      {
        titleAr: 'المنازل والفلل',
        titleEn: 'Homes & Villas',
        descAr: 'تشغيل كامل المنزل بما فيه المكيف',
        descEn: 'Run entire home including AC',
        icon: 'Home',
      },
      {
        titleAr: 'المكاتب والعيادات',
        titleEn: 'Offices & Clinics',
        descAr: 'طاقة موثوقة للأعمال',
        descEn: 'Reliable power for business',
        icon: 'Building',
      },
      {
        titleAr: 'المحلات التجارية',
        titleEn: 'Commercial Shops',
        descAr: 'تشغيل الثلاجات والإضاءة والتكييف',
        descEn: 'Run fridges, lighting, and AC',
        icon: 'Store',
      },
    ],

    recommendedForAr: [
      'المنازل المتوسطة (3-5 غرف)',
      'من يريد تشغيل مكيف 1-1.5 طن',
      'الأعمال الصغيرة والمتوسطة',
      'الباحثين عن التوازن بين السعر والأداء',
    ],
    recommendedForEn: [
      'Medium homes (3-5 rooms)',
      'Those wanting to run 1-1.5 ton AC',
      'Small and medium businesses',
      'Those seeking balance between price and performance',
    ],
    notRecommendedForAr: [
      'الفلل الكبيرة (أكثر من مكيف)',
      'المصانع والمنشآت الكبيرة',
    ],
    notRecommendedForEn: [
      'Large villas (more than one AC)',
      'Factories and large facilities',
    ],

    faqs: [
      {
        questionAr: 'هل يشغل مكيفين؟',
        questionEn: 'Can it run two ACs?',
        answerAr: 'لا يُنصح. لمكيفين تحتاج SP8000 أو أعلى.',
        answerEn: 'Not recommended. For two ACs you need SP8000 or higher.',
      },
      {
        questionAr: 'كم بطارية Pylontech أحتاج؟',
        questionEn: 'How many Pylontech batteries do I need?',
        answerAr: 'بطاريتين US5000 كحد أدنى (9.6 كيلوواط ساعة) لتشغيل مريح.',
        answerEn: 'Minimum two US5000 batteries (9.6kWh) for comfortable operation.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: '8-10 ألواح Vertex S+ (حوالي 4 كيلوواط) للتغطية الجيدة.',
        answerEn: '8-10 Vertex S+ panels (about 4kW) for good coverage.',
      },
      {
        questionAr: 'هل يعمل بدون كهرباء حكومية؟',
        questionEn: 'Does it work without government electricity?',
        answerAr: 'نعم، يعمل بالكامل على الطاقة الشمسية والبطاريات (نظام Off-Grid).',
        answerEn: 'Yes, works completely on solar and batteries (Off-Grid system).',
      },
      {
        questionAr: 'ما حجم المكيف الذي يشغله؟',
        questionEn: 'What AC size can it run?',
        answerAr: 'مكيف 1-1.5 طن بسهولة. للمكيفات الأكبر أو أكثر من مكيف، استخدم SP8000.',
        answerEn: '1-1.5 ton AC easily. For larger ACs or more than one, use SP8000.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp8000',
        pros: { ar: ['أرخص', 'كافي لمعظم المنازل'], en: ['Cheaper', 'Enough for most homes'] },
        cons: { ar: ['قدرة أقل', 'مكيف واحد فقط'], en: ['Lower power', 'Only one AC'] },
      },
      {
        productSlug: 'sp3000',
        pros: { ar: ['يشغل مكيف', 'أكثر مرونة'], en: ['Runs AC', 'More flexible'] },
        cons: { ar: ['سعر أعلى'], en: ['Higher price'] },
      },
    ],

    relatedProductSlugs: ['sp8000', 'sp3000', 'us5000', 'pelio-l', 'vertex-s-plus'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر OPTI-Solar SP5000 - الأكثر مبيعاً للمنازل في اليمن',
    seoTitleEn: 'OPTI-Solar SP5000 - Best-Selling Home Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP5000 Handy Ultra بقدرة 5000 واط. الخيار الأول للمنازل اليمنية. يشغل منزل كامل + مكيف.',
    seoDescriptionEn: 'OPTI-Solar SP5000 Handy Ultra with 5000W power. First choice for Yemeni homes. Runs complete home + AC.',
    seoKeywordsAr: ['انفرتر 5000 واط', 'SP5000', 'انفرتر منزلي اليمن', 'OPTI-Solar'],
    seoKeywordsEn: ['5000W inverter', 'SP5000', 'home inverter Yemen', 'OPTI-Solar'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // OPTI-Solar SP8000
  {
    id: 'opti-sp8000',
    slug: 'sp8000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP8000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP8000 Handy Ultra',
    nameEn: 'OPTI-Solar SP8000 Handy Ultra Inverter',
    
    shortDescAr: 'الحل المتكامل للمنازل الكبيرة - 8000 واط صافي مع شاحن مزدوج',
    shortDescEn: 'Complete solution for large homes - 8000W pure with dual charger',
    
    fullDescAr: `انفرتر OPTI-Solar SP8000 للفلل والمنازل الكبيرة التي تحتاج طاقة إضافية. مع تقنية Dual MPPT، يستفيد من اتجاهين مختلفين للألواح.

**مميزات فريدة:**
- 8000 واط صافي - يشغل مكيفين + أحمال
- Dual MPPT - اتجاهين للألواح
- شاحن مزدوج - شحن أسرع للبطاريات
- توافق كامل مع بطاريات Pylontech

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP8000 for villas and large homes needing extra power. With Dual MPPT technology, it utilizes two different panel orientations.

**Unique Features:**
- 8000W pure - runs two ACs + loads
- Dual MPPT - two panel orientations
- Dual charger - faster battery charging
- Full compatibility with Pylontech batteries

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '8000 واط صافي - قوة كافية لفيلا كاملة', en: '8000W pure - enough power for complete villa' },
      { ar: 'Dual MPPT - يقبل اتجاهين للألواح', en: 'Dual MPPT - accepts two panel orientations' },
      { ar: 'يشغل مكيفين - راحة مضمونة', en: 'Runs two ACs - guaranteed comfort' },
      { ar: 'شاحن مزدوج - شحن أسرع للبطاريات', en: 'Dual charger - faster battery charging' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '8000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2 (Dual MPPT)' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'أقصى قدرة شمسية', keyEn: 'Max Solar Power', value: '6000+', unit: 'W' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'الخيار الأمثل للفلل الكبيرة في اليمن. Dual MPPT يسمح بتركيب ألواح على جهتين مختلفتين من السطح.',
      explanationEn: 'Optimal choice for large villas in Yemen. Dual MPPT allows installing panels on two different roof sides.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah'],
      climateNotesAr: 'أداء ممتاز في جميع المناطق. التبريد الفعال يضمن عمر طويل.',
      climateNotesEn: 'Excellent performance in all areas. Effective cooling ensures long life.',
    },

    useCases: [
      {
        titleAr: 'الفلل الكبيرة',
        titleEn: 'Large Villas',
        descAr: 'تشغيل 2 مكيف + جميع الأحمال المنزلية',
        descEn: 'Run 2 ACs + all home loads',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'محلات ومكاتب كبيرة',
        descEn: 'Large shops and offices',
        icon: 'Building2',
      },
      {
        titleAr: 'العيادات والصيدليات',
        titleEn: 'Clinics & Pharmacies',
        descAr: 'طاقة موثوقة للأجهزة الطبية والتبريد',
        descEn: 'Reliable power for medical equipment and cooling',
        icon: 'Heart',
      },
    ],

    recommendedForAr: [
      'الفلل والمنازل الكبيرة (5+ غرف)',
      'من يحتاج تشغيل مكيفين',
      'المنشآت التجارية المتوسطة',
      'الأسطح غير المنتظمة (اتجاهين للألواح)',
    ],
    recommendedForEn: [
      'Large villas and homes (5+ rooms)',
      'Those needing to run two ACs',
      'Medium commercial facilities',
      'Irregular roofs (two panel orientations)',
    ],
    notRecommendedForAr: [
      'المنازل الصغيرة (مبالغة في القدرة)',
      'الميزانيات المحدودة',
    ],
    notRecommendedForEn: [
      'Small homes (overkill)',
      'Limited budgets',
    ],

    faqs: [
      {
        questionAr: 'ما فائدة Dual MPPT؟',
        questionEn: 'What is the benefit of Dual MPPT?',
        answerAr: 'يسمح بتركيب الألواح في اتجاهين مختلفين (شرق وغرب مثلاً) للاستفادة من الشمس طوال اليوم.',
        answerEn: 'Allows installing panels in two different directions (east and west for example) to utilize sun throughout the day.',
      },
      {
        questionAr: 'كم بطارية Pylontech أحتاج؟',
        questionEn: 'How many Pylontech batteries do I need?',
        answerAr: '3-4 بطاريات US5000 (14.4-19.2 كيلوواط ساعة) للأداء الأمثل.',
        answerEn: '3-4 US5000 batteries (14.4-19.2kWh) for optimal performance.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp5000',
        pros: { ar: ['قدرة أعلى', 'Dual MPPT', 'مكيفين'], en: ['Higher power', 'Dual MPPT', 'Two ACs'] },
        cons: { ar: ['سعر أعلى', 'بطاريات أكثر'], en: ['Higher price', 'More batteries'] },
      },
      {
        productSlug: 'sp11000',
        pros: { ar: ['أرخص من SP11000', 'كافي لمعظم الفلل'], en: ['Cheaper than SP11000', 'Enough for most villas'] },
        cons: { ar: ['قدرة أقل'], en: ['Lower power'] },
      },
    ],

    relatedProductSlugs: ['sp5000', 'sp11000', 'us5000', 'pelio-l', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر OPTI-Solar SP8000 - انفرتر الفلل الكبيرة في اليمن',
    seoTitleEn: 'OPTI-Solar SP8000 - Large Villa Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP8000 Handy Ultra بقدرة 8000 واط وتقنية Dual MPPT. الحل المتكامل للفلل والمنازل الكبيرة.',
    seoDescriptionEn: 'OPTI-Solar SP8000 Handy Ultra with 8000W power and Dual MPPT technology. Complete solution for villas and large homes.',
    seoKeywordsAr: ['انفرتر 8000 واط', 'SP8000', 'انفرتر فلل', 'Dual MPPT'],
    seoKeywordsEn: ['8000W inverter', 'SP8000', 'villa inverter', 'Dual MPPT'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // OPTI-Solar SP11000
  {
    id: 'opti-sp11000',
    slug: 'sp11000',
    category: 'inverters',
    brand: 'OPTI-Solar',
    model: 'SP11000 Handy Ultra',
    nameAr: 'انفرتر OPTI-Solar SP11000 Handy Ultra',
    nameEn: 'OPTI-Solar SP11000 Handy Ultra Inverter',
    
    shortDescAr: 'وحش الطاقة - الفئة العليا بقدرة 11 كيلوواط صافي',
    shortDescEn: 'Power Beast - Top tier with 11kW pure power',
    
    fullDescAr: `انفرتر OPTI-Solar SP11000 هو أقوى انفرتر في سلسلة Handy Ultra. بقدرة 11 كيلوواط صافية، يغطي احتياجات أكبر الفلل والمنشآت.

**للذين لا يقبلون التنازلات:**
- 11,000 واط صافي
- نظام 48V الأكثر كفاءة
- يشغل 3 مكيفات + جميع الأحمال
- Dual MPPT للاستفادة القصوى

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `OPTI-Solar SP11000 is the most powerful inverter in the Handy Ultra series. With 11kW pure power, it covers the needs of the largest villas and facilities.

**For those who accept no compromises:**
- 11,000W pure
- Most efficient 48V system
- Runs 3 ACs + all loads
- Dual MPPT for maximum utilization

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '11 كيلوواط صافي - أقوى انفرتر منزلي', en: '11kW pure - most powerful home inverter' },
      { ar: 'يشغل 3 مكيفات + جميع الأحمال', en: 'Runs 3 ACs + all loads' },
      { ar: 'Dual MPPT - كفاءة قصوى', en: 'Dual MPPT - maximum efficiency' },
      { ar: 'للفلل الفاخرة والقصور', en: 'For luxury villas and mansions' },
    ],

    specifications: [
      { keyAr: 'القدرة المستمرة', keyEn: 'Continuous Power', value: '11000', unit: 'W' },
      { keyAr: 'جهد البطارية', keyEn: 'Battery Voltage', value: '48', unit: 'V' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2 (Dual MPPT)' },
      { keyAr: 'نوع الموجة', keyEn: 'Wave Type', value: 'موجة صافية / Pure Sine Wave' },
      { keyAr: 'أقصى قدرة شمسية', keyEn: 'Max Solar Power', value: '8000+', unit: 'W' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 4,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'للفلل الكبيرة جداً والقصور في اليمن. قدرة تفوق معظم الاحتياجات السكنية.',
      explanationEn: 'For very large villas and mansions in Yemen. Power exceeding most residential needs.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz'],
      climateNotesAr: 'أداء استثنائي حتى في أقسى الظروف',
      climateNotesEn: 'Exceptional performance even in harshest conditions',
    },

    useCases: [
      {
        titleAr: 'الفلل الفاخرة',
        titleEn: 'Luxury Villas',
        descAr: 'تشغيل 3 مكيفات + مسبح + جميع الأحمال',
        descEn: 'Run 3 ACs + pool + all loads',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'مطاعم ومقاهي ومحلات كبيرة',
        descEn: 'Restaurants, cafes, and large shops',
        icon: 'Building2',
      },
    ],

    recommendedForAr: [
      'الفلل الفاخرة (7+ غرف)',
      'من يريد تشغيل 3+ مكيفات',
      'المنشآت التجارية الكبيرة',
    ],
    recommendedForEn: [
      'Luxury villas (7+ rooms)',
      'Those wanting to run 3+ ACs',
      'Large commercial facilities',
    ],
    notRecommendedForAr: [
      'المنازل العادية (مبالغة كبيرة)',
      'الميزانيات المحدودة',
    ],
    notRecommendedForEn: [
      'Regular homes (major overkill)',
      'Limited budgets',
    ],

    faqs: [
      {
        questionAr: 'كم بطارية أحتاج؟',
        questionEn: 'How many batteries do I need?',
        answerAr: '4-6 بطاريات Pylontech US5000 (19.2-28.8 كيلوواط ساعة).',
        answerEn: '4-6 Pylontech US5000 batteries (19.2-28.8kWh).',
      },
    ],

    comparisons: [
      {
        productSlug: 'sp8000',
        pros: { ar: ['قدرة أعلى بكثير', '3 مكيفات'], en: ['Much higher power', '3 ACs'] },
        cons: { ar: ['سعر أعلى بكثير', 'بطاريات أكثر'], en: ['Much higher price', 'More batteries'] },
      },
    ],

    relatedProductSlugs: ['sp8000', 'sp5000', 'us5000', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر OPTI-Solar SP11000 - أقوى انفرتر منزلي في اليمن',
    seoTitleEn: 'OPTI-Solar SP11000 - Most Powerful Home Inverter in Yemen',
    seoDescriptionAr: 'انفرتر OPTI-Solar SP11000 بقدرة 11 كيلوواط صافي. وحش الطاقة للفلل الفاخرة والمنشآت الكبيرة.',
    seoDescriptionEn: 'OPTI-Solar SP11000 with 11kW pure power. Power beast for luxury villas and large facilities.',
    seoKeywordsAr: ['انفرتر 11 كيلوواط', 'SP11000', 'انفرتر فلل فاخرة'],
    seoKeywordsEn: ['11kW inverter', 'SP11000', 'luxury villa inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-20KTL-M5
  {
    id: 'huawei-sun2000-20ktl',
    slug: 'sun2000-20ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-20KTL-M5',
    nameAr: 'انفرتر هواوي SUN2000-20KTL-M5',
    nameEn: 'Huawei SUN2000-20KTL-M5 Inverter',
    
    shortDescAr: 'الفئة الأكثر مبيعاً - الحل الهندسي الأمثل للفلل الكبيرة والمنشآت التجارية',
    shortDescEn: 'Best-selling class - Optimal engineering solution for large villas and commercial facilities',
    
    fullDescAr: `انفرتر هواوي SUN2000-20KTL هو معيار الصناعة للمشاريع المتوسطة والكبيرة. بقدرة 20 كيلوواط وكفاءة 98.4%، يوفر أقصى استفادة من الطاقة الشمسية.

**تقنيات هواوي المتقدمة:**
- AI-powered MPPT
- String-level monitoring
- كفاءة 98.4% (الأعلى في السوق)
- مقاومة IP66

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-20KTL is the industry standard for medium and large projects. With 20kW power and 98.4% efficiency, it provides maximum solar energy utilization.

**Huawei Advanced Technologies:**
- AI-powered MPPT
- String-level monitoring
- 98.4% efficiency (highest in market)
- IP66 protection

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '20 كيلوواط - للفلل الكبيرة والمنشآت التجارية', en: '20kW - for large villas and commercial facilities' },
      { ar: 'كفاءة 98.4% - الأعلى في السوق', en: '98.4% efficiency - highest in market' },
      { ar: 'تقنية AI-MPPT - تتبع ذكي للطاقة', en: 'AI-MPPT technology - intelligent power tracking' },
      { ar: 'مقاومة IP66 - للتركيب الخارجي', en: 'IP66 protection - for outdoor installation' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '20', unit: 'kW' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.4', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '2' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'النوع', keyEn: 'Type', value: 'On-Grid / هجين' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'انفرتر هواوي مثالي للمشاريع الكبيرة في اليمن. حماية IP66 تجعله مقاوم للغبار والماء.',
      explanationEn: 'Huawei inverter is ideal for large projects in Yemen. IP66 protection makes it dust and water resistant.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Marib'],
      climateNotesAr: 'تصميم مقاوم للبيئات القاسية. مناسب للتركيب الخارجي في جميع مناطق اليمن.',
      climateNotesEn: 'Design resistant to harsh environments. Suitable for outdoor installation in all Yemen regions.',
    },

    useCases: [
      {
        titleAr: 'الفلل الكبيرة',
        titleEn: 'Large Villas',
        descAr: 'تقليل فواتير الكهرباء للفلل الفاخرة',
        descEn: 'Reduce electricity bills for luxury villas',
        icon: 'Castle',
      },
      {
        titleAr: 'المنشآت التجارية',
        titleEn: 'Commercial Facilities',
        descAr: 'فنادق، مطاعم، مراكز تسوق',
        descEn: 'Hotels, restaurants, shopping centers',
        icon: 'Building2',
      },
      {
        titleAr: 'المصانع الصغيرة',
        titleEn: 'Small Factories',
        descAr: 'خفض تكاليف التشغيل',
        descEn: 'Reduce operating costs',
        icon: 'Factory',
      },
    ],

    recommendedForAr: [
      'الفلل الكبيرة (10+ غرف)',
      'المنشآت التجارية المتوسطة',
      'المشاريع المتصلة بالشبكة',
      'من يريد أعلى كفاءة ممكنة',
    ],
    recommendedForEn: [
      'Large villas (10+ rooms)',
      'Medium commercial facilities',
      'Grid-connected projects',
      'Those wanting highest possible efficiency',
    ],
    notRecommendedForAr: [
      'المنازل الصغيرة',
      'الأنظمة المنفصلة عن الشبكة (بدون كهرباء حكومية)',
    ],
    notRecommendedForEn: [
      'Small homes',
      'Off-grid systems (without government electricity)',
    ],

    faqs: [
      {
        questionAr: 'هل يعمل بدون كهرباء حكومية؟',
        questionEn: 'Does it work without government electricity?',
        answerAr: 'النسخة الأساسية تحتاج الشبكة. للعمل بدون شبكة تحتاج إضافة نظام بطاريات هجين.',
        answerEn: 'Basic version needs grid. For off-grid operation, you need to add a hybrid battery system.',
      },
      {
        questionAr: 'كم لوح شمسي أحتاج؟',
        questionEn: 'How many solar panels do I need?',
        answerAr: 'حوالي 35-40 لوح Vertex بقدرة 580W لتغطية 20 كيلوواط.',
        answerEn: 'About 35-40 Vertex panels at 580W to cover 20kW.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-30ktl',
        pros: { ar: ['أرخص', 'كافي للفلل الكبيرة'], en: ['Cheaper', 'Enough for large villas'] },
        cons: { ar: ['قدرة أقل'], en: ['Lower power'] },
      },
    ],

    relatedProductSlugs: ['sun2000-30ktl', 'sun2000-50ktl', 'vertex', 'us5000'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر هواوي SUN2000-20KTL - انفرتر تجاري 20 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-20KTL - 20kW Commercial Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-20KTL-M5 بقدرة 20 كيلوواط وكفاءة 98.4%. الحل الأمثل للفلل الكبيرة والمنشآت التجارية.',
    seoDescriptionEn: 'Huawei SUN2000-20KTL-M5 with 20kW power and 98.4% efficiency. Optimal solution for large villas and commercial facilities.',
    seoKeywordsAr: ['انفرتر هواوي', 'SUN2000-20KTL', 'انفرتر 20 كيلوواط', 'انفرتر تجاري'],
    seoKeywordsEn: ['Huawei inverter', 'SUN2000-20KTL', '20kW inverter', 'commercial inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Huawei SUN2000-30KTL-M5
  {
    id: 'huawei-sun2000-30ktl',
    slug: 'sun2000-30ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-30KTL-M5',
    nameAr: 'انفرتر هواوي SUN2000-30KTL-M5',
    nameEn: 'Huawei SUN2000-30KTL-M5 Inverter',
    
    shortDescAr: 'الانفرتر الأذكى للمنشآت التجارية والمنازل الكبيرة - 30 كيلوواط',
    shortDescEn: 'Smartest inverter for commercial facilities and large homes - 30kW',
    
    fullDescAr: `انفرتر هواوي SUN2000-30KTL من الجيل الأحدث M5. بقدرة 30 كيلوواط وكفاءة 98.4%، يوفر الحل الأمثل للمنشآت التجارية الكبيرة.

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-30KTL from the latest M5 generation. With 30kW power and 98.4% efficiency, it provides the optimal solution for large commercial facilities.

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '30 كيلوواط - للمنشآت التجارية الكبيرة', en: '30kW - for large commercial facilities' },
      { ar: 'كفاءة 98.4% - توفير حقيقي', en: '98.4% efficiency - real savings' },
      { ar: 'الجيل الأحدث M5 - تقنيات متقدمة', en: 'Latest M5 generation - advanced technologies' },
      { ar: 'مقاومة IP66 - للتركيب الخارجي', en: 'IP66 protection - for outdoor installation' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '30', unit: 'kW' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.4', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '3' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'النوع', keyEn: 'Type', value: 'On-Grid / هجين' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'مثالي للمشاريع التجارية الكبيرة في اليمن. 3 MPPT لمرونة أكبر في تصميم النظام.',
      explanationEn: 'Ideal for large commercial projects in Yemen. 3 MPPTs for greater flexibility in system design.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'مأرب'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Marib'],
      climateNotesAr: 'مقاومة ممتازة للبيئات القاسية',
      climateNotesEn: 'Excellent resistance to harsh environments',
    },

    useCases: [
      {
        titleAr: 'المنشآت التجارية الكبيرة',
        titleEn: 'Large Commercial Facilities',
        descAr: 'فنادق، مجمعات تجارية، مستشفيات',
        descEn: 'Hotels, shopping complexes, hospitals',
        icon: 'Building2',
      },
      {
        titleAr: 'المصانع',
        titleEn: 'Factories',
        descAr: 'خفض تكاليف الطاقة بشكل كبير',
        descEn: 'Significantly reduce energy costs',
        icon: 'Factory',
      },
    ],

    recommendedForAr: [
      'المنشآت التجارية الكبيرة',
      'المصانع الصغيرة والمتوسطة',
      'المشاريع المتصلة بالشبكة',
    ],
    recommendedForEn: [
      'Large commercial facilities',
      'Small and medium factories',
      'Grid-connected projects',
    ],
    notRecommendedForAr: [
      'المنازل والفلل (قدرة زائدة)',
      'الأنظمة المنفصلة عن الشبكة',
    ],
    notRecommendedForEn: [
      'Homes and villas (excess capacity)',
      'Off-grid systems',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين 20KTL و 30KTL؟',
        questionEn: 'What is the difference between 20KTL and 30KTL?',
        answerAr: '30KTL بقدرة أعلى (30 كيلوواط) و 3 MPPT بدلاً من 2، مما يوفر مرونة أكبر.',
        answerEn: '30KTL has higher power (30kW) and 3 MPPTs instead of 2, providing more flexibility.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-20ktl',
        pros: { ar: ['قدرة أعلى', '3 MPPT'], en: ['Higher power', '3 MPPTs'] },
        cons: { ar: ['سعر أعلى'], en: ['Higher price'] },
      },
      {
        productSlug: 'sun2000-50ktl',
        pros: { ar: ['أرخص', 'كافي لمعظم المنشآت'], en: ['Cheaper', 'Enough for most facilities'] },
        cons: { ar: ['قدرة أقل'], en: ['Lower power'] },
      },
    ],

    relatedProductSlugs: ['sun2000-20ktl', 'sun2000-50ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر هواوي SUN2000-30KTL - انفرتر تجاري 30 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-30KTL - 30kW Commercial Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-30KTL-M5 بقدرة 30 كيلوواط. الحل الأذكى للمنشآت التجارية الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-30KTL-M5 with 30kW power. Smartest solution for large commercial facilities in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 30 كيلوواط', 'SUN2000-30KTL', 'انفرتر مصانع'],
    seoKeywordsEn: ['Huawei 30kW inverter', 'SUN2000-30KTL', 'factory inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-50KTL-M3
  {
    id: 'huawei-sun2000-50ktl',
    slug: 'sun2000-50ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-50KTL-M3',
    nameAr: 'انفرتر هواوي SUN2000-50KTL-M3',
    nameEn: 'Huawei SUN2000-50KTL-M3 Inverter',
    
    shortDescAr: 'انفرتر ثلاثي الطور بقدرة 50 كيلوواط - الذكاء الاصطناعي المدمج',
    shortDescEn: 'Three-phase inverter with 50kW power - Built-in artificial intelligence',
    
    fullDescAr: `انفرتر هواوي SUN2000-50KTL هو الحل الذكي للمشاريع الكبيرة. بقدرة 50 كيلوواط ونظام ثلاثي الطور، يغطي احتياجات المصانع والمنشآت الكبيرة.

**تقنية الذكاء الاصطناعي:**
- Smart PV Controller
- تحسين الأداء التلقائي
- تشخيص الأعطال الذكي

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-50KTL is the smart solution for large projects. With 50kW power and three-phase system, it covers the needs of factories and large facilities.

**AI Technology:**
- Smart PV Controller
- Automatic performance optimization
- Smart fault diagnosis

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '50 كيلوواط - للمصانع والمنشآت الكبيرة', en: '50kW - for factories and large facilities' },
      { ar: 'نظام ثلاثي الطور - للأحمال الصناعية', en: 'Three-phase system - for industrial loads' },
      { ar: 'ذكاء اصطناعي مدمج - تحسين تلقائي', en: 'Built-in AI - automatic optimization' },
      { ar: 'Smart PV Controller - مراقبة متقدمة', en: 'Smart PV Controller - advanced monitoring' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '50', unit: 'kW' },
      { keyAr: 'النظام', keyEn: 'System', value: 'ثلاثي الطور / 3-Phase' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.6', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '4' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'الخيار الأمثل للمصانع في اليمن. نظام ثلاثي الطور يتوافق مع الأحمال الصناعية.',
      explanationEn: 'Optimal choice for factories in Yemen. Three-phase system compatible with industrial loads.',
      bestRegionsAr: ['صنعاء', 'عدن', 'مأرب', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Marib', 'Hadramout'],
      climateNotesAr: 'مصمم للبيئات الصناعية القاسية',
      climateNotesEn: 'Designed for harsh industrial environments',
    },

    useCases: [
      {
        titleAr: 'المصانع',
        titleEn: 'Factories',
        descAr: 'خفض فواتير الكهرباء الصناعية بشكل كبير',
        descEn: 'Significantly reduce industrial electricity bills',
        icon: 'Factory',
      },
      {
        titleAr: 'الآبار الارتوازية',
        titleEn: 'Artesian Wells',
        descAr: 'تشغيل مضخات المياه الكبيرة',
        descEn: 'Run large water pumps',
        icon: 'Droplets',
      },
      {
        titleAr: 'المزارع الكبيرة',
        titleEn: 'Large Farms',
        descAr: 'أنظمة الري واسعة النطاق',
        descEn: 'Large-scale irrigation systems',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'المصانع والمنشآت الصناعية',
      'الآبار الارتوازية الكبيرة',
      'المزارع الكبيرة',
      'المشاريع التجارية الضخمة',
    ],
    recommendedForEn: [
      'Factories and industrial facilities',
      'Large artesian wells',
      'Large farms',
      'Mega commercial projects',
    ],
    notRecommendedForAr: [
      'المنازل والفلل',
      'الأنظمة أحادية الطور',
    ],
    notRecommendedForEn: [
      'Homes and villas',
      'Single-phase systems',
    ],

    faqs: [
      {
        questionAr: 'ما معنى ثلاثي الطور؟',
        questionEn: 'What does three-phase mean?',
        answerAr: 'نظام كهربائي صناعي بثلاثة خطوط، يوفر قدرة أعلى للأحمال الثقيلة مثل المحركات الكبيرة.',
        answerEn: 'Industrial electrical system with three lines, providing higher capacity for heavy loads like large motors.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-100ktl',
        pros: { ar: ['أرخص', 'كافي لمعظم المصانع الصغيرة'], en: ['Cheaper', 'Enough for most small factories'] },
        cons: { ar: ['قدرة أقل'], en: ['Lower power'] },
      },
    ],

    relatedProductSlugs: ['sun2000-30ktl', 'sun2000-100ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz'],

    seoTitleAr: 'انفرتر هواوي SUN2000-50KTL - انفرتر مصانع 50 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-50KTL - 50kW Factory Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-50KTL-M3 بقدرة 50 كيلوواط ثلاثي الطور. الحل الذكي للمصانع والمنشآت الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-50KTL-M3 with 50kW three-phase power. Smart solution for factories and large facilities in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 50 كيلوواط', 'SUN2000-50KTL', 'انفرتر ثلاثي الطور', 'انفرتر مصانع'],
    seoKeywordsEn: ['Huawei 50kW inverter', 'SUN2000-50KTL', 'three-phase inverter', 'factory inverter'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: false,
  },

  // Huawei SUN2000-100KTL-M2
  {
    id: 'huawei-sun2000-100ktl',
    slug: 'sun2000-100ktl',
    category: 'inverters',
    brand: 'Huawei',
    model: 'SUN2000-100KTL-M2',
    nameAr: 'انفرتر هواوي SUN2000-100KTL-M2',
    nameEn: 'Huawei SUN2000-100KTL-M2 Inverter',
    
    shortDescAr: 'الحل الأمثل للمصانع والآبار الارتوازية - قدرة 100 كيلوواط',
    shortDescEn: 'Optimal solution for factories and artesian wells - 100kW power',
    
    fullDescAr: `انفرتر هواوي SUN2000-100KTL هو الأقوى في سلسلة هواوي التجارية. بقدرة 100 كيلوواط، يوفر الحل الأمثل للمصانع الكبيرة والآبار الارتوازية في اليمن.

**لماذا 100KTL للمشاريع الكبيرة؟**
- قدرة 100 كيلوواط في وحدة واحدة
- تقليل عدد الانفرترات المطلوبة
- تكلفة تأسيسية أقل
- صيانة أسهل

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Huawei SUN2000-100KTL is the most powerful in Huawei's commercial series. With 100kW power, it provides the optimal solution for large factories and artesian wells in Yemen.

**Why 100KTL for large projects?**
- 100kW power in one unit
- Reduce number of required inverters
- Lower installation cost
- Easier maintenance

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: '100 كيلوواط - أقوى انفرتر تجاري', en: '100kW - most powerful commercial inverter' },
      { ar: 'وحدة واحدة بدلاً من عدة انفرترات', en: 'One unit instead of multiple inverters' },
      { ar: 'الحل الأمثل للآبار الارتوازية الكبيرة', en: 'Optimal solution for large artesian wells' },
      { ar: 'تكلفة أقل لكل كيلوواط', en: 'Lower cost per kilowatt' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '100', unit: 'kW' },
      { keyAr: 'النظام', keyEn: 'System', value: 'ثلاثي الطور / 3-Phase' },
      { keyAr: 'الكفاءة القصوى', keyEn: 'Max Efficiency', value: '98.8', unit: '%' },
      { keyAr: 'عدد MPPT', keyEn: 'MPPT Count', value: '6' },
      { keyAr: 'درجة الحماية', keyEn: 'Protection Rating', value: 'IP66' },
      { keyAr: 'الضمان', keyEn: 'Warranty', value: '10 سنوات / 10 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 4,
        dustResistance: 5,
      },
      explanationAr: 'الحل الأمثل للمشاريع الضخمة في اليمن. مثالي للآبار الارتوازية ومحطات الضخ الكبيرة.',
      explanationEn: 'Optimal solution for mega projects in Yemen. Ideal for artesian wells and large pumping stations.',
      bestRegionsAr: ['مأرب', 'حضرموت', 'صنعاء', 'عدن'],
      bestRegionsEn: ['Marib', 'Hadramout', 'Sanaa', 'Aden'],
      climateNotesAr: 'مصمم للعمل المتواصل في البيئات القاسية',
      climateNotesEn: 'Designed for continuous operation in harsh environments',
    },

    useCases: [
      {
        titleAr: 'الآبار الارتوازية',
        titleEn: 'Artesian Wells',
        descAr: 'تشغيل مضخات المياه العميقة بالطاقة الشمسية',
        descEn: 'Solar-powered deep water pumps',
        icon: 'Droplets',
      },
      {
        titleAr: 'المصانع الكبيرة',
        titleEn: 'Large Factories',
        descAr: 'خفض تكاليف الطاقة الصناعية بشكل جذري',
        descEn: 'Drastically reduce industrial energy costs',
        icon: 'Factory',
      },
      {
        titleAr: 'المزارع الشمسية',
        titleEn: 'Solar Farms',
        descAr: 'مشاريع توليد الطاقة الشمسية الكبيرة',
        descEn: 'Large-scale solar power generation projects',
        icon: 'Sun',
      },
    ],

    recommendedForAr: [
      'الآبار الارتوازية الكبيرة',
      'المصانع الكبيرة',
      'المزارع الشمسية',
      'محطات الضخ',
    ],
    recommendedForEn: [
      'Large artesian wells',
      'Large factories',
      'Solar farms',
      'Pumping stations',
    ],
    notRecommendedForAr: [
      'المشاريع أقل من 50 كيلوواط',
      'الأنظمة أحادية الطور',
    ],
    notRecommendedForEn: [
      'Projects under 50kW',
      'Single-phase systems',
    ],

    faqs: [
      {
        questionAr: 'كم لوح شمسي يحتاج؟',
        questionEn: 'How many solar panels does it need?',
        answerAr: 'حوالي 170-180 لوح Vertex 580W لتغطية 100 كيلوواط.',
        answerEn: 'About 170-180 Vertex 580W panels to cover 100kW.',
      },
      {
        questionAr: 'هل يناسب الآبار الارتوازية؟',
        questionEn: 'Is it suitable for artesian wells?',
        answerAr: 'نعم، هذا هو الاستخدام الأمثل له في اليمن. يشغل مضخات حتى 75 حصان بسهولة.',
        answerEn: 'Yes, this is its optimal use in Yemen. Easily runs pumps up to 75 HP.',
      },
    ],

    comparisons: [
      {
        productSlug: 'sun2000-50ktl',
        pros: { ar: ['قدرة مضاعفة', 'تكلفة أقل لكل كيلوواط'], en: ['Double power', 'Lower cost per kW'] },
        cons: { ar: ['استثمار أولي أكبر'], en: ['Larger initial investment'] },
      },
    ],

    relatedProductSlugs: ['sun2000-50ktl', 'sun2000-30ktl', 'vertex'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'انفرتر هواوي SUN2000-100KTL - انفرتر آبار ومصانع 100 كيلوواط في اليمن',
    seoTitleEn: 'Huawei SUN2000-100KTL - 100kW Wells and Factory Inverter in Yemen',
    seoDescriptionAr: 'انفرتر هواوي SUN2000-100KTL-M2 بقدرة 100 كيلوواط. الحل الأمثل للآبار الارتوازية والمصانع الكبيرة في اليمن.',
    seoDescriptionEn: 'Huawei SUN2000-100KTL-M2 with 100kW power. Optimal solution for artesian wells and large factories in Yemen.',
    seoKeywordsAr: ['انفرتر هواوي 100 كيلوواط', 'SUN2000-100KTL', 'انفرتر آبار', 'انفرتر مصانع اليمن'],
    seoKeywordsEn: ['Huawei 100kW inverter', 'SUN2000-100KTL', 'well inverter', 'factory inverter Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },
];
