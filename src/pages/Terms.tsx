import React from 'react';
import { ScrollText, Youtube } from 'lucide-react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <ScrollText className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Terms of Use (EULA)</h1>
        </div>

        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By downloading, installing, or using Musica X ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Musica X is a music streaming application that interfaces with YouTube's services to provide users with access to music content. The App serves as an interface to YouTube's platform and does not store or host any content directly.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
                <span className="text-gray-700 font-medium">YouTube Integration</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>All content is streamed through YouTube's official embedded player</li>
                <li>Users must comply with YouTube's Terms of Service</li>
                <li>Downloading or copying content is strictly prohibited</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Use the App in compliance with all applicable laws and regulations</li>
              <li>Not attempt to circumvent any technical measures used to protect content</li>
              <li>Not use the App for any unauthorized or illegal purposes</li>
              <li>Not attempt to download, copy, or redistribute any content accessed through the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The App and its original content, features, and functionality are owned by Musica X and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The App is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, Musica X shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Use on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              For any questions about these Terms of Use, please contact us at:{' '}
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