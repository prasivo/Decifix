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
                                                                               }
                    
