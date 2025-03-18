import React from 'react';
import { Mail, Music2, Shield, HelpCircle, ExternalLink, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Music2 className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-semibold text-gray-900">Musica X</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Privacy Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Privacy Policy</h2>
          </div>
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600">
              At Musica X, we prioritize your privacy. Our app is designed to provide a seamless music experience without collecting any personal information.
            </p>
            <h3 className="text-lg font-medium text-gray-900 mt-6">Data Collection Policy</h3>
            <p className="text-gray-600">
              Musica X does not collect, store, or process any personal information from its users. We believe in providing a private and secure environment for enjoying music.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6">YouTube Integration</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
              <div className="flex items-center space-x-2 mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
                <span className="text-sm text-gray-500">Powered by YouTube</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600">
                <li>All video content is played through YouTube's official embedded player</li>
                <li>No video downloading functionality is available or permitted</li>
                <li>We comply with YouTube's Terms of Service and API Services Terms of Service</li>
                <li>YouTube's privacy policy applies to all video content played through our app</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Help & Support</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">How does Musica X handle my privacy?</h4>
                <p className="text-gray-600">Musica X does not collect any personal information. We provide a private music experience without data collection.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Can I download videos from YouTube?</h4>
                <p className="text-gray-600">No, video downloading is not permitted as per YouTube's Terms of Service. All content is streamed through YouTube's official embedded player.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">How do I update the app?</h4>
                <p className="text-gray-600">Musica X updates automatically through the App Store. Make sure auto-updates are enabled in your iOS settings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Mail className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 mb-4">
              Have questions or need support? We're here to help! Reach out to us at:
            </p>
            <a
              href="mailto:Joel.Hernandez.James@gmail.com"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              Joel.Hernandez.James@gmail.com
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <p className="text-gray-600 mt-4">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Musica X. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <Youtube className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-500">Powered by YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;