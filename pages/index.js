import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import styles from '../styles/Home.module.css'

const getPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon-species/?limit=898'
  const res = await fetch(url)
  const result = res.json()

  return result
}

export default function Home({ pokes }) {
  const { data } = useQuery('pokemons', getPokemons, { initialData: pokes })

  const router = useRouter()

  const handleOnSelect = (item) => {
    // the item selected
    router.push(`/especie/${item.name}`)
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pokedex</title>
          <meta
            name="Una Pokedex para Diego y Roque"
            content="Con Next y React Query"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>
          <div className={styles.main}>
            <div style={{ width: '70%', height: '8rem', position: 'relative' }}>
              <Image
                src="/images/TituloUniversoPokemon.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h1 className={styles.title}>
              Diego y Roque <span>Pokedex</span>
            </h1>

            <div className={styles.search_input}>
              <ReactSearchAutocomplete
                items={data.results}
                onSelect={handleOnSelect}
              />
            </div>
          </div>
        </div>
        <div className={styles.balls}>
          <div
            className={styles.pokeball}
            style={{ transform: 'rotate(-20deg)' }}
          >
            <div>
              <div className={styles.red}>
                <Image
                  src="/images/Diego.png"
                  alt="Diego"
                  layout="fill"
                  objectFit="contain"
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.white}>
              <p>DIEGO</p>
            </div>
            <div className={styles.innerball}></div>
          </div>
          <div
            className={styles.pokeball}
            style={{ transform: 'rotate(20deg)' }}
          >
            <div>
              <div className={styles.red}>
                <Image
                  src="/images/roque.png"
                  alt="Roque"
                  layout="fill"
                  objectFit="contain"
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.white}>
              <p>ROQUE</p>
            </div>
            <div className={styles.innerball}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const pokemons = await getPokemons()
  const pokes = pokemons.results

  return {
    props: { pokes },
  }
}
