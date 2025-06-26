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
                  Création d'une galerie d'art en ligne spécialisée dans les artistes voyageurs. Communication digitale, gestion des réseaux sociaux, storytelling, stratégie marketing, conception web, évaluation d'œuvres et gestion de la relation client.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Responsable Service Client – Catawiki (2017–2019)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestion du service client international, traitement des réclamations, amélioration de la satisfaction client via CRM (Zendesk). Soutien logistique et financier.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Assistant Maison de Vente – Christie's Paris (2015–2016)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aide aux ventes aux enchères, gestion des ordres d'achat, suivi administratif, rédaction de rapports pour les commissaires-priseurs.
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
                <span className="font-medium text-gray-800">Le Wagon Bordeaux (2024)</span>
                <span className="text-gray-600">Bootcamp Développement Web</span>
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
                <h3 className="font-semibold text-gray-800 mb-2">Communication & Marketing</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Réseaux sociaux (Instagram, LinkedIn)</li>
                  <li>• Création de contenu (Canva, Figma)</li>
                  <li>• SEO, newsletters, storytelling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Technique</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Next.js, Supabase, Tailwind CSS</li>
                  <li>• Notion, Zapier</li>
                  <li>• Français (langue maternelle), Anglais (courant), Espagnol (intermédiaire)</li>
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

