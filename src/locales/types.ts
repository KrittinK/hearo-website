export interface NavContent {
  product: string;
  how: string;
  pilot: string;
  team: string;
  docs: string;
  signin: string;
  contact: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface HeroContent {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  sub: string;
  cta1: string;
  cta2: string;
  metrics: Metric[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  span: string;
  tag?: string;
}

export interface PipelineStep {
  code: string;
  title: string;
  desc: string;
  metric?: { label: string; value: string };
}

export interface SpecRow {
  k: string;
  v: string;
}

export interface SpecSection {
  title: string;
  rows: SpecRow[];
}

export interface TeamMember {
  role: string;
  name: string;
  bio: string;
}

export interface FooterCol {
  title: string;
  items: string[];
}

export interface Locale {
  nav: NavContent;
  hero: HeroContent;
  logos: { kicker: string; items: string[] };
  features: { kicker: string; title1: string; title2: string; items: FeatureItem[] };
  pipeline: { kicker: string; title: string; steps: PipelineStep[] };
  channels: { kicker: string; title1: string; title2: string; body: string; bullets: string[] };
  spec: { kicker: string; title: string; sections: SpecSection[] };
  pilot: { kicker: string; title: string; body: string; stats: { num: string; label: string }[]; cta: string };
  team: { kicker: string; title: string; members: TeamMember[] };
  awards: { kicker: string; title: string; sub: string; date: string };
  cta: { title1: string; title2: string; body: string; button1: string; button2: string };
  footer: { tag: string; cols: FooterCol[] };
}
