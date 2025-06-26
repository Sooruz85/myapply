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
              Bonjour à toute l'équipe Variegata,
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Curieux, créatif et sensible à tout ce qui touche à la nature et à l'image, je suis actuellement en reconversion dans le numérique via la Digital School. J'ai amorcé ce virage l'an dernier avec une première formation au Wagon, où j'ai découvert les bases du développement web et des outils digitaux.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Installé à Bordeaux depuis plusieurs années, j'y ai fondé une petite galerie spécialisée dans les peintres voyageurs. Ce projet, que je fais vivre notamment à travers les réseaux sociaux, m'a donné le goût de la communication visuelle, des contenus bien pensés et des histoires qui ont du sens.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Mon parcours est un peu à part, mais il m'a toujours poussé à créer du lien entre les gens et les projets. Que ce soit via ma galerie ou dans mes expériences passées, j'aime valoriser ce qui mérite de l'être, raconter des choses qui touchent et contribuer à des projets concrets.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Aujourd'hui, je cherche une alternance où je pourrais mettre tout ça en pratique : création de contenu, animation des réseaux, identité de marque… Le tout dans une entreprise à taille humaine, ancrée dans une démarche responsable. Votre proposition correspond pleinement à ce que je cherche.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Merci pour votre attention. Si mon profil et ma démarche résonnent avec vos besoins, je serais ravi d'échanger plus en détail. Au plaisir de discuter prochainement.
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

