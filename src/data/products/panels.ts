// Solar Panel Products Data
// Real products from alqatta.com
// Specs marked as placeholders where unconfirmed

import { Product } from './types';

export const panelProducts: Product[] = [
  // Trina Solar Vertex S+
  {
    id: 'trina-vertex-s-plus',
    slug: 'vertex-s-plus',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-NEG9R.28 (Vertex S+)',
    nameAr: 'لوح ترينا Vertex S+ (420-440W) زجاج مزدوج',
    nameEn: 'Trina Vertex S+ (420-440W) Dual Glass',
    
    shortDescAr: 'اللوح المزدوج الزجاجي الأحدث للأسطح السكنية - ضمان 30 عاماً',
    shortDescEn: 'Latest dual glass panel for residential rooftops - 30-year warranty',
    
    fullDescAr: `لوح Trina Vertex S+ هو أحدث ما توصلت إليه ترينا سولار في تقنية الألواح الشمسية السكنية. مصمم خصيصاً للأسطح السكنية، يجمع بين الكفاءة العالية والمتانة الاستثنائية.

**مميزات التصميم الزجاجي المزدوج (Dual Glass):**
- حماية مزدوجة من الجهتين
- مقاومة أعلى للرطوبة والملوحة
- عمر أطول (+30 سنة)
- مظهر أنيق ومتناسق

**تقنية N-Type:**
- كفاءة أعلى في الحرارة العالية
- تدهور أقل مع الوقت
- أداء أفضل في الإضاءة المنخفضة

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex S+ is Trina Solar's latest advancement in residential solar panel technology. Specifically designed for residential rooftops, it combines high efficiency with exceptional durability.

**Dual Glass Design Features:**
- Double-sided protection
- Higher resistance to humidity and salinity
- Longer lifespan (30+ years)
- Elegant and uniform appearance

**N-Type Technology:**
- Higher efficiency in high temperatures
- Less degradation over time
- Better performance in low light

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'زجاج مزدوج - حماية فائقة ومقاومة للملوحة والرطوبة', en: 'Dual glass - superior protection, salt and humidity resistant' },
      { ar: 'ضمان 30 عاماً - استثمار يدوم عقوداً', en: '30-year warranty - investment lasting decades' },
      { ar: 'تقنية N-Type - أداء أفضل في حرارة اليمن', en: 'N-Type technology - better performance in Yemen heat' },
      { ar: 'قدرة 420-440 واط - أعلى إنتاجية من نفس المساحة', en: '420-440W power - highest output from same area' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '420-440', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.5+', unit: '%' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'N-Type Mono PERC' },
      { keyAr: 'التصميم', keyEn: 'Design', value: 'زجاج مزدوج / Dual Glass' },
      { keyAr: 'أبعاد الخلية', keyEn: 'Cell Size', value: '182', unit: 'mm' },
      { keyAr: 'معامل الحرارة', keyEn: 'Temp Coefficient', value: '-0.30 ~ -0.34', unit: '%/°C' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '30 سنة / 30 Years' },
      { keyAr: 'ضمان المنتج', keyEn: 'Product Warranty', value: '15 سنة / 15 Years' },
      { keyAr: 'مقاومة الرياح', keyEn: 'Wind Load', value: '2400', unit: 'Pa' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 5,
        coastalSuitability: 5,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'لوح Vertex S+ مثالي لليمن بفضل تقنية N-Type التي تعمل بكفاءة أعلى في الحرارة، والزجاج المزدوج الذي يقاوم الملوحة والرطوبة الساحلية.',
      explanationEn: 'Vertex S+ is ideal for Yemen thanks to N-Type technology that works more efficiently in heat, and dual glass that resists coastal salinity and humidity.',
      bestRegionsAr: ['صنعاء', 'عدن', 'تعز', 'الحديدة', 'حضرموت'],
      bestRegionsEn: ['Sanaa', 'Aden', 'Taiz', 'Hudaydah', 'Hadramout'],
      climateNotesAr: 'أداء ممتاز في المناطق الساحلية الحارة والرطبة. الزجاج المزدوج يوفر حماية إضافية من البيئة القاسية.',
      climateNotesEn: 'Excellent performance in hot and humid coastal areas. Dual glass provides extra protection from harsh environment.',
    },

    useCases: [
      {
        titleAr: 'المنازل والفلل',
        titleEn: 'Homes & Villas',
        descAr: 'الخيار الأمثل للأسطح السكنية بفضل الحجم المناسب والكفاءة العالية',
        descEn: 'Optimal choice for residential roofs due to suitable size and high efficiency',
        icon: 'Home',
      },
      {
        titleAr: 'المباني التجارية الصغيرة',
        titleEn: 'Small Commercial Buildings',
        descAr: 'مثالي للمحلات والمكاتب والعيادات',
        descEn: 'Ideal for shops, offices, and clinics',
        icon: 'Building',
      },
      {
        titleAr: 'المناطق الساحلية',
        titleEn: 'Coastal Areas',
        descAr: 'مقاومة فائقة للملوحة والرطوبة',
        descEn: 'Superior resistance to salinity and humidity',
        icon: 'Waves',
      },
      {
        titleAr: 'المشاريع المستدامة',
        titleEn: 'Sustainable Projects',
        descAr: 'ضمان 30 سنة يجعله استثمار طويل الأمد',
        descEn: '30-year warranty makes it a long-term investment',
        icon: 'Leaf',
      },
    ],

    recommendedForAr: [
      'المنازل في المناطق الساحلية (عدن، الحديدة، حضرموت)',
      'من يبحث عن ضمان طويل الأمد',
      'المساحات المحدودة التي تحتاج أقصى إنتاجية',
      'المشاريع التي تتطلب جودة عالية',
    ],
    recommendedForEn: [
      'Homes in coastal areas (Aden, Hudaydah, Hadramout)',
      'Those seeking long-term warranty',
      'Limited spaces needing maximum output',
      'Projects requiring high quality',
    ],
    notRecommendedForAr: [
      'المشاريع ذات الميزانية المحدودة جداً',
      'التركيبات المؤقتة قصيرة الأمد',
    ],
    notRecommendedForEn: [
      'Projects with very limited budget',
      'Short-term temporary installations',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين الزجاج المزدوج والزجاج العادي؟',
        questionEn: 'What is the difference between dual glass and regular glass?',
        answerAr: 'اللوح العادي له زجاج من الأمام وبلاستيك من الخلف. الزجاج المزدوج محمي من الجهتين، مما يزيد العمر ومقاومة الرطوبة والملوحة.',
        answerEn: 'Regular panel has glass front and plastic back. Dual glass is protected on both sides, increasing lifespan and resistance to humidity and salinity.',
      },
      {
        questionAr: 'هل يعمل بكفاءة في حرارة اليمن؟',
        questionEn: 'Does it work efficiently in Yemen heat?',
        answerAr: 'نعم، تقنية N-Type لها معامل حرارة أفضل من P-Type التقليدي، مما يعني فقدان أقل في الكفاءة عند ارتفاع درجة الحرارة.',
        answerEn: 'Yes, N-Type technology has a better temperature coefficient than traditional P-Type, meaning less efficiency loss at high temperatures.',
      },
      {
        questionAr: 'كم لوح أحتاج لمنزلي؟',
        questionEn: 'How many panels do I need for my home?',
        answerAr: 'يعتمد على استهلاكك. كمتوسط، 8-10 ألواح (حوالي 4 كيلوواط) تغطي احتياجات منزل متوسط في اليمن.',
        answerEn: "Depends on your consumption. On average, 8-10 panels (about 4kW) cover a typical home's needs in Yemen.",
      },
      {
        questionAr: 'ما معنى ضمان 30 سنة؟',
        questionEn: 'What does 30-year warranty mean?',
        answerAr: 'ضمان الأداء 30 سنة يعني أن اللوح سيحتفظ بأكثر من 87% من كفاءته الأصلية بعد 30 سنة. ضمان المنتج 15 سنة ضد عيوب التصنيع.',
        answerEn: 'Performance warranty of 30 years means the panel will retain over 87% of original efficiency after 30 years. Product warranty is 15 years against manufacturing defects.',
      },
      {
        questionAr: 'هل اللوح مقاوم للملوحة في المناطق الساحلية؟',
        questionEn: 'Is the panel salt-resistant for coastal areas?',
        answerAr: 'نعم، الزجاج المزدوج يوفر حماية ممتازة من الملوحة والرطوبة، مما يجعله الخيار الأمثل لعدن والحديدة وحضرموت.',
        answerEn: 'Yes, dual glass provides excellent protection from salinity and humidity, making it optimal for Aden, Hudaydah, and Hadramout.',
      },
    ],

    comparisons: [
      {
        productSlug: 'vertex',
        pros: { ar: ['زجاج مزدوج', 'مقاومة أعلى للملوحة', 'ضمان أطول'], en: ['Dual glass', 'Higher salt resistance', 'Longer warranty'] },
        cons: { ar: ['سعر أعلى قليلاً', 'قدرة أقل (420-440W مقابل 580W)'], en: ['Slightly higher price', 'Lower power (420-440W vs 580W)'] },
      },
    ],

    relatedProductSlugs: ['vertex', 'us5000', 'sp5000', 'sun2000-20ktl'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'لوح ترينا Vertex S+ (420-440W) - أفضل لوح شمسي للمنازل في اليمن',
    seoTitleEn: 'Trina Vertex S+ (420-440W) - Best Residential Solar Panel in Yemen',
    seoDescriptionAr: 'لوح ترينا سولار Vertex S+ بتقنية الزجاج المزدوج وخلايا N-Type. قدرة 420-440 واط، ضمان 30 سنة. مثالي للمناطق الساحلية في اليمن.',
    seoDescriptionEn: 'Trina Solar Vertex S+ with dual glass technology and N-Type cells. 420-440W power, 30-year warranty. Ideal for coastal areas in Yemen.',
    seoKeywordsAr: ['لوح شمسي ترينا', 'Vertex S+', 'لوح زجاج مزدوج', 'ألواح شمسية اليمن'],
    seoKeywordsEn: ['Trina solar panel', 'Vertex S+', 'dual glass panel', 'solar panels Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },

  // Trina Solar Vertex
  {
    id: 'trina-vertex',
    slug: 'vertex',
    category: 'panels',
    brand: 'Trina Solar',
    model: 'TSM-DE19R (Vertex)',
    nameAr: 'لوح ترينا Vertex 580W (TSM-DE19R)',
    nameEn: 'Trina Vertex 580W (TSM-DE19R)',
    
    shortDescAr: 'سلسلة Vertex الأسطورية - الأكثر مبيعاً عالمياً بخلايا 210mm العملاقة',
    shortDescEn: 'Legendary Vertex series - World\'s best-selling with 210mm giant cells',
    
    fullDescAr: `لوح Trina Vertex هو الأكثر مبيعاً عالمياً في فئة الألواح التجارية والصناعية. بقدرة تصل إلى 580 واط وكفاءة 21.5%، يوفر أقصى إنتاجية من أقل مساحة.

**تقنية الخلايا العملاقة 210mm:**
- أكبر خلايا شمسية في السوق
- تيار أعلى = طاقة أكثر
- كفاءة استثنائية

**مثالي للمشاريع الكبيرة:**
- المصانع والمستودعات
- المزارع الشمسية
- المنشآت التجارية الكبيرة
- محطات الضخ والآبار

**الوكيل المعتمد: مؤسسة القطاع**`,
    
    fullDescEn: `Trina Vertex is the world's best-selling panel in the commercial and industrial category. With power up to 580W and 21.5% efficiency, it provides maximum output from minimum space.

**210mm Giant Cell Technology:**
- Largest solar cells in the market
- Higher current = more power
- Exceptional efficiency

**Ideal for Large Projects:**
- Factories and warehouses
- Solar farms
- Large commercial facilities
- Pumping stations and wells

**Authorized Dealer: Al-Qatta Establishment**`,

    keyTakeaways: [
      { ar: 'قدرة 580 واط - أقوى لوح سكني/تجاري متاح', en: '580W power - most powerful residential/commercial panel available' },
      { ar: 'كفاءة 21.5% - أقصى إنتاج من أقل مساحة', en: '21.5% efficiency - maximum output from minimum space' },
      { ar: 'خلايا 210mm العملاقة - أحدث تقنية في السوق', en: '210mm giant cells - latest technology in market' },
      { ar: 'الأكثر مبيعاً عالمياً - موثوقية مثبتة', en: 'World\'s best-selling - proven reliability' },
    ],

    specifications: [
      { keyAr: 'القدرة', keyEn: 'Power', value: '570-590', unit: 'W' },
      { keyAr: 'الكفاءة', keyEn: 'Efficiency', value: '21.5', unit: '%' },
      { keyAr: 'أبعاد الخلية', keyEn: 'Cell Size', value: '210', unit: 'mm' },
      { keyAr: 'نوع الخلايا', keyEn: 'Cell Type', value: 'Mono PERC' },
      { keyAr: 'عدد الخلايا', keyEn: 'Cell Count', value: '156 (2×78)' },
      { keyAr: 'الأبعاد', keyEn: 'Dimensions', value: '2384 × 1096 × 35', unit: 'mm' },
      { keyAr: 'الوزن', keyEn: 'Weight', value: '~32', unit: 'kg' },
      { keyAr: 'ضمان الأداء', keyEn: 'Performance Warranty', value: '25 سنة / 25 Years' },
      { keyAr: 'ضمان المنتج', keyEn: 'Product Warranty', value: '12 سنة / 12 Years' },
    ],

    yemenSuitability: {
      ratings: {
        heatResistance: 4,
        coastalSuitability: 3,
        powerOutageSupport: 5,
        dustResistance: 4,
      },
      explanationAr: 'لوح Vertex مثالي للمشاريع الكبيرة في اليمن. حجمه الكبير يعني ألواح أقل = تركيب أسرع = تكلفة أقل.',
      explanationEn: 'Vertex panel is ideal for large projects in Yemen. Its large size means fewer panels = faster installation = lower cost.',
      bestRegionsAr: ['صنعاء', 'مأرب', 'حضرموت', 'تعز'],
      bestRegionsEn: ['Sanaa', 'Marib', 'Hadramout', 'Taiz'],
      climateNotesAr: 'للمناطق الساحلية الرطبة، يُفضل Vertex S+ بالزجاج المزدوج. Vertex مناسب أكثر للمناطق الجافة.',
      climateNotesEn: 'For humid coastal areas, Vertex S+ with dual glass is preferred. Vertex is more suitable for dry areas.',
    },

    useCases: [
      {
        titleAr: 'المصانع والمستودعات',
        titleEn: 'Factories & Warehouses',
        descAr: 'أقصى إنتاج من أسطح المباني الصناعية',
        descEn: 'Maximum output from industrial building roofs',
        icon: 'Factory',
      },
      {
        titleAr: 'المزارع الشمسية',
        titleEn: 'Solar Farms',
        descAr: 'مشاريع الطاقة الشمسية الكبيرة',
        descEn: 'Large-scale solar energy projects',
        icon: 'Grid3x3',
      },
      {
        titleAr: 'الآبار ومحطات الضخ',
        titleEn: 'Wells & Pump Stations',
        descAr: 'تشغيل مضخات المياه بالطاقة الشمسية',
        descEn: 'Solar-powered water pumps',
        icon: 'Droplets',
      },
      {
        titleAr: 'الفنادق والمنتجعات',
        titleEn: 'Hotels & Resorts',
        descAr: 'خفض فواتير الكهرباء للمنشآت السياحية',
        descEn: 'Reduce electricity bills for tourism facilities',
        icon: 'Hotel',
      },
    ],

    recommendedForAr: [
      'المشاريع التجارية والصناعية الكبيرة',
      'المزارع ومشاريع الري',
      'المباني ذات الأسطح الواسعة',
      'من يريد أقل عدد ألواح بأعلى إنتاج',
    ],
    recommendedForEn: [
      'Large commercial and industrial projects',
      'Farms and irrigation projects',
      'Buildings with large roofs',
      'Those wanting fewest panels with highest output',
    ],
    notRecommendedForAr: [
      'الأسطح السكنية الصغيرة (اللوح كبير جداً)',
      'المناطق الساحلية شديدة الرطوبة (استخدم Vertex S+)',
      'المشاريع الصغيرة (أقل من 5 كيلوواط)',
    ],
    notRecommendedForEn: [
      'Small residential roofs (panel is too large)',
      'Very humid coastal areas (use Vertex S+)',
      'Small projects (under 5kW)',
    ],

    faqs: [
      {
        questionAr: 'ما الفرق بين Vertex و Vertex S+؟',
        questionEn: 'What is the difference between Vertex and Vertex S+?',
        answerAr: 'Vertex أكبر حجماً وأعلى قدرة (580W) مناسب للمشاريع الكبيرة. Vertex S+ أصغر (420-440W) مع زجاج مزدوج، مناسب للمنازل والمناطق الساحلية.',
        answerEn: 'Vertex is larger and higher power (580W) suitable for large projects. Vertex S+ is smaller (420-440W) with dual glass, suitable for homes and coastal areas.',
      },
      {
        questionAr: 'هل يناسب المنازل العادية؟',
        questionEn: 'Is it suitable for regular homes?',
        answerAr: 'يمكن، لكن حجمه الكبير قد لا يناسب جميع الأسطح. للمنازل، ننصح بـ Vertex S+ الأصغر والأنسب.',
        answerEn: 'It can, but its large size may not fit all roofs. For homes, we recommend the smaller and more suitable Vertex S+.',
      },
      {
        questionAr: 'كم ينتج في اليمن يومياً؟',
        questionEn: 'How much does it produce daily in Yemen?',
        answerAr: 'في المتوسط، حوالي 2.5-3 كيلوواط ساعة يومياً للوح الواحد، حسب الموقع والموسم.',
        answerEn: 'On average, about 2.5-3kWh daily per panel, depending on location and season.',
      },
      {
        questionAr: 'كم لوح أحتاج لتشغيل مضخة مياه؟',
        questionEn: 'How many panels do I need to run a water pump?',
        answerAr: 'يعتمد على قدرة المضخة. مضخة 3 حصان تحتاج حوالي 6-8 ألواح Vertex 580W.',
        answerEn: 'Depends on pump capacity. 3HP pump needs about 6-8 Vertex 580W panels.',
      },
      {
        questionAr: 'هل يتحمل الغبار والأتربة؟',
        questionEn: 'Does it withstand dust and sand?',
        answerAr: 'نعم، الزجاج المقوى مقاوم للخدش. ينصح بتنظيف الألواح كل 2-3 أشهر لأداء أمثل.',
        answerEn: 'Yes, tempered glass is scratch resistant. Recommended to clean panels every 2-3 months for optimal performance.',
      },
    ],

    comparisons: [
      {
        productSlug: 'vertex-s-plus',
        pros: { ar: ['قدرة أعلى', 'تكلفة أقل لكل واط', 'أقل عدد ألواح'], en: ['Higher power', 'Lower cost per watt', 'Fewer panels needed'] },
        cons: { ar: ['حجم كبير جداً', 'بدون زجاج مزدوج', 'ثقيل'], en: ['Very large size', 'No dual glass', 'Heavy'] },
      },
    ],

    relatedProductSlugs: ['vertex-s-plus', 'sun2000-30ktl', 'sun2000-50ktl', 'sp8000'],
    relatedServiceKeys: ['installation', 'maintenance', 'consultation'],
    relatedLocationSlugs: ['sanaa', 'aden', 'taiz', 'hudaydah'],

    seoTitleAr: 'لوح ترينا Vertex 580W - أقوى لوح شمسي للمشاريع الكبيرة في اليمن',
    seoTitleEn: 'Trina Vertex 580W - Most Powerful Solar Panel for Large Projects in Yemen',
    seoDescriptionAr: 'لوح ترينا سولار Vertex بقدرة 580 واط وخلايا 210mm العملاقة. الأكثر مبيعاً عالمياً للمصانع والمزارع الشمسية. ضمان 25 سنة.',
    seoDescriptionEn: 'Trina Solar Vertex with 580W power and 210mm giant cells. World\'s best-selling for factories and solar farms. 25-year warranty.',
    seoKeywordsAr: ['لوح ترينا 580 واط', 'Vertex', 'ألواح مصانع', 'مزارع شمسية اليمن'],
    seoKeywordsEn: ['Trina 580W panel', 'Vertex', 'factory panels', 'solar farms Yemen'],

    image: '/placeholder.svg',
    gallery: [],
    
    isAvailable: true,
    isFeatured: true,
  },
];
