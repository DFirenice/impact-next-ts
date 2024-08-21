import Heading from '@/components/Heading'
import Splitter from "@/components/UI/Splitter/Splitter"
import Btn from '@/components/UI/Btn/Btn'

import css from './Page.module.css'

export default function App () {
  return <main>
    <section className={css.hero}>
      <div>
        <div className={css.hero_heading}>
          <Heading size="massive">Where <span data-font-accent="gradient">Efficiency</span></Heading>
          <Heading size="massive">Become your Success.</Heading>
        </div>
        <Splitter/>
        <div className={css.hero_subtitle}>
          <p data-font-accent="medium">
            A powerful tool for managing {`& `}
            cooperating over your projects.
          </p>
        </div>
      </div>
      <div><Btn classes="btn-light" link="/home">Get Started</Btn></div>
    </section>
  </main>
}