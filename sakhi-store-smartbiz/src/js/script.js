// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const translations = {
    en: {
        nav_why: "Why SmartBiz?",
        nav_features: "Features",
        nav_download: "Download",
        nav_advantage: "The Sakhi Advantage",
        nav_help: "Help Center",
        hero_title: "Build, Launch & Grow Your D2C Business",
        hero_desc: "Create a stunning e-commerce website, powered by Sakhi Store. SmartBiz by Sakhi Store's website builder provides all the tools you need to grow your business effortlessly.",
        order_summary: "Order Summary",
        pay_now: "Pay Now",
        sales_per_week: "Sales per week",
        btn_download: "Download APK",
        btn_learn_more: "Learn More",
        run_store_title: "Run Your Store at Low Cost",
        run_store_text: "Start your ecommerce website with no setup fees*, no subscriptions*, and low shipping rates.",
        run_store_focus: "Build and grow your business with a clear focus on your products, not your expenses.",
        run_store_free_note: "* Free until December 2025.",
        feature_built_in_title: "Everything You Need, Built In",
        feature_built_in_text: "Core ecommerce tools and services needed to run your online store seamlessly—all included by default.",
        feature_trust_title: "Sakhi Trust Advantage",
        feature_trust_text: "Leverage Sakhi's best for your growth: from the trusted Sakhi checkout to world-class fulfillment.",
        testimonial_section_title: "What Our Customers Say",
        brands_title: "Trusted by Growing Indian Brands Like Yours",
        faq_title: "Frequently Asked Questions",
        themes_title: "Stunning no-code themes, designed to sell more",
        d2c_title: "One platform. All the D2C tools you need.",
        d2c_desc: "Simplify your business operations without sacrificing capability. Everything you need to run your online store lives in one intuitive platform.",
        feat1_title: "Multiple payment options",
        feat1_desc: "One-click setup to accept all the ways your customers love to pay—from UPI and cards to net banking and more.",
        feat2_title: "Accelerated checkout",
        feat2_desc: "Built-in checkout optimized for higher conversions.",
        feat3_title: "Inventory, Order & Returns Management",
        feat3_desc: "Take full control of your operations. Manage inventory, orders, and returns from a single, intuitive dashboard.",
        feat4_title: "Integrated low-cost shipping",
        feat4_desc: "Offer your customers fast & reliable delivery with our shipping partners.",
        feat5_title: "Order Delivered",
        feat5_desc: "Track and manage deliveries seamlessly with real-time updates.",
        feat6_title: "Built-in marketing tools",
        feat6_desc: "SEO optimization, social media integrations, and automated campaigns to grow your business.",
        cta_title: "Join 5,000+ growing brands",
        themes_badge: "Site Builder",
        themes_desc: "Launch instantly with unlimited listings, integrated ecommerce features and themes that will make your brand pop.",
        themes_feat1: "Pre-built themes optimized for shopping for every category",
        themes_feat2: "Easy customizations - Edit what you need, without any code",
        themes_feat3: "Blazing fast load times for improved customer experience",
        tool_seo_title: "SEO tools & social media integrations",
        tool_seo_desc: "Built-in SEO optimization tools optimize product listings with keywords to rank higher on search engines, driving more traffic.",
        tool_ads_title: "Seamless advertising platform integrations",
        tool_ads_desc: "Run targeted ad campaigns with Google Ads and Meta (Facebook/Instagram) integrations to boost sales and attract new customers.",
        tool_auto_title: "Automations for every customer action",
        tool_auto_desc: "Re-engage and win more customers with automated WhatsApp messages. Recover abandoned carts, send order confirmation and more.",
        site_builder_badge: "Site Builder",
        free_to_start_title: "Free to start. Built to save.",
        zero_costs_title: "Zero costs. Zero reasons to wait.",
        zero_costs_desc: "Build your store for free today. No subscription or transaction fees until December 2025.",
        extra_costs_title: "Built-in tools; no extra costs",
        extra_costs_desc: "All core tools built-in or pre-integrated. No third-party plugin hassles, no extra costs.",
        conversion_title: "Optimized for conversion",
        conversion_desc: "From high-performing themes to integrated growth tools, everything is designed to help you turn visitors into buyers.",
        theme1_tag: "Jewellery Edit",
        theme1_name: "Timeless Elegance",
        theme1_cat: "Warm nudes, soft light & editorial grids",
        theme2_tag: "Home & Decor",
        theme2_name: "Nature Collective",
        theme2_cat: "Earthy greens with airy masonry layouts",
        theme3_tag: "Apparel",
        theme3_name: "Aura Studio",
        theme3_cat: "Minimal silhouettes with tonal highlights",
        theme4_tag: "Beauty & Care",
        theme4_name: "Luna Glow",
        theme4_cat: "Bold gradients & conversion-focused grids",
        faq_q1: "Is SmartBiz really free?",
        faq_a1: "Yes! SmartBiz is completely free until December 2025. No setup fees, no subscription fees, and no transaction fees. Start building your store today at zero cost.",
        faq_q2: "Do I need coding skills?",
        faq_a2: "No coding skills required! SmartBiz features a drag-and-drop no-code editor that lets you customize your store visually. Anyone can build a professional e-commerce website.",
        faq_q3: "What payment methods are supported?",
        faq_a3: "SmartBiz supports all major payment methods including UPI, credit/debit cards, net banking, and digital wallets. Set up payments in just one click.",
        faq_q4: "Can I customize my store design?",
        faq_a4: "Absolutely! Choose from our pre-built themes optimized for every category, and customize them easily with our no-code editor. No technical knowledge needed.",
        faq_q5: "How do I manage inventory and orders?",
        faq_a5: "SmartBiz includes a comprehensive dashboard for managing inventory, orders, and returns. Everything you need is built-in and accessible from one place.",
        faq_q6: "What about shipping?",
        faq_a6: "We've integrated with leading shipping partners to offer you low-cost, reliable shipping options. Manage deliveries and track orders seamlessly.",
        cta_badge: "0% fees until December 2025",
        cta_desc: "Start building your online store today. No credit card required.",
        cta_btn: "Sign-up for free",
        f_col1_title: "WEBSITE BUILDER",
        f_col1_link1: "by Sakhi Store",
        f_col1_link2: "Features",
        f_col1_link3: "Download app",
        f_col1_link4: "Tutorials",
        f_col1_link5: "Beginner's guide",
        f_col1_link6: "Book a demo",
        f_col2_title: "ORDER MANAGEMENT",
        f_col2_link1: "Smart Hub",
        f_col2_link2: "Book a demo",
        f_col3_title: "FULFILLMENT",
        f_col3_link1: "Multi-Channel Fulfillment",
        f_col3_link2: "Features",
        f_col3_link3: "Book a demo",
        f_col3_link4: "Tutorials",
        f_col4_title: "RESOURCES",
        f_col4_link1: "Blog",
        f_col4_link2: "Success Stories",
        f_col4_link3: "Smart Academy",
        f_col5_title: "COMPANY",
        f_col5_link1: "FAQs",
        review1_cat: "FMCG / Wellness Brand",
        review1_title: "\"SmartBiz understands the speed at which FMCG brands move.\"",
        review1_quote: "\"Launching new SKUs was painful earlier, but SmartBiz made it seamless. Their analytics dashboard shows exactly what's selling, where we're losing margin, and where demand is rising. It has changed how we make decisions.\"",
        review1_author: "Neha Kulkarni",
        review1_role: "Founder, PureLeaf Naturals",
        review2_cat: "Home & Lifestyle Brand",
        review2_title: "\"From day one, SmartBiz became a partner—not a vendor.\"",
        review2_quote: "\"We were looking for a scalable solution as our omnichannel sales grew. SmartBiz not only solved our day-to-day operational pain but also guided us with insights and best practices that improved our fulfilment speed and customer satisfaction.\"",
        review2_author: "Sagar Jain",
        review2_role: "CEO, CasaCraft Living",
        review3_cat: "Footwear & Apparel Brand",
        review3_title: "\"SmartBiz has simplified complexities we struggled with for years.\"",
        review3_quote: "\"Tracking returns, exchanges, inventory aging, and vendor settlements was a nightmare. With SmartBiz, everything is transparent and automated. Our team finally has time for strategy instead of chasing spreadsheets.\"",
        review3_author: "Praveen Reddy",
        review3_role: "Co-Founder, StrideWalk",
        review4_cat: "Beauty & Personal Care Brand",
        dl_badge: "NEW VERSION AVAILABLE",
        dl_title: "Download Now",
        dl_desc: "Empower your business with the Sakhi Store mobile ecosystem. Seamless management, faster operations.",
        dl_version_label: "Version:",
        dl_android_label: "Android:",
        dl_android_val: "6.0 and above",
        dl_btn_main: "Download APK (v1.0.1)",
        dl_inst_title: "Installation Instructions:",
        dl_inst_1: "Download the <strong>Sakhi.apk</strong> file from the button above.",
        dl_inst_2: "Locate the file in your device's <strong>Downloads</strong> folder.",
        dl_inst_3: "Tap on the file and click <strong>\"Install\"</strong>.",
        dl_inst_4: "If prompted, enable <strong>\"Install from Unknown Sources\"</strong> in your settings.",
        dl_inst_5: "Open the Sakhi App and log in to start your journey!",
        signup_title: "Join the Revolution in D2C Commerce",
        signup_text: "We are launching soon. Be the first to know when we go live and get exclusive early access benefits.",
        signup_placeholder: "Enter your email address",
        signup_btn: "Get Early Access",
        signup_back: "&larr; Back to Home",
        review4_title: "\"SmartBiz transformed how we manage our growing product portfolio.\"",
        review4_quote: "\"As we expanded from 10 to 100+ SKUs, managing inventory and orders became overwhelming. SmartBiz's intuitive dashboard and automated workflows have been a game-changer. We can now focus on product innovation and customer experience instead of operational headaches.\"",
        review4_author: "Priya Verma",
        review4_role: "Founder & CEO, GlowEssence"
    },
    mr: {
        nav_why: "SmartBiz का?",
        nav_features: "वैशिष्ट्ये",
        nav_download: "डाउनलोड करा",
        nav_advantage: "सखी फायदा",
        nav_help: "मदत केंद्र",
        hero_title: "तुमचा D2C व्यवसाय तयार करा, लाँच करा आणि वाढवा",
        hero_desc: "सखी स्टोअरद्वारे समर्थित एक आकर्षक ई-कॉमर्स वेबसाइट तयार करा. SmartBiz कडून वेबसाइट बिल्डर तुम्हाला तुमचा व्यवसाय विनासायास वाढवण्यासाठी सर्व साधने प्रदान करतो.",
        order_summary: "ऑर्डर सारांश",
        pay_now: "आत्ता पैसे द्या",
        sales_per_week: "दर आठवड्याला विक्री",
        btn_download: "डाउनलोड करा (APK)",
        btn_learn_more: "अधिक जाणून घ्या",
        run_store_title: "तुमचे स्टोअर कमी खर्चात चालवा",
        run_store_text: "तुमची ई-कॉमर्स वेबसाइट सेटअप फी*, सबस्क्रिप्शन* आणि कमी शिपिंग दरांसह सुरू करा.",
        run_store_focus: "तुमच्या खर्चावर नाही, तर उत्पादनांवर स्पष्ट लक्ष केंद्रित करून तुमचा व्यवसाय वाढवा.",
        run_store_free_note: "* डिसेंबर २०२५ पर्यंत मोफत.",
        feature_built_in_title: "तुम्हाला हवे असलेले सर्व काही, अंगभूत",
        feature_built_in_text: "तुमची ऑनलाइन सुलभपणे चालवण्यासाठी आवश्यक असलेली मूळ ई-कॉमर्स साधने आणि सेवा—सर्व डीफॉल्टनुसार समाविष्ट आहेत.",
        feature_trust_title: "सखी विश्वासाचा फायदा",
        feature_trust_text: "तुमच्या वाढीसाठी सखीच्या सर्वोत्तम गोष्टींचा लाभ घ्या: विश्वसनीय सखी चेकआउटपासून ते जागतिक दर्जाच्या पूर्ततेपर्यंत.",
        testimonial_section_title: "आमचे ग्राहक काय म्हणतात",
        brands_title: "तुमच्यासारख्या वाढत्या भारतीय ब्रँड्सचा विश्वास",
        faq_title: "सतत विचारले जाणारे प्रश्न",
        themes_title: "आकर्षक नो-कोड थीम्स, अधिक विक्रीसाठी डिझाइन केलेल्या",
        d2c_title: "एकच प्लॅटफॉर्म. तुम्हाला हवी असलेली सर्व D2C साधने.",
        d2c_desc: "क्षमतेचा त्याग न करता तुमच्या व्यवसायाचे कामकाज सोपे करा. तुम्हाला तुमचे ऑनलाइन स्टोअर चालवण्यासाठी आवश्यक असलेली प्रत्येक गोष्ट एका प्लॅटफॉर्मवर मिळते.",
        feat1_title: "अनेक पेमेंट पर्याय",
        feat1_desc: "तुमच्या ग्राहकांना आवडणारे सर्व मार्ग स्वीकारण्यासाठी एक-क्लिक सेटअप—UPI आणि कार्ड्सपासून नेट बँकिंग आणि अधिकपर्यंत.",
        feat2_title: "वेगवान चेकआउट",
        feat2_desc: "जास्त विक्रीसाठी अनुकूलित अंगभूत चेकआउट.",
        feat3_title: "इन्व्हेंटरी, ऑर्डर आणि रिटर्न्स व्यवस्थापन",
        feat3_desc: "तुमच्या कामकाजावर पूर्ण नियंत्रण ठेवा. एकाच अंतर्ज्ञानी डॅशबोर्डवरून इन्व्हेंटरी, ऑर्डर्स आणि रिटर्न्स व्यवस्थापित करा.",
        feat4_title: "एकात्मिक कमी किमतीची शिपिंग",
        feat4_desc: "आमच्या शिपिंग भागीदारांसह तुमच्या ग्राहकांना जलद आणि विश्वसनीय डिलिव्हरी ऑफर करा.",
        feat5_title: "ऑर्डर वितरित (Delivered)",
        feat5_desc: "रिअल-टाइम अपडेटसह डिलिव्हरीचा मागोवा घ्या आणि व्यवस्थापित करा.",
        feat6_title: "अंगभूत मार्केटिंग साधने",
        feat6_desc: "तुमचा व्यवसाय वाढवण्यासाठी SEO ऑप्टिमायझेशन, सोशल मीडिया इंटिग्रेशन आणि स्वयंचलित मोहिमा.",
        cta_title: "५,०००+ वाढत्या ब्रँड्समध्ये सामील व्हा",
        themes_badge: "साइट बिल्डर",
        themes_desc: "अमर्यादित सूची, एकात्म ईकॉमर्स वैशिष्ट्ये आणि तुमच्या ब्रँडला प्रसिद्ध बनवणाऱ्या थीम्ससह त्वरित लाँच करा.",
        themes_feat1: "प्रत्येक श्रेणीसाठी खरेदीसाठी अनुकूलित प्री-बिल्ट थीम्स",
        themes_feat2: "सोपे सानुकूलन - कोणत्याही कोडशिवाय तुम्हाला जे हवे आहे ते संपादित करा",
        themes_feat3: "सुधारित ग्राहक अनुभवासाठी जलद गतीने लोड होण्याची वेळ",
        tool_seo_title: "SEO साधने आणि सोशल मीडिया इंटिग्रेशन",
        tool_seo_desc: "अंगभूत SEO ऑप्टिमायझेशन साधने उत्पादनांच्या सूचीला कीवर्डसह अनुकूल करतात जेणेकरून शोध इंजिनवर उच्च रँक मिळेल आणि अधिक रहदारी येईल.",
        tool_ads_title: "विनासायास जाहिरात प्लॅटफॉर्म इंटिग्रेशन",
        tool_ads_desc: "विक्री वाढवण्यासाठी आणि नवीन ग्राहकाने आकर्षित करण्यासाठी Google Ads आणि Meta (Facebook/Instagram) इंटिग्रेशनसह लक्ष्यित जाहिरात मोहिमा चालवा.",
        tool_auto_title: "प्रत्येक ग्राहक कृतीसाठी ऑटोमेशन",
        tool_auto_desc: "स्वयंचलित WhatsApp संदेशांसह पुन्हा व्यस्त व्हा आणि अधिक ग्राहक मिळवा. अर्धवट राहिलेल्या खरेदी (Abandoned carts) पुनर्प्राप्त करा, ऑर्डर कन्फर्मेशन पाठवा आणि बरेच काही.",
        site_builder_badge: "साइट बिल्डर",
        free_to_start_title: "सुरू करण्यासाठी मोफत. बचतीसाठी तयार.",
        zero_costs_title: "शून्य खर्च. वाट पाहण्याची कोणतीही कारणे नाहीत.",
        zero_costs_desc: "तुमचे स्टोअर आजच मोफत तयार करा. डिसेंबर २०२५ पर्यंत कोणतेही सबस्क्रिप्शन किंवा व्यवहार शुल्क नाही.",
        extra_costs_title: "अंगभूत साधने; कोणताही अतिरिक्त खर्च नाही",
        extra_costs_desc: "सर्व मूळ साधने अंगभूत किंवा पूर्व-एकात्मिक आहेत. कोणत्याही तृतीय-पक्ष प्लगइनचा त्रास नाही, कोणताही अतिरिक्त खर्च नाही.",
        conversion_title: "विक्रीसाठी (Conversion) अनुकूलित",
        conversion_desc: "उच्च-कार्यक्षमता असलेल्या थीम्सपासून ते एकात्मिक विकास साधनांपर्यंत, प्रत्येक गोष्ट तुम्हाला अभ्यागतांना ग्राहकांमध्ये बदलण्यात मदत करण्यासाठी डिझाइन केलेली आहे.",
        theme1_tag: "ज्वेलरी एडिट",
        theme1_name: "शाश्वत अभिजातता",
        theme1_cat: "सौम्य रंग, मऊ प्रकाश आणि संपादकीय ग्रिड्स",
        theme2_tag: "घर आणि सजावट",
        theme2_name: "निसर्ग संग्रह",
        theme2_cat: "हवेशीर मेसनरी लेआउटसह निसर्गाचा हिरवा रंग",
        theme3_tag: "अपेरल (कपडे)",
        theme3_name: "ऑरा स्टुडिओ",
        theme3_cat: "टोनल हायलाइट्ससह किमान सिल्हूट्स",
        theme4_tag: "ब्युटी आणि केअर",
        theme4_name: "ल्युना ग्लो",
        theme4_cat: "ठळक ग्रेडियंट्स आणि विक्री-केंद्रित ग्रिड्स",
        faq_q1: "SmartBiz खरंच मोफत आहे का?",
        faq_a1: "हो! SmartBiz डिसेंबर २०२५ पर्यंत पूर्णपणे मोफत आहे. कोणतीही सेटअप फी नाही, सबस्क्रिप्शन फी नाही आणि व्यवहार शुल्कही नाही. आजच शून्य खर्चात तुमचे स्टोअर तयार करण्यास सुरुवात करा.",
        faq_q2: "मला कोडिंग कौशल्यांची गरज आहे का?",
        faq_a2: "कोडिंग कौशल्यांची गरज नाही! SmartBiz मध्ये ड्रॅग-अँड-ड्रॉप नो-कोड एडिटर आहे जो तुम्हाला तुमचे स्टोअर दृष्यदृष्ट्या सानुकूलित करू देतो. कोणीही व्यावसायिक ई-कॉमर्स वेबसाइट तयार करू शकते.",
        faq_q3: "कोणत्या पेमेंट पद्धती समर्थित आहेत?",
        faq_a3: "SmartBiz UPI, क्रेडिट/डेबिट कार्ड, नेट बँकिंग आणि डिजिटल वॉलेटसह सर्व प्रमुख पेमेंट पद्धतींना सपोर्ट करते. फक्त एका क्लिकमध्ये पेमेंट सेटअप करा.",
        faq_q4: "मी माझ्या स्टोअरच्या डिझाइनला सानुकूलित करू शकतो का?",
        faq_a4: "नक्कीच! प्रत्येक श्रेणीसाठी ऑप्टिमाइझ केलेल्या आमच्या प्री-बिल्ट थीम्समधून निवडा आणि आमच्या नो-कोड एडिटरसह सहजपणे सानुकूलित करा. कोणत्याही तांत्रिक ज्ञानाची आवश्यकता नाही.",
        faq_q5: "मी इन्व्हेंटरी आणि ऑर्डर्स कसे व्यवस्थापित करू?",
        faq_a5: "SmartBiz मध्ये इन्व्हेंटरी, ऑर्डर्स आणि रिटर्न्स व्यवस्थापित करण्यासाठी सर्वसमावेशक डॅशबोर्ड समाविष्ट आहे. तुम्हाला हवे असलेले सर्व काही अंगभूत आहे आणि एकाच ठिकाणाहून उपलब्ध आहे.",
        faq_q6: "शिपिंगबद्दल काय?",
        faq_a6: "आम्ही तुम्हाला कमी खर्चात, विश्वसनीय शिपिंग पर्याय ऑफर करण्यासाठी अग्रगण्य शिपिंग भागीदारांशी हातमिळवणी केली आहे. डिलिव्हरी व्यवस्थापित करा आणि ऑर्डर्सचा विनासायास मागोवा घ्या.",
        cta_badge: "डिसेंबर २०२५ पर्यंत ०% फी",
        cta_desc: "आजच तुमचे ऑनलाइन स्टोअर तयार करण्यास सुरुवात करा. क्रेडिट कार्डची आवश्यकता नाही.",
        cta_btn: "मोफत नोंदणी करा (Sign-up)",
        f_col1_title: "वेबसाइट बिल्डर",
        f_col1_link1: "सखी स्टोअरद्वारे",
        f_col1_link2: "वैशिष्ट्ये",
        f_col1_link3: "ॲप डाउनलोड करा",
        f_col1_link4: "ट्यूटोरियल्स",
        f_col1_link5: "नवशिक्यांसाठी मार्गदर्शक",
        f_col1_link6: "डेमो बुक करा",
        f_col2_title: "ऑर्डर व्यवस्थापन",
        f_col2_link1: "स्मार्ट हब",
        f_col2_link2: "डेमो बुक करा",
        f_col3_title: "पूर्तता (FULFILLMENT)",
        f_col3_link1: "मल्टी-चॅनेल पूर्तता",
        f_col3_link2: "वैशिष्ट्ये",
        f_col3_link3: "डेमो बुक करा",
        f_col3_link4: "ट्यूटोरियल्स",
        f_col4_title: "संसाधने (RESOURCES)",
        f_col4_link1: "ब्लॉग",
        f_col4_link2: "यशाच्या कथा",
        f_col4_link3: "स्मार्ट अकादमी",
        f_col5_title: "कंपनी",
        f_col5_link1: "FAQs",
        review1_cat: "FMCG / वेलनेस ब्रँड",
        dl_badge: "नवीन आवृत्ती उपलब्ध",
        dl_title: "आत्ता डाउनलोड करा",
        dl_desc: "सखी स्टोअर मोबाईल इकोसिस्टमसह तुमचा व्यवसाय सक्षम करा. अखंड व्यवस्थापन, जलद ऑपरेशन्स.",
        dl_version_label: "आवृत्ती (Version):",
        dl_android_label: "अँड्रॉइड (Android):",
        dl_android_val: "६.० आणि त्यावरील",
        dl_btn_main: "APK डाउनलोड करा (v1.0.1)",
        dl_inst_title: "स्थापित करण्याच्या (Installation) सूचना:",
        dl_inst_1: "वरील बटणावरून <strong>Sakhi.apk</strong> फाइल डाउनलोड करा.",
        dl_inst_2: "तुमच्या डिव्हाइसच्या <strong>डाउनलोड (Downloads)</strong> फोल्डरमध्ये फाइल शोधा.",
        dl_inst_3: "फाइलवर टॅप करा आणि <strong>\"स्थापित करा\" (Install)</strong> वर क्लिक करा.",
        dl_inst_4: "विचारल्यास, तुमच्या सेटिंग्जमध्ये <strong>\"अनोळखी स्त्रोतांकडून स्थापित करा\" (Install from Unknown Sources)</strong> सक्षम करा.",
        dl_inst_5: "सखी ॲप उघडा आणि तुमचा प्रवास सुरू करण्यासाठी लॉग इन करा!",
        signup_title: "D2C कॉमर्समधील क्रांतीमध्ये सामील व्हा",
        signup_text: "आम्ही लवकरच लाँच करत आहोत. आम्ही केव्हा लाइव्ह जाऊ हे जाणून घेणारे पहिले व्हा आणि विशेष लवकर प्रवेश लाभ मिळवा.",
        signup_placeholder: "तुमचा ईमेल पत्ता प्रविष्ट करा",
        signup_btn: "लवकर प्रवेश मिळवा",
        signup_back: "&larr; मुख्यपृष्ठावर परत जा",
        review1_title: "\"FMCG ब्रँड्स ज्या वेगाने पुढे जातात ते SmartBiz ला समजते.\"",
        review1_quote: "\"नवीन SKU लाँच करणे पूर्वी त्रासदायक होते, परंतु SmartBiz ने ते सहज केले. त्यांचे विश्लेषण डॅशबोर्ड नेमके काय विकले जात आहे, आम्ही कुठे नफा गमावत आहोत आणि मागणी कुठे वाढत आहे हे दर्शविते. यामुळे आम्ही निर्णय घेण्याची पद्धत बदलली आहे.\"",
        review1_author: "नेहा कुलकर्णी",
        review1_role: "संस्थापक, PureLeaf Naturals",
        review2_cat: "होम आणि लाइफस्टाइल ब्रँड",
        review2_title: "\"पहिल्या दिवसापासून, SmartBiz एक भागीदार बनला आहे—विक्रेता नाही.\"",
        review2_quote: "\"आमची ओम्नीचॅनेल विक्री वाढल्यामुळे आम्ही स्केलेबल सोल्यूशन शोधत होतो. SmartBiz ने केवळ आमचा दैनंदिन ऑपरेशन्सचा त्रास सोडवला नाही तर आम्हाला अशा इनसाइट्स आणि सर्वोत्तम पद्धतींसह मार्गदर्शन केले ज्यामुळे आमच्या डिलिव्हरीचा वेग आणि ग्राहकांचे समाधान सुधारले.\"",
        review2_author: "सागर जैन",
        review2_role: "CEO, CasaCraft Living",
        review3_cat: "फूटवेअर आणि अपेरल ब्रँड",
        review3_title: "\"SmartBiz ने आम्ही वर्षानुवर्षे ज्या गुंतागुंतीशी झुंजत होतो त्या सोप्या केल्या आहेत.\"",
        review3_quote: "\"रिटर्न, एक्सचेंज, इन्व्हेंटरी एजिंग आणि व्हेंडर सेटलमेंटचा ट्रॅक ठेवणे एक भयानक स्वप्न होते. SmartBiz सह, सर्व काही पारदर्शक आणि स्वयंचलित आहे. आमच्या टीमकडे आता स्प्रेडशीटचा पाठलाग करण्याऐवजी रणनीतीसाठी वेळ आहे.\"",
        review3_author: "प्रवीण रेड्डी",
        review3_role: "सह-संस्थापक, StrideWalk",
        review4_cat: "ब्युटी आणि पर्सनल केअर ब्रँड",
        review4_title: "\"SmartBiz ने आम्ही आमचा वाढता उत्पादन पोर्टफोलिओ कसा व्यवस्थापित करतो हे बदलून टाकले आहे.\"",
        review4_quote: "\"आम्ही १० वरून १००+ SKU पर्यंत विस्तार केला म्हणून, इन्व्हेंटरी आणि ऑर्डर्स व्यवस्थापित करणे थकवणारे झाले. SmartBiz चे अंतर्ज्ञानी डॅशबोर्ड आणि स्वयंचलित वर्कफ्लो गेम-चेंजर ठरले आहेत. आता आम्ही ऑपरेशनल डोकेदुखीऐवजी उत्पादन नाविन्य आणि ग्राहक अनुभवावर लक्ष केंद्रित करू शकतो.\"",
        review4_author: "प्रिया वर्मा",
        review4_role: "संस्थापक आणि CEO, GlowEssence"
    }
};

// Enhanced Scroll Animations with staggered delays
document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const placeholderKey = el.getAttribute('data-i18n-placeholder');

            if (key && translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }

            if (placeholderKey && translations[lang] && translations[lang][placeholderKey]) {
                el.placeholder = translations[lang][placeholderKey];
            }
        });

        // Update active button
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save to localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Initialize from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLang !== 'en') {
        updateLanguage(savedLang);
    }

    // Improved observer options for smoother animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] // Multiple thresholds for progressive animation
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);

                // Keep observing for re-animation on scroll up (optional)
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when out of view for re-animation
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe all animate-on-scroll elements with staggered delays
    document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
        // Add data-delay attribute for staggered animation
        if (!element.dataset.delay) {
            element.dataset.delay = index * 100; // 100ms delay between each element
        }
        observer.observe(element);
    });

    // Enhanced scroll animations for feature cards (optional - cards already animate on load)
    // This ensures cards are visible when scrolled into view if they weren't initially
    const featureCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        featureCardObserver.observe(card);
    });

    // Smooth scroll behavior enhancement
    let lastScrollTop = 0;
    let ticking = false;

    function updateScrollEffects() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scroll-based effects here if needed
        // For example: parallax, header opacity, etc.

        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for missing images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Analytics placeholder (replace with your analytics code)
function trackEvent(eventName, eventData) {
    // Replace with your analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('.btn-cta, .btn-hero, .btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        trackEvent('cta_click', {
            button_text: this.textContent.trim(),
            button_location: this.closest('section')?.id || 'unknown'
        });
    });
});

// Track feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function () {
        const featureTitle = this.querySelector('h3')?.textContent.trim() || 'Unknown';
        trackEvent('feature_card_click', {
            feature_name: featureTitle,
            section: 'features'
        });

        // Optional: Add visual feedback on click
        this.style.transform = 'translateY(-4px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Track hover interactions (optional)
    let hoverStartTime = null;
    card.addEventListener('mouseenter', function () {
        hoverStartTime = Date.now();
    });

    card.addEventListener('mouseleave', function () {
        if (hoverStartTime) {
            const hoverDuration = Date.now() - hoverStartTime;
            if (hoverDuration > 1000) { // Track if hovered for more than 1 second
                const featureTitle = this.querySelector('h3')?.textContent.trim() || 'Unknown';
                trackEvent('feature_card_hover', {
                    feature_name: featureTitle,
                    hover_duration: hoverDuration
                });
            }
            hoverStartTime = null;
        }
    });
});
// Professional Download Handler
document.querySelectorAll('.download-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        // We don't preventDefault so the standard download still triggers
        // but we add a nice visual feedback (toast/notification)
        showDownloadFeedback();

        trackEvent('apk_download_initiated', {
            location: this.classList.contains('nav-link') ? 'navbar' :
                this.classList.contains('btn-primary') ? 'header' : 'hero'
        });
    });
});

function showDownloadFeedback() {
    // Create a toast notification if it doesn't exist
    let toast = document.getElementById('download-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'download-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: #e91e63;
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(233, 30, 99, 0.4);
            z-index: 10000;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: all 0.3s ease;
        `;
        toast.innerHTML = '<span>🚀 Starting your download...</span>';
        document.body.appendChild(toast);
    }

    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.bottom = '40px';
    }, 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.bottom = '30px';
    }, 3000);
}
