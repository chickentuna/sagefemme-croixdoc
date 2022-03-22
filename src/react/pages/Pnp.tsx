import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import Faq, { FaqItem } from '../components/Faq'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { theme } from '../theme'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  faqBlocks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
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
            Entretien Prénatal Précodce (EPP)
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
        </div>
      </PageWrapper>
      <div className={classes.faqBlocks}>
        <Faq
          title='Séances classiques'
          info='Individuel ou en groupe, 7 séances remboursées à 100% par la sécurité sociale'
          items={[
            {
              label: 'Début de travail et départ à la maternité ',
              text: (
                <>
                  Motifs consultation en urgence - Les Contractions&nbsp;:  Qu’est ce qu’une contraction et à quoi servent-elles&nbsp;?
                  Comment les reconnaître et les distinguer ? Comment les aider à être efficaces ? Comment les gérer&nbsp;?
                  - Postures, massage, exercices de respiration. Rôles du/de la partenaire.  - Déclenchement - Initiation au Yoga prénatal.
                </>
              )
            },

            {
              label: 'Travail et accouchement',
              text: (
                <>
                  Accueil à la maternité, déroulement du travail, concilier projet de naissance et contraintes médicales,
                  s’approprier son accouchement, APD… Césarienne. Gestion du stress et de la douleur. Comment préparer un accouchement naturel&nbsp;?
                  - Exercices de respiration/relaxation, notions de massage/postures, exercices de  Yoga prénatal
                </>
              )
            },

            {
              label: 'La poussée et l’accueil de bébé ',
              text: (
                <>
                  Circonstances, techniques de poussées, positions physiologiques d’accouchement, chemin parcouru par bébé,
                  déchirures périnéales et épisiotomie, rôle du partenaire, accueil de bébé, peau à peau, tétée d’accueil, post-partum immédiat.
                  Déroulement d’une césarienne et post partum immédiat en cas de césarienne. Exercices de respiration/relaxation, exercices de Yoga prénatal
                </>
              )
            },

            {
              label: 'Le “4ème trimestre de la grossesse” ',
              text: (
                <>
                  Et après ? Séjour à la maternité, puis quotidien, organisation, sources de soutien, prévention des accidents domestiques,
                  généralités sur les besoins et soins du nouveau-né, RDVs à prévoir en post partum, retour de couches, retour de fertilité,
                  reprise de l’activité sexuelle, reprise du travail, rééducation périnéale. Exercices de respiration/relaxation, exercices de Yoga prénatal
                </>
              )
            },

            {
              label: 'Cultiver le lien parent-enfant',
              text: (
                <>
                  Que sait faire un foetus&nbsp;? Un nouveau-né&nbsp;? Comment perçoit-il le monde&nbsp;? Développement sensoriel&nbsp;:
                  Que peut-il voir&nbsp;? Entendre&nbsp;? Sentir&nbsp;? Comment interagir avec un nouveau-né&nbsp;?
                  Quelles activités partager avec lui&nbsp;? Besoins physiques et affectifs du nouveau-né et du nourrisson, rythmes sommeil&nbsp;/&nbsp;éveil,
                  portage, cocooning, bienfaits du massage bébé. Concilier les besoins et le bien-être de bébé avec ceux des parents.
                  Exercices de respiration/relaxation, de Yoga prénatal.
                </>
              )
            },

            {
              label: 'Comprendre et appréhender des cris du nouveau-né et du nourrisson',
              text: (
                <>
                  “Un bébé ça pleure.” Vrai, mais peu utile lorsque l’on se trouve seul, au bord de l’épuisement total, à 3h du matin,
                  avec un bébé qui crie depuis des heures malgré les plus grands efforts de son entourage. Pourquoi bébé crie-t-il&nbsp;?
                  Comment gérer ses propres émotions afin de mieux accompagner bébé dans la gestion des siennes&nbsp;?
                  Quelques conseils pour éviter la surcharge émotionnelle, et quelques pistes pour calmer un bébé en crise.
                  Notions de postures, massages et phytothérapie pour soulager les maux classiques (douleurs abdominales, reflux&nbsp;…).
                </>
              )
            },

            {
              label: 'Allaitement maternel',
              text: (
                <>
                  S’approprier son allaitement en posant son propre projet (allaitement maternel exclusif, mixte&nbsp;…).
                  Bases scientifiques de l’allaitement maternel. Comment gérer tous les sons de cloches qui résonnent autour de vous&nbsp;?
                  Idées reçues, respect de la spécificité de chacun.
                </>
              )
            }
          ]}
        />
        <Faq
          title='Autres séances'
          items={[
            {
              label: 'Préparation Fratries',
              text: (
                <>
                  Pourquoi Maman doit-elle aller à l’hôpital ? Est-ce qu’elle est malade ? Pourquoi est-ce que je ne peux pas aller avec elle ? Quand est-ce qu’elle va revenir ? C’est quoi un accouchement ? Pourquoi est-ce qu’elle est toujours fatiguée ? Et moi, dans tout ça ? A quoi est-ce que je vais pouvoir jouer avec mon petit frère ou ma petite soeur ? Séance de préparation pour les 3 à 8 ans, avec présence et participation active d’un/des parents. Alternance discussion/ateliers manuels. Inclut des notions de sécurité. Durée environ 45 min.
                </>
              )
            },
            {
              label: 'Yoga prénatal',
              text: (
                <>
                  Association d’Asanas (postures), de Pranayama (exercices de respiration), de Pratyahara (relaxation) et de Dhyana (méditation), adaptés à la femme enceinte.
                </>
              )
            },
            {
              label: 'Séance individuelle ou en couple',
              text: (
                <>
                  Au cas par cas, selon les besoins spécifiques de chacun.<br />Préparation à l’accouchement physiologique (sans recours à l’analgésie péridurale)
                </>
              )
            }
          ]}
        />
      </div>
    </>
  )
}

export default React.memo(Pnp)
