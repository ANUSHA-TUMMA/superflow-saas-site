import React from "react";

export default function SaaSLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* NAVBAR */}
      <header className="w-full border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">SF</div>
            <span className="font-semibold text-lg">SuperFlow</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-lg border border-gray-200">Sign In</button>
            <button className="ml-2 px-4 py-2 rounded-2xl bg-black text-white">Get Started</button>
          </nav>
          <div className="md:hidden">
            <button className="px-3 py-2 rounded-lg border">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">SuperFlow — Automate your team's work, beautifully.</h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">A modern workflow platform that combines AI automation, real-time dashboards, and effortless collaboration — designed for product teams and agencies.</p>
            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-black text-white font-medium">Start free trial</button>
              <a href="#features" className="text-sm text-gray-600 hover:underline">See features →</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No credit card required • 14-day free trial</div>
          </div>

          <div className="flex justify-center">
            {/* Dashboard mockup placeholder */}
            <div className="w-full max-w-md bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="h-56 rounded-lg bg-white border border-gray-100 flex flex-col">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-400">Dashboard</div>
                  <div className="text-xs text-gray-400">April 2025</div>
                </div>
                <div className="p-4 flex-1">
                  <div className="h-3 bg-gray-200 rounded w-3/5 mb-4"></div>
                  <div className="h-24 bg-gray-100 rounded mb-4"></div>
                  <div className="flex gap-3">
                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Everything teams need — in one place</h2>
        <p className="mt-3 text-center text-gray-600">Automation, visibility, and collaboration built for growth-focused teams.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-lg">AI Automation</h3>
            <p className="mt-2 text-gray-600 text-sm">Create smart triggers, automate repetitive tasks, and ship faster with templated workflows.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-lg">Real-time Dashboards</h3>
            <p className="mt-2 text-gray-600 text-sm">Track KPIs and project health with lightweight, customizable dashboards.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-lg">Secure Collaboration</h3>
            <p className="mt-2 text-gray-600 text-sm">Role-based access, audit logs, and enterprise SSO for secure team workflows.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Simple, predictable pricing</h2>
          <p className="mt-2 text-center text-gray-600">Choose a plan that grows with your team — annual and monthly billing available.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center">
              <div className="text-sm font-medium text-gray-500">Starter</div>
              <div className="mt-4 text-3xl font-bold">$12<span className="text-base font-normal">/user/mo</span></div>
              <p className="mt-3 text-gray-600 text-sm">Basic automation and 3 projects.</p>
              <button className="mt-6 px-4 py-2 rounded-lg border">Get Started</button>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center shadow">
              <div className="text-sm font-medium text-gray-500">Pro</div>
              <div className="mt-4 text-3xl font-bold">$28<span className="text-base font-normal">/user/mo</span></div>
              <p className="mt-3 text-gray-600 text-sm">Advanced automation, dashboards, and integrations.</p>
              <button className="mt-6 px-4 py-2 rounded-2xl bg-black text-white">Start Free Trial</button>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 text-center">
              <div className="text-sm font-medium text-gray-500">Enterprise</div>
              <div className="mt-4 text-3xl font-bold">Custom</div>
              <p className="mt-3 text-gray-600 text-sm">SAML, dedicated support, and compliance options.</p>
              <button className="mt-6 px-4 py-2 rounded-lg border">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Loved by teams worldwide</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-100">
            <p className="text-gray-600">“SuperFlow reduced our operational overhead by 40% — the automation templates are incredible.”</p>
            <div className="mt-4 text-sm font-semibold">A. Patel • Head of Ops, BrightCorp</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100">
            <p className="text-gray-600">“The dashboard helped our team focus on the right metrics every week.”</p>
            <div className="mt-4 text-sm font-semibold">L. Gomez • PM, NovaApps</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100">
            <p className="text-gray-600">“Excellent collaboration features and simple onboarding for new hires.”</p>
            <div className="mt-4 text-sm font-semibold">S. Rao • CTO, FinEdge</div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">SF</div>
              <span className="font-semibold">SuperFlow</span>
            </div>
            <p className="text-sm text-gray-600">Built with care — portfolio sample site for design & product roles.</p>
          </div>

          <div>
            <div className="font-semibold mb-2">Product</div>
            <div className="text-sm text-gray-600">Features · Pricing · Security</div>
          </div>

          <div>
            <div className="font-semibold mb-2">Contact</div>
            <div className="text-sm text-gray-600">hello@superflow.example</div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-6">
          <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">© {new Date().getFullYear()} SuperFlow — Sample project for portfolio</div>
        </div>
      </footer>
    </div>
  );
}
