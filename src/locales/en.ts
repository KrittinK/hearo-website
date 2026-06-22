import type { Locale } from "./types";

export const en: Locale = {
  nav: {
    product: "Product",
    how: "How it works",
    pilot: "Pilot",
    team: "Team",
    docs: "Docs",
    signin: "Sign in",
    contact: "Contact",
  },
  hero: {
    badge: "Now piloting in Bangkok",
    title1: "The operating",
    title2: "system for",
    title3: "awareness.",
    sub: "Hearo listens for the sounds that matter — fire alarms, glass, sirens, human distress — and translates them into vibration, light, and alerts for Deaf and Hard-of-Hearing users.",
    cta1: "Partner with Hearo",
    cta2: "See a detection",
    metrics: [
      { label: "DETECTION LATENCY", value: "<1s" },
      { label: "SOUND CATEGORIES", value: "8 live" },
      { label: "PILOT TESTERS", value: "10+" },
    ],
  },
  logos: {
    kicker: "SUPPORTED BY",
    items: ["Microsoft", "UNDP", "U.S. Embassy", "TUSAA", "Accessibility TH"],
  },
  features: {
    kicker: "WHAT HEARO DOES",
    title1: "One pipeline.",
    title2: "Every channel of awareness.",
    items: [
      {
        icon: "🎙️",
        title: "Real-time listening",
        desc: "On-device microphone monitoring with privacy-preserving audio analysis. Never stores audio.",
        span: "span 3",
        tag: "ON-DEVICE",
      },
      {
        icon: "🧠",
        title: "Intelligent detection",
        desc: "Fine-tuned sound classifier trained on emergency acoustics. Filters noise that mimics alarms.",
        span: "span 3",
        tag: "ML v4.2",
      },
      {
        icon: "📳",
        title: "Haptic patterns",
        desc: "Distinct tactile signatures per category — fire feels different from a doorbell.",
        span: "span 2",
      },
      {
        icon: "💡",
        title: "Visual strobes",
        desc: "Screen-filling color pulses and flashlight strobes at high contrast.",
        span: "span 2",
      },
      {
        icon: "📱",
        title: "Network alerts",
        desc: "Optional loop-in to family, caregivers, neighbors — your safety net.",
        span: "span 2",
      },
    ],
  },
  pipeline: {
    kicker: "THE PIPELINE",
    title: "From sound to safety in under a second.",
    steps: [
      {
        code: "audio.capture()",
        title: "Listen",
        desc: "Continuous microphone stream, sampled at 16 kHz.",
        metric: { label: "SAMPLE", value: "16kHz" },
      },
      {
        code: "model.classify()",
        title: "Detect",
        desc: "Multi-class classifier over 8 critical sound types.",
        metric: { label: "LATENCY", value: "280ms" },
      },
      {
        code: "channels.emit()",
        title: "Alert",
        desc: "Vibration, flash, and screen fire in parallel.",
        metric: { label: "CHANNELS", value: "4 live" },
      },
      {
        code: "network.notify()",
        title: "Connect",
        desc: "Optional push to trusted contacts and care network.",
        metric: { label: "OPTIONAL", value: "opt-in" },
      },
    ],
  },
  channels: {
    kicker: "ALERT CHANNELS",
    title1: "An alert you cannot miss.",
    title2: "No matter the room.",
    body: "Because Deaf/HoH users live in many environments, a single alert channel is not enough. Hearo fires redundantly — so an alert reaches you through whichever sense is available.",
    bullets: [
      "Distinct haptic pattern per sound category",
      "Full-screen color pulse + flashlight strobe",
      "Persistent push notifications on phone and watch",
      "Optional alerts to trusted contacts & caregivers",
    ],
  },
  spec: {
    kicker: "TECHNICAL OVERVIEW",
    title: "Built on Azure. Tuned on Thai environments.",
    sections: [
      {
        title: "MODEL",
        rows: [
          { k: "Architecture", v: "CNN + attention" },
          { k: "Classes", v: "8 (expanding)" },
          { k: "Training data", v: "Pilot-labeled + public" },
          { k: "F1 (held-out)", v: "0.93" },
        ],
      },
      {
        title: "INFRASTRUCTURE",
        rows: [
          { k: "Hosting", v: "Azure ML SE Asia" },
          { k: "Edge option", v: "IoT Edge device" },
          { k: "Storage", v: "Cosmos DB + Blob" },
          { k: "Telemetry", v: "Opt-in only" },
        ],
      },
      {
        title: "PRIVACY",
        rows: [
          { k: "Audio retention", v: "Not stored" },
          { k: "On-device inference", v: "Preferred" },
          { k: "Network alerts", v: "End-to-end" },
          { k: "User control", v: "Per-channel opt-in" },
        ],
      },
    ],
  },
  pilot: {
    kicker: "PILOT PROGRAM",
    title: "Ten testers in Bangkok. Real environments.",
    body: "We are running Hearo with 10+ Deaf and Hard-of-Hearing participants across the Bangkok Metropolitan Area — in homes, offices, and everyday environments. Each session feeds our model and our product.",
    stats: [
      { num: "10+", label: "Active pilot testers" },
      { num: "8", label: "Sound categories live" },
      { num: "v4", label: "Model iteration" },
    ],
    cta: "Apply to test",
  },
  team: {
    kicker: "MADE BY",
    title: "A two-person team with a shared brief: safety, inclusive by default.",
    members: [
      {
        role: "FOUNDER · PRODUCT LEAD",
        name: "Poy",
        bio: "Leads product vision, strategy, and UX — working directly with Deaf/HoH communities to keep solutions practical. Advocate for GEDSI.",
      },
      {
        role: "CO-FOUNDER · TECHNICAL LEAD",
        name: "Roong",
        bio: "Leads AI and hardware. AI & Computer Engineering graduate with a focus on accessibility and human-centered systems.",
      },
    ],
  },
  awards: {
    kicker: "RECOGNITION",
    title: "3rd Place — Microsoft Accessibility Hackathon",
    sub: "Empowering Persons with Disabilities through AI Innovation · UNDP × Microsoft Thailand",
    date: "2025",
  },
  cta: {
    title1: "Safety accessible",
    title2: "to everyone.",
    body: "Partner with us, test with us, or support the mission. Every connection makes this real.",
    button1: "Partner with Hearo",
    button2: "Join the pilot",
  },
  footer: {
    tag: "Social-impact technology for emergency awareness in Thailand.",
    cols: [
      { title: "PRODUCT", items: ["Overview", "How it works", "Pilot", "Roadmap"] },
      { title: "TEAM", items: ["About", "Careers", "Press"] },
      { title: "COMMUNITY", items: ["Partners", "Accessibility", "Contact"] },
      { title: "LEGAL", items: ["Privacy", "Terms"] },
    ],
  },
};
