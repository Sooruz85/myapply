import { Link } from 'react-router-dom'
import ClickSpark from '../components/ClickSpark.jsx'
import ComicButton from '../components/ComicButton.jsx'

function CV() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <ClickSpark
            sparkColor="#3b82f6"
            sparkSize={6}
            sparkRadius={15}
            sparkCount={10}
            duration={400}
            extraScale={1.1}
          >
            <ComicButton
              as="a"
              href="https://cv-etienne.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="blue"
            >
              📄 Voir mon CV en ligne
            </ComicButton>
          </ClickSpark>
        </div>

        <div className="space-y-8">
          {/* Objectif */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              Objectif
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En reconversion vers le développement web et la data, je suis à la recherche d'une alternance pour approfondir mes compétences en IA, machine learning et traitement de données. Curieux, rigoureux et autonome, je souhaite rejoindre une équipe comme celle de DEKRA pour apprendre en construisant des projets utiles, avec des technologies modernes.
            </p>
          </section>

          {/* Expérience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              Expérience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fondateur – Galerie Joséphine (2019–2025)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Création et gestion d'une plateforme de vente d’art en ligne. Développement web, gestion de base de données, communication digitale, analyse des comportements utilisateurs et mise en place d’outils internes pour automatiser les flux.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Responsable Service Client – Catawiki (2017–2019)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestion des données clients, résolution de litiges, analyse de performances via CRM (Zendesk). Collaboration avec les équipes produit pour améliorer les outils et processus.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Assistant Maison de Vente – Christie's Paris (2015–2016)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Soutien aux ventes, collecte et structuration de données pour le suivi des enchères, coordination entre les départements et contribution à des tableaux d’analyse post-ventes.
                </p>
              </div>
            </div>
          </section>

          {/* Formation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              Formation
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-between">
                <span className="font-medium text-gray-800">2i Academy (2025)</span>
                <span className="text-gray-600">Alternance Web & Data – en cours</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <span className="font-medium text-gray-800">Le Wagon Bordeaux (2024)</span>
                <span className="text-gray-600">Bootcamp Développement Web (HTML, CSS, JS, Ruby, SQL)</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <span className="font-medium text-gray-800">ICART Paris (2011–2013)</span>
                <span className="text-gray-600">MBA Commerce International de l'Art</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <span className="font-medium text-gray-800">Vatel Bordeaux (2006–2009)</span>
                <span className="text-gray-600">Licence en Gestion Hôtelière</span>
              </div>
            </div>
          </section>

          {/* Compétences */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              Compétences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tech & Data</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python, JavaScript, SQL</li>
                  <li>• Supabase, PostgreSQL, Git, GitHub</li>
                  <li>• Notions de Machine Learning & LLMs</li>
                  <li>• Visualisation : Power BI, Recharts</li>
                  <li>• Déploiement : Docker, CI/CD, Heroku, Vercel</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Soft Skills</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Curiosité, autonomie, rigueur</li>
                  <li>• Expérience client / UX</li>
                  <li>• Bonne capacité d’adaptation</li>
                  <li>• Langues : Français (natif), Anglais (courant), Espagnol (intermédiaire)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <ClickSpark
            sparkColor="#ffffff"
            sparkSize={6}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
            extraScale={1.1}
          >
            <ComicButton
              as="a"
              to="/"
            >
              ← Retour à l'accueil
            </ComicButton>
          </ClickSpark>
        </div>
      </div>
    </div>
  )
}

export default CV

