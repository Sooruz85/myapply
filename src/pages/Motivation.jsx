import { Link } from 'react-router-dom'
import ClickSpark from '../components/ClickSpark.jsx'
import ComicButton from '../components/ComicButton.jsx'

function Motivation() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lettre de motivation</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Bonjour,
            </p>

            <p className="mb-6">
              Très curieux, rigoureux et attiré par la communication interne et le travail d'équipe, je suis actuellement en reconversion vers les métiers du numérique et de la gestion de projet via la Digital School. J'ai commencé ce parcours l'an dernier avec une formation au Wagon Bordeaux, et je poursuis aujourd'hui une spécialisation qui mêle outils digitaux, communication et organisation.
            </p>

            <p className="mb-6">
              Mon parcours est un peu atypique : j'ai travaillé dans le monde de l'art, fondé une galerie à Bordeaux, et j'ai toujours aimé structurer les idées, rendre les contenus clairs et faire avancer les projets. Ce que je recherche aujourd'hui, c'est un environnement concret et bien organisé, où je peux contribuer de façon utile et collective.
            </p>

            <p className="mb-6">
              L'offre que vous proposez à la Direction Exploitation TGV me parle vraiment : à la fois pour son côté terrain et coordination, et pour les missions liées à la communication. Je serais ravi de participer à vos newsletters, forums métiers ou outils de suivi, et d'apporter mes idées pour rendre tout ça encore plus fluide.
            </p>

            <p className="mb-6">
              Je suis disponible dès septembre, pour une alternance de 16 mois. Si mon profil et ma démarche résonnent avec vos besoins, je serais heureux d'en discuter avec vous.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="mb-2">Bien à vous,</p>
              <p className="text-gray-900 font-semibold text-lg">Etienne Gaumery</p>
            </div>
          </div>
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

export default Motivation


