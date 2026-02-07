// 电商运营健康度诊断工具 - 完整题库数据
// 8大维度 × 42道题目

const diagnosticData = {
  dimensions: [
    {
      id: "team",
      name: "团队能力",
      icon: "👥",
      description: "评估团队的能力水平、协作效率和培养体系",
      color: "#667eea",
      questions: [
        {
          id: "team_1",
          question: "团队成员是否有明确的岗位职责和工作边界？",
          options: [
            { score: 1, text: "完全没有，职责混乱，互相推诿" },
            { score: 2, text: "部分有，但不清晰，经常扯皮" },
            { score: 3, text: "基本有，但需要优化和细化" },
            { score: 4, text: "比较清晰，执行良好，偶有重叠" },
            { score: 5, text: "非常清晰，高效协作，无缝衔接" }
          ],
          weight: 1.2,
          suggestion: "建议：制定《岗位职责说明书》，明确每个岗位的工作内容、权限范围和考核标准。"
        },
        {
          id: "team_2",
          question: "新员工入职后多久能独立完成基础工作？",
          options: [
            { score: 1, text: "1个月以上，培养周期很长" },
            { score: 2, text: "2-4周，需要老员工持续带教" },
            { score: 3, text: "1-2周，有基础培训但不系统" },
            { score: 4, text: "3-7天，有标准化培训流程" },
            { score: 5, text: "1-3天，有完善的SOP和快速上手体系" }
          ],
          weight: 1.5,
          suggestion: "建议：搭建6天新人培训体系，包含理论培训、实操演练和考核认证，让新人快速上手。"
        },
        {
          id: "team_3",
          question: "团队是否有明确的晋升通道和成长路径？",
          options: [
            { score: 1, text: "没有，员工看不到成长空间" },
            { score: 2, text: "有模糊概念，但没有具体标准" },
            { score: 3, text: "有基础框架，但执行不到位" },
            { score: 4, text: "有清晰路径，定期评估晋升" },
            { score: 5, text: "有完善体系，员工成长可视化" }
          ],
          weight: 1.0,
          suggestion: "建议：建立三级运营体系（执行层→优化层→决策层），让员工看到清晰的成长路径。"
        },
        {
          id: "team_4",
          question: "团队的离职率如何？",
          options: [
            { score: 1, text: "很高（>40%），人员流动频繁" },
            { score: 2, text: "较高（30-40%），留人困难" },
            { score: 3, text: "一般（20-30%），有一定流失" },
            { score: 4, text: "较低（10-20%），团队稳定" },
            { score: 5, text: "很低（<10%），核心团队稳定" }
          ],
          weight: 1.3,
          suggestion: "建议：建立绩效考核体系、培训体系和晋升通道，提升团队归属感和成长空间。"
        },
        {
          id: "team_5",
          question: "团队跨部门协作效率如何？",
          options: [
            { score: 1, text: "很差，各自为政，经常扯皮" },
            { score: 2, text: "较差，沟通不畅，效率低下" },
            { score: 3, text: "一般，有协作但不顺畅" },
            { score: 4, text: "较好，协作流程清晰" },
            { score: 5, text: "很好，高效协同，无缝配合" }
          ],
          weight: 1.0,
          suggestion: "建议：建立跨部门协作规范，明确沟通流程、响应时效和责任边界。"
        }
      ]
    },
    
    {
      id: "process",
      name: "运营流程",
      icon: "⚙️",
      description: "评估运营工作的标准化程度和流程规范性",
      color: "#f59e0b",
      questions: [
        {
          id: "process_1",
          question: "日常运营工作是否有标准化的SOP文档？",
          options: [
            { score: 1, text: "完全没有，全靠口口相传" },
            { score: 2, text: "有零散文档，但不成体系" },
            { score: 3, text: "有基础SOP，但不够详细" },
            { score: 4, text: "有较完善SOP，定期更新" },
            { score: 5, text: "有完整SOP体系，精确到分钟级" }
          ],
          weight: 1.5,
          suggestion: "建议：搭建三级运营SOP体系，将每日工作流程精确到分钟级，让新人7天上手。"
        },
        {
          id: "process_2",
          question: "每日运营工作是否有固定的时间安排？",
          options: [
            { score: 1, text: "没有，想到什么做什么" },
            { score: 2, text: "有大致安排，但经常变动" },
            { score: 3, text: "有基础安排，但不够细化" },
            { score: 4, text: "有详细安排，按时执行" },
            { score: 5, text: "有精确时间表，高效执行" }
          ],
          weight: 1.2,
          suggestion: "建议：制定《每日工作时间表》，如9:00-9:30数据巡检、9:30-10:00店铺巡检等。"
        },
        {
          id: "process_3",
          question: "运营工作的交接是否顺畅？",
          options: [
            { score: 1, text: "很困难，老员工离职后新人接不上" },
            { score: 2, text: "较困难，需要长时间交接" },
            { score: 3, text: "一般，有基础交接但不完整" },
            { score: 4, text: "较顺畅，有交接文档和培训" },
            { score: 5, text: "很顺畅，有完整SOP可直接上手" }
          ],
          weight: 1.3,
          suggestion: "建议：建立工作交接清单，包含账号权限、工作文档、数据报表、注意事项等。"
        },
        {
          id: "process_4",
          question: "运营工作的质量检查机制如何？",
          options: [
            { score: 1, text: "没有，出了问题才发现" },
            { score: 2, text: "偶尔抽查，不够系统" },
            { score: 3, text: "有基础检查，但不全面" },
            { score: 4, text: "有定期检查，覆盖主要环节" },
            { score: 5, text: "有完善的质检体系，实时监控" }
          ],
          weight: 1.0,
          suggestion: "建议：建立运营质检清单，每日/每周检查关键指标，确保工作质量。"
        },
        {
          id: "process_5",
          question: "运营流程的优化频率如何？",
          options: [
            { score: 1, text: "从不优化，一直沿用老方法" },
            { score: 2, text: "很少优化，1年以上才调整" },
            { score: 3, text: "偶尔优化，半年调整一次" },
            { score: 4, text: "定期优化，每季度复盘" },
            { score: 5, text: "持续优化，每月迭代改进" }
          ],
          weight: 1.0,
          suggestion: "建议：建立每月复盘机制，根据数据反馈和团队建议持续优化流程。"
        }
      ]
    },
    
    {
      id: "data",
      name: "数据分析",
      icon: "📊",
      description: "评估数据收集、分析和应用的能力",
      color: "#10b981",
      questions: [
        {
          id: "data_1",
          question: "是否每天记录和分析店铺核心数据？",
          options: [
            { score: 1, text: "不记录，数据混乱" },
            { score: 2, text: "偶尔看看，没有规律" },
            { score: 3, text: "每天看，但不系统记录" },
            { score: 4, text: "每天记录，有基础分析" },
            { score: 5, text: "每天记录，深度分析，数据驱动决策" }
          ],
          weight: 1.5,
          suggestion: "建议：建立《店铺取数分析表》，每天9:00-9:30完成数据巡检，记录销售额、访客数、转化率等核心指标。"
        },
        {
          id: "data_2",
          question: "是否有标准化的数据分析工具和模板？",
          options: [
            { score: 1, text: "没有，数据散落各处" },
            { score: 2, text: "有Excel表格，但不规范" },
            { score: 3, text: "有基础模板，但不够完善" },
            { score: 4, text: "有标准模板，定期使用" },
            { score: 5, text: "有完整工具包，自动化分析" }
          ],
          weight: 1.3,
          suggestion: "建议：搭建5大数据工具表：店铺取数表、推广采集表、竞品监控表、单品分析表、工作日程表。"
        },
        {
          id: "data_3",
          question: "数据异常时能否快速定位问题原因？",
          options: [
            { score: 1, text: "不能，只能看到结果" },
            { score: 2, text: "很难，需要花很长时间排查" },
            { score: 3, text: "能定位，但不够快速" },
            { score: 4, text: "能快速定位主要问题" },
            { score: 5, text: "能实时监控，秒级定位问题" }
          ],
          weight: 1.2,
          suggestion: "建议：建立数据异常预警机制，设置关键指标阈值（如销售额下降>20%自动预警）。"
        },
        {
          id: "data_4",
          question: "是否定期进行竞品数据监控和分析？",
          options: [
            { score: 1, text: "不监控，不了解竞品" },
            { score: 2, text: "偶尔看看，没有记录" },
            { score: 3, text: "有监控，但不系统" },
            { score: 4, text: "定期监控，有数据记录" },
            { score: 5, text: "实时监控，深度分析，指导决策" }
          ],
          weight: 1.0,
          suggestion: "建议：建立《竞品监控表》，每天记录3-5家竞品的价格、活动、销量、评价等数据。"
        },
        {
          id: "data_5",
          question: "数据分析结果是否能有效指导运营决策？",
          options: [
            { score: 1, text: "不能，数据和决策脱节" },
            { score: 2, text: "很少，主要靠经验决策" },
            { score: 3, text: "部分能，但不够系统" },
            { score: 4, text: "大部分能，数据支撑决策" },
            { score: 5, text: "完全能，数据驱动所有决策" }
          ],
          weight: 1.5,
          suggestion: "建议：建立数据驱动决策机制，每周数据复盘会，根据数据制定下周运营策略。"
        },
        {
          id: "data_6",
          question: "历史数据的留存和查询是否方便？",
          options: [
            { score: 1, text: "没有留存，数据丢失" },
            { score: 2, text: "有留存，但很难查找" },
            { score: 3, text: "有留存，查询不太方便" },
            { score: 4, text: "有留存，查询较方便" },
            { score: 5, text: "有完整数据库，秒级查询" }
          ],
          weight: 1.0,
          suggestion: "建议：建立数据归档机制，按日/周/月分类存储，使用云盘或数据库管理。"
        }
      ]
    },
    
    {
      id: "promotion",
      name: "推广投放",
      icon: "🎯",
      description: "评估付费推广的效率和ROI管理能力",
      color: "#ef4444",
      questions: [
        {
          id: "promotion_1",
          question: "推广账户的ROI（投资回报率）如何？",
          options: [
            { score: 1, text: "很差（ROI<2），亏损严重" },
            { score: 2, text: "较差（ROI 2-3），勉强保本" },
            { score: 3, text: "一般（ROI 3-4），有盈利" },
            { score: 4, text: "较好（ROI 4-5），盈利良好" },
            { score: 5, text: "很好（ROI>5），高效盈利" }
          ],
          weight: 1.5,
          suggestion: "建议：建立推广ROI监控表，每日记录花费和成交，实时计算ROI，目标ROI≥4。"
        },
        {
          id: "promotion_2",
          question: "是否每天监控和优化推广账户？",
          options: [
            { score: 1, text: "不监控，放任不管" },
            { score: 2, text: "偶尔看看，很少调整" },
            { score: 3, text: "每天看，但优化不系统" },
            { score: 4, text: "每天监控，定期优化" },
            { score: 5, text: "实时监控，每天多次优化" }
          ],
          weight: 1.3,
          suggestion: "建议：建立推广优化SOP，每天早中晚三次检查账户，调整出价、关键词和创意。"
        },
        {
          id: "promotion_3",
          question: "推广创意（车图）的点击率如何？",
          options: [
            { score: 1, text: "很低（<3%），创意差" },
            { score: 2, text: "较低（3-5%），需要优化" },
            { score: 3, text: "一般（5-7%），基本合格" },
            { score: 4, text: "较好（7-10%），创意优秀" },
            { score: 5, text: "很好（>10%），创意爆款" }
          ],
          weight: 1.2,
          suggestion: "建议：定期测试车图（200个点击量为一组），优质车图替换主图，持续优化点击率。"
        },
        {
          id: "promotion_4",
          question: "是否使用多种推广工具组合投放？",
          options: [
            { score: 1, text: "只用一种，单一渠道" },
            { score: 2, text: "用2种，但不系统" },
            { score: 3, text: "用3种，有基础组合" },
            { score: 4, text: "用4-5种，组合投放" },
            { score: 5, text: "全渠道投放，最优组合" }
          ],
          weight: 1.0,
          suggestion: "建议：组合使用直通车、万相台、品销宝、站外UD等工具，测试最优性价比组合。"
        },
        {
          id: "promotion_5",
          question: "推广预算的分配是否合理？",
          options: [
            { score: 1, text: "不合理，盲目投放" },
            { score: 2, text: "较不合理，经常超支或浪费" },
            { score: 3, text: "基本合理，但需要优化" },
            { score: 4, text: "比较合理，控制良好" },
            { score: 5, text: "非常合理，精准分配" }
          ],
          weight: 1.0,
          suggestion: "建议：根据产品生命周期和活动节奏，制定月度推广预算计划，按周调整分配。"
        }
      ]
    },
    
    {
      id: "service",
      name: "客服转化",
      icon: "💬",
      description: "评估客服团队的服务质量和销售转化能力",
      color: "#8b5cf6",
      questions: [
        {
          id: "service_1",
          question: "客服的询单转化率如何？",
          options: [
            { score: 1, text: "很低（<30%），转化差" },
            { score: 2, text: "较低（30-40%），需要提升" },
            { score: 3, text: "一般（40-50%），基本合格" },
            { score: 4, text: "较好（50-60%），转化良好" },
            { score: 5, text: "很好（>60%），转化优秀" }
          ],
          weight: 1.5,
          suggestion: "建议：建立客服绩效考核体系，重点考核询单转化率，目标≥50%。"
        },
        {
          id: "service_2",
          question: "客服是否有标准化的话术和流程？",
          options: [
            { score: 1, text: "没有，全靠个人发挥" },
            { score: 2, text: "有零散话术，不成体系" },
            { score: 3, text: "有基础话术，但不够完善" },
            { score: 4, text: "有标准话术库，定期更新" },
            { score: 5, text: "有完整话术体系，AI智能推荐" }
          ],
          weight: 1.3,
          suggestion: "建议：建立《客服话术手册V3.0》，包含100+条标准话术，覆盖售前/售中/售后全流程。"
        },
        {
          id: "service_3",
          question: "客服是否主动收集客户信息和需求？",
          options: [
            { score: 1, text: "不收集，只回答问题" },
            { score: 2, text: "偶尔收集，不系统" },
            { score: 3, text: "有收集，但不够深入" },
            { score: 4, text: "主动收集，建立客户档案" },
            { score: 5, text: "深度挖掘，精准营销" }
          ],
          weight: 1.2,
          suggestion: "建议：建立《客户信息收集清单》，包含基本信息、购买需求、使用场景、价格敏感度等。"
        },
        {
          id: "service_4",
          question: "客服的响应速度如何？",
          options: [
            { score: 1, text: "很慢（>5分钟），客户流失" },
            { score: 2, text: "较慢（3-5分钟），体验差" },
            { score: 3, text: "一般（1-3分钟），基本合格" },
            { score: 4, text: "较快（30秒-1分钟），体验好" },
            { score: 5, text: "很快（<30秒），体验优秀" }
          ],
          weight: 1.0,
          suggestion: "建议：设置响应速度考核标准，首次响应时间≤30秒，平均响应时间≤1分钟。"
        },
        {
          id: "service_5",
          question: "客服是否有明确的绩效考核标准？",
          options: [
            { score: 1, text: "没有，干好干坏一个样" },
            { score: 2, text: "有模糊标准，不够量化" },
            { score: 3, text: "有基础考核，但不全面" },
            { score: 4, text: "有完善考核，定期评估" },
            { score: 5, text: "有科学考核体系，激励到位" }
          ],
          weight: 1.5,
          suggestion: "建议：建立客服绩效考核体系，考核响应速度、建联率、转化率、客单价、好评率等指标。"
        },
        {
          id: "service_6",
          question: "客服团队的培训频率如何？",
          options: [
            { score: 1, text: "不培训，全靠自学" },
            { score: 2, text: "很少培训，1年1-2次" },
            { score: 3, text: "偶尔培训，半年1次" },
            { score: 4, text: "定期培训，每季度1次" },
            { score: 5, text: "持续培训，每月1次" }
          ],
          weight: 1.0,
          suggestion: "建议：建立客服培训体系，每月1次产品培训、话术培训、案例分享，持续提升能力。"
        }
      ]
    },
    
    {
      id: "content",
      name: "内容营销",
      icon: "📝",
      description: "评估商品内容和营销素材的质量",
      color: "#06b6d4",
      questions: [
        {
          id: "content_1",
          question: "商品主图的点击率如何？",
          options: [
            { score: 1, text: "很低（<3%），主图差" },
            { score: 2, text: "较低（3-5%），需要优化" },
            { score: 3, text: "一般（5-7%），基本合格" },
            { score: 4, text: "较好（7-10%），主图优秀" },
            { score: 5, text: "很好（>10%），主图爆款" }
          ],
          weight: 1.3,
          suggestion: "建议：定期测试主图（A/B测试），提炼核心卖点，优化视觉设计，目标点击率≥7%。"
        },
        {
          id: "content_2",
          question: "商品详情页的转化率如何？",
          options: [
            { score: 1, text: "很低（<2%），详情页差" },
            { score: 2, text: "较低（2-3%），需要优化" },
            { score: 3, text: "一般（3-5%），基本合格" },
            { score: 4, text: "较好（5-8%），详情页优秀" },
            { score: 5, text: "很好（>8%），详情页爆款" }
          ],
          weight: 1.5,
          suggestion: "建议：优化详情页结构，增加天猫榜单、品牌背书、买家秀、使用场景等内容。"
        },
        {
          id: "content_3",
          question: "是否定期优化商品标题和关键词？",
          options: [
            { score: 1, text: "不优化，一直不变" },
            { score: 2, text: "很少优化，1年1-2次" },
            { score: 3, text: "偶尔优化，半年1次" },
            { score: 4, text: "定期优化，每季度1次" },
            { score: 5, text: "持续优化，每月1次" }
          ],
          weight: 1.0,
          suggestion: "建议：每月根据搜索排行、搜索分析，优化标题关键词，删除无转化词根，添加高转化词。"
        },
        {
          id: "content_4",
          question: "商品评价和问大家的管理如何？",
          options: [
            { score: 1, text: "不管理，任其发展" },
            { score: 2, text: "偶尔看看，很少处理" },
            { score: 3, text: "有基础管理，但不系统" },
            { score: 4, text: "定期管理，及时处理差评" },
            { score: 5, text: "精细化管理，优质评价置顶" }
          ],
          weight: 1.2,
          suggestion: "建议：每周检查评价和问大家，及时回复差评，将优质评价置顶，定期做买家秀。"
        },
        {
          id: "content_5",
          question: "是否定期发布内容营销（逛逛/微淘/短视频）？",
          options: [
            { score: 1, text: "不发布，没有内容" },
            { score: 2, text: "很少发布，1月1-2次" },
            { score: 3, text: "偶尔发布，每周1次" },
            { score: 4, text: "定期发布，每周2-3次" },
            { score: 5, text: "持续发布，每天1-2次" }
          ],
          weight: 1.0,
          suggestion: "建议：建立内容营销计划，每周发布2-3条逛逛/短视频，增加免费流量。"
        }
      ]
    },
    
    {
      id: "tools",
      name: "工具应用",
      icon: "🛠️",
      description: "评估运营工具和AI工具的使用效率",
      color: "#ec4899",
      questions: [
        {
          id: "tools_1",
          question: "是否使用ERP系统管理订单和库存？",
          options: [
            { score: 1, text: "不使用，手工管理" },
            { score: 2, text: "使用Excel，效率低" },
            { score: 3, text: "使用基础ERP，功能有限" },
            { score: 4, text: "使用专业ERP，功能完善" },
            { score: 5, text: "使用智能ERP，自动化管理" }
          ],
          weight: 1.2,
          suggestion: "建议：使用聚水潭、旺店通等专业ERP系统，实现订单、库存、财务一体化管理。"
        },
        {
          id: "tools_2",
          question: "是否使用AI工具提升运营效率？",
          options: [
            { score: 1, text: "不使用，全靠人工" },
            { score: 2, text: "听说过，但没用过" },
            { score: 3, text: "偶尔使用，不系统" },
            { score: 4, text: "经常使用，提升效率" },
            { score: 5, text: "深度应用，全面赋能" }
          ],
          weight: 1.3,
          suggestion: "建议：使用AI工具生成文案、制作图片、分析数据，提升运营效率50%以上。"
        },
        {
          id: "tools_3",
          question: "是否使用数据分析工具（生意参谋/数据银行）？",
          options: [
            { score: 1, text: "不使用，不看数据" },
            { score: 2, text: "偶尔看看，不深入" },
            { score: 3, text: "经常使用，基础分析" },
            { score: 4, text: "深度使用，数据驱动" },
            { score: 5, text: "精通使用，挖掘洞察" }
          ],
          weight: 1.5,
          suggestion: "建议：每天使用生意参谋分析店铺数据，每周使用数据银行分析人群画像。"
        },
        {
          id: "tools_4",
          question: "是否使用客服工具（智能客服/CRM）？",
          options: [
            { score: 1, text: "不使用，纯人工客服" },
            { score: 2, text: "使用基础工具，功能有限" },
            { score: 3, text: "使用专业工具，提升效率" },
            { score: 4, text: "使用智能客服，自动回复" },
            { score: 5, text: "使用AI客服，智能营销" }
          ],
          weight: 1.0,
          suggestion: "建议：使用赤兔、晓多等智能客服工具，设置自动回复、智能推荐，提升转化率。"
        },
        {
          id: "tools_5",
          question: "是否使用设计工具提升视觉效率？",
          options: [
            { score: 1, text: "不使用，全靠美工" },
            { score: 2, text: "使用基础工具（PS/AI）" },
            { score: 3, text: "使用在线工具（创客贴/鹿班）" },
            { score: 4, text: "使用AI工具（Midjourney）" },
            { score: 5, text: "深度应用AI，批量生成" }
          ],
          weight: 1.0,
          suggestion: "建议：使用鹿班、Midjourney等AI设计工具，快速生成主图、海报、详情页。"
        }
      ]
    },
    
    {
      id: "strategy",
      name: "战略规划",
      icon: "🎯",
      description: "评估运营战略和长期规划能力",
      color: "#f97316",
      questions: [
        {
          id: "strategy_1",
          question: "是否有明确的年度/季度运营目标？",
          options: [
            { score: 1, text: "没有，走一步看一步" },
            { score: 2, text: "有模糊目标，不够具体" },
            { score: 3, text: "有基础目标，但不够细化" },
            { score: 4, text: "有明确目标，定期复盘" },
            { score: 5, text: "有完整规划，目标可量化" }
          ],
          weight: 1.5,
          suggestion: "建议：制定年度运营规划，分解为季度目标、月度目标，每月复盘调整。"
        },
        {
          id: "strategy_2",
          question: "是否有清晰的产品规划和上新节奏？",
          options: [
            { score: 1, text: "没有，随机上新" },
            { score: 2, text: "有想法，但不系统" },
            { score: 3, text: "有基础规划，但不够细化" },
            { score: 4, text: "有明确规划，按节奏上新" },
            { score: 5, text: "有完整产品矩阵，科学上新" }
          ],
          weight: 1.3,
          suggestion: "建议：制定产品规划，明确主推款、利润款、引流款，按季节和活动节奏上新。"
        },
        {
          id: "strategy_3",
          question: "是否有明确的品牌定位和差异化策略？",
          options: [
            { score: 1, text: "没有，跟风模仿" },
            { score: 2, text: "有想法，但不清晰" },
            { score: 3, text: "有基础定位，但不够鲜明" },
            { score: 4, text: "有明确定位，差异化明显" },
            { score: 5, text: "有独特定位，品牌力强" }
          ],
          weight: 1.2,
          suggestion: "建议：明确品牌定位（目标人群、核心卖点、价格带），打造差异化竞争优势。"
        },
        {
          id: "strategy_4",
          question: "是否定期进行市场分析和竞品研究？",
          options: [
            { score: 1, text: "不做，闭门造车" },
            { score: 2, text: "很少做，1年1-2次" },
            { score: 3, text: "偶尔做，半年1次" },
            { score: 4, text: "定期做，每季度1次" },
            { score: 5, text: "持续做，每月1次" }
          ],
          weight: 1.0,
          suggestion: "建议：每季度进行市场分析，研究行业趋势、竞品动态、消费者需求变化。"
        },
        {
          id: "strategy_5",
          question: "是否有应对大促（618/双11）的完整策略？",
          options: [
            { score: 1, text: "没有，临时应对" },
            { score: 2, text: "有想法，但不系统" },
            { score: 3, text: "有基础策略，但不够完善" },
            { score: 4, text: "有完整策略，提前准备" },
            { score: 5, text: "有精细化策略，全面布局" }
          ],
          weight: 1.5,
          suggestion: "建议：大促前2个月制定策略，包含选品、定价、库存、推广、客服等全流程规划。"
        }
      ]
    }
  ],
  
  // 改进建议库（根据得分自动匹配）
  suggestions: {
    team: {
      high: [
        {
          title: "搭建三级运营SOP体系",
          description: "建立执行层（0-3月）、优化层（3-6月）、决策层（6月+）的分级培养体系",
          expectedEffect: "新人上手时间缩短70%，培养周期缩短76%",
          timeline: "1个月",
          priority: 1
        },
        {
          title: "建立6天新人培训体系",
          description: "设计系统化培训课程，包含理论培训、实操演练、考核认证",
          expectedEffect: "培训合格率提升至85%+，培训成本降低60%",
          timeline: "2周",
          priority: 2
        }
      ],
      medium: [
        {
          title: "优化岗位职责说明书",
          description: "明确每个岗位的工作内容、权限范围、考核标准",
          expectedEffect: "团队协作效率提升30%",
          timeline: "1周",
          priority: 3
        }
      ]
    },
    // ... 其他维度的建议库
  },
  
  // 行业对标数据
  benchmark: {
    totalScore: {
      average: 68,
      excellent: 85,
      distribution: [
        { range: "0-45", percentage: 15, label: "很差" },
        { range: "45-60", percentage: 20, label: "较差" },
        { range: "60-75", percentage: 35, label: "一般" },
        { range: "75-85", percentage: 20, label: "良好" },
        { range: "85-100", percentage: 10, label: "优秀" }
      ]
    },
    dimensionAverages: {
      "团队能力": 3.8,
      "运营流程": 3.6,
      "数据分析": 3.4,
      "推广投放": 3.7,
      "客服转化": 4.0,
      "内容营销": 3.9,
      "工具应用": 3.5,
      "战略规划": 3.3
    }
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = diagnosticData;
}