import React from 'react';
import { Shield, Youtube } from 'lucide-react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>

        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700">
              Musica X is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information through our music streaming application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
            <p className="text-gray-700 mb-4">
              Musica X does not collect, store, or process any personal information from its users. We believe in providing a private and secure environment for enjoying music.
            </p>
            <p className="text-gray-700">
              Our application functions as an interface to YouTube's services, and we do not maintain any user databases or tracking systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Integration</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
                <span className="text-gray-700 font-medium">YouTube Services</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>All video content is streamed through YouTube's official embedded player</li>
                <li>YouTube's own privacy policy applies to content played through our app</li>
                <li>We comply with YouTube's Terms of Service and API Services Terms of Service</li>
                <li>No video downloading functionality is available or permitted</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700">
              The only third-party service integrated into Musica X is YouTube. When using our app:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>YouTube may collect data according to their privacy policy</li>
              <li>We recommend reviewing YouTube's privacy policy for more information about their data practices</li>
              <li>We do not share any information with other third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:Joel.Hernandez.James@gmail.com" className="text-indigo-600 hover:text-indigo-500">
                Joel.Hernandez.James@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}