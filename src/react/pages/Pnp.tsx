import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import CustomAccordion from '../components/CustomAccordion'
import Dash from '../components/Dash'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { theme } from '../theme'
import MassagesContent from './massages/MassagesContent'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  preview: {
    fontSize: 18,
    marginTop: 50
  },
  accordionBlocks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    '& h3': {
      marginTop: 10,
      marginBottom: 0
    }
  },
  accordionSublist: {
    listStyle: 'circle'
  }
})

function Pnp () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Préparation à la Naissance et à la Parentalité'
      >
        <div className={classes.content}>
          <h4>
            Entretien Prénatal Précoce (EPP)
          </h4>
          <p>
            Individuel ou en couple,
            il permet de mieux vous connaître et de déterminer vos souhaits et besoins au cours de cette grossesse,
            et de vous orienter vers des soins et une préparation à la naissance appropriée.
          </p>
          <Disclaimer>
            NB&nbsp;: La liste du matériel et fournitures de puériculture est fournie en début de grossesse.
            Je me tiens à disposition ensuite pour répondre à toutes vos questions.
          </Disclaimer>

          <div className={classes.accordionBlocks}>
            <div className={classes.preview}> Individuelle ou en groupe, 7 séances remboursées à 100% par la sécurité sociale.</div>
            <h3>Parcours classique</h3>
            <Dash />
            <CustomAccordion
              selectedColor={theme.medicalBlue}
              hoverColor={theme.medicalBlueHover}
              items={[
                {
                  summary: 'Vivre sa grossesse en toute sérénité',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Notions d’anatomie et développement de bébé, de prématurité et terme, quand s’inquiéter et consulter aux urgences ?</li>
                        <li>Petits maux, modifications corporelles, prise de poids, protéger son périnée</li>
                        <li>Environnement et  grossesse : activité physique et grossesse, perturbateurs endocriniens</li>
                        <li>Premiers exercices de respiration, exercices de Yoga</li>
                      </ul>
                      <em>Vers 25 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                },
                {
                  summary: 'Départ à la maternité et prétravail',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Contractions : Comment les reconnaître ? Comment les aider à être efficaces ? Comment les gérer ?</li>
                        <li>Rupture de la poche des eaux ? Comment la reconnaître et que faire ?</li>
                        <li>Notions de gestion de la douleur, respiration</li>
                      </ul>
                      <em>Vers 30-32 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                }, {
                  summary: 'Travail - péridurale - césarienne',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Analgésie péridurale : procédure, effets indésirables, aménagements</li>
                        <li>Déroulement du travail, concilier projet de naissance et contraintes médicales, s’approprier son accouchement</li>
                        <li>Césarienne programmée, césarienne en urgence</li>
                        <li>Yoga/méditation : gérer une angoisse pendant le travail</li>
                      </ul>
                      <em>Vers 31-33 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                }, {
                  summary: 'Poussée et accueil de bébé',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Poussée : Quand ? Comment ? S’approprier son accouchement, positions physiologiques d’accouchement.</li>
                        <li>Placenta, cordon, déchirures/épisiotomie.</li>
                        <li>Accueillir son enfant dans ce monde : peau à peau, soins à la naissance, tétée d’accueil.</li>
                        <li>Yoga/méditation : synergie mère-enfant pendant la naissance.</li>
                      </ul>
                      <em>Vers 32-34 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                }, {
                  summary: 'Post-partum : Etre parents, aspects pratiques, psychiques et émotionnels',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Aspects pratiques : Séjour à la maternité, généralités sur les besoins et soins du nouveau-né, RDVs à prévoir en post partum, retour de couches, retour de fertilité, reprise de l’activité sexuelle, reprise du travail, rééducation périnéale. </li>
                        <li>Que sait faire un foetus ? Un nouveau-né ? Comment perçoit-il le monde ? Développement sensoriel : Que peut-il voir ? Entendre ? Sentir ? Comment interagir avec un nouveau-né ? Quelles activités partager avec lui ? Besoins physiques et affectifs du nouveau-né.</li>
                        <li>“Un bébé ça pleure.” Vrai, mais peu utile lorsque l’on se trouve seul, au bord de l’épuisement total, à 3h du matin, avec un bébé qui crie depuis des heures malgré les plus grands efforts de son entourage. Pourquoi bébé crie-t-il ? Comment gérer ses propres émotions afin de mieux accompagner bébé dans la gestion des siennes ? Quelques conseils pour éviter la surcharge émotionnelle, et quelques pistes pour calmer un bébé en crise.</li>
                      </ul>
                      <em>Vers 33-35 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                }, {
                  summary: 'Alimentation et petits maux du nouveau-né et du nourrisson',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Allaitement maternel : clefs pour un allaitement réussi, rythmes naturels, complications de l’allaitement et comment y faire face, allier allaitement et co-parent non allaitant.</li>
                        <li>Alimentation au biberon : rythmes, ajustements des doses et des laits choisis, prévenir et prendre en charge la montée de lait.</li>
                        <li>Petits maux fréquents du nouveau-né et du nourrisson : reflux, coliques, éruptions cutanées, tête plate… les prévenir, les reconnaître et les appréhender.</li>
                      </ul>
                      <em>Vers 33-35 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                }, {
                  summary: 'Coaching pour les coachs : séance à deux pour bien faire équipe le jour J',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Place du co-parent ou de l’accompagnant durant le travail et l’accouchement.</li>
                        <li>Accompagner la femme en travail : l’aider à gérer la douleur, favoriser le bon déroulement du travail.</li>
                        <li>Massages, respiration, relaxation.</li>
                        <li>Devenir papa.</li>
                      </ul>
                      <em>Vers 37 SA (semaines d’aménorrhée)</em>
                    </>
                  )
                },
              ]}
            />

            <h3 style={{ marginTop: 30 }}>Séances spécifiques</h3>
            <Dash />
            <CustomAccordion
              selectedColor={theme.medicalBlue}
              hoverColor={theme.medicalBlueHover}
              items={[
                {
                  summary: 'Préparation Fratries',
                  content: (
                    <>
                      <ContentBlock
                        imageUrl='images/prep-fratrie.jpg'
                        landscape
                        flip
                      >
                        <List>

                          <li>Pourquoi Maman doit-elle aller à l’hôpital&nbsp;? Est-ce qu’elle est malade&nbsp;? </li>
                          <li>
                            Pourquoi est-ce que je ne peux pas aller avec elle&nbsp;?
                            Quand est-ce qu’elle va revenir&nbsp;?
                          </li>
                          <li>C’est quoi un accouchement&nbsp;? </li>
                          <li>
                            Pourquoi est-ce qu’elle est toujours fatiguée&nbsp;?
                            Et moi, dans tout ça&nbsp;?
                          </li>
                          <li>A quoi est-ce que je vais pouvoir jouer avec mon petit frère ou ma petite soeur&nbsp;?</li>
                        </List>
                      </ContentBlock>
                      <br />
                      <ContentBlock
                        imageUrl='images/finger-gloves.jpg'
                      >
                        <List>
                          <li>Séance de préparation pour les 3 à 8 ans, avec présence et participation active d’un/des parents. Alternance discussion/ateliers manuels.</li>
                          <li>Inclut des notions de sécurité. Durée environ 1h30.</li>
                        </List>
                      </ContentBlock>
                    </>
                  )
                },

                {
                  summary: 'Yoga prénatal',
                  content: (
                    <>
                      Association d’Asanas (postures), de Pranayama (exercices de respiration), de Pratyahara (relaxation) et de Dhyana (méditation), adaptés à la femme enceinte.
                    </>
                  )
                },
                {
                  summary: 'Césarienne programmée',
                  content: (
                    <>
                      Si votre état de santé ou celui de votre bébé impose une césarienne programmée, alors les trois premières séances du parcours classique ne sont pas adaptées.<br />
                      <br />
                      Cette séance vous apporte des éléments sur les spécificités des césariennes programmées&nbsp;: s'y préparer, le jour J, l'après.
                    </>
                  )
                },
                {
                  summary: 'Séance individuelle ou en couple',
                  content: (
                    <>
                      Au cas par cas, selon les besoins spécifiques de chacun.<br />Préparation à l’accouchement physiologique (sans recours à l’analgésie péridurale).
                    </>
                  )
                },
                {
                  summary: 'Massages ayurvédiques de la femme et de la femme enceinte, drainage des œdèmes des jambes',
                  content: (
                    <MassagesContent />
                  )
                }
              ]}
              defaultExpanded={4}
            />
          </div>
          <div className={classes.preview}>
            Au delà des 7 premières séances, les cours de préparation à la naissance ne sont pas remboursés par la sécurité sociale,
            et sont facturés 35 euros pour une séance individuelle, et 20 euros pour une séance en groupe.
            <br />
            <br />
            Les ateliers fratries sont au tarif de 25 euros par famille (dans le cas où les 7 séances ont été utilisées).
          </div>

          <h4 style={{ marginTop: 40 }}>
            Entretien postnatal
          </h4>
          <p style={{ textAlign: 'justify' }}>
            Individuel ou en couple, au cabinet ou à domicile, cet entretien a été rendu <b>obligatoire</b> par
            le Ministère de la Santé en Septembre 2022, afin de faire face à l'incidence inquiétante de la dépression du post-partum,
            qui touche désormais près d'une femme sur cinq. Son but est de faire le point sur le vécu de votre grossesse,
            de votre accouchement, de votre séjour en maternité, de votre retour à la maison, répondre à vos questions,
            et éventuellement vous orienter vers des sources de soutien appropriées.
          </p>

          <div className={classes.accordionBlocks}>
            <div className={classes.preview}> Individuel ou en groupe, 2 séances remboursées à 70% par la sécurité sociale.</div>
            <h3>Séances post-natales</h3>
            <Dash />
            <CustomAccordion
              selectedColor={theme.medicalBlue}
              hoverColor={theme.medicalBlueHover}
              items={[
                {
                  summary: 'Alimentation du nouveau-né et du nourrisson',
                  content: (
                    <>
                      Selon vos besoins&nbsp;: Allaitement, choix du lait, vitesse de tétine, procédure de sevrage,
                      allaitement et reprise du travail&nbsp;…
                    </>
                  )
                },
                {
                  summary: 'Comprendre et appréhender les cris du nouveau-né et du nourrisson.',
                  content: (
                    <>
                      Il s'agit de la même séance que celle proposée pendant la grossesse, ouverte également en
                      post-partum aux familles qui n'en n'ont pas bénéficié en prénatal et souhaitent y participer.
                    </>
                  ),
                },
                {
                  summary: 'Gestes de premiers secours sur les nouveaux-nés, nourrissons et bambins',
                  content: (
                    <>
                      Fausse route, chute, noyade, étouffement, blessure... Un atelier pour apprendre les bons réflexes en cas d'accident domestique.
                    </>
                  )
                },
                {
                  summary: 'Yoga post-natal et réhabilitation du bassin',
                  content: (
                    <>
                      <ul className={classes.accordionSublist}>
                        <li>Reprise douce du sport par le Yoga, tout en respectant le périnée</li>
                        <li>Resserrage du bassin pour soulager les douleurs ligamentaires en post-partum</li>
                      </ul>
                    </>
                  )
                },
                {
                  summary: 'Ateliers fratries adaptés au post-natal',
                  content: (
                    <>
                      Réponse aux questions des grands-frères / grandes-soeurs sur la grossesse, l'accouchement, le post-partum. Comment appréhender le quotidien avec son cadet, comment interagir avec lui.
                    </>
                  )
                }
              ]}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  )
}

export default React.memo(Pnp)
