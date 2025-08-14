import Header from './components/Header'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import FeatureCard from './components/FeatureCard'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import data from './data.json'

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <LinkShortener />
      <div className='flex mb-10'>
        {data.map(feature =>
          <FeatureCard key={feature.heading} heading={feature.heading}
            description={feature.description}/>)}
      </div>
      <CallToAction heading="Boost your links today" />
      <Footer/>
    </>
  )
}

export default App
