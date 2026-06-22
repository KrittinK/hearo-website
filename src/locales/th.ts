import type { Locale } from "./types";

export const th: Locale = {
  nav: {
    product: "ผลิตภัณฑ์",
    how: "วิธีทำงาน",
    pilot: "Pilot",
    team: "ทีม",
    docs: "เอกสาร",
    signin: "เข้าสู่ระบบ",
    contact: "ติดต่อ",
  },
  hero: {
    badge: "กำลังทดสอบในกรุงเทพ",
    title1: "ระบบปฏิบัติการ",
    title2: "แห่งการ",
    title3: "ตระหนักรู้",
    sub: "Hearo ฟังเสียงที่สำคัญ — สัญญาณเพลิงไหม้ กระจก ไซเรน เสียงร้องขอช่วย — และแปลเป็นการสั่น แสง และการแจ้งเตือนสำหรับผู้พิการทางการได้ยิน",
    cta1: "ร่วมเป็นพันธมิตร",
    cta2: "ดูการตรวจจับ",
    metrics: [
      { label: "ความเร็ว", value: "<1 วินาที" },
      { label: "หมวดเสียง", value: "8 หมวด" },
      { label: "ผู้ทดสอบ", value: "10+" },
    ],
  },
  logos: {
    kicker: "สนับสนุนโดย",
    items: ["Microsoft", "UNDP", "สถานทูตสหรัฐฯ", "TUSAA", "Accessibility TH"],
  },
  features: {
    kicker: "Hearo ทำอะไร",
    title1: "ไปป์ไลน์เดียว",
    title2: "ทุกช่องทางแห่งการตระหนักรู้",
    items: [
      {
        icon: "🎙️",
        title: "ฟังเรียลไทม์",
        desc: "ตรวจสอบไมโครโฟนบนอุปกรณ์ ไม่เก็บเสียง",
        span: "span 3",
        tag: "บนอุปกรณ์",
      },
      {
        icon: "🧠",
        title: "ตรวจจับอัจฉริยะ",
        desc: "ตัวจำแนกเสียงที่ฝึกจากเสียงฉุกเฉิน กรองเสียงรบกวน",
        span: "span 3",
        tag: "ML v4.2",
      },
      {
        icon: "📳",
        title: "รูปแบบการสั่น",
        desc: "รูปแบบสัมผัสเฉพาะต่อหมวด ไฟไหม้รู้สึกต่างจากกริ่งประตู",
        span: "span 2",
      },
      {
        icon: "💡",
        title: "แฟลชภาพ",
        desc: "การส่องสีเต็มจอและแฟลชคอนทราสต์สูง",
        span: "span 2",
      },
      {
        icon: "📱",
        title: "เครือข่ายแจ้งเตือน",
        desc: "แจ้งเตือนไปยังครอบครัวและผู้ดูแลได้",
        span: "span 2",
      },
    ],
  },
  pipeline: {
    kicker: "ไปป์ไลน์",
    title: "จากเสียงสู่ความปลอดภัยในไม่ถึงวินาที",
    steps: [
      {
        code: "audio.capture()",
        title: "ฟัง",
        desc: "สตรีมไมโครโฟนต่อเนื่อง สุ่มตัวอย่าง 16 kHz",
        metric: { label: "SAMPLE", value: "16kHz" },
      },
      {
        code: "model.classify()",
        title: "ตรวจจับ",
        desc: "ตัวจำแนกหลายคลาสครอบคลุม 8 ประเภทเสียง",
        metric: { label: "LATENCY", value: "280ms" },
      },
      {
        code: "channels.emit()",
        title: "แจ้ง",
        desc: "สั่น แฟลช และหน้าจอทำงานพร้อมกัน",
        metric: { label: "CHANNELS", value: "4" },
      },
      {
        code: "network.notify()",
        title: "เชื่อมต่อ",
        desc: "ส่งไปยังผู้ติดต่อและเครือข่ายดูแลได้",
        metric: { label: "เลือกได้", value: "opt-in" },
      },
    ],
  },
  channels: {
    kicker: "ช่องทางการแจ้งเตือน",
    title1: "การแจ้งเตือนที่พลาดไม่ได้",
    title2: "ไม่ว่าคุณจะอยู่ห้องใด",
    body: "เนื่องจากผู้ใช้อยู่ในสภาพแวดล้อมต่างๆ ช่องทางเดียวจึงไม่เพียงพอ Hearo แจ้งเตือนแบบซ้ำซ้อน",
    bullets: [
      "รูปแบบการสั่นเฉพาะต่อหมวดเสียง",
      "การส่องสีเต็มจอ + แฟลช",
      "แจ้งเตือนต่อเนื่องบนโทรศัพท์และนาฬิกา",
      "แจ้งผู้ติดต่อและผู้ดูแลได้",
    ],
  },
  spec: {
    kicker: "ภาพรวมเทคนิค",
    title: "สร้างบน Azure ปรับจูนสำหรับสภาพแวดล้อมไทย",
    sections: [
      {
        title: "โมเดล",
        rows: [
          { k: "Architecture", v: "CNN + attention" },
          { k: "Classes", v: "8 (กำลังขยาย)" },
          { k: "ข้อมูลฝึก", v: "Pilot + สาธารณะ" },
          { k: "F1", v: "0.93" },
        ],
      },
      {
        title: "โครงสร้างพื้นฐาน",
        rows: [
          { k: "Hosting", v: "Azure ML SEA" },
          { k: "Edge option", v: "IoT Edge" },
          { k: "Storage", v: "Cosmos + Blob" },
          { k: "Telemetry", v: "Opt-in" },
        ],
      },
      {
        title: "ความเป็นส่วนตัว",
        rows: [
          { k: "การเก็บเสียง", v: "ไม่เก็บ" },
          { k: "On-device", v: "แนะนำ" },
          { k: "Alerts", v: "E2E" },
          { k: "การควบคุม", v: "Per-channel" },
        ],
      },
    ],
  },
  pilot: {
    kicker: "โครงการ PILOT",
    title: "ผู้ทดสอบ 10 คนในกรุงเทพ สภาพแวดล้อมจริง",
    body: "เรากำลังทดสอบ Hearo กับผู้ร่วม 10+ คนในเขตกรุงเทพและปริมณฑล ในบ้าน ที่ทำงาน และทุกสภาพแวดล้อม",
    stats: [
      { num: "10+", label: "ผู้ทดสอบที่ใช้งานอยู่" },
      { num: "8", label: "หมวดเสียงที่ใช้งาน" },
      { num: "v4", label: "รุ่นของโมเดล" },
    ],
    cta: "สมัครเป็นผู้ทดสอบ",
  },
  team: {
    kicker: "ทีม",
    title: "ทีมสองคน กับเป้าหมายเดียวกัน: ความปลอดภัยที่ครอบคลุม",
    members: [
      {
        role: "ผู้ก่อตั้ง · PRODUCT LEAD",
        name: "ปอย",
        bio: "นำวิสัยทัศน์ กลยุทธ์ และ UX ทำงานร่วมกับชุมชนผู้พิการทางการได้ยินโดยตรง",
      },
      {
        role: "ผู้ร่วมก่อตั้ง · TECHNICAL LEAD",
        name: "รุ่ง",
        bio: "นำด้าน AI และฮาร์ดแวร์ ผู้สำเร็จการศึกษาด้าน AI และวิศวกรรมคอมพิวเตอร์",
      },
    ],
  },
  awards: {
    kicker: "การยอมรับ",
    title: "รางวัลที่ 3 — Microsoft Accessibility Hackathon",
    sub: "Empowering Persons with Disabilities through AI Innovation · UNDP × Microsoft Thailand",
    date: "2025",
  },
  cta: {
    title1: "ความปลอดภัย",
    title2: "สำหรับทุกคน",
    body: "เป็นพันธมิตร ทดสอบ หรือสนับสนุนภารกิจ ทุกการเชื่อมต่อทำให้สิ่งนี้เป็นจริง",
    button1: "ร่วมเป็นพันธมิตร",
    button2: "เข้าร่วม Pilot",
  },
  footer: {
    tag: "เทคโนโลยีเพื่อสังคมสำหรับการตระหนักรู้ในภาวะฉุกเฉินในไทย",
    cols: [
      { title: "ผลิตภัณฑ์", items: ["ภาพรวม", "วิธีทำงาน", "Pilot", "Roadmap"] },
      { title: "ทีม", items: ["เกี่ยวกับ", "งาน", "Press"] },
      { title: "ชุมชน", items: ["พันธมิตร", "Accessibility", "ติดต่อ"] },
      { title: "กฎหมาย", items: ["Privacy", "Terms"] },
    ],
  },
};
