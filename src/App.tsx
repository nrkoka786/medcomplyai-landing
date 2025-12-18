
import { Shield, CheckCircle, FileText, ArrowRight, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- Navigation --- */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* You can replace this icon with your Logo image later */}
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">MedComplyAI</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://app.medcomplyai.com" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Start Free Assessment
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now in Public Beta
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-900 tracking-tight mb-6">
            Is Your Quality System <br className="hidden lg:block" />
            <span className="text-blue-600">Audit-Ready?</span>
          </h1>
<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
  Get a free, AI-powered <strong>ISO 13485 & FDA 21 CFR 820</strong> gap analysis <strong>in minutes</strong>. 
  Identify critical risks before the auditor does.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.medcomplyai.com" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Lock className="w-4 h-4" /> No credit card required
            </span>
          </div>
        </div>
      </header>

      {/* --- Value Props --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Feedback</h3>
              <p className="text-gray-600">
                Don't wait weeks for a consultant report. Our AI engine analyzes your inputs instantly to flag "Major Non-Conformity" risks.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audit-Proof Logic</h3>
              <p className="text-gray-600">
                Built on specific clauses from ISO 13485:2016 and FDA 21 CFR 820, focusing on the most common audit traps.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Report</h3>
              <p className="text-gray-600">
                Unlock a comprehensive PDF report with remediation templates and checklists you can use immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MedComplyAI. All rights reserved. <br />
            <span className="text-xs mt-2 block">Not legal or regulatory advice. For diagnostic purposes only.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
