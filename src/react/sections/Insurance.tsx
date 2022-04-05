import React, { ReactNode } from 'react'
import CustomAccordion from '../components/CustomAccordion'

function Insurance () {
  return (
    <div>
      <CustomAccordion
        defaultExpanded={0}
        items={[{
          summary: 'Remboursements',
          content: (
            <> L'assurance maladie prend en charge les soins à 100 % avec dispense d'avance de frais (tiers payant) dans les cas suivants&nbsp;:
              <ul>
                <li>Avant 6 mois de grossesse : Examens médicaux obligatoires, par exemple les consultations prénatales obligatoires (une avant la fin du 3e mois de grossesse, puis une par mois à partir du 4e mois de grossesse jusqu'à la date de l'accouchement), les séances de préparation à la naissance et à la parentalité, dont l'entretien prénatal précoce, les examens biologiques complémentaires (y compris ceux du futur père).</li>
                <li>Toute consultation, examen, soin effectués entre le début du 6e mois de grossesse jusqu’au 12ème jour après l’accouchement</li>
                <li>Toute consultation, examen, soin effectués à un bénéficiaire d’un C2S (ex : CMU et ACS), AME, AT-MP, personnes incarcérées ou en aménagement de peine sans aucune activité professionnelle, ALD (sur ordonnance bizone ou avec mention ALD) et victimes d’actes de terrorisme.</li>
                <li>Consultations de l’adolescente âgée de 15 à 17 ans inclus, avec possibilité d’anonymisation.</li>
              </ul>
              Dans les autres cas, le tiers payant sécu sera appliqué, c’est à dire que vous ne réglerez que la part mutuelle (soit 30% du montant), qui vous sera ensuite automatiquement remboursée dans les jours qui suivent si votre mutuelle couvre les soins effectués. Le nouveau-né est pris en charge dès la naissance à 70% par la Sécurité Sociale et les 30% restants par la mutuelle.
            </>
          )
        }]}
      />
    </div>
  )
}

export default React.memo(Insurance)
