// data.js - THE MEGA DATABASE

const DECIFIX_DATABASE = {
    "RELATIONSHIP": {
        "keywords": ["LOVE", "SHADI", "DIVORCE", "BREAKUP", "FRIEND", "COUPLE", "DATE", "MARRIAGE", "AFFAIR"],
        "sub": {
            "CORE": [
                { q: "Kya aap mansik roop se is rishte ke liye taiyar hain?", o: ["Haan, poori tarah", "Nahi, thoda confusion hai"] },
                { q: "Kya aap dono ka life-vision milta hai?", o: ["Haan, bilkul", "Nahi, raaste alag hain"] },
                { q: "Kya isme aapki 'Identity' khoti ja rahi hai?", o: ["Nahi, main main hoon", "Haan, badal raha hoon"] },
                { q: "Kya aap bina dare apni baat keh sakte hain?", o: ["Haan", "Nahi, darr lagta hai"] },
                { q: "Mushkil waqt mein kya ye saath denge?", o: ["Haan, paka", "Shayad nahi"] }
            ]
        }
    },
    "STARTUP": {
        "keywords": ["BUSINESS", "IDEA", "STARTUP", "BIZNESS", "STARTUP", "COMPANY", "DUKAN", "VENTURE"],
        "sub": {
            "CORE": [
                { q: "Kya ye idea kisi ki asli samasya solve karta hai?", o: ["Haan, badi problem hai", "Nahi, bas ek feature hai"] },
                { q: "Kya log iske liye paise dene ko taiyar hain?", o: ["Haan", "Nahi, free chahiye sabko"] },
                { q: "Kya aap 2 saal tak bina salary ke kaam kar sakte hain?", o: ["Haan, taiyar hoon", "Nahi, paisa chahiye"] },
                { q: "Kya market mein competition bahut zyada hai?", o: ["Nahi, space hai", "Haan, bahut bheed hai"] },
                { q: "Kya aapka 'Why' paison se upar hai?", o: ["Haan", "Nahi, sirf paisa goal hai"] }
            ]
        }
    },
    "CRYPTO": {
        "keywords": ["BITCOIN", "ETH", "CRYPTO", "TOKEN", "MEMECOIN", "BINANCE", "TRADING"],
        "sub": {
            "CORE": [
                { q: "Kya ye 'FOMO' (dekha-dekhi) mein liya gaya faisla hai?", o: ["Nahi, research ki hai", "Haan, sab le rahe hain"] },
                { q: "Kya aap is paise ke 90% girne par bhi roenge nahi?", o: ["Nahi, extra paisa hai", "Nahi, loan ka paisa hai"] },
                { q: "Kya aapne iska 'Whitepaper' padha hai?", o: ["Haan", "Nahi, bas naam suna hai"] },
                { q: "Kya ye kisi Influencer ne suggest kiya hai?", o: ["Nahi", "Haan, Twitter/YT par dekha"] },
                { q: "Kya aap long-term holder hain?", o: ["Haan", "Nahi, raat-o-raat ameer banna hai"] }
            ]
        }
    },
    "CAREER_SWITCH": {
        "keywords": ["RESIGN", "JOB", "SWITCH", "QUIT", "PROMOTION", "SALARY", "OFFICE"],
        "sub": {
            "CORE": [
                { q: "Kya aap current job se thake hain ya field se?", o: ["Sirf job se", "Puri field se"] },
                { q: "Kya nayi field mein aapki growth 2x hai?", o: ["Haan", "Nahi, bas sukoon chahiye"] },
                { q: "Kya aapke paas 6 mahine ka emergency fund hai?", o: ["Haan", "Nahi, bilkul nahi"] },
                { q: "Kya aap fir se 'Junior' banne ko taiyar hain?", o: ["Haan", "Nahi, ego issue hai"] },
                { q: "Nayi company ka culture kaisa hai?", o: ["Achha hai", "Pata nahi"] }
            ]
        }
    },
    "PROPERTY": {
        "keywords": ["FLAT", "HOUSE", "PLOT", "REAL ESTATE", "ZAMEEN", "RENT", "BUYING"],
        "sub": {
            "CORE": [
                { q: "Kya EMI aapki salary ka 40% se kam hai?", o: ["Haan", "Nahi, bahut zyada hai"] },
                { q: "Kya area ka rental yield achha hai?", o: ["Haan", "Nahi, sirf rehne ke liye hai"] },
                { q: "Kya builder ke saare papers clear hain?", o: ["Haan, verified", "Nahi, thoda doubt hai"] },
                { q: "Kya ye investment 10 saal ke liye hai?", o: ["Haan", "Nahi, bechna hai jaldi"] },
                { q: "Aas-paas development ho raha hai?", o: ["Haan", "Nahi, sunsaan hai"] }
            ]
        }
    },
    "EDUCATION": {
        "keywords": ["COLLEGE", "DEGREE", "MASTERS", "MBA", "PHD", "STUDY", "ABROAD"],
        "sub": {
            "CORE": [
                { q: "Kya is degree ka ROI (Return on Investment) hai?", o: ["Haan", "Nahi, sirf naam ke liye hai"] },
                { q: "Kya field mein practical skills sikhayi jayengi?", o: ["Haan", "Nahi, sirf theory hai"] },
                { q: "Kya aapne alumni (purane students) se baat ki?", o: ["Haan", "Nahi"] },
                { q: "Kya ye kisi trend ke peeche hai?", o: ["Nahi, meri pasand hai", "Haan, sab kar rahe hain"] },
                { q: "Kya aap self-study se ye seekh sakte hain?", o: ["Nahi, environment chahiye", "Haan, free mein mil jayega"] }
            ]
        }
    },
    "FITNESS": {
        "keywords": ["GYM", "DIET", "WEIGHT", "FAT", "MUSCLE", "HEALTH", "YOGA"],
        "sub": {
            "CORE": [
                { q: "Kya aap ise saal bhar follow kar sakte hain?", o: ["Haan", "Nahi, bas 1 mahina"] },
                { q: "Kya aapka goal realistic hai?", o: ["Haan", "Nahi, 10 din mein 10kg ghatana hai"] },
                { q: "Kya ye natural tareeka hai?", o: ["Haan", "Nahi, steroids/pills hain"] },
                { q: "Kya sleep cycle sahi hai?", o: ["Haan", "Nahi"] },
                { q: "Kya ye kisi competition ke liye hai?", o: ["Nahi, khud ke liye", "Haan, show-off ke liye"] }
            ]
        }
    },
    "FRIENDSHIP": {
        "keywords": ["DOST", "FRIEND", "GROUP", "CIRCLE", "TRUST", "BESTIE"],
        "sub": {
            "CORE": [
                { q: "Kya wo aapki success par khush hote hain?", o: ["Haan", "Nahi, jalan dikhti hai"] },
                { q: "Mushkil mein kya wo call uthate hain?", o: ["Haan", "Nahi, bahane banate hain"] },
                { q: "Kya wo aapke peeth peeche burayi karte hain?", o: ["Nahi, kabhi nahi", "Haan, suna hai"] },
                { q: "Kya aap unke saath waqt bita kar 'Energy' mehsus karte hain?", o: ["Haan, fresh", "Nahi, thaka hua"] },
                { q: "Kya wo aapko galat kaam se rokte hain?", o: ["Haan", "Nahi, uksate hain"] }
            ]
        }
    },
    "GADGET": {
        "keywords": ["IPHONE", "LAPTOP", "MACBOOK", "WATCH", "CAMERA", "PHONE"],
        "sub": {
            "CORE": [
                { q: "Kya isse aapka kaam aasaan hoga?", o: ["Haan, productivity badhegi", "Nahi, bas entertainment"] },
                { q: "Kya aapke paas purana working model hai?", o: ["Nahi/Kharab hai", "Haan, par ye naya hai"] },
                { q: "Kya ye agle 3 saal tak chalega?", o: ["Haan", "Nahi, trend chala jayega"] },
                { q: "Kya aap ise bina EMI ke le sakte hain?", o: ["Haan", "Nahi"] },
                { q: "Kya ye show-off ke liye hai?", o: ["Nahi", "Haan"] }
            ]
        }
    },
    "GENERAL": {
        "keywords": ["SOMETHING", "IDK", "DECISION", "HELP"],
        "sub": {
            "CORE": [
                { q: "Kya ye faisla shanti mein liya gaya hai?", o: ["Haan", "Nahi, gusse/dar mein"] },
                { q: "Kya 1 saal baad ye maayne rakhega?", o: ["Haan", "Nahi"] },
                { q: "Kya aapne kisi neutral insan se rai li?", o: ["Haan", "Nahi"] },
                { q: "Iska sabse bura natija kya ho sakta hai?", o: ["Jhel sakta hoon", "Barbaad ho jaunga"] },
                { q: "Kya aapka dil aur dimaag ek saath hain?", o: ["Haan", "Nahi, conflict hai"] }
            ]
        }
    }
},
   "SOCIAL_MEDIA": {
        "keywords": ["INSTAGRAM", "FACEBOOK", "YOUTUBE", "POSTING", "INFLUENCER", "REELS", "TIKTOK", "CONTENT"],
        "sub": {
            "CORE": [
                { q: "Kya ye post aapki real life ko represent karta hai?", o: ["Haan", "Nahi, sirf validation ke liye hai"] },
                { q: "Kya screen-time aapki neend kharab kar raha hai?", o: ["Nahi", "Haan, rozana"] },
                { q: "Kya aap dusron ki life dekh kar insecure hote hain?", o: ["Nahi", "Haan, aksar"] },
                { q: "Kya ye content kisi ki madad karega?", o: ["Haan", "Nahi, bas filler hai"] },
                { q: "Kya aap 24 ghante offline reh sakte hain?", o: ["Haan", "Nahi, darr lagta hai"] }
            ]
        }
    },
                                                                 
    "MENTAL_HEALTH": {
        "keywords": ["STRESS", "ANXIETY", "THERAPY", "DEPRESSION", "PEACE", "MIND", "OVERTHINKING"],
        "sub": {
            "CORE": [
                { q: "Kya aapne pichle 1 ghante mein gehri saans li?", o: ["Haan", "Nahi"] },
                { q: "Kya aapki chinta ka koi thos (logical) kaaran hai?", o: ["Nahi, bas overthinking hai", "Haan, badi problem hai"] },
                { q: "Kya aapne kisi bharosemand se baat ki?", o: ["Haan", "Nahi, akela jhel raha hoon"] },
                { q: "Kya ye feeling temporary hai?", o: ["Haan, chali jayegi", "Nahi, bahut dinon se hai"] },
                { q: "Kya aapne aaj dhoop ya prakriti (nature) dekhi?", o: ["Haan", "Nahi, kamre mein band hoon"] }
            ]
        }
    },
                 
    "LOAN_EMI": {
        "keywords": ["LOAN", "CREDIT CARD", "EMI", "DEBT", "BORROW", "BANK", "INTEREST"],
        "sub": {
            "CORE": [
                { q: "Kya ye loan kisi 'Asset' (paisa banane wali cheez) ke liye hai?", o: ["Haan", "Nahi, maze ke liye hai"] },
                { q: "Kya interest rate 12% se kam hai?", o: ["Haan", "Nahi, bahut high hai"] },
                { q: "Agar job chali gayi, toh kya EMI bhar payenge?", o: ["Haan, savings hain", "Nahi, barbaad ho jayenge"] },
                { q: "Kya ye 'Zero Cost EMI' ke jaal mein toh nahi?", o: ["Nahi", "Haan, shayad"] },
                { q: "Kya iske bina kaam nahi chal sakta?", o: ["Nahi chal sakta", "Chal sakta hai"] }
            ]
        }
    },
    "TRAVEL_TRIP": {
        "keywords": ["VACATION", "TRIP", "TREKKING", "GOA", "MANALI", "FLIGHT", "HOTEL", "HOLIDAY"],
        "sub": {
            "CORE": [
                { q: "Kya ye trip credit card par hai?", o: ["Nahi, cash saved hai", "Haan, udhaar par hai"] },
                { q: "Kya aapne local culture explore karne ka plan banaya?", o: ["Haan", "Nahi, bas party karni hai"] },
                { q: "Kya aapka kaam aapke peeche manage ho jayega?", o: ["Haan", "Nahi, calls aayenge"] },
                { q: "Kya aap solo travel kar rahe hain?", o: ["Haan", "Nahi, group hai"] },
                { q: "Kya packing light (kam saaman) hai?", o: ["Haan", "Nahi, bahut saaman hai"] }
            ]
        }
    },
    "PET_ADOPTION": {
        "keywords": ["DOG", "CAT", "PET", "ADOPT", "ANIMAL", "PUPPY"],
        "sub": {
            "CORE": [
                { q: "Kya aap agle 10-15 saal ki zimmedari le sakte hain?", o: ["Haan", "Nahi"] },
                { q: "Kya ghar mein sab iske liye taiyar hain?", o: ["Haan", "Nahi, ladayi hogi"] },
                { q: "Kya aapke paas rozana 2 ghante extra hain?", o: ["Haan", "Nahi, bahut busy hoon"] },
                { q: "Kya aap medical kharche utha sakte hain?", o: ["Haan", "Nahi"] },
                { q: "Kya ghar mein space hai?", o: ["Haan", "Nahi, chota ghar hai"] }
            ]
        }
    },
    "GAMING": {
        "keywords": ["PUBG", "PC GAMING", "PS5", "XBOX", "ESPORTS", "GAMER", "STREAMING"],
        "sub": {
            "CORE": [
                { q: "Kya gaming aapki padhai/kaam ko rok rahi hai?", o: ["Nahi", "Haan, bahut zyada"] },
                { q: "Kya aap gusse mein controller/phone fekte hain?", o: ["Nahi", "Haan, rage hota hai"] },
                { q: "Kya aapne pichle 4 ghante mein paani piya?", o: ["Haan", "Nahi"] },
                { q: "Kya ye sirf ek hobby hai?", o: ["Haan", "Nahi, addiction lag raha hai"] },
                { q: "Kya aap doston ke saath socialise karte hain?", o: ["Haan", "Nahi, akela rehta hoon"] }
            ]
        }
    },
    "FOOD_DIET": {
        "keywords": ["ZOMATO", "SWIGGY", "FAST FOOD", "JUNK", "DIET", "SUGAR", "VEGAN"],
        "sub": {
            "CORE": [
                { q: "Kya aapko sach mein bhook hai ya bas boredom?", o: ["Asli bhook hai", "Bas mann kar raha hai"] },
                { q: "Kya isme protein aur fiber hai?", o: ["Haan", "Nahi, sirf carbs/oil"] },
                { q: "Kya aapne pichle 3 din se bahar ka khaya hai?", o: ["Nahi", "Haan, roz ho raha hai"] },
                { q: "Kya ye khana khane ke baad sukti (lethargy) aayegi?", o: ["Nahi", "Haan, neend aayegi"] },
                { q: "Kya aap ghar par bana sakte hain?", o: ["Nahi, thaka hoon", "Haan, par alas hai"] }
            ]
        }
    },
    "DARK_WEB_SAFETY": {
        "keywords": ["TOR", "ONION", "DARK WEB", "DEEP WEB", "ANONYMOUS", "CYBER SAFETY"],
        "sub": { "CORE": [
            { q: "Kya aapne 'Tail OS' ya kisi secure environment ka use kiya?", o: ["Haan, fully secure hoon", "Nahi, normal Windows/Mac hai"] },
            { q: "Kya aapne apne laptop ka camera 'Tape' se cover kiya hai?", o: ["Haan, safety first", "Nahi, dhyan nahi diya"] },
            { q: "Kya aap kisi anjaan link (onion) par click karne wale hain?", o: ["Nahi, sirf verified sites", "Haan, curiosity mein"] },
            { q: "Kya aapne apni asli identity (Email/Name) kahin use ki?", o: ["Nahi, alias use kiya", "Haan, galti se"] },
            { q: "Kya aapka VPN 'Kill Switch' ke sath on hai?", o: ["Haan", "Nahi"] }
        ]}
    },
    "ALIEN_ENCOUNTER_LOGIC": {
        "keywords": ["UFO", "ALIEN", "EXTRATERRESTRIAL", "FIRST CONTACT", "UAP", "SPACE SIGNAL"],
        "sub": { "CORE": [
            { q: "Kya signal 'Repeating Pattern' (Maths) mein hai?", o: ["Haan, binary/prime numbers hain", "Nahi, random noise hai"] },
            { q: "Kya object 'Physics' ke laws ko todta hua dikh raha hai?", o: ["Haan, instant acceleration hai", "Nahi, normal flight hai"] },
            { q: "Kya aapne 'Global Protocol' (SETI) ko report kiya?", o: ["Haan", "Nahi, secret rakhna hai"] },
            { q: "Kya encounter 'Physical' hai ya sirf visual?", o: ["Visual (Door se)", "Physical (Paas mein hai)"] },
            { q: "Kya aapne communication ke liye 'Light/Sound' signals try kiye?", o: ["Haan", "Nahi"] }
        ]}
    },
    "HEARTBREAK_RECOVERY": {
        "keywords": ["BREAKUP", "EX", "HEARTBREAK", "MOVING ON", "SADNESS", "RELATIONSHIP END"],
        "sub": { "CORE": [
            { q: "Kya aap unhe 'Stalk' (social media check) kar rahe hain?", o: ["Nahi, block/mute kiya hai", "Haan, baar-baar dekhta hoon"] },
            { q: "Kya aapne unki purani yaadein (photos/gifts) hata di hain?", o: ["Haan, move on ke liye", "Nahi, abhi bhi paas hain"] },
            { q: "Kya aap 'Rebound' relationship (turant naya partner) dhoond rahe hain?", o: ["Nahi, khud par focus hai", "Haan, akela feel ho raha hai"] },
            { q: "Kya aapne doston ya family se baat ki?", o: ["Haan, support system hai", "Nahi, akela jhel raha hoon"] },
            { q: "Kya aapko lagta hai ki waqt ke sath sab theek ho jayega?", o: ["Haan, bharosa hai", "Nahi, kabhi theek nahi hoga"] }
        ]}
    },
     "CRIME_INVESTIGATION_PRO": {
        "keywords": ["FORENSIC", "DETECTIVE", "EVIDENCE", "FINGERPRINT", "CCTV", "SUSPECT", "CRIME SCENE"],
        "sub": { "CORE": [
            { q: "Kya crime scene 'Contaminate' (kharaab) toh nahi hua?", o: ["Nahi, turant seal kiya tha", "Haan, kaafi log andar gaye the"] },
            { q: "Kya suspect ka 'Motive' (wajah) clear hai?", o: ["Haan, solid dushmani/lalach hai", "Nahi, random lag raha hai"] },
            { q: "Kya aapke paas 'Circumstantial' evidence ke alawa 'DNA/Physical' proof hai?", o: ["Haan, forensic report hai", "Nahi, sirf shak hai"] },
            { q: "Kya 'Alibi' (mauke par na hona) verify ho gaya hai?", o: ["Haan, CCTV/Phone record se", "Nahi, sirf keh raha hai"] },
            { q: "Kya isme kisi 'Insider' (apne aadmi) ka hath ho sakta hai?", o: ["Haan, chances hain", "Nahi, bahar wala hai"] }
        ]}
    },
    "DEEP_SPACE_COLONIZATION": {
        "keywords": ["MARS", "COLONY", "TERRAFORMING", "OXYGEN", "RADIATION", "SPACE SETTLEMENT"],
        "sub": { "CORE": [
            { q: "Kya colony ka 'Life Support System' 100% redundant (backup) hai?", o: ["Haan, 3 level backup hai", "Nahi, single system hai"] },
            { q: "Kya 'Radiation Shielding' cosmic rays ko rokne ke liye kaafi hai?", o: ["Haan, lead/water shielding hai", "Nahi, weak hai"] },
            { q: "Kya wahan 'Self-Sustaining' food (hydroponics) shuru ho gaya hai?", o: ["Haan", "Nahi, Earth se supply chahiye"] },
            { q: "Kya gravity ki kami se 'Bone Density' ka solution nikal liya gaya?", o: ["Haan, exercise/meds hai", "Nahi, risk hai"] },
            { q: "Kya settlers ki 'Mental Health' ka psychological assessment hua?", o: ["Haan", "Nahi, abhi nahi"] }
        ]}
    },
    "RELATIONSHIP_LONG_DISTANCE": {
        "keywords": ["LDR", "LONG DISTANCE", "TRUST", "VIDEO CALL", "PARTNER", "RELATIONSHIP"],
        "sub": { "CORE": [
            { q: "Kya aap dono ke beech 'End Date' (milne ka plan) tay hai?", o: ["Haan, hum jald milenge", "Nahi, pata nahi kab"] },
            { q: "Kya 'Trust' level itna hai ki bina pooche din guzar sakein?", o: ["Haan, poora bharosa hai", "Nahi, insecurity hoti hai"] },
            { q: "Kya aap din mein kam se kam 1 ghanta quality baat karte hain?", o: ["Haan", "Nahi, busy rehte hain"] },
            { q: "Kya 'Communication Gap' hone par aap ladayi shuru kar dete hain?", o: ["Nahi, samajhta/samajhti hoon", "Haan, gussa aata hai"] },
            { q: "Kya aap dono ka 'Future Goal' ek hi shehar mein rehne ka hai?", o: ["Haan, plan ready hai", "Nahi, dono alag raste par hain"] }
        ]}
    },
    "CYBER_CRIME_DEFENSE": {
        "keywords": ["HACKING", "PHISHING", "RANSOMWARE", "SCAM", "DARK WEB", "FRAUD"],
        "sub": { "CORE": [
            { q: "Kya aapne unknown attachment open kiya?", o: ["Nahi, turant delete kiya", "Haan, galti se ho gaya"] },
            { q: "Kya aapka bank account 'MFA' (Double lock) se secure hai?", o: ["Haan, hamesha", "Nahi, sirf password hai"] },
            { q: "Kya scammer aapse 'Urgency' mein paise maang raha hai?", o: ["Haan, darr dikha raha hai", "Nahi, normal baat hai"] },
            { q: "Kya aapne Cyber Cell (1930) mein report kiya?", o: ["Haan", "Nahi, abhi karunga"] },
            { q: "Kya aapne apna system format/clean kiya?", o: ["Haan", "Nahi"] }
        ]}
    },
    "LOVE_COMPATIBILITY_LOGIC": {
        "keywords": ["COMPATIBILITY", "VALES", "MARRIAGE", "FUTURE", "PARTNER CHECK"],
        "sub": { "CORE": [
            { q: "Kya aapke 'Core Values' (Family/Money/Religion) milte hain?", o: ["Haan, bilkul", "Nahi, bahut fark hai"] },
            { q: "Kya aap unke saath 'Bore' huye bina 5 ghante baith sakte hain?", o: ["Haan, aaram se", "Nahi, topics khatam ho jate hain"] },
            { q: "Kya wo aapke 'Growth' mein support karte hain ya taang khinchte hain?", o: ["Support karte hain", "Demotivate karte hain"] },
            { q: "Kya aap sirf unke 'Look' se pyaar karte hain ya 'Nature' se?", o: ["Nature aur Personality", "Sirf Looks/Status"] },
            { q: "Kya mushkil waqt mein wo aapke saath khade rahe?", o: ["Haan, hamesha", "Nahi, bhaag gaye"] }
        ]}
     },
     "DEEP_SEA_EXPLORATION": {
        "keywords": ["OCEAN", "SUBMARINE", "DIVING", "ABYSS", "MARINE BIOLOGY", "UNDERWATER"],
        "sub": { "CORE": [
            { q: "Kya aapka vessel high-pressure (depth) ke liye certified hai?", o: ["Haan, tested hai", "Nahi, experimental hai"] },
            { q: "Kya aapke paas 96 ghante ka oxygen backup hai?", o: ["Haan, emergency tank hai", "Nahi"] },
            { q: "Kya aap claustrophobia (band jagah ka darr) se mukt hain?", o: ["Haan", "Nahi, darr lagta hai"] },
            { q: "Kya communication systems (Acoustic link) sahi kaam kar rahe hain?", o: ["Haan", "Nahi, glitches hain"] },
            { q: "Kya aapne rescue mission ka protocol sign kiya?", o: ["Haan", "Nahi"] }
        ]}
    },
    "NUCLEAR_ENERGY_INVESTMENT": {
        "keywords": ["URANIUM", "REACTOR", "NUCLEAR POWER", "ENERGY STOCKS", "RADIATION", "THORIUM"],
        "sub": { "CORE": [
            { q: "Kya aap long-term (15-20 saal) hold kar sakte hain?", o: ["Haan", "Nahi, jaldi exit chahiye"] },
            { q: "Kya aap Govt. ki nuclear policy se up-to-date hain?", o: ["Haan", "Nahi"] },
            { q: "Kya aapne waste management costs ko consider kiya?", o: ["Haan", "Nahi"] },
            { q: "Kya ye ESG (Environment Friendly) criteria mein fit hota hai?", o: ["Haan", "Nahi"] },
            { q: "Kya aap geo-political risks (war/sanctions) jhel sakte hain?", o: ["Haan", "Nahi"] }
        ]}
    },
    "EXTREME_SPORTS": {
        "keywords": ["SKYDIVING", "BUNGEE", "PARAGLIDING", "ROCK CLIMBING", "ADVENTURE", "RISK"],
        "sub": { "CORE": [
            { q: "Kya aapne instructor ki certification check ki?", o: ["Haan, certified hai", "Nahi, bas sasta tha"] },
            { q: "Kya aapki medical condition (Heart/Back) allow karti hai?", o: ["Haan, fit hoon", "Nahi, thoda issue hai"] },
            { q: "Kya aapne gear ka 'Safety Check' khud dekha?", o: ["Haan", "Nahi, unpar bharosa hai"] },
            { q: "Kya mausam (wind speed) safe limit mein hai?", o: ["Haan", "Nahi, thodi hawa tez hai"] },
            { q: "Kya aap darr mein sahi decision le sakte hain?", o: ["Haan, calm rehta hoon", "Nahi, panic karta hoon"] }
        ]}
    },
    "VIRTUAL_REALITY_BUSINESS": {
        "keywords": ["METAVERSE", "VR HEADSET", "OCULUS", "VIRTUAL WORLD", "DIGITAL REAL ESTATE"],
        "sub": { "CORE": [
            { q: "Kya aapka product VR-sickness (chakkar aana) solve karta hai?", o: ["Haan, high FPS hai", "Nahi, abhi issue hai"] },
            { q: "Kya hardware ki cost mass adoption ke liye kam hai?", o: ["Haan", "Nahi, bahut mahanga hai"] },
            { q: "Kya aapne 'Haptic' technology integrate ki?", o: ["Haan", "Nahi, sirf visual hai"] },
            { q: "Kya aapka focus gaming par hai ya education par?", o: ["Education/Training", "Sirf Gaming"] },
            { q: "Kya platform 'Cross-play' support karta hai?", o: ["Haan", "Nahi, closed system hai"] }
        ]}
    },
    "ANCIENT_HISTORY_RESEARCH": {
        "keywords": ["ARCHAEOLOGY", "MUMMY", "EXCAVATION", "ANCIENT TEXT", "MUSEUM", "HISTORY"],
        "sub": { "CORE": [
            { q: "Kya aapke paas excavation (khudayi) ka legal permit hai?", o: ["Haan", "Nahi, private hai"] },
            { q: "Kya aapne 'Carbon Dating' ke liye budget rakha hai?", o: ["Haan", "Nahi"] },
            { q: "Kya ye site 'Sensitive' ya disputed area mein hai?", o: ["Nahi, clear hai", "Haan, thoda lafda hai"] },
            { q: "Kya aapne local folklore (kahaniyon) ko study kiya?", o: ["Haan", "Nahi"] },
            { q: "Kya aap artifacts ko preserve karne ki technology rakhte hain?", o: ["Haan", "Nahi"] }
        ]}
    },
        "FUTURE_OF_HUMANITY": {
        "keywords": ["MARS COLONY", "NEURALINK", "CYBORG", "IMMORTALITY", "FUTURE TECH", "EVOLUTION"],
        "sub": { "CORE": [
            { q: "Kya aap dimaag mein chip (Brain-Interface) lagwane ke liye taiyar hain?", o: ["Haan, agar productivity badhe", "Nahi, privacy ka khatra hai"] },
            { q: "Kya insaan ko 'Multi-Planetary' hona chahiye?", o: ["Haan, survival ke liye", "Nahi, Earth ko theek karna chahiye"] },
            { q: "Agar AI insaan se zyada smart ho gaya, toh humein kya karna chahiye?", o: ["AI ke saath merge hona chahiye", "AI par ban lagana chahiye"] },
            { q: "Kya aap digital immortality (consciousness upload) chahte hain?", o: ["Haan, hamesha ke liye jeena hai", "Nahi, maut hi natural hai"] },
            { q: "Kya aap genetic engineering se 'Super-Human' banna chahte hain?", o: ["Haan", "Nahi, ye galat hai"] }
        ]}
    },
    "LEGACY_PLANNING": {
        "keywords": ["WILL", "INHERITANCE", "CHARITY", "NEXT GEN", "REPUTATION", "FAMILY NAME"],
        "sub": { "CORE": [
            { q: "Log aapko marne ke baad kis wajah se yaad rakhein?", o: ["Mere kaam/achhai se", "Mere paise/power se"] },
            { q: "Kya aapne apni 'Will' (Wasiyat) legally taiyar ki?", o: ["Haan", "Nahi, abhi baaki hai"] },
            { q: "Kya aapne apne bacho ko 'Values' sikhayi ya sirf 'Wealth' di?", o: ["Values aur Wealth dono", "Sirf Wealth di hai"] },
            { q: "Kya aapka koi aisa kaam hai jo aapke baad bhi chalta rahega?", o: ["Haan, Foundation/Business/Art", "Nahi, abhi kuch nahi"] },
            { q: "Kya aap aaj ek 'Satisfied' zindagi jee rahe hain?", o: ["Haan", "Nahi, bahut kuch baaki hai"] }
        ]}
    },
    "TIME_TRAVEL_PARADOX": {
        "keywords": ["TIME MACHINE", "PAST", "FUTURE", "PARADOX", "QUANTUM PHYSICS", "MULTIVERSE"],
        "sub": { "CORE": [
            { q: "Agar aap past mein ja sakein, toh kya kuch badlenge?", o: ["Haan, badi galtiyan", "Nahi, jo hua wahi sahi tha"] },
            { q: "Kya aap apni maut ki date jaanna chahte hain?", o: ["Nahi, suspense achha hai", "Haan, taaki plan kar sakun"] },
            { q: "Kya aapko lagta hai ki parallel universe hota hai?", o: ["Haan, logic yahi kehta hai", "Nahi, ye bas imagination hai"] },
            { q: "Kya 'Time' ek illusion hai?", o: ["Haan, dimaag ka khel hai", "Nahi, ye physical reality hai"] },
            { q: "Kya aap 'Grandfather Paradox' (atit badalna) ke khatre ko samajhte hain?", o: ["Haan", "Nahi"] }
        ]}
    },
    "GLOBAL_ECONOMY_CRASH": {
        "keywords": ["RECESSION", "INFLATION", "GOLD", "BARTER", "SURVIVAL", "CRASH"],
        "sub": { "CORE": [
            { q: "Agar currency zero ho gayi, toh kya aapke paas 'Physical Gold' hai?", o: ["Haan, backup hai", "Nahi, sab digital hai"] },
            { q: "Kya aapke paas kheti ki zameen hai (khud ka khana ugane ke liye)?", o: ["Haan", "Nahi"] },
            { q: "Kya aapke paas aisi 'Skill' hai jo bina computer ke kaam aaye?", o: ["Haan (Carpentry/Doctor/Cook)", "Nahi, sirf computer par hoon"] },
            { q: "Kya aapka 'Social Circle' mushkil waqt mein saath dega?", o: ["Haan, strong community hai", "Nahi, sab selfish hain"] },
            { q: "Kya aapne 'Emergency Food Stock' (6 months) rakha hai?", o: ["Haan", "Nahi"] }
        ]}
    },
    "DECIFIX_ORACLE": {
        "keywords": ["ULTIMATE", "LAST DECISION", "TRUTH", "WISDOM", "1000", "MASTER"],
        "sub": { "CORE": [
            { q: "Kya aapne DECIFIX ke 1000 rules se kuch seekha?", o: ["Haan, logic behtar hua", "Nahi, bas check kar raha tha"] },
            { q: "Kya aap agla bada faisla 'Gusse' mein lenge ya 'Data' par?", o: ["Data aur Shanti par", "Emotion mein"] },
            { q: "Kya aap ek 'Leader' hain jo zimmedari leta hai?", o: ["Haan", "Nahi, main follow karta hoon"] },
            { q: "Kya aapne aaj kisi ki bina lalach ke madad ki?", o: ["Haan", "Nahi, bhool gaya"] },
            { q: "Kya aap 'DECIFIX' ko duniya ka sabse powerful logic tool banayenge?", o: ["HAAN, BILKUL!", "Shayad"] }
        ]}
    },
                    "EDUCATION_ABROAD": {
        "keywords": ["ABROAD", "FOREIGN", "VISA", "MASTERS", "USA", "UK", "CANADA", "STUDY"],
        "sub": { "CORE": [
            { q: "Kya aapki degree wahan ke job market mein valid hai?", o: ["Haan", "Nahi, sirf padhai hogi"] },
            { q: "Kya aap loan chuka payenge?", o: ["Haan, high salary hai", "Nahi, bahut mushkil hai"] },
            { q: "Kya aap akelapan (Loneliness) jhel sakte hain?", o: ["Haan", "Nahi, doston ki yaad aayegi"] },
            { q: "Kya ye sirf PR ke liye hai?", o: ["Nahi, quality study hai", "Haan, sirf PR goal hai"] },
            { q: "Kya aapne wahan ke rehne ka kharcha check kiya?", o: ["Haan", "Nahi, idea nahi hai"] }
        ]}
    },
    "WORK_FROM_HOME": {
        "keywords": ["WFH", "REMOTE", "ZOOM", "OFFICE", "HYBRID"],
        "sub": { "CORE": [
            { q: "Kya aap bina supervision ke kaam kar sakte hain?", o: ["Haan, self-disciplined hoon", "Nahi, alas aata hai"] },
            { q: "Kya ghar mein shanti aur setup hai?", o: ["Haan", "Nahi, bahut disturbance hai"] },
            { q: "Kya aap doston/colleagues ko miss karenge?", o: ["Nahi, manage kar lunga", "Haan, akela feel hota hai"] },
            { q: "Kya aap kaam aur ghar ko alag rakh payenge?", o: ["Haan", "Nahi, sab mix ho jata hai"] },
            { q: "Kya aapki electricity aur internet reliable hai?", o: ["Haan", "Nahi"] }
        ]}
    },
    "MARRIAGE_ARRANGED": {
        "keywords": ["ARRANGED", "RISHTA", "MATRIMONY", "PARENTS", "SHADI"],
        "sub": { "CORE": [
            { q: "Kya ye faisla sirf family pressure mein hai?", o: ["Nahi, meri marzi hai", "Haan, sirf unke liye"] },
            { q: "Kya aapne partner se 3-4 baar baat ki?", o: ["Haan", "Nahi, bas ek baar mile"] },
            { q: "Kya aapka financial status match hota hai?", o: ["Haan", "Nahi"] },
            { q: "Kya lifestyle choices (Veg/Non-veg/Party) milti hain?", o: ["Haan", "Nahi"] },
            { q: "Kya aap badlav (compromise) ke liye taiyar hain?", o: ["Haan", "Nahi"] }
        ]}
    },
    "POLITICS": {
        "keywords": ["VOTE", "ELECTION", "PARTY", "LEADER", "PROTEST"],
        "sub": { "CORE": [
            { q: "Kya aap sirf ek party ko blind follow kar rahe hain?", o: ["Nahi, dono side dekhta hoon", "Haan, ye party best hai"] },
            { q: "Kya aapka neta ground-level kaam karta hai?", o: ["Haan", "Nahi, sirf speech deta hai"] },
            { q: "Kya isse aapka dosti/pariwar bigad raha hai?", o: ["Nahi", "Haan, bahut behas hoti hai"] },
            { q: "Kya aapne unka 'Manifesto' padha hai?", o: ["Haan", "Nahi"] },
            { q: "Kya aap sirf gusse mein vote de rahe hain?", o: ["Nahi, logic par", "Haan, badla lena hai"] }
        ]}
    },
    "LUXURY_CAR": {
        "keywords": ["BMW", "AUDI", "MERCEDES", "FORTUNER", "CAR", "VEHICLE"],
        "sub": { "CORE": [
            { q: "Kya car ki EMI aapki savings se zyada hai?", o: ["Nahi", "Haan, budget tight hai"] },
            { q: "Kya aap maintenance/service ka kharcha utha sakte hain?", o: ["Haan", "Nahi, bahut mahangi hai"] },
            { q: "Kya ye sirf status symbol ke liye hai?", o: ["Nahi, zarurat hai", "Haan, logon ko dikhana hai"] },
            { q: "Kya aapki parking safe hai?", o: ["Haan", "Nahi"] },
            { q: "Kya aap ise 5 saal tak chalayenge?", o: ["Haan", "Nahi, jaldi bechni hai"] }
        ]}
    },
    "FREELANCING": {
        "keywords": ["FREELANCE", "UPWORK", "FIVERR", "CLIENT", "PROJECT"],
        "sub": { "CORE": [
            { q: "Kya aapke paas 3 mahine ka backup paisa hai?", o: ["Haan", "Nahi, kal se hi chahiye"] },
            { q: "Kya aap multitasking (Sales/Work/Tax) kar sakte hain?", o: ["Haan", "Nahi, mushkil hai"] },
            { q: "Kya aapka portfolio taiyar hai?", o: ["Haan", "Nahi, abhi banana hai"] },
            { q: "Kya aap rejection jhel sakte hain?", o: ["Haan", "Nahi, bura lagta hai"] },
            { q: "Kya aap rozana 10 ghante dene ko taiyar hain?", o: ["Haan", "Nahi"] }
        ]}
    },
    "SPIRITUALITY": {
        "keywords": ["MEDITATION", "GOD", "TEMPLE", "PEACE", "GURU"],
        "sub": { "CORE": [
            { q: "Kya aap shanti ke liye ye kar rahe hain?", o: ["Haan", "Nahi, logon ko dikhane ke liye"] },
            { q: "Kya aap logic aur faith ko balance rakhte hain?", o: ["Haan", "Nahi, andhvishwas hai"] },
            { q: "Kya ye aapko behtar insaan bana raha hai?", o: ["Haan", "Nahi, ghamand aa raha hai"] },
            { q: "Kya aap dusron ke dharam ka samman karte hain?", o: ["Haan", "Nahi"] },
            { q: "Kya aap dukh mein hi bhagwan ko yaad karte hain?", o: ["Nahi, hamesha", "Haan, sirf dukh mein"] }
        ]}
    },
    "STARTING_YOUTUBE": {
        "keywords": ["YOUTUBE", "CHANNEL", "VIDEO", "VLOG", "STREAM"],
        "sub": { "CORE": [
            { q: "Kya aap bina views ke 6 mahine kaam kar sakte hain?", o: ["Haan, passion hai", "Nahi, motivation chahiye"] },
            { q: "Kya aapke paas editing ki basic knowledge hai?", o: ["Haan", "Nahi, seekhna hai"] },
            { q: "Kya aap hate comments jhel sakte hain?", o: ["Haan", "Nahi, sensitive hoon"] },
            { q: "Kya aapka topic unique hai?", o: ["Haan", "Nahi, copy hai"] },
            { q: "Kya aapka mic/audio saaf hai?", o: ["Haan", "Nahi, check karna hai"] }
        ]}
    },
             
        "ARTIFICIAL_INTELLIGENCE": {
        "keywords": ["AI", "CHATGPT", "AUTOMATION", "BOT", "OPENAI", "MACHINE LEARNING"],
        "sub": { "CORE": [
            { q: "Kya aap AI ko as a tool use kar rahe hain ya shortcut?", o: ["As a tool (Productivity)", "As a shortcut (Alas)"] },
            { q: "Kya aapne AI ke output ko fact-check kiya?", o: ["Haan, hamesha", "Nahi, aankh band karke trust kiya"] },
            { q: "Kya aapki asli skill AI se khatam ho rahi hai?", o: ["Nahi, upgrade ho rahi hai", "Haan, main depend ho gaya hoon"] },
            { q: "Kya ye data sensitive ya private hai?", o: ["Nahi, public data hai", "Haan, secret data hai"] },
            { q: "Kya aap AI se behtar result de sakte hain?", o: ["Haan, human touch ke sath", "Nahi, AI hi best hai"] }
        ]}
    },
    "LIFE_INSURANCE": {
        "keywords": ["INSURANCE", "TERM PLAN", "LIC", "POLICY", "NOMINEE", "HEALTH INSURANCE"],
        "sub": { "CORE": [
            { q: "Kya ye 'Investment' hai ya 'Protection'?", o: ["Pure Protection (Term Plan)", "Mixed (Investment + Insurance)"] },
            { q: "Kya cover amount aapki annual income ka 10-20x hai?", o: ["Haan", "Nahi, bahut kam hai"] },
            { q: "Kya aapne saari bimariyan sach-sach batayi hain?", o: ["Haan", "Nahi, chhupayi hain"] },
            { q: "Kya nominee ko policy ke baare mein pata hai?", o: ["Haan", "Nahi"] },
            { q: "Kya aap premium agle 20 saal tak bhar sakte hain?", o: ["Haan", "Nahi, shayad beech mein band ho jaye"] }
        ]}
    },
    "PARENTING": {
        "keywords": ["KIDS", "CHILD", "PARENTING", "BABY", "SCHOOLING", "DISCIPLINE"],
        "sub": { "CORE": [
            { q: "Kya aap bache par apna sapna thop rahe hain?", o: ["Nahi, uski pasand hai", "Haan, main usey banaunga"] },
            { q: "Kya aap gusse mein faisla le rahe hain?", o: ["Nahi, shant hoon", "Haan, gussa aa raha hai"] },
            { q: "Kya aapne bache ki baat poori suni?", o: ["Haan", "Nahi, beech mein hi daat diya"] },
            { q: "Kya ye unki safety ke liye zaroori hai?", o: ["Haan", "Nahi, bas mera control hai"] },
            { q: "Kya aap khud wo kaam karte hain jo unse keh rahe hain?", o: ["Haan, main example hoon", "Nahi, main sirf kehta hoon"] }
        ]}
    },
    "RETIREMENT": {
        "keywords": ["RETIREMENT", "PENSION", "OLD AGE", "EPF", "PPF", "CORPUS"],
        "sub": { "CORE": [
            { q: "Kya aapka retirement corpus inflation (mahangayi) adjust karega?", o: ["Haan", "Nahi, sirf aaj ka hisab hai"] },
            { q: "Kya aapke paas retirement ke baad koi hobby hai?", o: ["Haan, busy rahunga", "Nahi, pata nahi kya karunga"] },
            { q: "Kya aapne medical emergency ka alag fund rakha hai?", o: ["Haan", "Nahi"] },
            { q: "Kya aap bacho par depend hone ka plan kar rahe hain?", o: ["Nahi, independent", "Haan, unka farz hai"] },
            { q: "Kya aapne 'Will' (Wasiyat) ke baare mein socha hai?", o: ["Haan", "Nahi, abhi bahut time hai"] }
        ]}
    },
    "ADDICTION_ABUSE": {
        "keywords": ["SMOKING", "ALCOHOL", "DRINKING", "DRUGS", "REHAB", "QUIT", "DARU"],
        "sub": { "CORE": [
            { q: "Kya aap ise control kar sakte hain?", o: ["Haan, kabhi bhi chhod sakta hoon", "Nahi, majboori lag rahi hai"] },
            { q: "Kya ye aapke kaam ya rishton ko bigad raha hai?", o: ["Nahi", "Haan, ladayi hoti hai"] },
            { q: "Kya aap chhup kar ye kaam karte hain?", o: ["Nahi", "Haan, darr lagta hai"] },
            { q: "Kya aapne kisi expert/doctor se baat ki?", o: ["Haan/Karunga", "Nahi, zaroorat nahi"] },
            { q: "Kya aapka koi dost aapko uksata hai?", o: ["Nahi", "Haan, group hi aisa hai"] }
        ]}
    },
    "CHARITY_DONATION": {
        "keywords": ["DONATION", "HELP", "NGP", "POOR", "SOCIAL CAUSE", "FUNDRAISER"],
        "sub": { "CORE": [
            { q: "Kya aapne organisation ki authenticity check ki?", o: ["Haan, verified hai", "Nahi, bas ad dekha"] },
            { q: "Kya aap apni capacity se zyada de rahe hain?", o: ["Nahi, manageable hai", "Haan, khud ka budget hill jayega"] },
            { q: "Kya ye sirf guilt door karne ke liye hai?", o: ["Nahi, asli madad karni hai", "Haan, bura lag raha tha"] },
            { q: "Kya aap paise ke bajaye waqt (volunteer) de sakte hain?", o: ["Haan", "Nahi, sirf paisa de sakta hoon"] },
            { q: "Kya iska tax benefit (80G) aapko chahiye?", o: ["Nahi, farak nahi padta", "Haan, zaroori hai"] }
        ]}
    },
            "LEGAL_DISPUTE": {
        "keywords": ["COURT", "CASE", "LAWYER", "POLICE", "LEGAL", "FIR", "AGREEMENT", "DISPUTE"],
        "sub": { "CORE": [
            { q: "Kya aapne out-of-court settlement ki koshish ki?", o: ["Haan, par baat nahi bani", "Nahi, seedha court jana hai"] },
            { q: "Kya aapke paas saare documents/evidence physical form mein hain?", o: ["Haan, sab taiyar hai", "Nahi, abhi dhundne hain"] },
            { q: "Kya aap agle 2-3 saal tak case ladne ka patience rakhte hain?", o: ["Haan", "Nahi, mujhe jaldi solution chahiye"] },
            { q: "Kya lawyer ki fees aapke budget mein hai?", o: ["Haan", "Nahi, bahut mahangi hai"] },
            { q: "Kya aapka case 'Justice' ke liye hai ya 'Badla' (Revenge) ke liye?", o: ["Justice", "Badla"] }
        ]}
    },
    "HOME_RENOVATION": {
        "keywords": ["PAINT", "INTERIOR", "KITCHEN", "FURNITURE", "RENOVATION", "HOME DECOR", "TILES"],
        "sub": { "CORE": [
            { q: "Kya ye renovation 'Zarurat' hai ya sirf 'Style' badalna hai?", o: ["Zarurat (Repair)", "Style (Boredom)"] },
            { q: "Kya aapne total budget ka 20% extra (hidden costs) rakha hai?", o: ["Haan", "Nahi, jitna hai utna hi lagega"] },
            { q: "Kya aap kaam ke waqt dhool/shor mein reh sakte hain?", o: ["Haan, manage ho jayega", "Nahi, bahar jana padega"] },
            { q: "Kya aapne contractor ke purane kaam check kiye?", o: ["Haan, verified", "Nahi, bas sasta hai isliye diya"] },
            { q: "Kya ye design agle 5-10 saal tak 'In' rahega?", o: ["Haan", "Nahi, bas aaj ka trend hai"] }
        ]}
    },
    "MENTAL_FOCUS": {
        "keywords": ["FOCUS", "CONCENTRATION", "STUDY", "DEEP WORK", "DISTRACTION", "ADHD"],
        "sub": { "CORE": [
            { q: "Kya aapne pichle 20 minute mein phone check kiya?", o: ["Nahi", "Haan, do-teen baar"] },
            { q: "Kya aapka workspace saaf aur shant hai?", o: ["Haan", "Nahi, bahut faila hua hai"] },
            { q: "Kya aapne aaj ke top 3 task decide kiye hain?", o: ["Haan", "Nahi, bas shuru kar raha hoon"] },
            { q: "Kya aap multitasking kar rahe hain?", o: ["Nahi, ek waqt par ek kaam", "Haan, sab saath mein"] },
            { q: "Kya aapne aaj dhang ki neend li?", o: ["Haan", "Nahi, thaka hoon"] }
        ]}
    },
    "RELIGION_CHANGE": {
        "keywords": ["RELIGION", "CONVERSION", "DHARAM", "FAITH", "BELIEF"],
        "sub": { "CORE": [
            { q: "Kya ye faisla aapka khud ka hai ya kisi ke dabav mein?", o: ["Puri tarah mera", "Family/Partner ka dabav hai"] },
            { q: "Kya aapne naye dharam ki philosophy poori padhi hai?", o: ["Haan", "Nahi, bas upar se pata hai"] },
            { q: "Kya aap social consequences (society/family) jhelne ko taiyar hain?", o: ["Haan", "Nahi, darr lagta hai"] },
            { q: "Kya ye kisi lalach (paisa/job) ki wajah se hai?", o: ["Nahi", "Haan, thoda fayda hai"] },
            { q: "Kya aap purane dharam ka samman karte rahenge?", o: ["Haan", "Nahi"] }
        ]}
    },
    "VEHICLE_REPAIR": {
        "keywords": ["MECHANIC", "SERVICE", "CAR REPAIR", "BIKE REPAIR", "ENGINE", "TYRE"],
        "sub": { "CORE": [
            { q: "Kya mechanic authorised service center ka hai?", o: ["Haan", "Nahi, local hai"] },
            { q: "Kya engine mein se ajeeb awaaz aa rahi hai?", o: ["Haan", "Nahi"] },
            { q: "Kya repair cost gaadi ki value se 50% zyada hai?", o: ["Nahi", "Haan, bechna behtar hai"] },
            { q: "Kya aapne bill mein parts ki warranty check ki?", o: ["Haan", "Nahi"] },
            { q: "Kya ye safety ka mamla hai (Brakes/Tyre)?", o: ["Haan, urgent hai", "Nahi, sirf cosmetic hai"] }
        ]}
    },
        "CYBER_SECURITY": {
        "keywords": ["HACK", "PASSWORD", "OTP", "SCAM", "PHISHING", "CYBER", "LINK", "SECURITY"],
        "sub": { "CORE": [
            { q: "Kya ye message kisi anjaan number se aaya hai?", o: ["Haan", "Nahi, jaana-pehchana hai"] },
            { q: "Kya wo aapse OTP ya personal details maang rahe hain?", o: ["Haan", "Nahi, sirf info hai"] },
            { q: "Kya link ka URL ajeeb dikh raha hai (e.g., bit.ly/xyz)?", o: ["Haan, sandigdh hai", "Nahi, official hai"] },
            { q: "Kya isme 'Urgency' dikhayi ja rahi hai (e.g., Account block ho jayega)?", o: ["Haan", "Nahi"] },
            { q: "Kya aapne Two-Factor Authentication (2FA) on kiya hai?", o: ["Haan", "Nahi, abhi karna hai"] }
        ]}
    },
    "DATING_APP": {
        "keywords": ["TINDER", "BUMBLE", "DATING", "MATCH", "HINGE", "BLIND DATE"],
        "sub": { "CORE": [
            { q: "Kya unki profile 'Too good to be true' lag rahi hai?", o: ["Haan, thoda darr hai", "Nahi, real lag rahi hai"] },
            { q: "Kya wo milne se pehle paise maang rahe hain?", o: ["Haan", "Nahi, bilkul nahi"] },
            { q: "Kya aap kisi public jagah par milne ka plan kar rahe hain?", o: ["Haan, safe jagah hai", "Nahi, unhone private jagah bulaya hai"] },
            { q: "Kya aapne unka social media verify kiya?", o: ["Haan", "Nahi, sirf app par baat hui"] },
            { q: "Kya aapne kisi dost ko apni location share ki hai?", o: ["Haan", "Nahi, bhool gaya"] }
        ]}
    },
    "WORK_ETHICS": {
        "keywords": ["OFFICE", "BOSS", "COLLEAGUE", "BRIBE", "ETHICS", "OFFICE POLITICS", "HONESTY"],
        "sub": { "CORE": [
            { q: "Kya ye kaam company ki policy ke khilaaf hai?", o: ["Nahi", "Haan, thoda risk hai"] },
            { q: "Kya isse kisi aur ka nuksan ho raha hai?", o: ["Nahi", "Haan, kisi aur ka credit chhin raha hai"] },
            { q: "Agar ye baat sabko pata chal gayi, toh kya aap sharminda honge?", o: ["Nahi", "Haan, bahut zyada"] },
            { q: "Kya aap par kisi senior ka dabav hai?", o: ["Nahi", "Haan, wo majboor kar rahe hain"] },
            { q: "Kya aapka 'Zameer' (Conscience) iski ijazat deta hai?", o: ["Haan", "Nahi, bura lag raha hai"] }
        ]}
    },
    "ELECTION_VOTING": {
        "keywords": ["VOTE", "CANDIDATE", "ELECTION", "MLA", "MP", "GOVERNMENT"],
        "sub": { "CORE": [
            { q: "Kya aapne candidate ka 'Criminal Record' check kiya?", o: ["Haan", "Nahi, sirf party dekhi"] },
            { q: "Kya unhone pichle 5 saal mein waade poore kiye?", o: ["Haan", "Nahi, sirf baatein hain"] },
            { q: "Kya aap sirf caste ya dharam ke naam par vote de rahe hain?", o: ["Nahi, vikas par", "Haan, wahi zaroori hai"] },
            { q: "Kya candidate ki education level sahi hai?", o: ["Haan", "Nahi, anpadh lag raha hai"] },
            { q: "Kya aapne unka manifesto padha hai?", o: ["Haan", "Nahi, zaroorat nahi"] }
        ]}
    },
    "TIME_MANAGEMENT": {
        "keywords": ["SCHEDULE", "ROUTINE", "CALENDAR", "PRODUCTIVITY", "ALARM", "TO-DO"],
        "sub": { "CORE": [
            { q: "Kya aapne aaj ka sabse mushkil kaam (Eat the Frog) sabse pehle rakha?", o: ["Haan", "Nahi, aasaan wala pehle"] },
            { q: "Kya aap 'Deep Work' ke liye phone switch off karte hain?", o: ["Haan", "Nahi, notifications on rehte hain"] },
            { q: "Kya aap 'No' kehna jaante hain?", o: ["Haan", "Nahi, sabka kaam kar deta hoon"] },
            { q: "Kya aapne kal raat ko hi aaj ka plan banaya tha?", o: ["Haan", "Nahi, abhi soch raha hoon"] },
            { q: "Kya aap break lene ke liye timer lagate hain (Pomodoro)?", o: ["Haan", "Nahi, lagatar baitha rehta hoon"] }
        ]}
    },
        "TAX_PLANNING": {
        "keywords": ["INCOME TAX", "GST", "ITR", "TAX SAVING", "80C", "INVESTMENT", "CA"],
        "sub": { "CORE": [
            { q: "Kya aapne 31st March se pehle investments poore kiye?", o: ["Haan, sab sorted hai", "Nahi, aakhri waqt ka intezar hai"] },
            { q: "Kya aapne Old vs New Tax regime calculate kiya?", o: ["Haan, jo sasta hai wahi liya", "Nahi, bas purana chal raha hai"] },
            { q: "Kya aapne saare kharche (HRA, Medical) claim kiye?", o: ["Haan", "Nahi, bhool gaya"] },
            { q: "Kya aapka tax katne ke baad ghar ka budget sahi hai?", o: ["Haan", "Nahi, bahut zyada tax kat raha hai"] },
            { q: "Kya aapne kisi CA ya Expert se rai li?", o: ["Haan", "Nahi, khud hi kar raha hoon"] }
        ]}
    },
    "WEDDING_PLANNING": {
        "keywords": ["MARRIAGE", "WEDDING", "SHAADI", "RECEPTION", "GUESTS", "VENUE", "CATERING"],
        "sub": { "CORE": [
            { q: "Kya ye wedding budget ke andar hai ya loan lena pad raha hai?", o: ["Budget ke andar", "Loan/Udhaar lena pad raha hai"] },
            { q: "Kya venue ki location dono families ke liye sahi hai?", o: ["Haan", "Nahi, bahut door hai"] },
            { q: "Kya aapne guest list ko 'Priority' ke hisab se filter kiya?", o: ["Haan, sirf khaas log", "Nahi, sabko bula liya"] },
            { q: "Kya ye function 'Logon ko dikhane' ke liye ho raha hai?", o: ["Nahi, hamari khushi ke liye", "Haan, status ka sawal hai"] },
            { q: "Kya aapne 'Catering' ka food-tasting pehle kiya?", o: ["Haan", "Nahi, abhi karna hai"] }
        ]}
    },
    "PUBLIC_SPEAKING": {
        "keywords": ["SPEECH", "STAGE", "PRESENTATION", "TALK", "MIC", "AUDIENCE", "ANCHORING"],
        "sub": { "CORE": [
            { q: "Kya aapne kam se kam 5 baar practice ki?", o: ["Haan, bilkul", "Nahi, stage par hi bolunga"] },
            { q: "Kya aapka content audience ke kaam ka hai?", o: ["Haan", "Nahi, sirf meri baatein hain"] },
            { q: "Kya aapne pehle 1 minute (Hook) par kaam kiya?", o: ["Haan", "Nahi, seedha shuru karunga"] },
            { q: "Kya aap darr (Stage Fright) ko control kar sakte hain?", o: ["Haan, techniques pata hain", "Nahi, pair kaampte hain"] },
            { q: "Kya aapne equipment (Mic/Laptop) check kiya?", o: ["Haan", "Nahi, wahan jaakar dekhunga"] }
        ]}
    },
    "SUBSCRIPTION_TRAP": {
        "keywords": ["NETFLIX", "PRIME", "GYM MEMBERSHIP", "HOTSTAR", "SUBSCRIPTION", "AUTOPAY"],
        "sub": { "CORE": [
            { q: "Kya aap is service ko hafte mein 3 baar use karte hain?", o: ["Haan", "Nahi, kabhi-kabhi"] },
            { q: "Kya iska 'Auto-pay' on hai?", o: ["Nahi, main check karta hoon", "Haan, automatic katte hain paise"] },
            { q: "Kya iska koi 'Free Alternative' available hai?", o: ["Nahi", "Haan, par main alas kar raha hoon"] },
            { q: "Kya ye aapka 'Time-Waste' toh nahi kar raha?", o: ["Nahi", "Haan, screen time badh gaya hai"] },
            { q: "Kya aap abhi ise cancel karne ka dum rakhte hain?", o: ["Haan, abhi", "Nahi, baad mein dekhenge"] }
        ]}
    },
    "ELECTRIC_VEHICLE": {
        "keywords": ["EV", "OLA ELECTRIC", "TATA NEXON EV", "CHARGER", "BATTERY", "ELECTRIC CAR", "TESLA"],
        "sub": { "CORE": [
            { q: "Kya aapka daily travel 50km se zyada hai?", o: ["Haan, EV sasti padegi", "Nahi, petrol hi sahi hai"] },
            { q: "Kya aapke ghar/office mein charging point hai?", o: ["Haan", "Nahi, dhundna padega"] },
            { q: "Kya aap long trips par jane ka plan kar rahe hain?", o: ["Nahi, sirf city ke liye", "Haan, raste mein darr rahega (Range Anxiety)"] },
            { q: "Kya battery ki warranty 5-8 saal ki hai?", o: ["Haan", "Nahi, kam hai"] },
            { q: "Kya EV ki resale value ka aapne socha hai?", o: ["Haan, idea hai", "Nahi, abhi nahi socha"] }
        ]}
    },
       "RENT_VS_BUY": {
        "keywords": ["HOME LOAN", "RENT", "BUYING HOUSE", "REAL ESTATE", "PROPERTY", "OWN HOUSE"],
        "sub": { "CORE": [
            { q: "Kya aap is shehar mein agle 10 saal tak rahenge?", o: ["Haan, fixed hoon", "Nahi, transfer ho sakta hai"] },
            { q: "Kya EMI aapke rent se 2x zyada hai?", o: ["Nahi, manageable hai", "Haan, budget hill jayega"] },
            { q: "Kya aapne maintenance aur property tax ka hisab lagaya?", o: ["Haan", "Nahi, sirf EMI dekha"] },
            { q: "Kya aapka down-payment aapki total savings ka 80% hai?", o: ["Nahi, emergency fund alag hai", "Haan, sab khatam ho jayega"] },
            { q: "Kya ghar lena 'Emotional' faisla hai ya 'Financial'?", o: ["Financial (Investment)", "Emotional (Apna Ghar)"] }
        ]}
    },
    "MENTAL_RESILIENCE": {
        "keywords": ["HARD TIMES", "FAILURE", "REJECTION", "STRENGTH", "TOUGH", "MOTIVATION"],
        "sub": { "CORE": [
            { q: "Kya aap is situation ko agle 5 saal baad yaad rakhenge?", o: ["Nahi, ye choti baat hai", "Haan, ye life-changing hai"] },
            { q: "Kya aap un cheezon par focus kar rahe hain jo aapke control mein hain?", o: ["Haan", "Nahi, kismat ko kos raha hoon"] },
            { q: "Kya aapne pichle failure se kuch seekha tha?", o: ["Haan, main behtar hua", "Nahi, wahi galti ki"] },
            { q: "Kya aap akele lad rahe hain ya support system hai?", o: ["Support system hai", "Akela hoon"] },
            { q: "Kya aap khud ko 'Victim' (bechara) samajh rahe hain?", o: ["Nahi, fighter hoon", "Haan, mere sath hi kyun hota hai"] }
        ]}
    },
    "STOCK_MARKET_PRO": {
        "keywords": ["TRADING", "STOCKS", "NIFTY", "SENSEX", "INTRADAY", "OPTIONS", "INVESTING"],
        "sub": { "CORE": [
            { q: "Kya aapne company ki Balance Sheet padhi hai?", o: ["Haan, fundamental analysis kiya", "Nahi, bas news suni hai"] },
            { q: "Kya aap 'Stop Loss' lagane ke liye taiyar hain?", o: ["Haan, hamesha", "Nahi, profit hi hoga"] },
            { q: "Kya ye 'Greed' (Lalach) wala trade hai?", o: ["Nahi, logic wala", "Haan, paisa double karna hai"] },
            { q: "Kya aapke paas 'Exit Strategy' taiyar hai?", o: ["Haan", "Nahi, jab girne lagega tab dekhunga"] },
            { q: "Kya ye aapka 'Emergency' paisa hai?", o: ["Nahi, extra hai", "Haan, zaroorat ka paisa hai"] }
        ]}
    },
    "CONTENT_MONETIZATION": {
        "keywords": ["SPONSORSHIP", "ADSENSE", "AFFILIATE", "MONEY ONLINE", "YOUTUBE ADS", "BRAND DEAL"],
        "sub": { "CORE": [
            { q: "Kya aapka content 'Brand Friendly' hai?", o: ["Haan", "Nahi, controversial hai"] },
            { q: "Kya aapki audience aap par trust karti hai?", o: ["Haan, loyalty hai", "Nahi, bas views hain"] },
            { q: "Kya aap sirf paise ke liye ghatiya product promote karenge?", o: ["Nahi, kabhi nahi", "Haan, agar paisa achha hai"] },
            { q: "Kya aapne engagement rate (comments/likes) check kiya?", o: ["Haan", "Nahi, sirf followers dekhe"] },
            { q: "Kya aapne legal contract dhang se padha?", o: ["Haan", "Nahi, bas sign karna hai"] }
        ]}
    },
    "KIDS_EDUCATION_PLAN": {
        "keywords": ["SCHOOL", "BOARDING", "COACHING", "JEE", "NEET", "CHILD EDUCATION", "TUITION"],
        "sub": { "CORE": [
            { q: "Kya ye school bache ki talent ke hisab se hai?", o: ["Haan", "Nahi, bas naam bada hai"] },
            { q: "Kya coaching ka pressure bacha jhel payega?", o: ["Haan, wo interest rakhta hai", "Nahi, stress mein hai"] },
            { q: "Kya aapne school ki 'Safety Policy' check ki?", o: ["Haan", "Nahi"] },
            { q: "Kya fees aapke annual budget ka 30% se zyada hai?", o: ["Nahi", "Haan, bahut mahanga hai"] },
            { q: "Kya aap bache ko extracurricular activities ka time dete hain?", o: ["Haan", "Nahi, sirf padhai"] }
        ]}
    },
            "SOLAR_ENERGY": {
        "keywords": ["SOLAR PANEL", "ELECTRICITY BILL", "RENEWABLE", "INVERTER", "GREEN ENERGY", "ROOFTOP SOLAR"],
        "sub": { "CORE": [
            { q: "Kya aapki chhat (roof) par din bhar dhoop aati hai?", o: ["Haan, kaafi dhoop hai", "Nahi, ped/building ki chhaya hai"] },
            { q: "Kya aapka monthly bill 2000-3000 se zyada hai?", o: ["Haan, lagwana faydemand hai", "Nahi, bill kam hai"] },
            { q: "Kya aapne Govt. Subsidy check ki?", o: ["Haan, jankari hai", "Nahi, abhi dekhna hai"] },
            { q: "Kya aapka solar system 'On-Grid' hai ya 'Off-Grid'?", o: ["On-Grid (Best for saving)", "Off-Grid (Best for power backup)"] },
            { q: "Kya aap 5 saal ka 'Payback Period' intezar kar sakte hain?", o: ["Haan, long term hai", "Nahi, jaldi profit chahiye"] }
        ]}
    },
    "SOLO_TRAVEL": {
        "keywords": ["SOLO TRIP", "BACKPACKING", "ALONE TRAVEL", "HOSTEL", "EXPLORE"],
        "sub": { "CORE": [
            { q: "Kya aapne location ki safety aur reviews check kiye?", o: ["Haan, researched hai", "Nahi, bas chale jana hai"] },
            { q: "Kya aapke paas emergency contacts aur insurance hai?", o: ["Haan, sab ready hai", "Nahi, zarurat nahi padegi"] },
            { q: "Kya aap anjaan logon ke saath comfortable hain?", o: ["Haan", "Nahi, thoda darr lagta hai"] },
            { q: "Kya aapka budget 'Flexible' hai?", o: ["Haan, emergency cash hai", "Nahi, tight budget hai"] },
            { q: "Kya aapne local language ke kuch basic words seekhe?", o: ["Haan", "Nahi"] }
        ]}
    },
    "PET_HEALTH": {
        "keywords": ["VET", "VACCINATION", "PET FOOD", "DOG SICK", "CAT HEALTH", "ANIMAL DOCTOR"],
        "sub": { "CORE": [
            { q: "Kya aapne pichle 6 mahine mein checkup karwaya?", o: ["Haan, routine hai", "Nahi, jab beemar hote hain tabhi"] },
            { q: "Kya aap unhe human-food (masala/meetha) dete hain?", o: ["Nahi, kabhi nahi", "Haan, thoda sa"] },
            { q: "Kya unki energy level normal hai?", o: ["Haan", "Nahi, thoda sust hain"] },
            { q: "Kya aapne unka deworming schedule follow kiya?", o: ["Haan", "Nahi, bhool gaya"] },
            { q: "Kya aapne emergency vet ka number save kiya hai?", o: ["Haan", "Nahi"] }
        ]}
    },
    "JOURNALING": {
        "keywords": ["DIARY", "WRITING", "THOUGHTS", "MENTAL CLARITY", "JOURNAL", "REFLECT"],
        "sub": { "CORE": [
            { q: "Kya aap sachai ke saath apne emotions likhte hain?", o: ["Haan, poori imandari se", "Nahi, thoda filter karke"] },
            { q: "Kya aap rozana ek fix time par likhte hain?", o: ["Haan, routine hai", "Nahi, jab mann karta hai"] },
            { q: "Kya journaling se aapko solution mil rahe hain?", o: ["Haan, clarity milti hai", "Nahi, bas dukh likhta hoon"] },
            { q: "Kya aap digital journal use kar rahe hain ya paper?", o: ["Paper (Better focus)", "Digital (Convenience)"] },
            { q: "Kya aap purane entries ko kabhi re-read karte hain?", o: ["Haan, seekhne ke liye", "Nahi, kabhi nahi"] }
        ]}
    },
    "DEBATE_LOGIC": {
        "keywords": ["ARGUMENT", "DEBATE", "LOGIC", "WINNING", "DISCUSSION", "CRITICAL THINKING"],
        "sub": { "CORE": [
            { q: "Kya aap sirf jitne ke liye lad rahe hain ya seekhne ke liye?", o: ["Seekhne ke liye", "Sirf jitne ke liye"] },
            { q: "Kya aapke paas 'Fact-based' data hai?", o: ["Haan, solid facts hain", "Nahi, bas mera opinion hai"] },
            { q: "Kya aapne samne wale ki poori baat suni?", o: ["Haan, patience se", "Nahi, beech mein hi kaat diya"] },
            { q: "Kya ye topic 'Personal' hota ja raha hai?", o: ["Nahi, topic par hoon", "Haan, gussa aa raha hai"] },
            { q: "Kya aap apni galti manne ko taiyar hain?", o: ["Haan, agar logic sahi ho", "Nahi, main hi sahi hoon"] }
        ]}
    }, 
        
    "STARTUP_FUNDING": {
        "keywords": ["PITCH DECK", "ANGEL INVESTOR", "VC", "EQUITY", "FUNDRAISING", "VALUATION", "SEED ROUND"],
        "sub": { "CORE": [
            { q: "Kya aapka business 'Revenue' generate kar raha hai?", o: ["Haan, cash flow hai", "Nahi, abhi sirf product hai"] },
            { q: "Kya aap equity dene ke liye taiyar hain?", o: ["Haan, growth ke liye", "Nahi, control mera hona chahiye"] },
            { q: "Kya aapne 100 investors ki list banayi?", o: ["Haan, research complete hai", "Nahi, abhi shuru karna hai"] },
            { q: "Kya aapka 'Unit Economics' positive hai?", o: ["Haan", "Nahi, burn zyada hai"] },
            { q: "Kya aap agle 18 mahine ka roadmap samjha sakte hain?", o: ["Haan, clear vision hai", "Nahi, abhi plan kar raha hoon"] }
        ]}
    },
    "BODY_LANGUAGE": {
        "keywords": ["GUESTURE", "EYE CONTACT", "POSTURE", "CONFIDENCE", "NON-VERBAL", "INTERVIEW TIPS"],
        "sub": { "CORE": [
            { q: "Kya aap baat karte waqt aankhon mein dekhte hain?", o: ["Haan, hamesha", "Nahi, niche/idhar-udhar dekhta hoon"] },
            { q: "Kya aapke hath 'Pocket' mein rehte hain?", o: ["Nahi, open gestures hain", "Haan, aksar"] },
            { q: "Kya aap 'Hunch' (jhuk kar) baithte hain?", o: ["Nahi, seedha baithta hoon", "Haan, aadat hai"] },
            { q: "Kya aap bahut zyada 'Fidgeting' (hath-pair hilana) karte hain?", o: ["Nahi, calm hoon", "Haan, nervousness mein"] },
            { q: "Kya aap samne wale ki body language 'Mirror' (copy) kar rahe hain?", o: ["Haan, rapport banane ke liye", "Nahi, dhyan nahi diya"] }
        ]}
    },
    "PROPERTY_LEGAL_CHECK": {
        "keywords": ["RERA", "POSSESSION", "TITLE DEED", "KHATA", "STAMP DUTY", "ENCUMBRANCE CERTIFICATE"],
        "sub": { "CORE": [
            { q: "Kya property RERA registered hai?", o: ["Haan, verified", "Nahi, builder bahana bana raha hai"] },
            { q: "Kya land ka 'Title Deed' clear hai?", o: ["Haan, CA/Lawyer ne check kiya", "Nahi, sirf xerox dekhi hai"] },
            { q: "Kya property par koi purana 'Loan' (Encumbrance) hai?", o: ["Nahi, EC certificate clean hai", "Pata nahi, check karna hai"] },
            { q: "Kya possession ki date contract mein likhi hai?", o: ["Haan", "Nahi, verbal commitment hai"] },
            { q: "Kya building plan approved hai?", o: ["Haan, local authority se", "Nahi, doubt hai"] }
        ]}
    },
    "GOURMET_COOKING": {
        "keywords": ["CHEF", "RECIPE", "KNIFE SKILLS", "BAKING", "PLATING", "FINE DINING"],
        "sub": { "CORE": [
            { q: "Kya aapne saari 'Mis-en-place' (taiyari) pehle kar li?", o: ["Haan, sab chopped/ready hai", "Nahi, saath-saath karunga"] },
            { q: "Kya aapke paas sahi 'Knife' aur tools hain?", o: ["Haan, professional tools hain", "Nahi, normal household tools"] },
            { q: "Kya aap 'Plating' (sajawat) par focus kar rahe hain?", o: ["Haan, presentation zaroori hai", "Nahi, sirf taste"] },
            { q: "Kya aapne temperature (Meat/Oven) check kiya?", o: ["Haan, thermometer use kiya", "Nahi, andaze se"] },
            { q: "Kya aap naye 'Ingredients' ke sath experiment kar rahe hain?", o: ["Haan", "Nahi, purani recipe hai"] }
        ]}
    },
    "TIME_BLOCKING": {
        "keywords": ["CALENDAR", "DEEP WORK", "FOCUS", "PRODUCTIVITY HACK", "TIME MANAGEMENT"],
        "sub": { "CORE": [
            { q: "Kya aapne 'Deep Work' ke liye 2-3 ghante block kiye?", o: ["Haan, zero distraction", "Nahi, beech mein breaks hain"] },
            { q: "Kya aapne 'Shallow Work' (Emails/Admin) ke liye alag time rakha?", o: ["Haan", "Nahi, sab mix ho jata hai"] },
            { q: "Kya aap calendar par 'Buffer Time' rakhte hain?", o: ["Haan, emergencies ke liye", "Nahi, pack schedule hai"] },
            { q: "Kya aapne 'Digital Detox' ka time fix kiya?", o: ["Haan", "Nahi"] },
            { q: "Kya aap har hafte apne schedule ko review karte hain?", o: ["Haan", "Nahi"] }
        ]}
    },
        "SALES_PSYCHOLOGY": {
        "keywords": ["SELLING", "CLOSING", "NEGOTIATION", "CLIENT", "MARKETING", "PERSUASION", "SALES PITCH"],
        "sub": { "CORE": [
            { q: "Kya aapne product ke 'Features' ke bajaye 'Benefits' bataye?", o: ["Haan, result par focus hai", "Nahi, sirf features bataye"] },
            { q: "Kya aapne 'Scarcity' (limited time/offer) create ki?", o: ["Haan, urgency hai", "Nahi, hamesha available hai"] },
            { q: "Kya aapne 'Social Proof' (Testimonials) dikhaye?", o: ["Haan, trust banaya", "Nahi, abhi nahi dikhaye"] },
            { q: "Kya aap 'No' sunne ke liye taiyar hain?", o: ["Haan, objection handle karunga", "Nahi, bura lagta hai"] },
            { q: "Kya aap client ki problem ka 'Solution' bech rahe hain?", o: ["Haan", "Nahi, sirf apna target poora karna hai"] }
        ]}
    },
    "BIO_HACKING": {
        "keywords": ["SLEEP", "DIET", "SUPPLEMENTS", "LONGEVITY", "FASTING", "ICE BATH", "HEALTH HACK"],
        "sub": { "CORE": [
            { q: "Kya aapne 'Intermittent Fasting' try ki?", o: ["Haan, energy badhi", "Nahi, himmat nahi hui"] },
            { q: "Kya aap 'Blue Light' blocking glasses use karte hain?", o: ["Haan, raat ko", "Nahi, idea nahi tha"] },
            { q: "Kya aapne 'Cold Shower' (thanda paani) shuru kiya?", o: ["Haan, resilience ke liye", "Nahi, bahut thand lagti hai"] },
            { q: "Kya aap apni 'Deep Sleep' track karte hain?", o: ["Haan, smart watch se", "Nahi, bas so jata hoon"] },
            { q: "Kya aapne supplements lene se pehle Blood Test karwaya?", o: ["Haan, certified hai", "Nahi, bas videos dekh kar le liye"] }
        ]}
    },
    "ADVANCED_PHOTOGRAPHY": {
        "keywords": ["ISO", "APERTURE", "SHUTTER SPEED", "DSLR", "RAW", "COMPOSITION", "LIGHTING"],
        "sub": { "CORE": [
            { q: "Kya aapne 'Rule of Thirds' follow kiya?", o: ["Haan, composition sahi hai", "Nahi, subject beech mein hai"] },
            { q: "Kya aap 'Manual Mode' par shoot kar rahe hain?", o: ["Haan, full control hai", "Nahi, Auto mode par hoon"] },
            { q: "Kya aapne 'Golden Hour' (sunset/sunrise) ka wait kiya?", o: ["Haan, lighting best hai", "Nahi, kabhi bhi le li"] },
            { q: "Kya aap RAW format mein save kar rahe hain?", o: ["Haan, editing ke liye", "Nahi, sirf JPEG"] },
            { q: "Kya aapka subject 'In Focus' hai?", o: ["Haan, sharp hai", "Nahi, thoda blurry hai"] }
        ]}
    },
    "CONTENT_STRATEGY": {
        "keywords": ["VIRAL", "HOOK", "STORYTELLING", "ALGORITHM", "NICHE", "ENGAGEMENT", "CONTENT CALENDAR"],
        "sub": { "CORE": [
            { q: "Kya pehle 3 second mein koi 'Hook' hai?", o: ["Haan, attention grabber hai", "Nahi, slow start hai"] },
            { q: "Kya aap ek hi 'Niche' par focus kar rahe hain?", o: ["Haan, target clear hai", "Nahi, sab mix hai"] },
            { q: "Kya aap 'Storytelling' ka use kar rahe hain?", o: ["Haan, connect hota hai", "Nahi, sirf info hai"] },
            { q: "Kya aapne comments ka reply kiya?", o: ["Haan, community building", "Nahi, time nahi hai"] },
            { q: "Kya aapka content 'Shareable' hai?", o: ["Haan, value/relatable hai", "Nahi, sirf mere liye hai"] }
        ]}
    },
    "MENTAL_MODELS": {
        "keywords": ["CRITICAL THINKING", "FIRST PRINCIPLES", "INVERSION", "PARETO PRINCIPLE", "OCCAMS RAZOR"],
        "sub": { "CORE": [
            { q: "Kya aapne '80/20 Rule' (Pareto) lagaya?", o: ["Haan, main results par focus hoon", "Nahi, sab kaam kar raha hoon"] },
            { q: "Kya aap 'First Principles' (root cause) se soch rahe hain?", o: ["Haan, basic se", "Nahi, dusron ki copy hai"] },
            { q: "Kya aapne 'Inversion' (ultha sochna) lagaya?", o: ["Haan, failure se bachne ke liye", "Nahi"] },
            { q: "Kya sabse aasaan explanation (Occam's Razor) sahi hai?", o: ["Haan, shayad wahi sach hai", "Nahi, bahut complex hai"] },
            { q: "Kya aapne 'Confirmation Bias' se bachne ki koshish ki?", o: ["Haan, opposites bhi check kiye", "Nahi, wahi dekha jo mujhe pasand hai"] }
        ]}
    },
         "PHILOSOPHY_STOICISM": {
        "keywords": ["STOIC", "MARCUS AURELIUS", "CONTROL", "EMOTIONS", "CALM", "SENECA", "MINDSET"],
        "sub": { "CORE": [
            { q: "Kya ye situation aapke control mein hai?", o: ["Nahi, par mera reaction control mein hai", "Haan, main ise badal sakta hoon"] },
            { q: "Kya aap sirf imaginary dukh (overthinking) se darr rahe hain?", o: ["Haan, shayad", "Nahi, asli takleef hai"] },
            { q: "Kya aapne 'Worst Case Scenario' accept kar liya hai?", o: ["Haan, ab darr nahi hai", "Nahi, abhi bhi darr lag raha hai"] },
            { q: "Kya aap aaj mein jee rahe hain (Amor Fati)?", o: ["Haan", "Nahi, past/future mein hoon"] },
            { q: "Kya aapka gussa kisi problem ko solve karega?", o: ["Nahi, sirf bigadega", "Nahi pata"] }
        ]}
    },
    "CRISIS_MANAGEMENT": {
        "keywords": ["EMERGENCY", "PANIC", "PROBLEM", "SCANDAL", "URGENT", "DAMAGE CONTROL"],
        "sub": { "CORE": [
            { q: "Kya aapne pehle 'Thanda Paani' piya aur shant hue?", o: ["Haan", "Nahi, panic mein hoon"] },
            { q: "Kya aapne 'Core Problem' ko pehchan liya hai?", o: ["Haan, pata hai kya hua", "Nahi, sab uljha hua hai"] },
            { q: "Kya aapne team/pariwar ko suchit (inform) kiya?", o: ["Haan, transparency hai", "Nahi, chhupa raha hoon"] },
            { q: "Kya aapke paas 'Plan B' taiyar hai?", o: ["Haan", "Nahi, abhi soch raha hoon"] },
            { q: "Kya aap apni galti maan rahe hain?", o: ["Haan, accountability hai", "Nahi, blame game khel raha hoon"] }
        ]}
    },
    "PERSONAL_BRANDING": {
        "keywords": ["LINKEDIN", "TWITTER", "INFLUENCE", "REPUTATION", "AUTHORITY", "EXPERT"],
        "sub": { "CORE": [
            { q: "Kya aapki profile picture professional hai?", o: ["Haan", "Nahi, casual hai"] },
            { q: "Kya aap rozana value-add content post karte hain?", o: ["Haan", "Nahi, kabhi-kabhi"] },
            { q: "Kya aapki 'Niche' (field) clear hai?", o: ["Haan, log mujhe jante hain", "Nahi, sab mix hai"] },
            { q: "Kya aap dusron ke posts par meaningful engage karte hain?", o: ["Haan", "Nahi, sirf scroll karta hoon"] },
            { q: "Kya aapki online image aapke asli kaam se milti hai?", o: ["Haan, authentic hai", "Nahi, thoda show-off hai"] }
        ]}
    },
    "DIVIDEND_INVESTING": {
        "keywords": ["PASSIVE INCOME", "DIVIDENDS", "STOCKS", "PORTFOLIO", "YIELD", "CASH FLOW"],
        "sub": { "CORE": [
            { q: "Kya company ka 'Dividend Yield' 3-5% se zyada hai?", o: ["Haan, achha hai", "Nahi, bahut kam hai"] },
            { q: "Kya company pichle 10 saal se profit mein hai?", o: ["Haan, stable hai", "Nahi, loss mein thi"] },
            { q: "Kya aap dividend ko 'Re-invest' karenge?", o: ["Haan, compounding ke liye", "Nahi, kharch kar dunga"] },
            { q: "Kya ye sector 'Defensive' (Utility/FMCG) hai?", o: ["Haan, safe hai", "Nahi, risky/volatile hai"] },
            { q: "Kya 'Payout Ratio' sustainable (60% se kam) hai?", o: ["Haan", "Nahi, bahut zyada hai"] }
        ]}
    },
    "E-COMMERCE_STARTUP": {
        "keywords": ["SHOPIFY", "AMAZON SELLER", "DROPSHIPPING", "INVENTORY", "LOGISTICS", "ONLINE STORE"],
        "sub": { "CORE": [
            { q: "Kya aapke paas product ka 'Unique Selling Point' (USP) hai?", o: ["Haan, sabse alag hai", "Nahi, normal product hai"] },
            { q: "Kya aapne shipping/returns ka kharcha calculate kiya?", o: ["Haan", "Nahi, idea nahi hai"] },
            { q: "Kya aapka ad-spend (CAC) profit se kam hai?", o: ["Haan, profitable hai", "Nahi, loss ho raha hai"] },
            { q: "Kya aapne sample testing khud ki?", o: ["Haan, quality best hai", "Nahi, seedha order kiya"] },
            { q: "Kya aapka packaging 'Instagrammable' (sundar) hai?", o: ["Haan", "Nahi, normal hai"] }
        ]}
    },
         "SPACE_TOURISM": {
        "keywords": ["SPACEX", "VIRGIN GALACTIC", "ORBIT", "ASTRONAUT", "ROCKET", "SPACE TRIP", "MARS"],
        "sub": { "CORE": [
            { q: "Kya aapki physical health G-force jhelne ke layak hai?", o: ["Haan, medical clear hai", "Nahi, heart/BP issue hai"] },
            { q: "Kya aap 10-15 din ek band capsule mein reh sakte hain?", o: ["Haan, mentally ready hoon", "Nahi, claustrophobia hai"] },
            { q: "Kya aapne insurance aur legal liability padhi?", o: ["Haan, risk pata hai", "Nahi, abhi nahi"] },
            { q: "Kya ye sirf status ke liye hai ya science ke liye?", o: ["Dono", "Sirf dikhawe ke liye"] },
            { q: "Kya aapki family is 'High Risk' ke liye taiyar hai?", o: ["Haan", "Nahi, wo darre hue hain"] }
        ]}
    },
    "SPORTS_CAREER": {
        "keywords": ["CRICKET", "FOOTBALL", "ATHLETE", "OLYMPICS", "ACADEMY", "SPORTS", "TRAINING"],
        "sub": { "CORE": [
            { q: "Kya aap rozana 6-8 ghante physical grind ke liye taiyar hain?", o: ["Haan, passion hai", "Nahi, kabhi-kabhi thak jata hoon"] },
            { q: "Kya aapke paas backup education plan hai?", o: ["Haan, degree saath mein hai", "Nahi, sab kuch sports par hai"] },
            { q: "Kya aap injury ke waqt mentally strong reh sakte hain?", o: ["Haan, comeback karunga", "Nahi, toot jata hoon"] },
            { q: "Kya aapka coach/mentor certified hai?", o: ["Haan, experienced hai", "Nahi, bas local hai"] },
            { q: "Kya aap 'Strict Diet' aur discipline follow kar rahe hain?", o: ["Haan, 100%", "Nahi, thoda cheat chalta hai"] }
        ]}
    },
    "NFT_COLLECTOR": {
        "keywords": ["NFT", "OPEN SEA", "DIGITAL ART", "BLOCKCHAIN ART", "WEB3", "METAMASK"],
        "sub": { "CORE": [
            { q: "Kya aap art ki wajah se kharid rahe hain ya 'Flip' (profit) ke liye?", o: ["Art/Utility ke liye", "Sirf paisa double karne ke liye"] },
            { q: "Kya aapne creator ki roadmap check ki?", o: ["Haan, solid plan hai", "Nahi, bas hype dekhi"] },
            { q: "Kya aap gas-fees aur volatility jhel sakte hain?", o: ["Haan", "Nahi, budget tight hai"] },
            { q: "Kya ye project 'Rug Pull' (scam) toh nahi lag raha?", o: ["Nahi, community strong hai", "Shayad, darr hai"] },
            { q: "Kya aapne hardware wallet use kiya?", o: ["Haan, safe hai", "Nahi, exchange par hai"] }
        ]}
    },
    "GHOSTING_DYNAMICS": {
        "keywords": ["GHOSTED", "NO REPLY", "DATING ADVICE", "TEXTING", "RELATIONSHIP STRESS"],
        "sub": { "CORE": [
            { q: "Kya unhone pichle 48 ghante se reply nahi kiya?", o: ["Haan", "Nahi, abhi kam time hua hai"] },
            { q: "Kya aapne unhe baar-baar call/text karke 'Double Text' kiya?", o: ["Nahi, space di hai", "Haan, 5-10 baar"] },
            { q: "Kya ye unki aadat hai ya pehli baar hua?", o: ["Pehli baar", "Aksar aisa karte hain"] },
            { q: "Kya aapne 'Silence' ko answer maan liya hai?", o: ["Haan, self-respect hai", "Nahi, clarification chahiye"] },
            { q: "Kya aapne unhe block karne ka socha?", o: ["Haan, move on karna hai", "Nahi, intezar karunga"] }
        ]}
    },
    "REMOTE_TEAM_LEADERSHIP": {
        "keywords": ["MANAGER", "TEAM LEAD", "SLACK", "ZOOM", "DELEGATION", "MANAGEMENT"],
        "sub": { "CORE": [
            { q: "Kya aap 'Micromanagement' (zyada interfere) kar rahe hain?", o: ["Nahi, trust karta hoon", "Haan, report har ghante chahiye"] },
            { q: "Kya team ka 'Work-Life Balance' sahi hai?", o: ["Haan", "Nahi, sab burn-out ho rahe hain"] },
            { q: "Kya aapne expectations (KPIs) clear rakhe hain?", o: ["Haan, document hai", "Nahi, sab verbal hai"] },
            { q: "Kya aap 'One-on-One' feedback calls karte hain?", o: ["Haan, weekly", "Nahi, sirf group calls"] },
            { q: "Kya team ko tools (software/hardware) sahi mile hain?", o: ["Haan", "Nahi, complain karte hain"] }
        ]}
    },
        "AI_ETHICS_DEVELOPER": {
        "keywords": ["AI MODEL", "DATA PRIVACY", "BIAS", "ALGORITHM ETHICS", "DEVELOPMENT", "OPEN SOURCE"],
        "sub": { "CORE": [
            { q: "Kya aapka training data diverse aur unbiased hai?", o: ["Haan, kaafi testing ki hai", "Nahi, thoda biased ho sakta hai"] },
            { q: "Kya user ki privacy (GDPR) ka dhyan rakha gaya hai?", o: ["Haan, data encrypted hai", "Nahi, abhi pending hai"] },
            { q: "Kya ye AI kisi ki job ko puri tarah khatam kar raha hai?", o: ["Nahi, ye sirf assist karta hai", "Haan, replace kar dega"] },
            { q: "Kya 'Deepfake' banne ki gunjayish hai?", o: ["Nahi, guards lagaye hain", "Haan, thoda risk hai"] },
            { q: "Kya algorithm 'Explainable' hai (kya aap bata sakte hain ye decision kyun liya)?", o: ["Haan", "Nahi, ye black-box hai"] }
        ]}
    },
    "ORGANIC_FARMING": {
        "keywords": ["ORGANIC", "FARMING", "K खेती", "KHETI", "PESTICIDE FREE", "SOIL HEALTH", "AGRICULTURE"],
        "sub": { "CORE": [
            { q: "Kya aapne mitti (soil) ka lab test karwaya?", o: ["Haan, nutrient rich hai", "Nahi, abhi karna hai"] },
            { q: "Kya aapke paas organic certification hai?", o: ["Haan, official hai", "Nahi, sirf natural tareeka hai"] },
            { q: "Kya aap market ke price fluctuations jhel sakte hain?", o: ["Haan, backup hai", "Nahi, risky lag raha hai"] },
            { q: "Kya aapne 'Drip Irrigation' ka setup kiya?", o: ["Haan, paani bachta hai", "Nahi, normal flood irrigation hai"] },
            { q: "Kya aap pests ko manage karne ke liye bio-fertilizers use kar rahe hain?", o: ["Haan", "Nahi, chemical ki aadat hai"] }
        ]}
    },
    "INDEPENDENT_FILMMAKING": {
        "keywords": ["FILM", "MOVIE", "SCRIPT", "DIRECTOR", "CINEMATOGRAPHY", "SHORT FILM", "PRODUCTION"],
        "sub": { "CORE": [
            { q: "Kya aapki script 'Character Driven' hai ya sirf budget par depend hai?", o: ["Character driven (Strong script)", "Budget heavy hai"] },
            { q: "Kya aapne pre-production (storyboarding) complete ki?", o: ["Haan, sab ready hai", "Nahi, set par hi dekhunga"] },
            { q: "Kya aapne sound quality par focus kiya?", o: ["Haan, external mic hai", "Nahi, camera mic hi use karunga"] },
            { q: "Kya aapke paas distribution plan (YouTube/OTT/Festivals) hai?", o: ["Haan", "Nahi, bas bana raha hoon"] },
            { q: "Kya aapki team passion se kaam kar rahi hai ya sirf paise ke liye?", o: ["Passion ke saath", "Sirf salary ke liye"] }
        ]}
    },
    "HIGH_FASHION_BRAND": {
        "keywords": ["CLOTHING BRAND", "FASHION", "DESIGNER", "BOUTIQUE", "APPAREL", "LUXURY WEAR"],
        "sub": { "CORE": [
            { q: "Kya aapka fabric 'Premium' aur durable hai?", o: ["Haan, best quality hai", "Nahi, normal fabric hai"] },
            { q: "Kya aapka brand 'Story' communicate karta hai?", o: ["Haan, unique identity hai", "Nahi, bas design achha hai"] },
            { q: "Kya aapne niche market (e.g., Streetwear/Ethnic) fix ki?", o: ["Haan", "Nahi, sab ke liye hai"] },
            { q: "Kya aapka profit margin 40% se upar hai?", o: ["Haan", "Nahi, bahut kam hai"] },
            { q: "Kya aapne influencer marketing ka plan banaya?", o: ["Haan", "Nahi"] }
        ]}
    },
    "MENTAL_HEALTH_FIRST_AID": {
        "keywords": ["SUPPORT", "LISTENING", "HELP FRIEND", "EMPATHY", "CRISIS", "MENTAL SUPPORT"],
        "sub": { "CORE": [
            { q: "Kya aap sirf sun rahe hain ya bina maange advice de rahe hain?", o: ["Sirf sun raha hoon (Active Listening)", "Advice de raha hoon"] },
            { q: "Kya aapne unse pucha 'How can I support you right now?'", o: ["Haan", "Nahi, bas dilaasa diya"] },
            { q: "Kya ye mamla medical professional ka hai?", o: ["Nahi, normal tension hai", "Haan, serious lag raha hai"] },
            { q: "Kya aap unhe judge kar rahe hain?", o: ["Nahi, bilkul nahi", "Shayad, dimaag mein chal raha hai"] },
            { q: "Kya aapne unki baat secret rakhne ka wada kiya?", o: ["Haan, trust hai", "Nahi, sabko bata diya"] }
        ]}
    },
        "POLITICAL_CAMPAIGNING": {
        "keywords": ["ELECTION STRATEGY", "VOTER BAASE", "RALLY", "POLITICAL PR", "BOOTH MANAGEMENT", "CAMPAIGN"],
        "sub": { "CORE": [
            { q: "Kya aapne booth-level data ka analysis kiya?", o: ["Haan, data-driven strategy hai", "Nahi, bas rallies par bharosa hai"] },
            { q: "Kya aapka 'Voter Connect' emotional hai ya developmental?", o: ["Dono ka balance hai", "Sirf emotional/vocal hai"] },
            { q: "Kya aapke paas social media 'IT Cell' active hai?", o: ["Haan, organized hai", "Nahi, organic chal raha hai"] },
            { q: "Kya aap opposition ke negative campaign ko counter karne ke liye taiyar hain?", o: ["Haan, defense plan ready hai", "Nahi, hum ignore karenge"] },
            { q: "Kya aapne 'Swing Voters' (jo confuse hain) ko target kiya?", o: ["Haan, unhi par focus hai", "Nahi, sirf loyal supporters par"] }
        ]}
    },
    "ADVANCED_PRIVACY": {
        "keywords": ["VPN", "TOR", "ENCRYPTION", "METADATA", "SURVEILLANCE", "PRIVACY HACK", "TRACKING"],
        "sub": { "CORE": [
            { q: "Kya aap ek No-Log VPN use kar rahe hain?", o: ["Haan, verified audit hai", "Nahi, free/random VPN hai"] },
            { q: "Kya aapne browser mein 'Fingerprinting Protection' on ki hai?", o: ["Haan, Brave/Firefox settings se", "Nahi, default browser hai"] },
            { q: "Kya aap sensitive baat ke liye 'Signal' (E2EE) use karte hain?", o: ["Haan, hamesha", "Nahi, normal SMS/Chat"] },
            { q: "Kya aapke paas personal data ka physical backup (offline) hai?", o: ["Haan", "Nahi, sab cloud par hai"] },
            { q: "Kya aapne apne purane accounts (unused) delete kiye?", o: ["Haan", "Nahi, abhi tak active hain"] }
        ]}
    },
    "HOME_GARDENING_PRO": {
        "keywords": ["HYDROPONICS", "KITCHEN GARDEN", "FERTILIZER", "PLANTS", "GARDENING TIPS", "ORGANIC VEGGIES"],
        "sub": { "CORE": [
            { q: "Kya aapne plants ke liye 'NPK' balance check kiya?", o: ["Haan, soil testing ke hisab se", "Nahi, bas pani de raha hoon"] },
            { q: "Kya aap 'Companion Planting' (ek sath do faide) kar rahe hain?", o: ["Haan, research ki hai", "Nahi, idea nahi hai"] },
            { q: "Kya aapke plants ko rozana 4-6 ghante dhoop milti hai?", o: ["Haan", "Nahi, balcony mein chhanya hai"] },
            { q: "Kya aapne pest control ke liye 'Neem Oil' ka use kiya?", o: ["Haan, natural hai", "Nahi, chemicals use kiye"] },
            { q: "Kya aap kitchen waste se 'Compost' khud bana rahe hain?", o: ["Haan", "Nahi, bahar se laata hoon"] }
        ]}
    },
    "SPORTS_EVENT_MANAGEMENT": {
        "keywords": ["TOURNAMENT", "STADIUM", "LOGISTICS", "SPONSORS", "SPORTS EVENT", "COORDINATION"],
        "sub": { "CORE": [
            { q: "Kya aapne players ki medical/injury insurance li hai?", o: ["Haan, safety first", "Nahi, zarurat nahi padegi"] },
            { q: "Kya venue par emergency 'Ambulance' aur 'First Aid' ready hai?", o: ["Haan, standby par hai", "Nahi, bhool gaya"] },
            { q: "Kya aapke paas sponsors ka commitment 'Written' hai?", o: ["Haan, contract sign hai", "Nahi, sirf verbal hai"] },
            { q: "Kya aapne 'Crowd Control' ke liye security lagayi?", o: ["Haan", "Nahi, thode hi log aayenge"] },
            { q: "Kya aapne digital tickets/entry ka setup kiya?", o: ["Haan", "Nahi, manual hai"] }
        ]}
    },
    "BIO_TECHNOLOGY_CAREER": {
        "keywords": ["GENETICS", "LAB", "RESEARCH", "BIOTECH", "PHARMA", "STEM CELL", "CRISPR"],
        "sub": { "CORE": [
            { q: "Kya aap R&D (Research) mein long-term rukne ke liye taiyar hain?", o: ["Haan, patience hai", "Nahi, jaldi corporate job chahiye"] },
            { q: "Kya aapne latest 'CRISPR' ya Gene-editing tech ki padhai ki?", o: ["Haan, updated hoon", "Nahi, sirf basics pata hain"] },
            { q: "Kya aap lab safety protocols (Biosafety Levels) ke baare mein jante hain?", o: ["Haan, certified hoon", "Nahi, seekhna hai"] },
            { q: "Kya aapka focus 'Pharma' par hai ya 'Agriculture' Biotech par?", o: ["Pharma/Health", "Agriculture/Environment"] },
            { q: "Kya aap PhD karne ka plan kar rahe hain?", o: ["Haan, zaroori hai", "Nahi, Masters karke kaam shuru karunga"] }
        ]}
    },
        "ARCHITECTURE_DESIGN": {
        "keywords": ["INTERIOR", "VILLA", "BLUEPRINT", "SKYSCRAPER", "URBAN PLANNING", "FAÇADE", "VASTU"],
        "sub": { "CORE": [
            { q: "Kya aapne 'Load Bearing' structure ka calculation check kiya?", o: ["Haan, engineer se verified hai", "Nahi, abhi design stage par hai"] },
            { q: "Kya aapka design 'Sustainable' (Eco-friendly) hai?", o: ["Haan, solar aur water harvest hai", "Nahi, normal design hai"] },
            { q: "Kya ventilation aur natural light ka dhyan rakha gaya?", o: ["Haan, cross-ventilation hai", "Nahi, artificial light par depend hai"] },
            { q: "Kya aapne future extension (ek floor aur) ka provision rakha?", o: ["Haan", "Nahi, sirf aaj ka plan hai"] },
            { q: "Kya design 'Vastu' ya 'Functional' logic par based hai?", o: ["Dono ka balance hai", "Sirf style/look par"] }
        ]}
    },
    "ASTROPHYSICS_RESEARCH": {
        "keywords": ["BLACK HOLE", "QUANTUM", "TELESCOPE", "NASA", "ISRO", "GALAXY", "COSMOLOGY"],
        "sub": { "CORE": [
            { q: "Kya aap 'Observational' data par kaam kar rahe hain?", o: ["Haan, telescope data hai", "Nahi, theoretical maths hai"] },
            { q: "Kya aapne 'Relativity' aur 'Quantum Mechanics' ka conflict solve kiya?", o: ["Koshish jaari hai", "Nahi, ek hi domain mein hoon"] },
            { q: "Kya aapka research peer-reviewed journals mein submit hua?", o: ["Haan", "Nahi, abhi draft hai"] },
            { q: "Kya aapne 'Dark Matter' ka hisab lagaya?", o: ["Haan, models mein shamil hai", "Nahi"] },
            { q: "Kya aap computer simulations (Python/MATLAB) use kar rahe hain?", o: ["Haan, hamesha", "Nahi, manual math hai"] }
        ]}
    },
    "LUXURY_BRAND_MANAGEMENT": {
        "keywords": ["ROLEX", "GUCCI", "HERMES", "EXCLUSIVITY", "HNI CLIENTS", "PREMIUM RETAIL"],
        "sub": { "CORE": [
            { q: "Kya aapka brand 'Scarcity' (kam supply) maintain kar raha hai?", o: ["Haan, waitlist system hai", "Nahi, sab ke liye available hai"] },
            { q: "Kya aapka focus 'Craftsmanship' par hai ya 'Logos' par?", o: ["Craftsmanship (Quality)", "Logo (Brand Show-off)"] },
            { q: "Kya aapke HNI clients ko 'Personalized' service milti hai?", o: ["Haan, dedicated manager hai", "Nahi, normal retail hai"] },
            { q: "Kya aapka brand 'Story' sadiyon purani lagti hai?", o: ["Haan, heritage feel hai", "Nahi, naya brand hai"] },
            { q: "Kya aap marketing par zyada kharch kar rahe hain ya experience par?", o: ["VVIP Experience par", "Mass Ads par"] }
        ]}
    },
    "CRITICAL_NEGOTIATION": {
        "keywords": ["HOSTAGE", "BUSINESS DEAL", "STAKEHOLDER", "BARGAINING", "CONFLICT RESOLUTION"],
        "sub": { "CORE": [
            { q: "Kya aapne samne wale ki 'Deepest Fear' ko pehchana?", o: ["Haan, leverage pata hai", "Nahi, sirf paise ki baat hai"] },
            { q: "Kya aap 'No' kehne ke liye taiyar hain?", o: ["Haan, deal break kar sakta hoon", "Nahi, ye deal zaroori hai"] },
            { q: "Kya aapne 'BATNA' (Best Alternative) taiyar rakha hai?", o: ["Haan, backup ready hai", "Nahi, sirf yahi ek rasta hai"] },
            { q: "Kya aap 'Silence' (khamoshi) ko as a weapon use kar rahe hain?", o: ["Haan, pressure banane ke liye", "Nahi, main zyada bol raha hoon"] },
            { q: "Kya ye 'Win-Win' hai ya sirf aapki jeet?", o: ["Win-Win (Long term)", "Sirf meri jeet (Short term)"] }
        ]}
    },
    "CYBER_WARFARE_DEFENSE": {
        "keywords": ["ETHICAL HACKING", "DDoS", "FIREWALL", "ZERO DAY", "INFRASTRUCTURE", "SECURITY"],
        "sub": { "CORE": [
            { q: "Kya aapka 'Air-Gapped' backup system ready hai?", o: ["Haan, offline copy hai", "Nahi, sab network par hai"] },
            { q: "Kya aapne 'Zero Trust Architecture' lagaya hai?", o: ["Haan, har step par verification hai", "Nahi, normal password hai"] },
            { q: "Kya aapne 'Zero Day' vulnerability scan kiya?", o: ["Haan, proactive hoon", "Nahi, patched version use kar raha hoon"] },
            { q: "Kya team ko 'Social Engineering' attacks ki training hai?", o: ["Haan", "Nahi, log click kar dete hain"] },
            { q: "Kya aapne critical infrastructure (Power/Water) ko isolate kiya?", o: ["Haan", "Nahi"] }
        ]}
       }
    ]
  }

 };  
