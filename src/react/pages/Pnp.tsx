import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { createUseStyles } from 'react-jss'
import CustomAccordion from '../components/CustomAccordion'
import Dash from '../components/Dash'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { theme } from '../theme'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  faqBlocks: {
    opacity: 0.5,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  preview: {
    marginTop: 50
  },
  accordionBlocks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    '& h3': {
      marginTop: 30,
      marginBottom: 0
    },
    '& ul': {
      listStyle: 'circle'
    }
  }
})

function Pnp () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Préparation à la Naissance et à la Parentalité'
        titleColor={theme.pink}
        titleDecorationUrl='https://image.shutterstock.com/image-illustration/pregnant-woman-hugs-her-stomach-260nw-1890465955.jpg'
      >
        <div className={classes.content}>
          <h4>
            Entretien Prénatal Précoce (EPP)
          </h4>
          <p>
            Individuel en en couple,
            il permet de mieux vous connaître et de déterminer vos souhaits et besoins au cours de cette grossesse,
            et de vous orienter vers des soins et une préparation à la naissance appropriée.
          </p>
          <Disclaimer>
            NB&nbsp;: La liste du matériel et fournitures de puériculture est fournie en début de grossesse.
            Je me tiens à disposition ensuite pour répondre à toutes vos questions.
          </Disclaimer>

          <div className={classes.accordionBlocks}>
            <div className={classes.preview}> Individuel ou en groupe, 7 séances remboursées à 100% par la sécurité sociale </div>
            <h3>Séances classiques</h3>
            <Dash />
            <CustomAccordion
              selectedColor={theme.medicalBlue}
              hoverColor={theme.medicalBlueHover}
              items={[
                {
                  summary: 'Début de travail et départ à la maternité ',
                  content: (
                    <>
                      Motifs consultation en urgence - Les Contractions&nbsp;:  Qu’est ce qu’une contraction et à quoi servent-elles&nbsp;?
                      Comment les reconnaître et les distinguer&nbsp;? Comment les aider à être efficaces&nbsp;? Comment les gérer&nbsp;?
                      <ul>
                        <li>Postures, massage, exercices de respiration</li>
                        <li>Rôles du/de la partenaire</li>
                        <li>Déclenchement - Initiation au Yoga prénatal</li>
                      </ul>
                    </>
                  )
                }, {
                  summary: 'Travail et accouchement',
                  content: (
                    <>
                      Accueil à la maternité, déroulement du travail, concilier projet de naissance et contraintes médicales,
                      s’approprier son accouchement, APD… Césarienne. Gestion du stress et de la douleur. Comment préparer un accouchement naturel&nbsp;?
                      - Exercices de respiration&nbsp;/&nbsp;relaxation, notions de massage&nbsp;/&nbsp;postures, exercices de  Yoga prénatal.
                    </>
                  )
                }, {
                  summary: 'La poussée et l’accueil de bébé ',
                  content: (
                    <>
                      Circonstances, techniques de poussées, positions physiologiques d’accouchement, chemin parcouru par bébé,
                      déchirures périnéales et épisiotomie, rôle du partenaire, accueil de bébé, peau à peau, tétée d’accueil, post-partum immédiat.
                      Déroulement d’une césarienne et post partum immédiat en cas de césarienne. Exercices de respiration&nbsp;/&nbsp;relaxation, exercices de Yoga prénatal.
                    </>
                  )
                }, {
                  summary: 'Le “4ème trimestre de la grossesse” ',
                  content: (
                    <>
                      Et après&nbsp;? Séjour à la maternité, puis quotidien, organisation, sources de soutien, prévention des accidents domestiques,
                      généralités sur les besoins et soins du nouveau-né, RDVs à prévoir en post partum, retour de couches, retour de fertilité,
                      reprise de l’activité sexuelle, reprise du travail, rééducation périnéale. Exercices de respiration/relaxation, exercices de Yoga prénatal.
                    </>
                  )
                }, {
                  summary: 'Cultiver le lien parent-enfant',
                  content: (
                    <>
                      Que sait faire un foetus&nbsp;? Un nouveau-né&nbsp;? Comment perçoit-il le monde&nbsp;? Développement sensoriel&nbsp;:
                      Que peut-il voir&nbsp;? Entendre&nbsp;? Sentir&nbsp;? Comment interagir avec un nouveau-né&nbsp;?
                      Quelles activités partager avec lui&nbsp;? Besoins physiques et affectifs du nouveau-né et du nourrisson, rythmes sommeil&nbsp;/&nbsp;éveil,
                      portage, cocooning, bienfaits du massage bébé. Concilier les besoins et le bien-être de bébé avec ceux des parents.
                      Exercices de respiration/relaxation, de Yoga prénatal.
                    </>
                  )
                }, {
                  summary: 'Comprendre et appréhender des cris du nouveau-né et du nourrisson',
                  content: (
                    <>
                      “Un bébé ça pleure.” Vrai, mais peu utile lorsque l’on se trouve seul, au bord de l’épuisement total, à 3h du matin,
                      avec un bébé qui crie depuis des heures malgré les plus grands efforts de son entourage. Pourquoi bébé crie-t-il&nbsp;?
                      Comment gérer ses propres émotions afin de mieux accompagner bébé dans la gestion des siennes&nbsp;?
                      Quelques conseils pour éviter la surcharge émotionnelle, et quelques pistes pour calmer un bébé en crise.
                      Notions de postures, massages et phytothérapie pour soulager les maux classiques (douleurs abdominales, reflux&nbsp;…).
                    </>
                  )
                }, {
                  summary: 'Allaitement maternel',
                  content: (
                    <>
                      S’approprier son allaitement en posant son propre projet (allaitement maternel exclusif, mixte&nbsp;…).
                      Bases scientifiques de l’allaitement maternel. Comment gérer tous les sons de cloches qui résonnent autour de vous&nbsp;?
                      Idées reçues, respect de la spécificité de chacun.
                    </>
                  )
                }
              ]}
            />

            <h3>Autres séances</h3>
            <Dash />
            <CustomAccordion
              selectedColor={theme.medicalBlue}
              hoverColor={theme.medicalBlueHover}
              items={[
                {
                  summary: 'Préparation Fratries',
                  content: (
                    <>
                      Pourquoi Maman doit-elle aller à l’hôpital&nbsp;? Est-ce qu’elle est malade&nbsp;? Pourquoi est-ce que je ne peux pas aller avec elle&nbsp;?
                      Quand est-ce qu’elle va revenir&nbsp;? C’est quoi un accouchement&nbsp;? Pourquoi est-ce qu’elle est toujours fatiguée&nbsp;?
                      Et moi, dans tout ça&nbsp;? A quoi est-ce que je vais pouvoir jouer avec mon petit frère ou ma petite soeur&nbsp;?
                      Séance de préparation pour les 3 à 8 ans, avec présence et participation active d’un/des parents. Alternance discussion/ateliers manuels.
                      Inclut des notions de sécurité. Durée environ 45 min.
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
                  summary: 'Séance individuelle ou en couple',
                  content: (
                    <>
                      Au cas par cas, selon les besoins spécifiques de chacun.<br />Préparation à l’accouchement physiologique (sans recours à l’analgésie péridurale).
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
