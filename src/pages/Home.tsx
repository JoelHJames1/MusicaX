import React from 'react';
import { Mail, Music2, Shield, HelpCircle, ExternalLink, Youtube } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Privacy Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Privacy First</h2>
        </div>
        <div className="prose prose-indigo max-w-none">
          <p className="text-gray-600">
            At Musica X, we prioritize your privacy. Our app is designed to provide a seamless music experience without collecting any personal information.
          </p>
        </div>
      </section>

      {/* YouTube Integration */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Youtube className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">YouTube Integration</h2>
          </div>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Stream your favorite music through YouTube's official player</li>
            <li>Create and manage playlists</li>
            <li>Discover new music recommendations</li>
          </ul>
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
        </div>
      </section>
    </div>
  );
}