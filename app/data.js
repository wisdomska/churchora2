/* Churchora — mock data. Plain JS, exposed on window.CH */
(function () {
  const members = [
    { id: 1, name: "Adwoa Mensah", role: "Member", group: "Choir", joined: "2019", bday: "06-09", phone: "024 555 0114", email: "adwoa@grace.org", giving: 2840, tone: "#1F7A4D" },
    { id: 2, name: "Kojo Asante", role: "Deacon", group: "Ushers", joined: "2015", bday: "06-11", phone: "020 555 0188", email: "kojo@grace.org", giving: 5210, tone: "#173B66" },
    { id: 3, name: "Efua Sarpong", role: "Member", group: "Youth", joined: "2021", bday: "06-12", phone: "055 555 0132", email: "efua@grace.org", giving: 940, tone: "#D6531F" },
    { id: 4, name: "Yaw Boateng", role: "Pastor", group: "Leadership", joined: "2008", bday: "06-18", phone: "024 555 0101", email: "yaw@grace.org", giving: 7600, tone: "#7A4DA8" },
    { id: 5, name: "Ama Owusu", role: "Member", group: "Welfare", joined: "2020", bday: "06-22", phone: "027 555 0150", email: "ama@grace.org", giving: 1620, tone: "#B5790F" },
    { id: 6, name: "Kwame Darko", role: "Member", group: "Media", joined: "2022", bday: "07-02", phone: "050 555 0177", email: "kwame@grace.org", giving: 1180, tone: "#2F6CA8" },
    { id: 7, name: "Akosua Frimpong", role: "Member", group: "Choir", joined: "2018", bday: "07-05", phone: "024 555 0199", email: "akosua@grace.org", giving: 3320, tone: "#BB4130" },
    { id: 8, name: "Kofi Annan", role: "Elder", group: "Leadership", joined: "2010", bday: "07-09", phone: "020 555 0123", email: "kofi@grace.org", giving: 6050, tone: "#1F7A4D" },
  ];

  // upcoming birthdays (relative labels)
  const birthdays = [
    { id: 1, name: "Adwoa Mensah", when: "Today", date: "Jun 9", group: "Choir", tone: "#1F7A4D", wished: false },
    { id: 2, name: "Kojo Asante", when: "In 2 days", date: "Jun 11", group: "Ushers", tone: "#173B66", wished: false },
    { id: 3, name: "Efua Sarpong", when: "In 3 days", date: "Jun 12", group: "Youth", tone: "#D6531F", wished: false },
    { id: 4, name: "Yaw Boateng", when: "Jun 18", date: "Jun 18", group: "Leadership", tone: "#7A4DA8", wished: true },
    { id: 5, name: "Ama Owusu", when: "Jun 22", date: "Jun 22", group: "Welfare", tone: "#B5790F", wished: false },
  ];

  const verses = [
    { ref: "Philippians 4:13", text: "I can do all things through Christ who strengthens me.", tr: "NKJV", tag: "Strength" },
    { ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want.", tr: "KJV", tag: "Comfort" },
    { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", tr: "NIV", tag: "Hope" },
    { ref: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", tr: "NIV", tag: "Hope" },
    { ref: "Proverbs 3:5", text: "Trust in the Lord with all your heart and lean not on your own understanding.", tr: "NIV", tag: "Faith" },
    { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him.", tr: "NIV", tag: "Faith" },
    { ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", tr: "NIV", tag: "Comfort" },
    { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son.", tr: "NIV", tag: "Love" },
  ];

  const translations = ["NIV", "NKJV", "KJV", "ESV", "NLT", "MSG"];

  // sermon queue
  const sermonQueue = [
    { ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want.", tr: "NKJV" },
    { ref: "Psalm 23:2", text: "He makes me lie down in green pastures, he leads me beside quiet waters.", tr: "NIV" },
    { ref: "Psalm 23:4", text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.", tr: "NIV" },
    { ref: "John 10:11", text: "I am the good shepherd. The good shepherd lays down his life for the sheep.", tr: "NIV" },
    { ref: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms.", tr: "NIV" },
  ];

  const giving = [
    { id: "TX-4821", name: "Kojo Asante", type: "Tithe", method: "MTN MoMo", amount: 500, when: "2 min ago", status: "Completed" },
    { id: "TX-4820", name: "Adwoa Mensah", type: "Offering", method: "Card", amount: 120, when: "18 min ago", status: "Completed" },
    { id: "TX-4819", name: "Anonymous", type: "Building Fund", method: "Vodafone Cash", amount: 250, when: "41 min ago", status: "Completed" },
    { id: "TX-4818", name: "Ama Owusu", type: "Tithe", method: "MTN MoMo", amount: 300, when: "1 hr ago", status: "Pending" },
    { id: "TX-4817", name: "Kwame Darko", type: "Offering", method: "Card", amount: 80, when: "2 hr ago", status: "Completed" },
    { id: "TX-4816", name: "Akosua Frimpong", type: "Missions", method: "AirtelTigo", amount: 150, when: "3 hr ago", status: "Failed" },
    { id: "TX-4815", name: "Kofi Annan", type: "Tithe", method: "Bank", amount: 1000, when: "5 hr ago", status: "Completed" },
  ];

  const funds = [
    { name: "Tithe", color: "var(--primary)" },
    { name: "Offering", color: "var(--accent)" },
    { name: "Building Fund", color: "var(--info)" },
    { name: "Missions", color: "var(--success)" },
    { name: "Welfare", color: "var(--warn)" },
  ];

  const momoProviders = [
    { id: "mtn", name: "MTN MoMo", color: "#FFCC00", short: "MTN" },
    { id: "voda", name: "Vodafone Cash", color: "#E60000", short: "VOD" },
    { id: "at", name: "AirtelTigo Money", color: "#0033A0", short: "AT" },
  ];

  const presetAmounts = [20, 50, 100, 200, 500];

  const plans = [
    {
      id: "basic", name: "Basic", price: 0, cadence: "free forever",
      tagline: "Everything a small fellowship needs to gather and give.",
      features: [
        "Up to 150 members",
        "Online tithes & offerings",
        "Verse of the day feed",
        "Birthday reminders",
        "1 admin seat",
        "Email support",
      ],
      missing: ["Sermon live-sync", "Multi-translation library", "Advanced giving reports", "Custom themes & branding"],
    },
    {
      id: "advanced", name: "Advanced", price: 49, cadence: "per month", featured: true,
      tagline: "The full platform for growing churches that run services every week.",
      features: [
        "Unlimited members",
        "Sermon live-sync & projection",
        "Multi-translation verse library",
        "Scheduled verses & service plans",
        "Automated birthday wishes",
        "Advanced giving & pledge reports",
        "Custom themes & branding",
        "Unlimited admin seats",
        "Priority support",
      ],
      missing: [],
    },
  ];

  const navMain = [
    { id: "site", label: "Website", icon: "globe" },
    { id: "member", label: "Member app", icon: "smartphone" },
    { id: "cms", label: "Admin CMS", icon: "layout-dashboard" },
    { id: "sermon", label: "Sermon mode", icon: "presentation" },
  ];

  const cmsNav = [
    { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
    { id: "members", label: "Members", icon: "users" },
    { id: "giving", label: "Giving", icon: "hand-coins" },
    { id: "verses", label: "Verses & content", icon: "book-open" },
    { id: "sermon", label: "Sermon sync", icon: "presentation" },
    { id: "settings", label: "Settings", icon: "settings" },
  ];

  const themes = [
    { id: "navy", label: "Navy", swatch: "#173B66" },
    { id: "orange", label: "Orange", swatch: "#D6531F" },
    { id: "green", label: "Green", swatch: "#1F7A4D" },
    { id: "mono", label: "Monochrome", swatch: "#3A3A3A" },
  ];

  const stats = {
    members: 842,
    membersDelta: "+24 this month",
    giving: 18420,
    givingDelta: "+12% vs last month",
    attendance: 612,
    attendanceDelta: "+8% Sunday avg",
    pledged: 76,
  };

  // weekly giving sparkline data (offering vs tithe), GHS thousands
  const givingTrend = [9.2, 11.6, 8.4, 13.1, 12.0, 15.4, 14.2, 18.4];
  const givingWeeks = ["W1","W2","W3","W4","W5","W6","W7","W8"];

  window.CH = {
    members, birthdays, verses, translations, sermonQueue, giving, funds,
    momoProviders, presetAmounts, plans, navMain, cmsNav, themes, stats,
    givingTrend, givingWeeks,
    brand: { name: "Churchora", tagline: "Your church partner", church: "Grace Chapel International" },
  };
})();
