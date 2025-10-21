// Bilingual Translation System
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            team: "Team",
            expertise: "Expertise",
            services: "Services",
            contact: "Contact",
            menu: "Menu"
        },

        // Contact Form (common across all pages)
        contactForm: {
            contactInfo: "Contact Information",
            emailLabel: "Email",
            headquartersLabel: "Headquarters",
            headquartersValue: "Tokyo, Japan",
            globalOffices: "Global Offices",
            officesDescription: "With offices in Tokyo, Manila, and Djibouti, we're always within reach to serve your needs across multiple time zones.",
            nameLabel: "Name",
            nameRequired: "(required)",
            emailFieldLabel: "Email",
            emailRequired: "(required)",
            messageLabel: "Message",
            messageRequired: "(required)",
            submit: "SEND MESSAGE"
        },

        // Hero Section
        hero: {
            title: "Empowering Global Connections, Enhancing Business Growth",
            description: "From innovative IT solutions to personalized services, we bridge Japan and the world, supporting SMEs and individuals in achieving their goals.",
            cta: "Get in Touch"
        },

        // Team Section
        team: {
            title: "Our Leadership Team",
            roles: {
                ceo: "Co-founder & CEO",
                consultant: "Chief Consultant",
                language: "Language Expert"
            }
        },

        // Expertise Section
        expertise: {
            title: "Our unique approach combines deep local insights with global expertise.",
            description: "We leverage our extensive network and cultural understanding to deliver solutions that resonate in local markets while maintaining global standards. Our team's diverse background enables us to navigate complex international business landscapes with confidence and precision.",
            cta: "Get in Touch"
        },

        // Service Overview
        serviceOverview: {
            title: "Service Overview",
            subtitle: "Bridging Japan with Emerging Markets",
            description: "Our strength lies in bridging Japan with Asia and Africa, empowering clients with trusted partnerships and globally recognized quality."
        },

        // Solutions Section
        solutions: {
            title: "Solutions We Provide",
            africa: {
                title: "Africa Division",
                description: "Trusted concierge and business support for travelers and companies exploring Africa."
            },
            philippines: {
                title: "Philippines Division",
                description: "Shopping agent services and cross-border business support between Japan and the Philippines."
            },
            language: {
                title: "Language Services",
                description: "English & French coaching, professional translation and interpretation, and intensive pre-departure training for assignments or study abroad."
            },
            it: {
                title: "IT Services",
                description: "Matching clients with trusted development partners and managing projects for successful delivery."
            }
        },

        // Contact Section
        contact: {
            title: "Get in Touch",
            subtitle: "Ready to take your business global? Let's discuss how we can help you achieve your international expansion goals.",
            info: {
                title: "Contact Information",
                email: "Email",
                headquarters: "Headquarters",
                location: "Tokyo, Japan",
                globalOffices: "Global Offices",
                globalDescription: "With offices in Tokyo, Manila, and Djibouti, we're always within reach to serve your needs across multiple time zones."
            },
            form: {
                name: "Name",
                email: "Email",
                company: "Company",
                message: "Message",
                placeholder: {
                    name: "John Doe",
                    email: "john@example.com",
                    company: "Your Company",
                    message: "Tell us about your project and how we can help you..."
                },
                submit: "Send Message",
                sending: "Sending...",
                success: "Thank you for your message! We'll get back to you soon.",
                error: "Please fill in all required fields."
            }
        },

        // Footer
        footer: {
            tagline: "Connecting businesses worldwide through innovation and excellence.",
            services: "Services",
            company: "Company",
            connect: "Connect",
            links: {
                about: "About Us",
                careers: "Careers",
                partners: "Partners",
                news: "News"
            },
            copyright: "© 2025 Lim-Kawano & Company Inc. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },

        // Africa Division Page
        africaDivision: {
            title: "Africa Division - Lim-Kawano & Company Inc.",
            hero: {
                title: "Your trusted gateway to Africa.",
                description: "With over 10 years of experience and a network spanning all 54 countries, we coordinate everything — from business market entry to unforgettable travel adventures.",
                cta: "Get in Touch"
            },
            services: {
                title: "Our Services",
                marketEntry: {
                    badge: "Africa Market Entry Support",
                    title: "Expand with Confidence",
                    description: "We guide businesses entering Africa with deep local knowledge, trusted partnerships, and hands-on coordination across 54 countries.",
                    benefit1: "Strategic entry support tailored to local markets",
                    benefit2: "Reliable on-the-ground coordination and partner matching",
                    benefit3: "Growth opportunities across Africa's emerging economies",
                    cta: "GET IN TOUCH"
                },
                concierge: {
                    badge: "Africa Concierge Services",
                    title: "Travel & Business, Seamlessly Coordinated",
                    description: "From tailor-made leisure trips to business travel, we provide safe, authentic, and seamless African experiences.",
                    benefit1: "Customized itineraries for unforgettable journeys",
                    benefit2: "Professional support for business trips and corporate delegations",
                    benefit3: "Local expertise ensuring safety and comfort",
                    cta: "GET IN TOUCH",
                    visitSite: "VISIT SERVICE SITE"
                },
                fitness: {
                    badge: "Fitness for Africa",
                    title: "Building Healthy Habits, Improving Quality of Life",
                    description: "We provide fitness programs designed for African communities, helping people build regular exercise habits, improve their health, and enhance their quality of life.",
                    benefit1: "Accessible fitness programs tailored to local lifestyles",
                    benefit2: "Guidance to establish sustainable exercise habits",
                    benefit3: "Promoting better health and higher QOL through regular activity",
                    cta: "GET IN TOUCH"
                },
                social: {
                    badge: "Social Impact & Innovation",
                    title: "Solving Challenges with Japanese Technology",
                    description: "We collaborate with local communities to address Africa's pressing issues, applying Japanese innovation to create sustainable solutions.",
                    benefit1: "Projects leveraging Japanese technology for social good",
                    benefit2: "Collaborative initiatives with local stakeholders",
                    benefit3: "Sustainable models for long-term community impact",
                    cta: "GET IN TOUCH"
                }
            },
            stories: {
                title: "Success Stories",
                story1: {
                    quote: "In the Democratic Republic of Congo, Lim-Kawano's Africa Division is not only advising but actively driving our smart city project. Their coordination with Japanese experts and local stakeholders is helping us turn vision into implementation.",
                    name: "Local Government Partner",
                    location: "Democratic Republic of Congo"
                },
                story2: {
                    quote: "Thanks to Lim-Kawano, we were able to export baobab powder from Senegal to Japan. They didn't just connect us—they managed negotiations, compliance, and logistics, ensuring our product reached the Japanese market successfully.",
                    name: "Agribusiness Entrepreneur",
                    location: "Senegal"
                },
                story3: {
                    quote: "Lim-Kawano supported our IT company in Nigeria not only by introducing Japanese clients, but also by managing projects and ensuring delivery. Their involvement helped us establish long-term partnerships and expand our business.",
                    name: "IT Entrepreneur",
                    location: "Nigeria"
                }
            },
            contact: {
                title: "Get in Touch",
                subtitle: "Ready to explore Africa? Let's discuss how we can support your business or travel goals."
            }
        },

        // Language Services Division Page
        languageDivision: {
            title: "Language Services Division - Lim-Kawano & Company Inc.",
            hero: {
                title: "Break language barriers and unlock new opportunities in business, education, and self-expression.",
                description: "From professional coaching in English and French to translation, interpretation, and pre-departure training, we provide world-class support for global success.",
                cta: "Get in Touch"
            },
            services: {
                title: "Our Services",
                coaching: {
                    badge: "Language Coaching",
                    title: "Professional English & French Coaching",
                    description: "Personalized language coaching tailored to business, study, and everyday communication needs. Build confidence and fluency with experienced coaches.",
                    benefit1: "One-on-one or group coaching sessions",
                    benefit2: "Focused programs for business or academic use",
                    benefit3: "Native-level guidance for practical communication",
                    cta: "GET IN TOUCH"
                },
                translation: {
                    badge: "Translation & Interpretation",
                    title: "Multilingual Communication Support",
                    description: "Professional translation and interpretation services for meetings, documents, and events, bridging Japanese, English, and French.",
                    benefit1: "Accurate and context-aware document translation",
                    benefit2: "Consecutive interpretation for business and academic settings",
                    benefit3: "Support for conferences, training, and cultural exchange",
                    cta: "GET IN TOUCH"
                },
                training: {
                    badge: "Pre-departure Training",
                    title: "Intensive Language Programs for Global Assignments",
                    description: "Specialized short-term training for study abroad, overseas assignments, and relocations. Gain essential communication skills before departure.",
                    benefit1: "Short-term intensive language programs",
                    benefit2: "Customized curriculum for study or work abroad",
                    benefit3: "Practical training for real-life scenarios",
                    cta: "GET IN TOUCH"
                }
            },
            stories: {
                title: "Success Stories",
                story1: {
                    quote: "Through Lim-Kawano's language coaching, I gained confidence speaking English in international meetings. The tailored approach helped me focus on exactly what I needed for my role.",
                    name: "Business Professional",
                    location: "Japan"
                },
                story2: {
                    quote: "The translation service was impeccable. Lim-Kawano bridged our communication with French partners, ensuring every detail was accurately conveyed during negotiations.",
                    name: "Executive",
                    location: "Japan"
                },
                story3: {
                    quote: "Before my overseas assignment, I took Lim-Kawano's intensive training program. It prepared me not just with language skills, but with cultural understanding that made my transition smooth.",
                    name: "Expatriate Manager",
                    location: "Japan"
                }
            },
            contact: {
                title: "Get in Touch",
                subtitle: "Ready to break language barriers? Let's discuss how we can help you achieve your global communication goals."
            }
        },

        // Philippines Division Page
        philippinesDivision: {
            title: "Philippines Division - Lim-Kawano & Company Inc.",
            hero: {
                title: "Connect with the Philippines' vibrant market",
                description: "From seamless product sourcing to market entry and property investment, we open doors to new opportunities in the Philippines.",
                cta: "Get in Touch"
            },
            services: {
                title: "Our Services",
                shopping: {
                    badge: "Shopping Agent",
                    title: "Product Sourcing from Japan",
                    description: "We help clients in the Philippines source high-quality products from Japan, offering reliable supplier coordination and smooth logistics.",
                    benefit1: "Tailored product sourcing from Japan",
                    benefit2: "Quality checks and trusted suppliers",
                    benefit3: "End-to-end logistics support",
                    cta: "GET IN TOUCH"
                },
                business: {
                    badge: "Business Expansion",
                    title: "Market Entry Support in Both Directions",
                    description: "We assist Japanese companies entering the Philippines and Filipino companies expanding into Japan, offering end-to-end coordination and advisory.",
                    benefit1: "Regulatory and compliance guidance",
                    benefit2: "Partner and client introductions",
                    benefit3: "Practical support for market entry",
                    cta: "GET IN TOUCH"
                },
                realEstate: {
                    badge: "Real Estate Concierge",
                    title: "Renovation and Lifestyle Support",
                    description: "We provide concierge services for real estate renovation in the Philippines, helping clients transform properties into better living and business spaces.",
                    benefit1: "Advisory on renovation planning and budgeting",
                    benefit2: "Coordination with trusted local contractors",
                    benefit3: "Support for design and lifestyle upgrades",
                    cta: "GET IN TOUCH"
                }
            },
            stories: {
                title: "Success Stories",
                story1: {
                    quote: "Through Lim-Kawano's shopping agent service, we were able to source high-quality products directly from Japan. Their coordination with suppliers and logistics partners made the process smooth and trustworthy.",
                    name: "Retailer",
                    location: "Philippines"
                },
                story2: {
                    quote: "Lim-Kawano helped us export Philippine-made products to Japan. They managed quality checks, communication, and shipping, allowing us to reach Japanese consumers with confidence.",
                    name: "Agribusiness Entrepreneur",
                    location: "Philippines"
                },
                story3: {
                    quote: "With Lim-Kawano's support, our company successfully entered the Japanese market. Their cultural understanding and introductions to trusted partners opened doors that would have been difficult on our own.",
                    name: "Entrepreneur",
                    location: "Philippines"
                }
            },
            contact: {
                title: "Get in Touch",
                subtitle: "Ready to explore the Philippines? Let's discuss how we can help you achieve your business and investment goals."
            }
        },

        // IT Services Division Page
        itDivision: {
            title: "IT Services Division - Lim-Kawano & Company Inc.",
            hero: {
                title: "Empowering the world through IT.",
                description: "By connecting African engineers with Japanese businesses, we create jobs in Africa while solving Japan's talent shortage. With our project management and trusted partnerships, we deliver IT solutions that drive sustainable growth on both sides.",
                cta: "Get in Touch"
            },
            services: {
                title: "Our Services",
                consulting: {
                    badge: "IT Consulting",
                    title: "Strategy & Digital Transformation Advisory",
                    description: "We support SMEs with tailored IT consulting, from strategy planning to implementation, helping businesses stay competitive in the digital age.",
                    benefit1: "IT strategy planning aligned with business goals",
                    benefit2: "Guidance on digital transformation (DX)",
                    benefit3: "Practical roadmaps for implementation",
                    cta: "GET IN TOUCH"
                },
                matching: {
                    badge: "Partner Matching",
                    title: "Connecting with Africa's Top IT Talent",
                    description: "We connect Japanese companies with reliable African IT firms and freelance engineers, creating win-win opportunities for both sides.",
                    benefit1: "Access to skilled engineers across Africa",
                    benefit2: "Matching with trusted IT companies and freelancers",
                    benefit3: "Cost-effective and high-quality development resources",
                    cta: "GET IN TOUCH"
                },
                management: {
                    badge: "Project Management",
                    title: "Ensuring Project Success from Start to Finish",
                    description: "We manage development projects end-to-end, bridging cultural and technical gaps to ensure quality, timelines, and success.",
                    benefit1: "End-to-end project management",
                    benefit2: "Communication bridge between Japan and Africa",
                    benefit3: "Quality assurance and on-time delivery",
                    cta: "GET IN TOUCH"
                }
            },
            stories: {
                title: "Success Stories",
                story1: {
                    quote: "We wanted to improve efficiency in our factory operations but lacked a clear digitalization roadmap. With Lim-Kawano's IT consulting, we developed a plan using Salesforce and AWS for production management. After implementation, inventory accuracy improved and monthly workload was reduced by about 25%.",
                    name: "Manufacturing Company",
                    location: "Japan"
                },
                story2: {
                    quote: "In developing a new service, balancing cost and quality was our biggest challenge. Through Lim-Kawano's model, development was carried out by engineers in Africa, QA was conducted in the Philippines, and delivery was made to Japan. As a result, we completed the project at about one-fifth the usual cost and released it faster than expected.",
                    name: "IT Startup",
                    location: "Japan"
                },
                story3: {
                    quote: "While developing a new e-commerce site, we faced a shortage of domestic IT resources and increasing risk of delays. Lim-Kawano assembled a development team in Africa and a QA team in the Philippines, managing the project end-to-end. As a result, the site was released on schedule, and stable operations boosted our online order ratio by 20% within just three months.",
                    name: "Travel Company",
                    location: "Japan"
                }
            },
            contact: {
                title: "Get in Touch",
                subtitle: "Ready to transform your business with IT? Let's discuss how we can help you achieve your technology goals."
            }
        }
    },

    ja: {
        // ナビゲーション
        nav: {
            home: "ホーム",
            team: "チーム",
            expertise: "専門知識",
            services: "サービス",
            contact: "お問い合わせ",
            menu: "メニュー"
        },

        // お問い合わせフォーム（全ページ共通）
        contactForm: {
            contactInfo: "お問い合わせ先",
            emailLabel: "メールアドレス",
            headquartersLabel: "本社",
            headquartersValue: "東京、日本",
            globalOffices: "グローバルオフィス",
            officesDescription: "東京、マニラ、ジブチにオフィスを構え、複数のタイムゾーンでお客様のニーズにお応えします。",
            nameLabel: "お名前",
            nameRequired: "（必須）",
            emailFieldLabel: "メールアドレス",
            emailRequired: "（必須）",
            messageLabel: "メッセージ",
            messageRequired: "（必須）",
            submit: "送信する"
        },

        // ヒーローセクション
        hero: {
            title: "世界を味方に、あなたの成長に伴走する",
            description: "革新的なITソリューションから個人向けサービスまで、我々は日本と世界の架け橋となり、中小企業や個人のみなさまの海外進出に伴走サポートします",
            cta: "お問い合わせ"
        },

        // チームセクション
        team: {
            title: "経営陣",
            roles: {
                ceo: "共同創業者 兼 CEO",
                consultant: "チーフコンサルタント",
                language: "言語エキスパート"
            }
        },

        // 専門知識セクション
        expertise: {
            title: "日本と世界、双方の視点で最適解を設計する。",
            description: "私たちは日本の文化と現地のリアリティの両面を理解し、双方の強みを融合させたソリューションを提供します。世界中のネットワークを駆使し、最もふさわしい人財・情報・技術を結びつけ、確実な成果を実現します。",
            cta: "お問い合わせ"
        },

        // サービス概要
        serviceOverview: {
            title: "サービス概要",
            subtitle: "日本と新興市場を結ぶ架け橋",
            description: "私たちの強みは、日本とアジア・アフリカを結び、信頼できるパートナーシップと世界的に認められた品質でクライアントを支援することです。"
        },

        // ソリューションセクション
        solutions: {
            title: "提供ソリューション",
            africa: {
                title: "アフリカ部門",
                description: "アフリカを訪れる旅行者や進出企業のための信頼できるコンシェルジュ・ビジネスサポート。"
            },
            philippines: {
                title: "フィリピン部門",
                description: "ショッピングエージェントサービスに加え、日本からフィリピンへの進出支援、フィリピン企業の日本進出サポートを提供。"
            },
            language: {
                title: "言語サービス部門",
                description: "英語・フランス語コーチング、翻訳・通訳、海外赴任や留学前の集中研修を提供。"
            },
            it: {
                title: "ITサービス部門",
                description: "信頼できる開発パートナーとのマッチングやプロジェクト管理を通じて、成果にコミットするIT開発を支援。"
            }
        },

        // お問い合わせセクション
        contact: {
            title: "お問い合わせ",
            subtitle: "みなさまの、国際展開のお手伝いをさせてください。なんでもお気軽にお問い合わせください。",
            info: {
                title: "連絡先情報",
                email: "メール",
                headquarters: "本社",
                location: "東京、日本",
                globalOffices: "グローバルオフィス",
                globalDescription: "東京、マニラ、ジブチにオフィスがあり、複数のタイムゾーンでお客様のニーズにお応えします。"
            },
            form: {
                name: "お名前",
                email: "メールアドレス",
                company: "会社名",
                message: "メッセージ",
                placeholder: {
                    name: "山田 太郎",
                    email: "yamada@example.com",
                    company: "貴社名",
                    message: "プロジェクトについて、どのようにサポートできるかお聞かせください..."
                },
                submit: "送信する",
                sending: "送信中...",
                success: "お問い合わせありがとうございます！まもなくご連絡いたします。",
                error: "すべての必須項目を入力してください。"
            }
        },

        // フッター
        footer: {
            tagline: "革新と卓越性を通じて、世界中のビジネスを結びます。",
            services: "サービス",
            company: "会社情報",
            connect: "コネクト",
            links: {
                about: "会社概要",
                careers: "採用情報",
                partners: "パートナー",
                news: "ニュース"
            },
            copyright: "© 2025 Lim-Kawano & Company Inc. All rights reserved.",
            privacy: "プライバシーポリシー",
            terms: "利用規約"
        },

        // アフリカ部門ページ
        africaDivision: {
            title: "アフリカ部門 - Lim-Kawano & Company Inc.",
            hero: {
                title: "信頼できるアフリカへのゲートウェイ。",
                description: "10年以上の経験と54カ国に広がるネットワークを活かし、ビジネス進出支援から観光旅行まで、あらゆるコーディネートをお任せください。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                marketEntry: {
                    badge: "アフリカ進出支援",
                    title: "安心して広がる未来へ",
                    description: "54カ国にわたるネットワークと現地経験を活かし、企業のアフリカ進出を戦略から実行までサポートします。",
                    benefit1: "市場ごとに最適化された戦略的進出支援",
                    benefit2: "信頼できる現地調整とパートナーマッチング",
                    benefit3: "成長著しいアフリカ経済での新たな機会",
                    cta: "お問い合わせ"
                },
                concierge: {
                    badge: "アフリカ・コンシェルジュサービス",
                    title: "旅行もビジネスも、安心のトータルサポート",
                    description: "観光からビジネス渡航まで、現地専門家が安全で本物のアフリカ体験をトータルにコーディネートします。",
                    benefit1: "記憶に残るオーダーメイド旅行プラン",
                    benefit2: "ビジネス渡航・企業訪問の専門サポート",
                    benefit3: "安全と快適を保証するローカル知見",
                    cta: "お問い合わせ",
                    visitSite: "サービスサイトへ"
                },
                fitness: {
                    badge: "Fitness for Africa",
                    title: "健康習慣を築き、生活の質を高める",
                    description: "アフリカの地域社会に向けたフィットネスプログラムを展開し、運動習慣の定着、健康増進、QOL向上を支援します。",
                    benefit1: "地域のライフスタイルに合わせたフィットネスプログラム",
                    benefit2: "持続可能な運動習慣を築くためのサポート",
                    benefit3: "定期的な運動を通じた健康改善と生活の質向上",
                    cta: "お問い合わせ"
                },
                social: {
                    badge: "ソーシャルインパクト＆イノベーション",
                    title: "日本の技術で課題を解決する",
                    description: "日本の技術を活かし、アフリカの現地課題に取り組む持続可能なプロジェクトを展開しています。",
                    benefit1: "日本のテクノロジーを活用した社会貢献プロジェクト",
                    benefit2: "地域社会と連携する取り組み",
                    benefit3: "長期的なインパクトを生み出す持続可能なモデル",
                    cta: "お問い合わせ"
                }
            },
            stories: {
                title: "成功事例",
                story1: {
                    quote: "「新規サービスのMVP開発を進める中で、国内では優秀なエンジニアの確保が難しく、開発が遅れていました。Lim-Kawanoの支援でエチオピアのエンジニアと連携し、エンジニアチームを組成。単なる紹介にとどまらず、要件定義から進行管理まで伴走してもらったことで、予定よりも早くプロトタイプを完成できました。開発の質も高く、今では長期的なパートナーシップへと発展しています。」",
                    name: "日本のスタートアップ（IT）",
                    location: ""
                },
                story2: {
                    quote: "「新しい製品をアフリカ市場に展開するにあたり、現地規制や流通チャネルの不透明さが大きな障壁でした。Lim-Kawanoはカメルーンの現地ネットワークを活用し、政府機関や販売パートナーとの橋渡しを実施。さらに日本の品質基準を現地でどう担保するかの仕組みづくりまでサポートしてくれました。その結果、進出初年度から複数の販路を確保でき、事業拡大への足がかりを築けました。」",
                    name: "日本の中堅メーカー（製造業）",
                    location: ""
                },
                story3: {
                    quote: "「アフリカ向けに部材を輸出する際、通関手続きの複雑さや現地の輸送インフラの脆弱さに直面し、納期遅延のリスクを抱えていました。Lim-Kawanoはジブチの現地パートナーと連携し、物流ルートの最適化や輸送リスクの事前回避策を提案。特に港湾手続きのボトルネックを解消してくれたことで、従来かかっていた納期を約30％短縮できました。これにより安定的なサプライチェーンを構築でき、アフリカ市場への供給力を強化できました。」",
                    name: "日本の物流企業",
                    location: ""
                }
            },
            contact: {
                title: "お問い合わせ",
                subtitle: "アフリカを探索する準備はできましたか？ビジネスまたは旅行の目標をどのようにサポートできるかご相談ください。"
            }
        },

        // 語学サービス部門ページ
        languageDivision: {
            title: "語学サービス部門 - Lim-Kawano & Company Inc.",
            hero: {
                title: "言語の壁を越え、ビジネス・教育・自己表現の可能性を広げる。",
                description: "英語・フランス語の専門コーチングから、翻訳・通訳、海外赴任や留学前の集中研修まで、世界で活躍するための包括的なサポートを提供します。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                coaching: {
                    badge: "Language Coaching",
                    title: "英語・フランス語コーチング",
                    description: "ビジネス、学習、日常会話など目的に応じた個別コーチングを提供。経験豊富なコーチが自信と流暢さを育てます。",
                    benefit1: "個別またはグループでの柔軟な指導",
                    benefit2: "ビジネス・学習用途に特化したプログラム",
                    benefit3: "実践的なコミュニケーションを支える指導",
                    cta: "お問い合わせ"
                },
                translation: {
                    badge: "Translation & Interpretation",
                    title: "翻訳・通訳サービス",
                    description: "日本語・英語・フランス語の橋渡しを行う翻訳・通訳サービス。会議、文書、イベントに対応します。",
                    benefit1: "文脈を理解した正確な文書翻訳",
                    benefit2: "ビジネス・学術分野に対応した逐次通訳",
                    benefit3: "会議・研修・文化交流イベントを支援",
                    cta: "お問い合わせ"
                },
                training: {
                    badge: "Pre-departure Training",
                    title: "海外渡航前集中研修",
                    description: "留学・赴任・移住に備える短期集中プログラム。渡航前に必要なコミュニケーション力を効率的に身につけます。",
                    benefit1: "短期集中型の語学プログラム",
                    benefit2: "留学・赴任目的に合わせたカリキュラム",
                    benefit3: "実際の生活シーンを想定した実践的研修",
                    cta: "お問い合わせ"
                }
            },
            contact: {
                title: "お問い合わせ",
                subtitle: "言語の壁を破る準備はできましたか？グローバルコミュニケーション目標の達成をどのようにサポートできるかご相談ください。"
            }
        },

        // フィリピン部門ページ
        philippinesDivision: {
            title: "フィリピン部門 - Lim-Kawano & Company Inc.",
            hero: {
                title: "勢い凄まじいフィリピン市場への展開",
                description: "ショッピングエージェントサービス、進出支援、不動産運営の専門知識を通じて、商品調達から市場参入、投資機会の創出まで、フィリピンでの新たなチャンスを広げます。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                shopping: {
                    badge: "ショッピングエージェント",
                    title: "フィリピンからのシームレスな商品調達",
                    description: "日本のお客様がフィリピンから商品を仕入れる際に、品質確認、公正な価格、物流までを一括でサポートします。",
                    benefit1: "ニーズに応じたフィリピン製品の調達",
                    benefit2: "品質管理とサプライヤー調整",
                    benefit3: "スムーズな物流支援",
                    cta: "お問い合わせ"
                },
                business: {
                    badge: "事業展開支援",
                    title: "双方向の市場参入サポート",
                    description: "日本企業のフィリピン進出、フィリピン企業の日本進出を、現地に根差した実務支援でサポートします。",
                    benefit1: "規制・コンプライアンス対応のガイド",
                    benefit2: "パートナー・顧客紹介",
                    benefit3: "実務レベルでの市場参入支援",
                    cta: "お問い合わせ"
                },
                realEstate: {
                    badge: "不動産コンシェルジュ",
                    title: "リノベーションとライフスタイルサポート",
                    description: "フィリピンの不動産リノベーションを支援し、住まいやビジネス空間をより良く変えるためのコンシェルジュサービスを提供します。",
                    benefit1: "リノベーション計画と予算設計のアドバイス",
                    benefit2: "信頼できる現地施工業者との調整",
                    benefit3: "デザインやライフスタイル向上のサポート",
                    cta: "お問い合わせ"
                }
            },
            stories: {
                title: "成功事例",
                story1: {
                    quote: "「フィリピンからの雑貨輸入を、Lim-Kawanoのショッピングエージェントサービスを通じて実現しました。現地サプライヤーとの交渉や品質確認を任せられたことで、安定的な調達が可能になりました。」",
                    name: "日本の小売企業",
                    location: ""
                },
                story2: {
                    quote: "「フィリピンで法人を設立するにあたり、サポートを依頼しました。複雑なプロセスを一括管理してもらえたことで、安心して事業を開始できました。」",
                    name: "日本の製造業企業",
                    location: ""
                },
                story3: {
                    quote: "「フィリピンに進出する際、現地規制やパートナー探しに課題がありました。Lim-Kawanoの進出支援で必要なネットワークにつながり、スムーズに事業を立ち上げることができました。」",
                    name: "日本のIT企業",
                    location: ""
                }
            },
            contact: {
                title: "お問い合わせ",
                subtitle: "フィリピンを探索する準備はできましたか？ビジネスおよび投資目標の達成をどのようにサポートできるかご相談ください。"
            }
        },

        // ITサービス部門ページ
        itDivision: {
            title: "ITサービス部門 - Lim-Kawano & Company Inc.",
            hero: {
                title: "ITの力で世界をエンパワーする。",
                description: "アフリカのエンジニアと日本企業をつなぎ、現地での雇用を生み出すと同時に、日本の人材不足を解決します。プロジェクトマネジメントと信頼できるパートナーシップで、双方の持続的成長を支えるITソリューションを実現します。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                consulting: {
                    badge: "IT Consulting",
                    title: "戦略とDX導入のコンサルティング",
                    description: "中小企業に向けて、戦略立案から実装までを支援。デジタル時代に競争力を維持するためのITコンサルティングを提供します。",
                    benefit1: "事業目標に合わせたIT戦略の策定",
                    benefit2: "デジタルトランスフォーメーション（DX）の導入支援",
                    benefit3: "実装につながる具体的なロードマップ提案",
                    cta: "お問い合わせ"
                },
                matching: {
                    badge: "Partner Matching",
                    title: "アフリカの優秀なIT人材とのマッチング",
                    description: "日本企業と信頼できるアフリカのIT企業やフリーランスエンジニアをつなぎ、双方にメリットのある協働を実現します。",
                    benefit1: "アフリカ全域のスキル豊富なエンジニアにアクセス",
                    benefit2: "信頼できるIT企業・フリーランスとのマッチング",
                    benefit3: "コスト効率と品質を両立した開発リソース",
                    cta: "お問い合わせ"
                },
                management: {
                    badge: "Project Management",
                    title: "プロジェクト成功を支えるマネジメント",
                    description: "開発プロジェクトを最初から最後まで管理し、文化や技術のギャップを埋めながら品質・納期・成果を保証します。",
                    benefit1: "開発プロジェクトの一貫したマネジメント",
                    benefit2: "日本とアフリカをつなぐコミュニケーション支援",
                    benefit3: "品質保証と納期厳守",
                    cta: "お問い合わせ"
                }
            },
            stories: {
                title: "成功事例",
                story1: {
                    quote: "「自社工場の業務効率化を進めたいと考えていましたが、どのようにデジタル化を進めれば良いか分からず停滞していました。Lim-KawanoのITコンサルティングを通じて、SalesforceとAWSを活用した生産管理システムの導入計画を策定。導入後は在庫管理の精度が向上し、月間の業務工数を約25％削減できました。」",
                    name: "日本の製造業企業",
                    location: ""
                },
                story2: {
                    quote: "「新規サービスの開発にあたり、コストと品質の両立が課題でした。Lim-Kawanoの仕組みを通じて、開発をアフリカのエンジニアが担い、品質保証（QA）をフィリピンで実施、日本に納品する体制を構築。結果として通常の約5分の1のコストで開発に成功し、想定以上のスピードでリリースできました。」",
                    name: "日本のIT Startup",
                    location: ""
                },
                story3: {
                    quote: "「自社でECサイトを立ち上げるプロジェクトを進める中で、国内では開発リソースが不足し、納期遅延のリスクが高まっていました。Lim-Kawanoがアフリカの開発チームとフィリピンのQAチームを組織し、プロジェクトマネジメントを一貫して担ってくれたことで、当初のスケジュール通りにリリースが実現。システムの安定稼働により、オンライン受注比率は導入後わずか3か月で20％向上しました。」",
                    name: "日本の旅行会社",
                    location: ""
                }
            },
            contact: {
                title: "お問い合わせ",
                subtitle: "ITでビジネス変革を実現しませんか？テクノロジー目標の達成をどのようにサポートできるかご相談ください。"
            }
        },

        // 言語サービス部門ページ
        languageDivision: {
            title: "言語サービス部門 - Lim-Kawano & Company Inc.",
            hero: {
                title: "言語の壁を越えて、新たなチャンスを広げる。",
                description: "英語・フランス語のプロフェッショナルコーチングから翻訳・通訳、海外渡航前の集中研修まで、グローバル成功のための世界水準のサポートを提供します。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                coaching: {
                    badge: "Language Coaching",
                    title: "英語・フランス語コーチング",
                    description: "ビジネス、学習、日常会話など目的に応じた個別コーチングを提供。経験豊富なコーチが自信と流暢さを育てます。",
                    benefit1: "個別またはグループでの柔軟な指導",
                    benefit2: "ビジネス・学習用途に特化したプログラム",
                    benefit3: "実践的なコミュニケーションを支える指導",
                    cta: "お問い合わせ"
                },
                translation: {
                    badge: "Translation & Interpretation",
                    title: "翻訳・通訳サービス",
                    description: "日本語・英語・フランス語の橋渡しを行う翻訳・通訳サービス。会議、文書、イベントに対応します。",
                    benefit1: "文脈を理解した正確な文書翻訳",
                    benefit2: "ビジネス・学術分野に対応した逐次通訳",
                    benefit3: "会議・研修・文化交流イベントを支援",
                    cta: "お問い合わせ"
                },
                training: {
                    badge: "Pre-departure Training",
                    title: "海外渡航前集中研修",
                    description: "留学・赴任・移住に備える短期集中プログラム。渡航前に必要なコミュニケーション力を効率的に身につけます。",
                    benefit1: "短期集中型の語学プログラム",
                    benefit2: "留学・赴任目的に合わせたカリキュラム",
                    benefit3: "実際の生活シーンを想定した実践的研修",
                    cta: "お問い合わせ"
                }
            },
            stories: {
                title: "成功事例",
                story1: {
                    quote: "「Lim-Kawanoの語学コーチングを通じて、国際会議で英語で話すことへの自信がつきました。自分の職務に必要なポイントに絞った指導で、効率的にスキルアップできました。」",
                    name: "ビジネスプロフェッショナル",
                    location: "日本"
                },
                story2: {
                    quote: "「フランスのパートナー企業との交渉で、Lim-Kawanoの翻訳サービスを活用しました。細部まで正確に伝えられ、スムーズに契約を進めることができました。」",
                    name: "経営幹部",
                    location: "日本"
                },
                story3: {
                    quote: "「海外赴任の前に、Lim-Kawanoの集中研修プログラムを受講しました。単なる語学だけでなく、文化的な理解も深まり、赴任後の生活がとてもスムーズに始まりました。」",
                    name: "駐在マネージャー",
                    location: "日本"
                }
            },
            contact: {
                title: "お問い合わせ",
                subtitle: "言語の壁を越える準備はできましたか？グローバルコミュニケーション目標の達成をどのようにサポートできるかご相談ください。"
            }
        }
    }
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.updateToggleUI();

        // Use event delegation for the language toggle
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.language-toggle')) {
                this.toggleLanguage();
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ja' : 'en';
        localStorage.setItem('preferred-language', this.currentLang);
        this.applyLanguage(this.currentLang);
        this.updateToggleUI();

        document.body.style.opacity = '0.9';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 200);
    }

    applyLanguage(lang) {
        document.documentElement.lang = lang;
        const t = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.getAttribute('data-i18n').split('.');
            let value = t;

            for (const key of keys) {
                if (value) {
                    value = value[key];
                }
            }

            if (value) {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = value;
                } else {
                    element.innerHTML = value;
                }
            }
        });

        window.currentTranslations = t;
    }

    updateToggleUI() {
        document.querySelectorAll('.language-text').forEach(element => {
            element.textContent = this.currentLang.toUpperCase();
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
