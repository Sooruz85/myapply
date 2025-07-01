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
              Bonjour à toute l’équipe DEKRA,
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              En reconversion dans le numérique via la 2i Academy, je me spécialise aujourd’hui dans le développement web, avec un vrai attrait pour les projets liés à la data et à l’intelligence artificielle. Cette transition s’inscrit dans la continuité d’un premier virage amorcé l’an dernier avec une formation intensive au Wagon Bordeaux, où j’ai découvert le plaisir de coder, de comprendre comment les outils fonctionnent et de construire des solutions concrètes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ce que je cherche aujourd’hui, c’est une alternance stimulante, où je pourrais apprendre, expérimenter et contribuer à des projets utiles, entouré d’une équipe bienveillante. L’offre que vous proposez coche toutes les cases : des sujets passionnants, une vraie dynamique d’équipe, et la possibilité de monter en compétences sur des technos que j’ai hâte de mieux maîtriser (Python, IA, visualisation, cloud…).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Mon parcours est un peu atypique, mais il m’a toujours amené à gérer des projets, à m’adapter et à apprendre vite. Que ce soit dans l’art, le digital ou le développement, j’aime creuser, documenter, tester, et construire des choses utiles et bien pensées.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ce site interactif vous permet de découvrir en un clic mon parcours, mes projets et ma motivation. Je serais ravi d’échanger avec vous si l’occasion se présente.
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


