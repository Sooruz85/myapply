import { Link } from 'react-router-dom'
import DotGrid from '../components/DotGrid.jsx'
import ClickSpark from '../components/ClickSpark.jsx'
import ComicButton from '../components/ComicButton.jsx'
import DecryptedText from '../components/DecryptedText.jsx'
import '../components/DotGrid.css'

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={8}
          gap={24}
          baseColor="#f3f4f6"
          activeColor="#6b7280"
          proximity={120}
          shockRadius={200}
          shockStrength={3}
          resistance={800}
          returnDuration={1.2}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight drop-shadow-sm">
            Candidature – Alternance Assistant·e Communication – Agence Côte Ouest
          </h1>

          <div className="space-y-6">
            <ClickSpark
              sparkColor="#ffffff"
              sparkSize={8}
              sparkRadius={20}
              sparkCount={12}
              duration={500}
              extraScale={1.2}
            >
              <ComicButton
                as="a"
                to="/cv"
                className="w-full md:w-auto"
              >
                → Consulter mon CV
              </ComicButton>
            </ClickSpark>

            <ClickSpark
              sparkColor="#ffffff"
              sparkSize={8}
              sparkRadius={20}
              sparkCount={12}
              duration={500}
              extraScale={1.2}
            >
              <ComicButton
                as="a"
                to="/motivation"
                className="w-full md:w-auto"
              >
                → Lire ma lettre de motivation
              </ComicButton>
            </ClickSpark>
          </div>

          {/* Signature avec effet DecryptedText */}
          <div className="mt-8">
            <DecryptedText
              text="by Etienne Gaumery"
              speed={100}
              maxIterations={20}
              sequential={true}
              revealDirection="center"
              animateOn="view"
              className="text-gray-500 text-sm italic"
              encryptedClassName="text-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
