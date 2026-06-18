import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import './App.css'

type FeaturePoint = {
  title: string
  detail: string
}

type TimelineItem = {
  week: string
  title: string
  blurb: string
  bullets: string[]
  project: string
}

type NumericStat = {
  label: string
  description: string
  value: number
  prefix?: string
  suffix?: string
}

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Projects', href: '#projects' },
  { label: 'Parents', href: '#parents' },
  { label: 'Reviews', href: '#reviews' },
]

const heroStats = [
  { label: 'Ages', value: '8-14 years' },
  { label: 'Format', value: 'Live online' },
  { label: 'Duration', value: '4 weeks' },
  { label: 'Seats', value: '24 per cohort' },
]

const quickFacts = [
  {
    label: 'Starts',
    value: '15 July 2026',
    detail: 'New weekday and weekend cohorts open every month.',
  },
  {
    label: 'Live Hours',
    value: '8 guided labs',
    detail: 'Two 90-minute sessions every week with replay snippets.',
  },
  {
    label: 'Mentor Access',
    value: 'Office hours',
    detail: 'Parents and students get Q&A support between classes.',
  },
  {
    label: 'Take-Home Work',
    value: '3 portfolio builds',
    detail: 'Each student ships projects they can demo with confidence.',
  },
  {
    label: 'Class Design',
    value: 'Low student-to-mentor ratio',
    detail: 'Cohorts stay intentionally small for discussion and debugging.',
  },
  {
    label: 'Parent Visibility',
    value: 'Weekly progress notes',
    detail: 'Families receive digestible updates, wins, and next steps.',
  },
]

const workshopHighlights: FeaturePoint[] = [
  {
    title: 'Live robotics labs, not passive videos',
    detail:
      'Each class is run like a small studio session with real-time instructor walkthroughs, whiteboard thinking, and hands-on building.',
  },
  {
    title: 'AI concepts explained through visible systems',
    detail:
      'Students learn prompts, models, sensors, and automation by seeing how decisions move through a robot step by step.',
  },
  {
    title: 'Built for curious beginners and fast learners',
    detail:
      'Scaffolded pathways keep new students calm while optional challenge tracks keep advanced kids engaged.',
  },
  {
    title: 'A final showcase families can actually understand',
    detail:
      'Projects are framed as stories, so parents can immediately see what their child built, why it matters, and how they solved problems.',
  },
]

const learningOutcomes: FeaturePoint[] = [
  {
    title: 'Systems thinking',
    detail:
      'Students learn to break big ideas into sensors, inputs, logic, and outputs instead of guessing blindly.',
  },
  {
    title: 'Creative confidence',
    detail:
      'Every week includes invention prompts that turn technical lessons into self-directed ideas and visible experiments.',
  },
  {
    title: 'Presentation readiness',
    detail:
      'Demo rehearsals help students explain what they built in clear, parent-friendly language.',
  },
  {
    title: 'Practical AI literacy',
    detail:
      'Students leave with grounded intuition about how AI tools help, where they fail, and how to use them responsibly.',
  },
]

const skillsStudentsGain: FeaturePoint[] = [
  {
    title: 'Prompt design for creative problem solving',
    detail:
      'Students learn how to ask better questions, iterate on outputs, and compare ideas instead of accepting the first answer.',
  },
  {
    title: 'Robot logic mapping',
    detail:
      'We turn behavior into flowcharts, decision trees, and control rules that make engineering feel approachable.',
  },
  {
    title: 'Prototype storytelling',
    detail:
      'Students package ideas into demo boards, captions, and mini-presentations the way modern product teams do.',
  },
  {
    title: 'Debugging habits',
    detail:
      'They practice spotting errors, testing assumptions, and improving a build one variable at a time.',
  },
]

const whyParentsChoose: FeaturePoint[] = [
  {
    title: 'Clear progress without needing technical expertise',
    detail:
      'Families get concise updates, artifacts, and vocabulary explanations so they can stay involved without having to decode developer jargon.',
  },
  {
    title: 'Structure that feels safe and premium',
    detail:
      'Moderated live sessions, predictable routines, and thoughtful pacing help students feel supported from the first class onward.',
  },
  {
    title: 'Strong balance of creativity and rigor',
    detail:
      'The workshop combines engineering discipline, imagination, and communication instead of over-indexing on just coding.',
  },
  {
    title: 'A real end product to show for the investment',
    detail:
      'Students leave with polished demo-ready work rather than a vague certificate and half-finished assignments.',
  },
]

const whyKidsLove: FeaturePoint[] = [
  {
    title: 'They get to invent, not only follow instructions',
    detail:
      'Open-ended design prompts let students build their own rover stories, safety bots, and futuristic prototypes.',
  },
  {
    title: 'The classes feel energetic and collaborative',
    detail:
      'Mentors guide students through quick wins, team moments, and visual progress checkpoints during every session.',
  },
  {
    title: 'Concepts are taught through cool artifacts',
    detail:
      'Students work with mission boards, control panels, AI prompts, and sketchbook-style exercises that feel like building something real.',
  },
  {
    title: 'Showcase day feels like a launch',
    detail:
      'The final week is framed like a product reveal, which gives students a memorable reason to refine and present their best work.',
  },
]

const curriculumTimeline: TimelineItem[] = [
  {
    week: 'Week 01',
    title: 'Think like a robotics engineer',
    blurb:
      'Students explore sensors, commands, decision-making, and feedback loops using invention sketches and guided demos.',
    bullets: ['Robot anatomy notes', 'Decision-tree workshop', 'Mission planning board'],
    project: 'Smart rover mission blueprint',
  },
  {
    week: 'Week 02',
    title: 'Teach machines to notice patterns',
    blurb:
      'The cohort learns how AI models classify signals, compare examples, and support robot actions in simple, visible ways.',
    bullets: ['Vision prompt exercises', 'Pattern spotting labs', 'Failure mode discussion'],
    project: 'Object-detection idea prototype',
  },
  {
    week: 'Week 03',
    title: 'Build interactive systems',
    blurb:
      'Students combine prompts, logic, and environmental rules into multi-step automations that respond to changing inputs.',
    bullets: ['Sensor-to-action chains', 'Debugging drills', 'Peer feedback critiques'],
    project: 'Responsive home assistant robot',
  },
  {
    week: 'Week 04',
    title: 'Polish, present, and future-cast',
    blurb:
      'The final week focuses on project refinement, storytelling, confidence practice, and a polished family showcase.',
    bullets: ['Demo script coaching', 'Portfolio board setup', 'Live capstone presentations'],
    project: 'Future-city robotics showcase',
  },
]

const weeklyBreakdown = [
  {
    week: 'Monday',
    title: 'Concept Lab',
    detail:
      'A live instructor session introduces the week’s engineering question, visuals, and invention challenge.',
  },
  {
    week: 'Wednesday',
    title: 'Build Sprint',
    detail:
      'Students apply the concept in a guided maker session with checkpoints, mentor support, and optional stretch tasks.',
  },
  {
    week: 'Friday',
    title: 'Office Hours',
    detail:
      'Short drop-in help for debugging, extending projects, or walking parents through progress and expectations.',
  },
  {
    week: 'Weekend',
    title: 'Family Demo Loop',
    detail:
      'Students capture a quick reflection, share artifacts, and prepare a small presentation to reinforce retention.',
  },
]

const projects = [
  {
    name: 'Guardian Rover',
    summary:
      'A safety-focused robot concept that uses prompts, detection rules, and alert logic to patrol a space intelligently.',
    tag: 'AI + decision systems',
  },
  {
    name: 'Future Habitat Assistant',
    summary:
      'Students imagine how a robot could support a smart city, combining automation rules, context clues, and human-centered design.',
    tag: 'Systems design + storytelling',
  },
  {
    name: 'Sorting Arm Control Board',
    summary:
      'An operations-style build where kids design a control interface, map commands, and present how the robot responds.',
    tag: 'Interface thinking + robotics flow',
  },
]

const instructorHighlights = [
  'Led by mentors who teach engineering ideas through sketches, demos, and practical language.',
  'Small-cohort facilitation designed to make every student feel seen, supported, and challenged.',
  'Built-in parent communication so progress never disappears into a black box.',
]

const stats: NumericStat[] = [
  {
    label: 'Parents report stronger curiosity',
    description: 'Families said their child asked better questions about how technology works.',
    value: 94,
    suffix: '%',
  },
  {
    label: 'Students finish with presentable work',
    description: 'Most learners end the workshop with multiple artifacts they are proud to explain.',
    value: 3,
    suffix: 'x',
  },
  {
    label: 'Average confidence lift',
    description: 'Confidence is measured through mentor check-ins between week one and week four.',
    value: 87,
    suffix: '%',
  },
  {
    label: 'Minutes of live instruction weekly',
    description: 'The program balances depth, energy, and homework-friendly pacing.',
    value: 180,
  },
]

const successStories = [
  {
    name: 'Aarav, age 10',
    result: 'Went from “I like robots” to explaining decision trees to his parents by week two.',
  },
  {
    name: 'Mira, age 12',
    result: 'Turned a shy notebook sketch into a polished final showcase concept for a hospital helper bot.',
  },
  {
    name: 'Reyansh, age 13',
    result: 'Used the challenge track to prototype a multi-step home assistant workflow and present it clearly.',
  },
]

const testimonials = [
  {
    quote:
      'This was the first tech class where my son could clearly explain what he built and why. The teaching felt polished, thoughtful, and calm.',
    name: 'Neha S.',
    role: 'Parent of an 11-year-old learner',
  },
  {
    quote:
      'My daughter loved that it felt creative, not just technical. She kept sketching robot ideas after class and could not wait for showcase day.',
    name: 'Ritu M.',
    role: 'Parent of a 12-year-old learner',
  },
  {
    quote:
      'The mentors were excellent at meeting kids where they were. It felt like a premium product, not an improvised online class.',
    name: 'Arjun K.',
    role: 'Parent of a 9-year-old learner',
  },
]

const scheduleBlocks = [
  {
    cohort: 'Weekday cohort',
    timing: 'Tue + Thu, 5:30 PM - 7:00 PM IST',
    detail: 'Best for families who want a structured midweek routine.',
  },
  {
    cohort: 'Weekend cohort',
    timing: 'Sat + Sun, 11:00 AM - 12:30 PM IST',
    detail: 'Ideal for students balancing school clubs and homework.',
  },
  {
    cohort: 'Parent check-in',
    timing: 'Friday, 6:15 PM IST',
    detail: 'A concise optional progress note walkthrough with the mentor team.',
  },
]

const pricingInclusions = [
  '8 live online studio sessions',
  'Weekly mentor office hours',
  'Project workbook and downloadable design sheets',
  'Parent progress summaries',
  'Final showcase presentation kit',
  'Completion certificate and student portfolio assets',
]

const faqs = [
  {
    question: 'Is this suitable for beginners?',
    answer:
      'Yes. The core path assumes curiosity, not prior coding experience. Students who move faster get optional challenge prompts.',
  },
  {
    question: 'What device setup is needed?',
    answer:
      'A laptop, stable internet connection, microphone access, and a quiet space for live participation are enough to join confidently.',
  },
  {
    question: 'Will parents be able to track progress?',
    answer:
      'Yes. Each week includes a digest with milestones, vocabulary summaries, and a glimpse into the build or idea your child developed.',
  },
  {
    question: 'What happens if a student misses a class?',
    answer:
      'Families receive structured recap notes and replay snippets so students can catch up before the next live session.',
  },
]

const premiumEase = [0.16, 1, 0.3, 1] as const

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
}

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const starParticles = [
  { className: 'star star--one', duration: 12 },
  { className: 'star star--two', duration: 16 },
  { className: 'star star--three', duration: 18 },
  { className: 'star star--four', duration: 14 },
  { className: 'star star--five', duration: 20 },
]

function App() {
  const heroRef = useRef<HTMLElement | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroVisualY = useTransform(heroProgress, [0, 1], [0, -72])
  const heroGlowY = useTransform(heroProgress, [0, 1], [0, -120])
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 20%'],
  })

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const rotateTestimonials = useEffectEvent(() => {
    startTransition(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    })
  })

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      rotateTestimonials()
    }, 5600)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <MotionConfig transition={{ duration: 0.75, ease: premiumEase }}>
      <div className="page-shell">
        <EditorialBackdrop heroGlowY={heroGlowY} />

        <header className="topbar">
          <div className="topbar__inner">
            <a className="brand" href="#overview">
              <span className="brand__mark">G</span>
              <span>
                Gema Workshops
                <small>Future technology for curious kids</small>
              </span>
            </a>

            <nav className="topbar__nav" aria-label="Page sections">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="topbar__cta" href="#pricing">
              Reserve a seat
            </a>
          </div>
        </header>

        <main className="main-content">
          <section id="overview" ref={heroRef} className="section hero-section">
            <motion.div
              className="hero-copy"
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="eyebrow" variants={revealVariants}>
                Premium summer cohort for builders, dreamers, and future engineers
              </motion.span>

              <motion.div className="hero-badges" variants={revealVariants}>
                <span>AI-powered learning</span>
                <span>Robotics notebook workflow</span>
                <span>Parent-trusted format</span>
              </motion.div>

              <motion.h1 variants={revealVariants}>
                AI & Robotics Summer Workshop for kids who want to build the future,
                not just watch it.
              </motion.h1>

              <motion.p className="hero-copy__lede" variants={revealVariants}>
                A four-week live online workshop where students aged 8-14 explore
                robotics, AI, prototyping, and presentation skills through guided
                labs, invention sketches, and real showcase-ready projects.
              </motion.p>

              <motion.div className="hero-actions" variants={revealVariants}>
                <a className="button button--primary" href="#pricing">
                  Enroll for Rs. 2,999
                </a>
                <a className="button button--secondary" href="#curriculum">
                  Explore the curriculum
                </a>
              </motion.div>

              <motion.div className="hero-metrics" variants={staggerVariants}>
                {heroStats.map((stat) => (
                  <motion.article
                    key={stat.label}
                    className="hero-metric card card--interactive"
                    variants={revealVariants}
                    whileHover={{ y: -6 }}
                  >
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </motion.article>
                ))}
              </motion.div>

              <motion.ul className="hero-proof" variants={staggerVariants}>
                <motion.li variants={revealVariants}>
                  Live studio classes with mentor support and parent visibility
                </motion.li>
                <motion.li variants={revealVariants}>
                  Interactive curriculum that balances engineering rigor and
                  creativity
                </motion.li>
                <motion.li variants={revealVariants}>
                  Final showcase that turns learning into a polished outcome
                </motion.li>
              </motion.ul>
            </motion.div>

            <div className="hero-side">
              <motion.div
                className="hero-visual card"
                style={{ y: heroVisualY }}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="hero-visual__header">
                  <span>Workshop control board</span>
                  <span>Edition 2026</span>
                </div>

                <div className="hero-visual__canvas">
                  <motion.div
                    className="hero-orbit hero-orbit--outer"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                  />
                  <motion.div
                    className="hero-orbit hero-orbit--inner"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
                  />

                  <div className="hero-robot">
                    <RobotSketch />
                  </div>

                  <motion.div
                    className="hero-note hero-note--left"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <strong>Signal chain</strong>
                    <span>Sensors → AI cues → action rules</span>
                  </motion.div>

                  <motion.div
                    className="hero-note hero-note--top"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <strong>Build outcomes</strong>
                    <span>3 showcase-ready projects</span>
                  </motion.div>

                  <motion.div
                    className="hero-note hero-note--right"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <strong>Parent loop</strong>
                    <span>Weekly notes + end-of-week artifacts</span>
                  </motion.div>

                  <div className="hero-gridlines" />
                </div>
              </motion.div>

              <motion.aside
                className="enrol-card card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
              >
                <div className="enrol-card__price">
                  <span>Summer cohort pricing</span>
                  <strong>Rs. 2,999</strong>
                  <small>One price, full 4-week experience</small>
                </div>

                <div className="enrol-card__meta">
                  <div>
                    <span>Seats left</span>
                    <strong>07 seats</strong>
                  </div>
                  <div>
                    <span>Start date</span>
                    <strong>15 July 2026</strong>
                  </div>
                  <div>
                    <span>Duration</span>
                    <strong>4 weeks</strong>
                  </div>
                  <div>
                    <span>Format</span>
                    <strong>Online, live</strong>
                  </div>
                </div>

                <ul className="enrol-card__list">
                  {pricingInclusions.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a className="button button--primary button--full" href="#pricing">
                  Register now
                </a>
                <a className="button button--ghost button--full" href="#schedule">
                  View cohort timings
                </a>
              </motion.aside>
            </div>
          </section>

          <section className="section section--tight">
            <SectionHeader
              eyebrow="Quick facts"
              title="Everything a parent wants to know at a glance"
              description="The page is designed like a premium workshop listing: structured, information-rich, and easy to evaluate without feeling overwhelming."
            />

            <div className="facts-grid">
              {quickFacts.map((fact) => (
                <motion.article
                  key={fact.label}
                  className="fact-card card card--interactive"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={revealVariants}
                  whileHover={{ y: -6 }}
                >
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                  <p>{fact.detail}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <SplitSection
            eyebrow="Workshop highlights"
            title="An editorial learning experience that feels structured, premium, and highly intentional"
            description="Instead of a generic classroom flow, the workshop is designed like a guided build story. Students move from curiosity to clear systems thinking and then into polished presentation."
            points={workshopHighlights}
            panel={
              <div className="editorial-panel editorial-panel--blueprint">
                <span className="editorial-panel__eyebrow">Experience map</span>
                <h3>From spark to showcase</h3>
                <div className="flow-diagram">
                  {['Question prompt', 'Guided build', 'AI coaching', 'Family demo'].map(
                    (step) => (
                      <div key={step} className="flow-diagram__step">
                        <span />
                        <strong>{step}</strong>
                      </div>
                    ),
                  )}
                </div>
                <p>
                  Each phase leaves a visible artifact so students and parents can see
                  momentum building week after week.
                </p>
              </div>
            }
          />

          <SplitSection
            reverse
            eyebrow="Learning outcomes"
            title="Students leave with confidence, creative structure, and practical AI literacy"
            description="The curriculum is built to strengthen both technical and communication muscles, so students do not just make things, they understand and explain them."
            points={learningOutcomes}
            panel={
              <div className="editorial-panel editorial-panel--constellation">
                <span className="editorial-panel__eyebrow">Outcome constellation</span>
                <h3>Core learning pillars</h3>
                <div className="chip-cloud">
                  {[
                    'Prompt iteration',
                    'Robot logic',
                    'Design critique',
                    'Presentation confidence',
                    'Failure analysis',
                    'Systems mapping',
                    'Creative ideation',
                  ].map((chip) => (
                    <span key={chip} className="chip-cloud__item">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            }
          />

          <SplitSection
            eyebrow="Skills students will gain"
            title="The workshop teaches a modern toolkit, not a narrow coding drill"
            description="Students practice thinking like young product builders: asking smart questions, testing ideas, visualizing systems, and sharing what works."
            points={skillsStudentsGain}
            panel={
              <div className="editorial-panel editorial-panel--matrix">
                <span className="editorial-panel__eyebrow">Skills matrix</span>
                <h3>Creative + technical blend</h3>
                <div className="skill-matrix">
                  <div>
                    <strong>Make</strong>
                    <span>Prototype, sketch, connect parts</span>
                  </div>
                  <div>
                    <strong>Think</strong>
                    <span>Map flows, compare options, debug</span>
                  </div>
                  <div>
                    <strong>Prompt</strong>
                    <span>Ask better questions of tools and systems</span>
                  </div>
                  <div>
                    <strong>Present</strong>
                    <span>Explain the build with clarity and confidence</span>
                  </div>
                </div>
              </div>
            }
          />

          <SplitSection
            id="parents"
            reverse
            eyebrow="Why parents choose this workshop"
            title="Trust is built through structure, visibility, and thoughtful teaching"
            description="Parents are not guessing what their child is learning. The experience is designed to feel transparent, calm, and worthy of a serious educational investment."
            points={whyParentsChoose}
            panel={
              <div className="editorial-panel editorial-panel--trust">
                <span className="editorial-panel__eyebrow">Trust markers</span>
                <h3>What families feel immediately</h3>
                <ul className="trust-list">
                  <li>Small cohorts with active mentor attention</li>
                  <li>Weekly family-friendly progress summaries</li>
                  <li>Live classes that feel organized and polished</li>
                  <li>Visible artifacts instead of vague activity claims</li>
                </ul>
              </div>
            }
          />

          <SplitSection
            eyebrow="Why kids love this workshop"
            title="It feels imaginative, hands-on, and genuinely cool"
            description="The program keeps energy high with visual boards, invention prompts, and clear wins that make students want to come back for the next session."
            points={whyKidsLove}
            panel={
              <div className="editorial-panel editorial-panel--journey">
                <span className="editorial-panel__eyebrow">Student journey</span>
                <h3>Explore, build, show</h3>
                <div className="journey-stack">
                  <div>
                    <strong>Explore</strong>
                    <span>Robotics sketches, demos, questions</span>
                  </div>
                  <div>
                    <strong>Build</strong>
                    <span>Prompts, systems, prototypes, critiques</span>
                  </div>
                  <div>
                    <strong>Show</strong>
                    <span>Portfolio board, script, and final demo day</span>
                  </div>
                </div>
              </div>
            }
          />

          <section id="curriculum" className="section curriculum-section">
            <SectionHeader
              eyebrow="Curriculum timeline"
              title="A four-week story arc with visible progress built into every step"
              description="The timeline reveals how the workshop moves from fundamentals to showcase readiness, with clear milestones and projects each week."
            />

            <div ref={timelineRef} className="timeline">
              <div className="timeline__rail" />
              <motion.div
                className="timeline__progress"
                style={{ scaleY: timelineProgress }}
              />

              <div className="timeline__items">
                {curriculumTimeline.map((item, index) => (
                  <motion.article
                    key={item.week}
                    className={`timeline-card timeline-card--${index % 2 === 0 ? 'left' : 'right'} card`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={revealVariants}
                    whileHover={{ y: -6 }}
                  >
                    <span className="timeline-card__week">{item.week}</span>
                    <h3>{item.title}</h3>
                    <p>{item.blurb}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <strong className="timeline-card__project">{item.project}</strong>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="section weekly-section">
            <SectionHeader
              eyebrow="Weekly breakdown"
              title="A rhythm that keeps students engaged without overwhelming family schedules"
              description="Each week balances instruction, making, support, and reflection so learning feels deep, but still realistic for real households."
            />

            <div className="weekly-grid">
              {weeklyBreakdown.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`weekly-card weekly-card--${index + 1} card card--interactive`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={revealVariants}
                  whileHover={{ y: -6 }}
                >
                  <span>{item.week}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="projects" className="section projects-section">
            <SectionHeader
              eyebrow="Live project showcase"
              title="Students finish with polished concepts that feel like small startup demos"
              description="The final outcomes are designed to be understandable, visual, and exciting for families while still rooted in real systems thinking."
            />

            <div className="project-grid">
              {projects.map((project) => (
                <motion.article
                  key={project.name}
                  className="project-card card card--interactive"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={revealVariants}
                  whileHover={{ y: -8 }}
                >
                  <span>{project.tag}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="project-card__footer">
                    <strong>Showcase artifact included</strong>
                    <small>Mission board, logic notes, and demo script</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="section instructor-section">
            <div className="instructor-layout">
              <motion.div
                className="instructor-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={revealVariants}
              >
                <span className="eyebrow">Instructor team</span>
                <h2>Designed by educators who translate advanced ideas into kid-friendly momentum</h2>
                <p>
                  This workshop is taught with the polish of a modern product
                  experience: visual frameworks, calm facilitation, and strong
                  communication built into every stage.
                </p>
                <ul className="instructor-list">
                  {instructorHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="instructor-profile card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={revealVariants}
              >
                <div className="instructor-profile__badge">Lead mentor profile</div>
                <h3>A studio-style mentor model</h3>
                <p>
                  Every cohort is supported by an instructor who can explain AI,
                  robotics, and design thinking in accessible language while keeping
                  the energy high and the structure clear.
                </p>
                <div className="profile-metrics">
                  <div>
                    <strong>8+</strong>
                    <span>years teaching creative technology</span>
                  </div>
                  <div>
                    <strong>24</strong>
                    <span>max students per live cohort</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="section stats-section">
            <SectionHeader
              eyebrow="Workshop statistics"
              title="Numbers that support the story"
              description="The workshop is positioned to feel measurable and trustworthy, with stats that reinforce confidence rather than clutter the page."
            />

            <div className="stats-grid">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} stat={stat} />
              ))}
            </div>
          </section>

          <section className="section stories-section">
            <SectionHeader
              eyebrow="Student success stories"
              title="Visible shifts in confidence, clarity, and creative ownership"
              description="These examples show the kinds of changes families tend to notice when kids move from passive interest into active building."
            />

            <div className="story-grid">
              {successStories.map((story) => (
                <motion.article
                  key={story.name}
                  className="story-card card card--interactive"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={revealVariants}
                  whileHover={{ y: -6 }}
                >
                  <span>{story.name}</span>
                  <p>{story.result}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="reviews" className="section testimonials-section">
            <div className="testimonials-layout">
              <SectionHeader
                eyebrow="Testimonials"
                title="Parent feedback that feels specific, believable, and high trust"
                description="Instead of generic praise, the testimonials focus on clarity, confidence, and how the workshop felt in practice."
              />

              <div className="testimonial-shell card">
                <div className="testimonial-shell__dots" aria-label="Select testimonial">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      className={index === activeTestimonial ? 'is-active' : ''}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.article
                    key={testimonials[activeTestimonial].name}
                    className="testimonial-card"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                  >
                    <p>{testimonials[activeTestimonial].quote}</p>
                    <div>
                      <strong>{testimonials[activeTestimonial].name}</strong>
                      <span>{testimonials[activeTestimonial].role}</span>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>
          </section>

          <section id="schedule" className="section schedule-section">
            <div className="schedule-layout">
              <div>
                <SectionHeader
                  eyebrow="Schedule information"
                  title="Choose the cohort rhythm that fits your family"
                  description="Both cohorts deliver the same curriculum and outcomes, with timing options that support school schedules and energy levels."
                />

                <div className="schedule-grid">
                  {scheduleBlocks.map((block) => (
                    <motion.article
                      key={block.cohort}
                      className="schedule-card card card--interactive"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={revealVariants}
                      whileHover={{ y: -6 }}
                    >
                      <span>{block.cohort}</span>
                      <h3>{block.timing}</h3>
                      <p>{block.detail}</p>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.aside
                className="schedule-note card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={revealVariants}
              >
                <span className="eyebrow">Support design</span>
                <h3>Thoughtful pacing for real homes</h3>
                <p>
                  Every cohort includes room for questions, project catch-up, and
                  family visibility. The goal is depth without chaos.
                </p>
              </motion.aside>
            </div>
          </section>

          <section id="pricing" className="section pricing-section">
            <div className="pricing-layout">
              <motion.div
                className="pricing-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={revealVariants}
              >
                <span className="eyebrow">Pricing & inclusions</span>
                <h2>One premium package with everything needed to learn, build, and present</h2>
                <div className="pricing-card__headline">
                  <strong>Rs. 2,999</strong>
                  <span>4 weeks · live online · final showcase included</span>
                </div>
                <ul className="pricing-list">
                  {pricingInclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="pricing-card__actions">
                  <a className="button button--primary" href="#overview">
                    Save my seat
                  </a>
                  <a className="button button--secondary" href="#reviews">
                    Read parent feedback
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="faq-panel card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={revealVariants}
              >
                <span className="eyebrow">FAQ</span>
                <h3>Practical questions, answered clearly</h3>
                <div className="faq-list">
                  {faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="section closing-section">
            <motion.div
              className="closing-card card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealVariants}
            >
              <span className="eyebrow">Final call</span>
              <h2>Give your child a workshop that feels as polished as the future they are building toward.</h2>
              <p>
                This cohort is built for families who want more than a generic online
                class. It is structured, premium, and designed to leave a real
                impression.
              </p>
              <a className="button button--primary" href="#pricing">
                Reserve one of the remaining seats
              </a>
            </motion.div>
          </section>
        </main>
      </div>
    </MotionConfig>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerVariants}
    >
      <motion.span className="eyebrow" variants={revealVariants}>
        {eyebrow}
      </motion.span>
      <motion.h2 variants={revealVariants}>{title}</motion.h2>
      <motion.p variants={revealVariants}>{description}</motion.p>
    </motion.div>
  )
}

function SplitSection({
  id,
  eyebrow,
  title,
  description,
  points,
  panel,
  reverse = false,
}: {
  id?: string
  eyebrow: string
  title: string
  description: string
  points: FeaturePoint[]
  panel: ReactNode
  reverse?: boolean
}) {
  return (
    <section id={id} className={`section split-section${reverse ? ' split-section--reverse' : ''}`}>
      <motion.div
        className="split-section__copy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerVariants}
      >
        <motion.span className="eyebrow" variants={revealVariants}>
          {eyebrow}
        </motion.span>
        <motion.h2 variants={revealVariants}>{title}</motion.h2>
        <motion.p variants={revealVariants}>{description}</motion.p>

        <motion.div className="feature-list" variants={staggerVariants}>
          {points.map((point) => (
            <motion.article
              key={point.title}
              className="feature-list__item"
              variants={revealVariants}
            >
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="split-section__panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={revealVariants}
      >
        {panel}
      </motion.div>
    </section>
  )
}

function AnimatedStat({ stat }: { stat: NumericStat }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.65 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: premiumEase,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, stat.value])

  return (
    <motion.article
      ref={ref}
      className="stat-card card card--interactive"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      whileHover={{ y: -6 }}
    >
      <strong>
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
      <p>{stat.description}</p>
    </motion.article>
  )
}

function EditorialBackdrop({ heroGlowY }: { heroGlowY: MotionValue<number> }) {
  return (
    <div className="background-layer" aria-hidden="true">
      <motion.div className="ambient-glow ambient-glow--indigo" style={{ y: heroGlowY }} />
      <div className="ambient-glow ambient-glow--cyan" />

      <motion.div
        className="sketch sketch--robot"
        animate={{ x: [0, 12, 0], y: [0, -16, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RobotSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--blueprint"
        animate={{ y: [0, 18, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BlueprintSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--circuit"
        animate={{ x: [0, -10, 0], y: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CircuitSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--neural"
        animate={{ x: [0, 8, 0], y: [0, -14, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <NeuralSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--math"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MathSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--orbit"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <OrbitSketch />
      </motion.div>

      <motion.div
        className="sketch sketch--parts"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PartsSketch />
      </motion.div>

      {starParticles.map((particle) => (
        <motion.span
          key={particle.className}
          className={particle.className}
          animate={{ y: [0, -10, 0], opacity: [0.35, 0.75, 0.35] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function RobotSketch() {
  return (
    <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="4">
      <rect x="56" y="72" width="128" height="98" rx="26" />
      <path d="M120 44v28" />
      <path d="M82 44h76" strokeDasharray="10 10" />
      <path d="M52 112H30" />
      <path d="M210 112h-22" />
      <circle cx="94" cy="112" r="12" />
      <circle cx="146" cy="112" r="12" />
      <path d="M90 150c8 8 18 12 30 12s22-4 30-12" strokeLinecap="round" />
      <path d="M86 192l-18 20" />
      <path d="M154 192l18 20" />
      <path d="M78 196h84" strokeDasharray="9 11" />
    </svg>
  )
}

function BlueprintSketch() {
  return (
    <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="18" y="18" width="284" height="204" rx="18" />
      <path d="M56 72h208" strokeDasharray="8 10" />
      <path d="M56 120h208" strokeDasharray="8 10" />
      <path d="M56 168h208" strokeDasharray="8 10" />
      <path d="M112 50v140" strokeDasharray="8 10" />
      <path d="M208 50v140" strokeDasharray="8 10" />
      <circle cx="160" cy="120" r="40" />
      <path d="M160 78v84" />
      <path d="M118 120h84" />
      <path d="M74 46l16 16" />
      <path d="M246 176l16 16" />
    </svg>
  )
}

function CircuitSketch() {
  return (
    <svg viewBox="0 0 260 220" fill="none" stroke="currentColor" strokeWidth="4">
      <path d="M28 44h64v52h64v42h76" strokeDasharray="10 12" />
      <path d="M56 180v-44h44v-32h88v32h44" />
      <circle cx="28" cy="44" r="10" />
      <circle cx="232" cy="138" r="10" />
      <circle cx="56" cy="180" r="10" />
      <circle cx="232" cy="136" r="10" />
      <rect x="92" y="32" width="48" height="48" rx="8" />
      <rect x="128" y="124" width="44" height="44" rx="8" />
      <path d="M104 48h24" />
      <path d="M140 144h20" />
    </svg>
  )
}

function NeuralSketch() {
  return (
    <svg viewBox="0 0 260 240" fill="none" stroke="currentColor" strokeWidth="3.5">
      <circle cx="44" cy="58" r="12" />
      <circle cx="44" cy="120" r="12" />
      <circle cx="44" cy="182" r="12" />
      <circle cx="128" cy="42" r="12" />
      <circle cx="128" cy="104" r="12" />
      <circle cx="128" cy="166" r="12" />
      <circle cx="216" cy="74" r="12" />
      <circle cx="216" cy="150" r="12" />
      <path d="M56 58l60-16" />
      <path d="M56 58l60 46" />
      <path d="M56 120l60-16" />
      <path d="M56 120l60 46" />
      <path d="M56 182l60-16" />
      <path d="M56 182l60-78" />
      <path d="M140 42l64 32" />
      <path d="M140 104l64-30" />
      <path d="M140 104l64 46" />
      <path d="M140 166l64-16" strokeDasharray="8 10" />
    </svg>
  )
}

function MathSketch() {
  return (
    <svg viewBox="0 0 260 200" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M34 52h76" />
      <path d="M72 18v68" />
      <path d="M142 32c18-10 42-6 56 10 18 18 18 48 0 66-14 14-38 18-56 10" />
      <path d="M34 126h76" strokeDasharray="10 10" />
      <path d="M34 164h112" strokeDasharray="10 10" />
      <path d="M152 126l28 38 44-70" />
      <path d="M166 52h44" />
    </svg>
  )
}

function OrbitSketch() {
  return (
    <svg viewBox="0 0 280 280" fill="none" stroke="currentColor" strokeWidth="3">
      <ellipse cx="140" cy="140" rx="108" ry="48" />
      <ellipse cx="140" cy="140" rx="48" ry="108" />
      <circle cx="140" cy="140" r="22" />
      <circle cx="240" cy="126" r="8" fill="currentColor" stroke="none" />
      <circle cx="102" cy="40" r="8" fill="currentColor" stroke="none" />
      <circle cx="88" cy="218" r="8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PartsSketch() {
  return (
    <svg viewBox="0 0 260 220" fill="none" stroke="currentColor" strokeWidth="3.5">
      <path d="M34 58h80l20 22h40l18-22h34" />
      <rect x="52" y="112" width="52" height="52" rx="12" />
      <rect x="156" y="112" width="52" height="52" rx="12" />
      <circle cx="78" cy="138" r="10" />
      <circle cx="182" cy="138" r="10" />
      <path d="M104 170h52" strokeDasharray="8 10" />
      <path d="M62 32l18 18" />
      <path d="M198 32l-18 18" />
    </svg>
  )
}

export default App
