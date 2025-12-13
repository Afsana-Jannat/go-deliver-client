import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    home: "Home",
                    sendParcel: "Send a Parcel",
                    coverage: "Coverage",
                    dashboard: "Dashboard",
                    beARider: "Be a Rider",
                    contact: "Contact",
                    signOut: "Sign Out",
                    login: "Login",

                    homepageChoose: {
                        whyChoose: "WHY CHOOSE FOR US",
                        whyChooseDesc: "Dramatically enhance interactive metrics for reliable services. Proactively unleash fully researched e-commerce.",
                        fastTransport: "FAST TRANSPORTION SERVICE",
                        fastTransportDesc: "Enhance interactive metrics for reliable services. Proactively unleash fully researched.",
                        onlineSupport: "24/7 ONLINE SUPPORT",
                        onlineSupportDesc: "Enhance interactive metrics for reliable services. Proactively unleash fully researched.",
                        safety: "SAFETY AND RELIABILITY",
                        safetyDesc: "Enhance interactive metrics for reliable services. Proactively unleash fully researched.",
                        stat1Title: "PROJECT COMPLETE",
                        stat1Desc: "Conveniently impact front-end niches via maintainable.",
                        stat2Title: "HAPPY CLIENTS",
                        stat2Desc: "Deliver quality services to our valued clients.",
                        stat3Title: "PARCELS DELIVERED",
                        stat3Desc: "Thousands of parcels delivered nationwide.",
                        stat4Title: "AWARDS WON",
                        stat4Desc: "Recognized for excellence in logistics solutions."
                    },

                    howItWorks: {
                        title: "How it Works",
                        booking: "Booking Pick & Drop",
                        cod: "Cash On Delivery",
                        deliveryHub: "Delivery Hub",
                        sme: "Booking SME & Corporate",
                        desc: "From personal package to business shipments — we deliver on time, every time."
                    },

                    about: {
                        title: "ABOUT US",
                        heading1: "WELCOME WORLD WIDE",
                        heading2: "BEST TRANSPORT COMPANY",
                        description: {
                            line1: "Competently implement efficient e-commerce",
                            line2: "without cross-unit growth strategies."
                        },
                        points: {
                            point1: "Unlimited Revisions",
                            point2: "Best Fitness Exercise",
                            point3: "Combine Fitness and",
                            point4: "Best Solutions"
                        }
                    },

                    services: {
                        title: "Our Services",
                        desc: "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
                        express: {
                            title: "Express & Standard Delivery",
                            desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
                        },
                        nationwide: {
                            title: "Nationwide Delivery",
                            desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
                        },
                        fulfillment: {
                            title: "Fulfillment Solution",
                            desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
                        },
                        cod: {
                            title: "Cash on Home Delivery",
                            desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
                        },
                        corporate: {
                            title: "Corporate Service / Contract In Logistics",
                            desc: "Customized corporate services which includes warehouse and inventory management support."
                        },
                        return: {
                            title: "Parcel Return",
                            desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
                        }
                    },

                    clients: {
                        title: "Trusted by Leading Businesses",
                        description: "Over 500+ companies rely on our logistics solutions for fast, safe, and secure delivery."
                    }
                }
            },

            bn: {
                translation: {
                    home: "হোম",
                    sendParcel: "পার্সেল পাঠান",
                    coverage: "কভারেজ",
                    dashboard: "ড্যাশবোর্ড",
                    beARider: "রাইডার হোন",
                    contact: "যোগাযোগ",
                    signOut: "সাইন আউট",
                    login: "লগইন",

                    homepageChoose: {
                        whyChoose: "কেন আমাদের বেছে নেবেন",
                        whyChooseDesc: "নির্ভরযোগ্য সেবার জন্য ইন্টারঅ্যাক্টিভ মেট্রিক্স উল্লেখযোগ্যভাবে উন্নত করুন। সম্পূর্ণভাবে গবেষিত ই-কমার্স কার্যকর করুন।",
                        fastTransport: "দ্রুত পরিবহন সেবা",
                        fastTransportDesc: "নির্ভরযোগ্য সেবার জন্য ইন্টারঅ্যাক্টিভ মেট্রিক্স উন্নত করুন। সম্পূর্ণভাবে গবেষিত কার্যকর করুন।",
                        onlineSupport: "২৪/৭ অনলাইন সাপোর্ট",
                        onlineSupportDesc: "নির্ভরযোগ্য সেবার জন্য ইন্টারঅ্যাক্টিভ মেট্রিক্স উন্নত করুন। সম্পূর্ণভাবে গবেষিত কার্যকর করুন।",
                        safety: "নিরাপত্তা এবং নির্ভরযোগ্যতা",
                        safetyDesc: "নির্ভরযোগ্য সেবার জন্য ইন্টারঅ্যাক্টিভ মেট্রিক্স উন্নত করুন। সম্পূর্ণভাবে গবেষিত কার্যকর করুন।",
                        stat1Title: "প্রকল্প সম্পন্ন",
                        stat1Desc: "ফ্রন্ট-এন্ড নিছগুলিকে সুবিধাজনকভাবে প্রভাবিত করুন।",
                        stat2Title: "সন্তুষ্ট ক্লায়েন্ট",
                        stat2Desc: "আমাদের মূল্যবান ক্লায়েন্টদের জন্য মানসম্পন্ন সেবা প্রদান।",
                        stat3Title: "ডেলিভারি করা পার্সেল",
                        stat3Desc: "দেশব্যাপী হাজার হাজার পার্সেল বিতরণ করা হয়েছে।",
                        stat4Title: "পুরস্কার জিতেছে",
                        stat4Desc: "লজিস্টিক সমাধানে উৎকর্ষতার জন্য স্বীকৃত।"
                    },

                    howItWorks: {
                        title: "কিভাবে কাজ করে",
                        booking: "বুকিং পিক & ড্রপ",
                        cod: "ক্যাশ অন ডেলিভারি",
                        deliveryHub: "ডেলিভারি হাব",
                        sme: "এসএমই ও কর্পোরেট বুকিং",
                        desc: "পার্সোনাল প্যাকেজ থেকে ব্যবসায়িক শিপমেন্ট — আমরা সময়মতো পৌঁছে দিই।"
                    },

                    about: {
                        title: "আমাদের সম্পর্কে",
                        heading1: "স্বাগতম বিশ্বব্যাপী",
                        heading2: "সেরা পরিবহন কোম্পানি",
                        description: {
                            line1: "দক্ষতার সাথে ই-কমার্স পরিচালনা করুন",
                            line2: "বিভাগীয় জটিলতা ছাড়াই উন্নতির কৌশল।"
                        },
                        points: {
                            point1: "আনলিমিটেড রিভিশন",
                            point2: "সেরা ফিটনেস এক্সারসাইজ",
                            point3: "ফিটনেস ও সেবার সমন্বয়",
                            point4: "সেরা সলিউশন প্রদান"
                        }
                    },

                    services: {
                        title: "আমাদের সেবা",
                        desc: "দ্রুত ও নির্ভরযোগ্য পার্সেল ডেলিভারির সুবিধা রিয়েল-টাইম ট্র্যাকিংসহ। পার্সোনাল প্যাকেজ থেকে ব্যবসায়িক শিপমেন্ট পর্যন্ত আমরা সময়মতো পৌঁছে দিই।",
                        express: {
                            title: "এক্সপ্রেস ও স্ট্যান্ডার্ড ডেলিভারি",
                            desc: "ঢাকা, চট্টগ্রাম, সিলেট, খুলনা ও রাজশাহীসহ ২৪–৭২ ঘণ্টার মধ্যে পার্সেল পৌঁছে দিই। ঢাকায় এক্সপ্রেস ডেলিভারি ৪–৬ ঘণ্টায়।"
                        },
                        nationwide: {
                            title: "জাতীয় ডেলিভারি",
                            desc: "দেশব্যাপী পার্সেল ডেলিভারি সহ হোম ডেলিভারি নিশ্চিত, গ্রাহকের কাছে ৪৮–৭২ ঘণ্টার মধ্যে পৌঁছানো।"
                        },
                        fulfillment: {
                            title: "ফুলফিলমেন্ট সলিউশন",
                            desc: "আমরা কাস্টমাইজড সেবা প্রদান করি, ইনভেন্টরি ম্যানেজমেন্ট, অনলাইন অর্ডার প্রসেসিং, প্যাকেজিং ও পরবর্তী সাপোর্টসহ।"
                        },
                        cod: {
                            title: "ক্যাশ অন হোম ডেলিভারি",
                            desc: "বাংলাদেশে যে কোনো স্থানে ১০০% ক্যাশ অন ডেলিভারি, পণ্যের নিরাপত্তা নিশ্চিত।"
                        },
                        corporate: {
                            title: "কর্পোরেট সেবা / কনট্রাক্ট ইন লজিস্টিক্স",
                            desc: "ওয়্যারহাউস ও ইনভেন্টরি ম্যানেজমেন্ট সহ কাস্টমাইজড কর্পোরেট সেবা।"
                        },
                        return: {
                            title: "পার্সেল রিটার্ন",
                            desc: "আমাদের রিভার্স লজিস্টিক্স সুবিধার মাধ্যমে গ্রাহকরা পণ্য ফেরত বা এক্সচেঞ্জ করতে পারবেন।"
                        }
                    },

                    clients: {
                        title: "নেতৃত্বশীল ব্যবসায়িক প্রতিষ্ঠানগুলো দ্বারা বিশ্বাসযোগ্য",
                        description: "৫০০+ কোম্পানি দ্রুত, নিরাপদ এবং নির্ভরযোগ্য ডেলিভারির জন্য আমাদের লজিস্টিক সমাধানের উপর নির্ভর করে।"
                    }
                }
            }
        }
    });

export default i18n;
