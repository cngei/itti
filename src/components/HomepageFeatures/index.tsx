import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface Contributor {
  name: string;
  sezione: string;
  avatar?: string;
  description?: string;
}

const contributors: Contributor[] = [
  {
    name: 'Paolo Campanelli',
    sezione: 'Bergamo',
    description: 'Tuttofare: quando qualcosa si rompe, è generalmente colpa sua',
  },
  {
    name: 'Daniele Rainone',
    sezione: 'Comuni Vesuviani',
    description: 'Risolve i bug creati da Paolo, è dunque costantemente impegnato',
  },
  {
    name: 'Stefano Primo',
    sezione: 'Torino',
    description: 'La leggenda narra che i suoi lupetti prendano le capacità su Moodle',
  },
  {
    name: 'Emanuele Calò',
    sezione: 'Mediavalle Piana Lucchese',
    description: 'Amministra server mediante la taumaturgia',
  },
  {
    name: 'Francesco Masala',
    sezione: 'Bolzano',
    description: 'Ha portato la fibra ottica a Sori e in Sede Centrale, teme l\'acquisto di ulteriori immobili',
  },
  {
    name: 'Leonardo Bellin',
    sezione: 'Spinea',
    description: 'Lavorare per Amazon è troppo facile, quindi ha deciso di collaborare con l\'IT per tenersi impegnato',
  }
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center margin-bottom--lg">Chi siamo</h2>
            <p>Componenti, collaboratori e amici della CoCon</p>
            <div className="row">
              {contributors.map((contributor, index) => (
                <div key={index} className="col col--3 margin-bottom--lg">
                  <div className={clsx('card', styles.contributorCard)}>
                    <div className="card__body">
                      <h3 className={styles.contributorName}>{contributor.name}</h3>
                      <p className={styles.contributorRole}>{contributor.sezione}</p>
                      {contributor.description && (
                        <p className={styles.contributorDescription}>{contributor.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p>Vuoi vedere qui il tuo nome? Contribuisci su <a href={'https://github.com/cngei'}>GitHub</a> o contattaci tramite <a href={'mailto:servizi.informatici@cngei.it'}>mail</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
