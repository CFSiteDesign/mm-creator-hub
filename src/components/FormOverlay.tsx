import React, { useState } from 'react';

interface FormOverlayProps {
  onClose: () => void;
}

const platforms = ['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Twitter/X', 'Multiple'];
const niches = ['Lifestyle', 'Beauty & Skincare', 'Fitness & Health', 'Food & Travel', 'Tech & Gaming', 'Fashion', 'Finance', 'Other'];

export const FormOverlay: React.FC<FormOverlayProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    platform: '',
    handle: '',
    followers: '',
    niche: '',
    country: '',
    about: '',
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg bg-background rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-wavy-lime p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground font-black hover:bg-primary-foreground/30 transition-colors"
          >
            ×
          </button>
          <div className="text-sm font-black uppercase tracking-widest text-primary-foreground/60 mb-1">
            Creator Application
          </div>
          <h2 className="text-2xl font-black text-primary-foreground">
            {submitted ? "You're In! 🎉" : 'Apply to Join Mad Monkey'}
          </h2>
          {!submitted && (
            <p className="text-primary-foreground/70 text-sm mt-1">
              Takes less than 3 minutes. Free forever.
            </p>
          )}
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">🐒</div>
            <h3 className="text-2xl font-black text-foreground mb-3">Application Received!</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thanks <strong>{form.name}</strong>! We'll review your application and get back to you at <strong>{form.email}</strong> within 48 hours.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-primary text-primary-foreground font-black rounded-full hover:bg-lime-dark transition-all"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            {/* Step indicator */}
            <div className="flex gap-2 mb-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1 rounded-full transition-colors ${s <= step ? 'bg-primary' : 'bg-muted'}`}
                />
              ))}
            </div>

            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Country *</label>
                  <input
                    required
                    value={form.country}
                    onChange={(e) => set('country', e.target.value)}
                    placeholder="Thailand, Indonesia, Vietnam..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!form.name || !form.email || !form.country}
                  className="w-full py-3.5 bg-primary text-primary-foreground font-black rounded-xl hover:bg-lime-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next: Creator Details →
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Primary Platform *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {platforms.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => set('platform', p)}
                        className={`py-2 px-3 rounded-lg border-2 text-sm font-bold transition-all ${
                          form.platform === p
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Your Handle / Channel *</label>
                  <input
                    required
                    value={form.handle}
                    onChange={(e) => set('handle', e.target.value)}
                    placeholder="@yourhandle or channel URL"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Approximate Followers *</label>
                  <select
                    required
                    value={form.followers}
                    onChange={(e) => set('followers', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                  >
                    <option value="">Select range...</option>
                    <option>Under 5K</option>
                    <option>5K - 10K</option>
                    <option>10K - 50K</option>
                    <option>50K - 100K</option>
                    <option>100K - 500K</option>
                    <option>500K - 1M</option>
                    <option>1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Your Niche *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {niches.map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => set('niche', n)}
                        className={`py-2 px-3 rounded-lg border-2 text-xs font-bold transition-all text-left ${
                          form.niche === n
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Tell us about yourself</label>
                  <textarea
                    value={form.about}
                    onChange={(e) => set('about', e.target.value)}
                    placeholder="What kind of content do you create? What are your goals?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted focus:outline-none focus:border-primary transition-colors text-foreground font-medium resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3.5 border-2 border-border text-foreground font-bold rounded-xl hover:border-foreground transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!form.platform || !form.handle || !form.followers || !form.niche}
                    className="flex-1 py-3.5 bg-primary text-primary-foreground font-black rounded-xl hover:bg-lime-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Application 🚀
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
