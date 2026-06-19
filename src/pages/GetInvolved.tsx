import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heart, Handshake, Award, CheckCircle, X, ShieldAlert, Sparkles, Upload, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function GetInvolved() {
  const [searchParams] = useSearchParams();
  const initialForm = searchParams.get('apply') === 'aub-prize' ? 'aub-prize' : 'partner';
  const [activeForm, setActiveForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Form states
  const [partnerForm, setPartnerForm] = useState({
    orgName: '', contactName: '', email: '', phone: '', type: 'corporate', project: 'education', message: ''
  });
  
  const [volunteerForm, setVolunteerForm] = useState({
    name: '', email: '', phone: '', skills: 'logistics', availability: 'weekends', message: ''
  });

  const [aubForm, setAubForm] = useState({
    name: '', email: '', phone: '', university: '', course: '', level: 'undergraduate', topic: '', cvFile: '', proposalFile: ''
  });

  // Modal animations
  useGSAP(() => {
    if (showSuccess && modalRef.current && modalContentRef.current) {
      gsap.to(modalRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      });
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.85, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    } else if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      });
    }
  }, { dependencies: [showSuccess], scope: modalRef });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setPartnerForm({ orgName: '', contactName: '', email: '', phone: '', type: 'corporate', project: 'education', message: '' });
    }, 1500);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setVolunteerForm({ name: '', email: '', phone: '', skills: 'logistics', availability: 'weekends', message: '' });
    }, 1500);
  };

  const handleAubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setAubForm({ name: '', email: '', phone: '', university: '', course: '', level: 'undergraduate', topic: '', cvFile: '', proposalFile: '' });
    }, 1800);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      
      {/* 1. HERO BANNER */}
      <section className="bg-stone-50 py-16 sm:py-20 border-b border-stone-200/30 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow">Get Involved</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-lani-navy tracking-tight mt-3">
            Join the Circle of Positive Action
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            Whether you are a corporate brand looking to build social value, a student submitting a taxation policy paper, or a volunteer supporting clinic setups, we make collaboration smooth.
          </p>
        </div>
      </section>

      {/* 2. FORM INTERACTIVE WORKFLOW */}
      <section className="section text-left grid gap-12 lg:grid-cols-12">
        {/* Left tabs selector panel */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            onClick={() => setActiveForm('partner')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
              activeForm === 'partner'
                ? 'bg-white border-lani-primary shadow-premium'
                : 'bg-stone-50 hover:bg-stone-100/50 border-stone-100'
            }`}
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              activeForm === 'partner' ? 'bg-lani-primary text-white' : 'bg-stone-200 text-stone-500'
            }`}>
              <Handshake className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-lani-navy">Partner / Sponsor</h3>
              <p className="text-stone-500 text-xs mt-1 leading-normal">
                Corporate collaborations, project co-funding, and agricultural equipment support.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveForm('volunteer')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
              activeForm === 'volunteer'
                ? 'bg-white border-lani-primary shadow-premium'
                : 'bg-stone-50 hover:bg-stone-100/50 border-stone-100'
            }`}
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              activeForm === 'volunteer' ? 'bg-lani-primary text-white' : 'bg-stone-200 text-stone-500'
            }`}>
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-lani-navy">Volunteer Network</h3>
              <p className="text-stone-500 text-xs mt-1 leading-normal">
                Field work support, medical outreach coordination, and solar skills coaching.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveForm('aub-prize')}
            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
              activeForm === 'aub-prize'
                ? 'bg-white border-lani-primary shadow-premium'
                : 'bg-stone-50 hover:bg-stone-100/50 border-stone-100'
            }`}
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              activeForm === 'aub-prize' ? 'bg-lani-primary text-white' : 'bg-stone-200 text-stone-500'
            }`}>
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-lani-navy">AUB Prize Application</h3>
              <p className="text-stone-500 text-xs mt-1 leading-normal">
                Submit research proposals on taxation, laws, and extractive industries.
              </p>
            </div>
          </button>
        </div>

        {/* Right Form container */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-stone-100 rounded-3xl p-8 sm:p-10 shadow-sm">
            
            {/* PARTNER FORM */}
            {activeForm === 'partner' && (
              <form onSubmit={handlePartnerSubmit} className="flex flex-col gap-6">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-heading text-2xl font-bold text-lani-navy">Partner Proposal</h2>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1">Submit your organization details to co-fund or partner on Lani projects.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-field">
                    <span>Organization Name *</span>
                    <input
                      type="text"
                      required
                      value={partnerForm.orgName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                      placeholder="e.g. Lani Consulting"
                    />
                  </div>

                  <div className="form-field">
                    <span>Contact Representative Name *</span>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="form-field">
                    <span>Business Email *</span>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="partner@org.com"
                    />
                  </div>

                  <div className="form-field">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      placeholder="+234..."
                    />
                  </div>

                  <div className="form-field">
                    <span>Partnership Classification *</span>
                    <select
                      value={partnerForm.type}
                      onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value })}
                    >
                      <option value="corporate">Corporate Sponsorship</option>
                      <option value="equipment">Equipment/Asset Donation</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="research">Research/Policy Backing</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <span>Program Area of Interest *</span>
                    <select
                      value={partnerForm.project}
                      onChange={(e) => setPartnerForm({ ...partnerForm, project: e.target.value })}
                    >
                      <option value="education">AUB Prize & Education</option>
                      <option value="agriculture">Agro-Grants (Agriculture)</option>
                      <option value="solar">Youth Solar Technical Hubs</option>
                      <option value="health">Maternal Clinical Aid</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <span>Partnership Intent Details *</span>
                  <textarea
                    required
                    rows={4}
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    placeholder="Describe how your organization wants to align and collaborate with Lani Foundation..."
                    className="p-3 border border-stone-200 rounded-lg outline-none text-sm min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-fit px-8 py-3 mt-2 self-start flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Submit Proposal
                      <Handshake className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* VOLUNTEER FORM */}
            {activeForm === 'volunteer' && (
              <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-6">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-heading text-2xl font-bold text-lani-navy">Volunteer Application</h2>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1">Lend your skills and time to empower local communities.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-field">
                    <span>Full Name *</span>
                    <input
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      placeholder="e.g. Jane Nwachukwu"
                    />
                  </div>

                  <div className="form-field">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="jane@domain.com"
                    />
                  </div>

                  <div className="form-field">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      placeholder="+234..."
                    />
                  </div>

                  <div className="form-field">
                    <span>Primary Skill Set *</span>
                    <select
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                    >
                      <option value="logistics">Event Planning & Logistics</option>
                      <option value="solar">Solar/Electrical Engineering</option>
                      <option value="medical">Healthcare/Clinical Aid</option>
                      <option value="advocacy">Social Media & Advocacy</option>
                      <option value="education">Tutoring & Curriculum Drafting</option>
                    </select>
                  </div>

                  <div className="form-field sm:col-span-2">
                    <span>Availability Profile *</span>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                    >
                      <option value="weekends">Weekends Only</option>
                      <option value="weekdays">Weekdays Only</option>
                      <option value="flexible">Fully Flexible / On-Call</option>
                      <option value="remote">Remote Digital Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <span>Motivation & Experience *</span>
                  <textarea
                    required
                    rows={4}
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                    placeholder="Tell us briefly why you want to volunteer with Lani Foundation and your past experiences..."
                    className="p-3 border border-stone-200 rounded-lg outline-none text-sm min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-fit px-8 py-3 mt-2 self-start flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    <>
                      Join Network
                      <Heart className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* AUB PRIZE APPLICATION FORM */}
            {activeForm === 'aub-prize' && (
              <form onSubmit={handleAubSubmit} className="flex flex-col gap-6">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-heading text-2xl font-bold text-lani-navy">AUB Prize Research Submission</h2>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1">Submit your academic research proposal for the Angeline Uyi Bassey Prize.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-field">
                    <span>Applicant Full Name *</span>
                    <input
                      type="text"
                      required
                      value={aubForm.name}
                      onChange={(e) => setAubForm({ ...aubForm, name: e.target.value })}
                      placeholder="e.g. Philip Musah"
                    />
                  </div>

                  <div className="form-field">
                    <span>Active Email *</span>
                    <input
                      type="email"
                      required
                      value={aubForm.email}
                      onChange={(e) => setAubForm({ ...aubForm, email: e.target.value })}
                      placeholder="philip@uni.edu"
                    />
                  </div>

                  <div className="form-field">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      required
                      value={aubForm.phone}
                      onChange={(e) => setAubForm({ ...aubForm, phone: e.target.value })}
                      placeholder="+234..."
                    />
                  </div>

                  <div className="form-field">
                    <span>University Name *</span>
                    <input
                      type="text"
                      required
                      value={aubForm.university}
                      onChange={(e) => setAubForm({ ...aubForm, university: e.target.value })}
                      placeholder="e.g. University of Lagos"
                    />
                  </div>

                  <div className="form-field">
                    <span>Course & Department *</span>
                    <input
                      type="text"
                      required
                      value={aubForm.course}
                      onChange={(e) => setAubForm({ ...aubForm, course: e.target.value })}
                      placeholder="e.g. Economics / Commercial Law"
                    />
                  </div>

                  <div className="form-field">
                    <span>Academic Status Level *</span>
                    <select
                      value={aubForm.level}
                      onChange={(e) => setAubForm({ ...aubForm, level: e.target.value })}
                    >
                      <option value="undergraduate">Undergraduate (Final Year)</option>
                      <option value="masters">Master of Science (M.Sc / LL.M)</option>
                      <option value="phd">Doctorate (Ph.D. Scholar)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <span>Proposed Research Topic *</span>
                  <input
                    type="text"
                    required
                    value={aubForm.topic}
                    onChange={(e) => setAubForm({ ...aubForm, topic: e.target.value })}
                    placeholder="e.g. Evaluative Study of Extractive Taxation Models in Nigeria"
                  />
                </div>

                {/* Mock Upload components */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-field">
                    <span>Upload CV (PDF) *</span>
                    <div className="flex items-center justify-between p-3 border border-stone-200 border-dashed rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100 transition-colors">
                      <div className="flex items-center gap-2">
                        <Upload className="h-4 w-4 text-stone-400" />
                        <span className="text-xs text-stone-500 font-medium">
                          {aubForm.cvFile ? 'cv_document.pdf' : 'Choose file...'}
                        </span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setAubForm({ ...aubForm, cvFile: 'cv_document.pdf' })}
                        className="text-[10px] font-bold text-lani-primary uppercase bg-white border border-stone-200 px-2 py-1 rounded"
                      >
                        Select
                      </button>
                    </div>
                  </div>

                  <div className="form-field">
                    <span>Upload Research Proposal (PDF) *</span>
                    <div className="flex items-center justify-between p-3 border border-stone-200 border-dashed rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100 transition-colors">
                      <div className="flex items-center gap-2">
                        <Upload className="h-4 w-4 text-stone-400" />
                        <span className="text-xs text-stone-500 font-medium">
                          {aubForm.proposalFile ? 'proposal_draft.pdf' : 'Choose file...'}
                        </span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setAubForm({ ...aubForm, proposalFile: 'proposal_draft.pdf' })}
                        className="text-[10px] font-bold text-lani-primary uppercase bg-white border border-stone-200 px-2 py-1 rounded"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-xs leading-relaxed">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                  <span>
                    <strong>Submission Declaration:</strong> By submitting, you confirm that this research proposal is your original work, is not plagiarized, and has been approved by your department research advisor.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-fit px-8 py-3 mt-2 self-start flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading Files...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Award className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 3. SUCCESS MODAL (GSAP ANIMATED DIALOG OVERLAY) */}
      <div 
        ref={modalRef}
        style={{ opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      >
        <div 
          ref={modalContentRef}
          className="relative w-full max-w-md p-8 bg-white border border-stone-100 rounded-3xl shadow-2xl text-center flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={() => setShowSuccess(false)}
            className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-lg border border-stone-100 hover:bg-stone-50 text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Congrats checkmark animation */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lani-emerald/10 text-lani-emerald ring-8 ring-lani-emerald/5 mb-6 relative">
            <CheckCircle className="h-8 w-8" />
            <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-lani-gold animate-bounce" />
          </div>

          <h3 className="font-heading text-2xl font-black text-lani-navy">
            Submission Received!
          </h3>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Thank you for applying. A representative from the Lani Foundation coordination office will review your details and reach out within 4-5 business days.
          </p>

          <button
            onClick={() => setShowSuccess(false)}
            className="btn-primary w-full justify-center mt-8"
          >
            Got It, Thank You
          </button>
        </div>
      </div>

    </div>
  );
}
