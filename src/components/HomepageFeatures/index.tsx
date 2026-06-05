import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Contributor {
  name: string;
  sezione: string;
  avatar?: string;
  description?: string;
}

interface ServiceAd {
  name: string;
  description: string;
  url: string;
  hostname: string;
  color: string;
  emoji: string;
  badge?: string;
  docUrl: string;
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

const serviceAds: ServiceAd[] = [
  {
    name: 'Password manager',
    description: 'Le tue password al sicuro! Basta post-it e file su Drive!',
    url: 'https://password.cngei.it',
    hostname: 'password.cngei.it',
    color: '#ff6b6b',
    emoji: '🔐',
    badge: 'GRATIS!',
    docUrl: '/docs/services/vaultwarden',
  },
  {
    name: 'Foto',
    description: 'Come Google Foto ma fatto in casa con la ricetta della nonna!',
    url: 'https://foto.cngei.it',
    hostname: 'foto.cngei.it',
    color: '#4ecdc4',
    emoji: '📸',
    badge: 'NOVITÀ!',
    docUrl: '/docs/services/immich',
  },
  {
    name: 'Cloud',
    description: 'File, documenti e moduli, tutto in un posto!',
    url: 'https://cloud.cngei.it',
    hostname: 'cloud.cngei.it',
    color: '#45b7d1',
    emoji: '☁️',
    badge: 'TOP!',
    docUrl: '/docs/services/nextcloud',
  },
  {
    name: 'Siti web',
    description: 'Il sito del CNGEI e delle sezioni, a prova di lupetto, ma il merito va alla Comunicazione!',
    url: 'https://cngei.it',
    hostname: 'cngei.it',
    color: '#96ceb3',
    emoji: '🌐',
    docUrl: '/docs/services/wordpress',
  },
  {
    name: 'Open data',
    description: 'Grafici e tabelle con tutti i dati dell\'associazione! Tranne i verbali del GIDO',
    url: 'https://opendata.cngei.it',
    hostname: 'opendata.cngei.it',
    color: '#feca57',
    emoji: '📊',
    docUrl: '/docs/services/metabase',
  },
  {
    name: 'Chat',
    description: 'Diciamo NO ai gruppi Whatsapp',
    url: 'https://chat.cngei.it',
    hostname: 'chat.cngei.it',
    color: '#6c5ce7',
    emoji: '💬',
    badge: 'PROVALO!',
    docUrl: '/docs/services/zulip',
  },
  {
    name: 'Statuspage',
    description: 'Non funziona qualcosa? Solo a te o è proprio rotto?',
    url: 'https://status.cngei.it',
    hostname: 'status.cngei.it',
    color: '#00b894',
    emoji: '✅',
    docUrl: '/docs/services/uptime-kuma',
  },
  {
    name: 'Assemblee',
    description: 'Vota online! Lo scrutatore non è più un ruolo da temere!',
    url: 'https://assemblee.cngei.it',
    hostname: 'assemblee.cngei.it',
    color: '#e17055',
    emoji: '🗳️',
    badge: 'NEW!',
    docUrl: '/docs/services/assemblee',
  },
  {
    name: 'E molto altro',
    description: 'Scopriloooo',
    url: '/docs/intro',
    hostname: 'it.cngei.it',
    color: '#9e85c8',
    emoji: '👀️',
    badge: '???',
    docUrl: '/docs/intro',
  },
];

function ServiceAdCard({service}: {service: ServiceAd}) {
  return (
    <div className={styles.adCard}>
      <div className={styles.adBorder} style={{backgroundColor: service.color}} />
      <div className={styles.adContent}>
        <div className={styles.adHeader}>
          <span className={styles.adEmoji}>{service.emoji}</span>
          <div className={styles.adTitleWrapper}>
            <h3 className={styles.adTitle} style={{color: service.color}}>
              {service.name}
            </h3>
            <code className={styles.adHostname}>{service.hostname}</code>
          </div>
          {service.badge && (
            <span className={styles.adBadge} style={{backgroundColor: service.color}}>
              {service.badge}
            </span>
          )}
        </div>
        <p className={styles.adDescription}>{service.description}</p>
        <div className={styles.adFooter}>
          <Link
            className={styles.adButton}
            href={service.docUrl}
            style={{backgroundColor: service.color}}>
            VAIIII →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center margin-bottom--lg">I nostri servizi</h2>
            <div className={styles.adGrid}>
              {serviceAds.map((service, index) => (
                <ServiceAdCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--12">
            <h2 className="text--center margin-bottom--lg">Chi siamo</h2>
            <p className="text--center">Componenti, collaboratori e amici della CoCon</p>
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
            <p className="text--center">Vuoi vedere qui il tuo nome? Contribuisci su <a href={'https://github.com/cngei'}>GitHub</a> o contattaci tramite <a href={'mailto:servizi.informatici@cngei.it'}>mail</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
