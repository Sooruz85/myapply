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
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Bonjour à toute l'équipe Côte Ouest,
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
            Créatif, curieux et passionné de communication, je suis actuellement en reconversion dans le numérique via la Digital School, avec une forte appétence pour les projets innovants et les contenus bien pensés.
Cette démarche s’inscrit dans la continuité d’un premier virage amorcé l’an dernier au sein de l'école du Wagon, où j’ai découvert les bases du développement web et des outils digitaux.</p>



            <p className="text-gray-700 leading-relaxed mb-6">
              Installé à Bordeaux depuis plusieurs années, c'est une ville que j'apprécie profondément pour son énergie, sa vitalité culturelle et son engagement local. J'ai donc choisi d'y suivre ma formation, et j'aimerais inscrire mon alternance dans cette dynamique.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Votre offre m'a immédiatement parlé : entre stratégie de contenu, animation sociale, accompagnement événementiel et impact responsable, tout y est. C'est exactement le type de mission dans lequel je pourrais m'investir avec enthousiasme.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ce site interactif vous permet de découvrir en un clic mes expériences, mes projets et ma motivation. Je serais ravi d’en parler plus concrètement avec vous si l’occasion se présente.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-2">
                Bien cordialement,
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                Etienne Gaumery
              </p>
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
