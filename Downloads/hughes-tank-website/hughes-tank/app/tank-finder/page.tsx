'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

type Answer = string | null;
type Answers = {
  application: Answer;
  location: Answer;
  risk: Answer;
  capacity: Answer;
  monitoring: Answer;
};

const questions = [
  {
    id: 'application',
    question: 'What is your primary use case?',
    options: [
      { value: 'fleet-fueling', label: 'Fleet Fueling', icon: '🚛' },
      { value: 'construction', label: 'Construction Site', icon: '🏗️' },
      { value: 'farm-ranch', label: 'Farm / Ranch', icon: '🌾' },
      { value: 'commercial', label: 'Commercial Facility', icon: '🏢' },
      { value: 'industrial', label: 'Industrial / Bulk', icon: '🏭' },
      { value: 'emergency-gen', label: 'Emergency Generator', icon: '⚡' },
    ],
  },
  {
    id: 'location',
    question: 'Where will the tank be installed?',
    options: [
      { value: 'aboveground', label: 'Aboveground', icon: '⬆️' },
      { value: 'underground', label: 'Underground', icon: '⬇️' },
      { value: 'inside-building', label: 'Inside Building', icon: '🏠' },
      { value: 'undecided', label: "I'm Not Sure", icon: '🤔' },
    ],
  },
  {
    id: 'risk',
    question: 'Is the installation in a high fire-risk or sensitive area?',
    options: [
      { value: 'yes-fire', label: 'Yes – Fire Risk Area', icon: '🔥' },
      { value: 'yes-sensitive', label: 'Yes – Near Water / Sensitive', icon: '💧' },
      { value: 'no', label: 'No – Standard Location', icon: '✅' },
      { value: 'not-sure', label: "I Don't Know", icon: '❓' },
    ],
  },
  {
    id: 'capacity',
    question: 'What capacity are you looking for?',
    options: [
      { value: 'small', label: 'Small (500–2,000 gal)', icon: '🔹' },
      { value: 'medium', label: 'Medium (2,000–10,000 gal)', icon: '🔷' },
      { value: 'large', label: 'Large (10,000–20,000 gal)', icon: '🟦' },
      { value: 'custom', label: 'Custom / Not Sure', icon: '📐' },
    ],
  },
  {
    id: 'monitoring',
    question: 'Do you need secondary containment or leak monitoring?',
    options: [
      { value: 'yes-required', label: 'Yes – Required by Code', icon: '📋' },
      { value: 'yes-preferred', label: 'Yes – Preferred', icon: '✔️' },
      { value: 'no', label: 'No', icon: '❌' },
      { value: 'not-sure', label: 'Not Sure', icon: '🤷' },
    ],
  },
];

function getRecommendation(answers: Answers): { tank: string; cert: string; desc: string; href: string; why: string[] } {
  const { location, risk, monitoring } = answers;

  if (location === 'underground') {
    return {
      tank: 'Permatank®',
      cert: 'ACT-100',
      desc: 'Fiberglass-coated underground steel tank with corrosion protection.',
      href: '/products/permatank',
      why: ['Underground installation requires corrosion protection', 'ACT-100 certified for your application', 'Meets EPA underground storage requirements'],
    };
  }
  if (risk === 'yes-fire') {
    return {
      tank: 'Fireguard® UL-2085',
      cert: 'UL 2085',
      desc: '2-hour fire-rated tank with 75-gallon thermal mass insulation.',
      href: '/products/fireguard',
      why: ['Provides 2-hour fire resistance', 'Required by many fire codes in high-risk areas', 'Exceeds standard UL 142 safety requirements'],
    };
  }
  if (monitoring === 'yes-required' || monitoring === 'yes-preferred') {
    return {
      tank: 'Flameshield®',
      cert: 'STI-P3',
      desc: 'Double-wall aboveground tank with secondary containment and interstitial monitoring.',
      href: '/products/flameshield',
      why: ['Built-in secondary containment', 'Supports interstitial monitoring probes', 'STI-P3 certified – meets most state regulations'],
    };
  }
  if (answers.application === 'farm-ranch') {
    return {
      tank: 'Farm Tank',
      cert: 'UL 142',
      desc: 'Purpose-built UL 142 tank for agricultural and rural fuel storage.',
      href: '/products/farm-tanks',
      why: ['Designed for remote locations', 'Economical for farm & ranch use', 'Pump and meter packages available'],
    };
  }
  return {
    tank: 'UL 142 Double-Wall',
    cert: 'UL 142',
    desc: 'The most versatile aboveground fuel storage solution for most applications.',
    href: '/products/ul-142',
    why: ['Most popular choice for your application', 'Double-wall provides excellent protection', 'Wide range of sizes and configurations'],
  };
}

export default function TankFinderPage() {
  const [answers, setAnswers] = useState<Answers>({ application: null, location: null, risk: null, capacity: null, monitoring: null });
  const [currentQ, setCurrentQ] = useState(0);
  const [done, setDone] = useState(false);

  const currentQuestion = questions[currentQ];
  const answeredCount = Object.values(answers).filter(Boolean).length;

  const handleAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ((q) => q + 1), 300);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const reset = () => {
    setAnswers({ application: null, location: null, risk: null, capacity: null, monitoring: null });
    setCurrentQ(0);
    setDone(false);
  };

  const recommendation = getRecommendation(answers);

  return (
    <div className="min-h-screen bg-steel-950 pt-4">
      <div className="bg-steel-900 border-b border-steel-800 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="section-label mb-3">Smart Selector</div>
          <h1 className="font-display text-5xl text-white font-bold">TANK FINDER</h1>
          <p className="text-steel-400 mt-2">Answer 5 quick questions to find the right tank for your project.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-steel-400 font-mono text-xs">QUESTION {Math.min(currentQ + 1, 5)} OF 5</span>
            <button onClick={reset} className="flex items-center gap-1 text-steel-500 hover:text-brand-400 text-xs font-mono transition-colors">
              <RotateCcw size={12} /> RESTART
            </button>
          </div>
          <div className="h-1 bg-steel-800">
            <div
              className="h-full bg-brand-500 transition-all duration-500"
              style={{ width: `${(answeredCount / 5) * 100}%` }}
            />
          </div>
        </div>

        {!done ? (
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl text-white font-bold mb-8">
              {currentQuestion.question}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((opt) => {
                const selected = answers[currentQuestion.id as keyof Answers] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                    className={`p-5 border text-left transition-all duration-200 group ${
                      selected
                        ? 'border-brand-500 bg-brand-900/20'
                        : 'border-steel-700 bg-steel-900 hover:border-brand-600/50 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="text-3xl mb-3">{opt.icon}</div>
                    <p className="font-display text-white text-sm font-semibold group-hover:text-brand-300 transition-colors">
                      {opt.label}
                    </p>
                    {selected && <CheckCircle size={14} className="text-brand-500 mt-2" />}
                  </button>
                );
              })}
            </div>

            {currentQ > 0 && (
              <button onClick={() => setCurrentQ((q) => q - 1)} className="mt-6 text-steel-500 hover:text-brand-400 text-xs font-mono transition-colors">
                ← BACK TO PREVIOUS QUESTION
              </button>
            )}
          </div>
        ) : (
          <div className="animate-fade-up">
            <div className="section-label mb-4">
              <CheckCircle size={14} className="text-brand-500" />
              Your Recommendation
            </div>
            <h2 className="font-display text-4xl text-white font-bold mb-2">
              WE RECOMMEND:
            </h2>
            <div className="border border-brand-700/50 bg-brand-900/10 p-8 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-3xl text-brand-400 font-bold">{recommendation.tank}</h3>
                  <span className="tag-cert mt-1 inline-block">{recommendation.cert}</span>
                </div>
              </div>
              <p className="text-steel-300 text-base mb-6">{recommendation.desc}</p>
              <div className="space-y-2 mb-6">
                <p className="text-steel-500 font-mono text-xs tracking-widest uppercase">Why this tank?</p>
                {recommendation.why.map((w) => (
                  <div key={w} className="flex items-center gap-2 text-steel-300 text-sm">
                    <CheckCircle size={12} className="text-brand-500 shrink-0" />
                    {w}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href={recommendation.href} className="btn-primary">
                  VIEW TANK SPECS <ArrowRight size={14} />
                </Link>
                <Link href={`/build-a-tank?type=${recommendation.href.split('/').pop()}`} className="btn-outline">
                  CONFIGURE & PRICE
                </Link>
                <Link href="/quote" className="btn-ghost">
                  GET A QUOTE
                </Link>
              </div>
            </div>
            <div className="border border-steel-700 bg-steel-900 p-4 flex items-center justify-between">
              <p className="text-steel-400 text-sm">Want to compare options or start over?</p>
              <button onClick={reset} className="btn-ghost text-xs py-2 px-4">
                <RotateCcw size={12} /> RESTART
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
