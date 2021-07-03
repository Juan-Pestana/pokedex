import React from 'react'
import styles from '../styles/PokemonListItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PokemonListItem({ pokemon }) {
  const array = pokemon.url.split('/')

  return (
    <div style={{ padding: '2rem' }}>
      <Link href={`/especie/${pokemon.name}`}>
        <a>
          <div className={styles.pokeball}>
            <div>
              <div className={styles.red}>
                <Image
                  src={`https://pokeres.bastionbot.org/images/pokemon/${array[6]}.png`}
                  alt={pokemon.name}
                  layout="fill"
                  objectFit="contain"
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.white}>
              <p key={pokemon.name}>{pokemon.name.toUpperCase()}</p>
            </div>
            <div className={styles.innerball}></div>
          </div>
        </a>
      </Link>
    </div>
  )
}