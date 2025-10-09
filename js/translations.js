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
                phone: "Phone",
                headquarters: "Headquarters",
                location: "Tokyo, Japan",
                globalOffices: "Global Offices",
                globalDescription: "With Global offices in Tokyo, Manila, Djibouti, we're always within reach to serve your needs across multiple time zones."
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
                    benefits: [
                        "Strategic entry support tailored to local markets",
                        "Reliable on-the-ground coordination and partner matching",
                        "Growth opportunities across Africa's emerging economies"
                    ],
                    cta: "GET IN TOUCH"
                },
                concierge: {
                    badge: "Africa Concierge Services",
                    title: "Travel & Business, Seamlessly Coordinated",
                    description: "From tailor-made leisure trips to business travel, we provide safe, authentic, and seamless African experiences.",
                    benefits: [
                        "Customized itineraries for unforgettable journeys",
                        "Professional support for business trips and corporate delegations",
                        "Deep cultural expertise and safety protocols across all destinations"
                    ],
                    cta: "GET IN TOUCH"
                }
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

        // ヒーローセクション
        hero: {
            title: "グローバルな繋がりを創り出し、ビジネスの成長を促進",
            description: "革新的なITソリューションから個別化されたサービスまで、日本と世界を結び、中小企業や個人の目標達成をサポートします。",
            cta: "お問い合わせ"
        },

        // チームセクション
        team: {
            title: "リーダーシップチーム",
            roles: {
                ceo: "共同創業者 兼 CEO",
                consultant: "チーフコンサルタント",
                language: "言語エキスパート"
            }
        },

        // 専門知識セクション
        expertise: {
            title: "地域の深い洞察とグローバルな専門知識を組み合わせた独自のアプローチ。",
            description: "私たちは広範なネットワークと文化的理解を活用し、グローバルスタンダードを維持しながら、現地市場に響くソリューションを提供します。多様なバックグラウンドを持つチームが、複雑な国際ビジネスの環境を自信を持って正確にナビゲートします。",
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
            title: "提供するソリューション",
            africa: {
                title: "アフリカ部門",
                description: "アフリカを探索する旅行者や企業向けの信頼できるコンシェルジュおよびビジネスサポート。"
            },
            philippines: {
                title: "フィリピン部門",
                description: "日本とフィリピン間のショッピングエージェントサービスおよびクロスボーダービジネスサポート。"
            },
            language: {
                title: "語学サービス",
                description: "英語・フランス語コーチング、プロフェッショナル翻訳・通訳、海外赴任・留学前の集中トレーニング。"
            },
            it: {
                title: "ITサービス",
                description: "信頼できる開発パートナーとクライアントをマッチングし、成功を導くプロジェクト管理。"
            }
        },

        // お問い合わせセクション
        contact: {
            title: "お問い合わせ",
            subtitle: "ビジネスをグローバルに展開する準備はできていますか？国際展開の目標達成をどのようにサポートできるか、ぜひご相談ください。",
            info: {
                title: "連絡先情報",
                email: "メール",
                phone: "電話",
                headquarters: "本社",
                location: "東京、日本",
                globalOffices: "グローバルオフィス",
                globalDescription: "東京、マニラ、ジブチにグローバルオフィスがあり、複数のタイムゾーンでお客様のニーズにお応えします。"
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
                title: "アフリカへの信頼できるゲートウェイ。",
                description: "10年以上の経験と54カ国全てにわたるネットワークにより、ビジネス市場参入から忘れられない旅行アドベンチャーまで、すべてをコーディネートします。",
                cta: "お問い合わせ"
            },
            services: {
                title: "私たちのサービス",
                marketEntry: {
                    badge: "アフリカ市場参入サポート",
                    title: "自信を持って展開",
                    description: "深い地域知識、信頼できるパートナーシップ、54カ国での実践的なコーディネーションでアフリカに参入する企業をガイドします。",
                    benefits: [
                        "現地市場に特化した戦略的参入サポート",
                        "信頼できる現地でのコーディネーションとパートナーマッチング",
                        "アフリカの新興経済における成長機会"
                    ],
                    cta: "お問い合わせ"
                },
                concierge: {
                    badge: "アフリカコンシェルジュサービス",
                    title: "旅行とビジネス、シームレスにコーディネート",
                    description: "オーダーメイドのレジャー旅行からビジネス旅行まで、安全で本格的、そしてシームレスなアフリカ体験を提供します。",
                    benefits: [
                        "忘れられない旅のためのカスタマイズされた旅程",
                        "出張や企業代表団への専門的サポート",
                        "全ての目的地における深い文化的専門知識と安全プロトコル"
                    ],
                    cta: "お問い合わせ"
                }
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
