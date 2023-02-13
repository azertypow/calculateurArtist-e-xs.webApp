<template>
  <div class="v-app-contract-content">
    <h2>Table des matières</h2>

    <ul>
      <li>I.	Objet du contrat
        <ul>
          <li>1	Définitions</li>
          <li>2	Préambule</li>
          <li>3	Objet</li>
          <ul>
            <li :class="{'app-font-remove': contractStore.contract_exposition === false}" >3.1	[Exposition]</li>
            <li :class="{'app-font-remove': contractStore.with_production === false}">3.2	[Production]</li>
          </ul>
        </ul>
      </li>

      <li>II. Obligations de <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/>
        <ul>
          <li :class="{'app-font-remove': contractStore.contract_exposition === false}" >4 [Exposition]</li>
          <ul>
            <li>4.1 Lieu d’exposition</li>
            <li>4.2 Prise en charge des frais</li>
            <li :class="{'app-font-remove': contractStore.with_production === false}">4.3 Assurance des œuvres</li>
            <li>4.4 Instructions de l’Artiste</li>
            <li>4.5 Communication, publications et documentation</li>
            <li>4.6 Transport</li>
            <li>4.7 Montage et démontage</li>
          </ul>
          <li>5 [Production]</li>
        </ul>
      </li>

      <li>III. Obligations de l’Artiste
        <ul>
          <li :class="{'app-font-remove': contractStore.contract_exposition === false}" >6 [Exposition]</li>
          <ul>
            <li>6.1 Obligation de renseigner</li>
            <li>6.2 Collaboration de l’Artiste</li>
            <li>6.3 Utilisation pour ses propres besoins</li>
          </ul>
          <li>7 [Production]</li>
        </ul>
      </li>

      <li>IV. Rémunération de l’Artiste
        <ul>
          <li>8 Obligation de renseigner</li>
          <li>9 Indemnisation forfaitaire ou cachet</li>
          <ul>
            <li>9.1 Indemnisation calculée à l’heure</li>
            <li>9.2 Vente des œuvres [OPTION EXPOSITION + VENTE]</li>
            <li>9.3 Participation au prix de vente des œuvres [OPTION PARTICIPATION DE LA STRUCTURE AU PRIX DE VENTE]</li>
          </ul>
        </ul>
      </li>

      <li>V. De la participation aux frais engagés par l’Artiste
        <ul>
          <li>10 Budget de production</li>
          <li>11 Participation aux frais accessoires</li>
        </ul>
      </li>

      <li>VI. Propriété intellectuelle
        <ul>
          <li>12 Crédit de production</li>
          <li>13 Droit d’auteur.ice.x</li>
        </ul>
      </li>

      <li>VII. Fin du contrat
        <ul>
          <li>14 Défaut de <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/></li>
          <li>15 Défaut de l’artiste</li>
        </ul>
      </li>

      <li>VIII. Droit applicable, médiation et juridiction compétente
        <ul>
          <li>16 Droit applicable</li>
          <li>17 Médiation</li>
          <li>18 Juridiction compétente
            <ul>
              <li><router-link to="/calculateur" >Annexe I – Grille de rémunération</router-link></li>
              <li><router-link to="#lite-des-oeuvres" >Annexe II – Liste des Œuvres</router-link></li>
            </ul>
          </li>
        </ul>
      </li>

    </ul>


    <div
        class="v-app-contract-content__content"
    >
      <h2>Objet du contrat</h2>

      <h3>Définitions</h3>

      <p>
        <strong>Œuvre(s) :</strong> Par « Œuvres », le présent contrat se fonde sur la définition de l’art. 2 de la Loi
        fédérale sur le droit d’auteur et les droits voisins (LDA), laquelle comprend toute création de l’esprit,
        littéraire ou artistique, qui a un caractère individuel, quelles qu’en soient la valeur ou la destination.
      </p>

      <p>
        <strong>Exposition d’une Œuvre :</strong> Par Exposition d’une Œuvre, on entend dans le présent contrat aussi
        bien l’exposition d’une Œuvre physique (peinture, sculpture, installation, etc.) que toute production,
        prestation ou performance réalisée par l’Artiste et/ou ses auxiliaires, selon les termes de l’accord entre les
        parties.
      </p>

      <p style="color: red" >[AVEC OU SANS]</p>

      <p :class="{'app-font-remove': contractStore.with_production === false}">
        <strong>Production d’une Œuvre :</strong> Par Production d’une Œuvre, on entend dans le présent contrat aussi
        bien la création d’une Œuvre physique (peinture, sculpture, installation, etc.) que la conception et
        l’élaboration de toute production, prestation ou performance réalisée par l’Artiste et/ou ses auxiliaires, selon
        les termes de l’accord entre les parties.
      </p>

      <h3>Préambule</h3>

      <p>(A)
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à présenter publiquement une ou des Œuvres de l’Artiste, dans le cadre d’une exposition qu’elle
        organise.
      </p>

      <p :class="{'app-font-remove': contractStore.with_production === false}">
        (B) En vue de sa/leur présentation publique,
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        mandate l’Artiste pour la réalisation d’une ou de plusieurs nouvelles Œuvres.
      </p>

      <h3>Objet</h3>


<!--      :class="{'app-font-remove': !contractStore.contract_exposition}"-->
      <h4 :class="{'app-font-remove': !contractStore.contract_exposition}">[Exposition]</h4>
      <p  :class="{'app-font-remove': !contractStore.contract_exposition}" >
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        organise, en vue de la présentation publique d’une ou plusieurs Œuvres de l’Artiste, une exposition [INTITULEE
        XXX], laquelle se tiendra du
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>
        au
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>
        ,
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>
        au
        <content-editable placeholder="lieu de l’exposition" :value="contractStore.info_localisation"
                          @update:value="contractStore.info_localisation = $event"/>
        .
      </p>
      <p :class="{'app-font-remove': !contractStore.contract_exposition}" >
        L’Artiste accepte de participer à cette exposition et de mettre à disposition de
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        , les Œuvres listées et/ou décrites dans la « Liste des Œuvres » (Annexe II) lesquelles seront présentée(s)
        publiquement à cette occasion.
      </p>

      <p
          :class="{'app-font-remove': !contractStore.contract_exposition && !contractStore.contract_public}"
      >[ET/OU]</p>

      <h4 :class="{'app-font-remove': !contractStore.contract_public}" >[Production]</h4>
      <p  :class="{'app-font-remove': !contractStore.contract_public}" >
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        contribue à la production par l’Artiste d’une ou plusieurs œuvres en participant aux frais de production [ET/OU]
        en le rémunérant selon les conditions définies ci-après sous titre IV.
      </p>


      <H2>Obligations de
      <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                        @update:value="contractStore.structure_name = $event"/></H2>

      <h3 :class="{'app-font-remove': contractStore.contract_exposition === false}" >[Exposition]</h3>

      <h4 :class="{'app-font-remove': contractStore.contract_exposition === false}" >Lieu d’exposition</h4>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à organiser [L’EXPOSITION / PRESENTATION PUBLIQUE / PROJET ARTISTIQUE] dans le lieu d’exposition suivant
        : [NOM, ADRESSE], pour la durée prévue à cet effet.
      </p>

      <p :class="{'app-font-remove': contractStore.contract_exposition === false}" >
        Si des autorisations sont nécessaires pour l’utilisation du lieu d’exposition ou pour l’exposition des Œuvres
        elles-mêmes,
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à les acquérir en temps utile.
      </p>

      <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                        @update:value="contractStore.structure_name = $event"/>
      fournit des services généraux pour le lieu : billetterie, location, accueil et service de sécurité si nécessaire.

      Prise en charge des frais

      <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                        @update:value="contractStore.structure_name = $event"/>
      réalise l’exposition à ses frais, prenant à sa charge toutes les dépenses utiles et nécessaires à cette fin
      (p.ex., taxes, frais, frais d’éclairage, frais de publicité, etc.).

      <h4 :class="{'app-font-remove': contractStore.with_production === false}">Assurance des œuvres [SI OBJETS
        PHYSIQUES]</h4>
      <p :class="{'app-font-remove': contractStore.with_production === false}">
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        assure les Œuvres « clou à clou », soit depuis le lieu où les pièces sont entreposées jusqu’à leur retour. Dès
        lors, elles sont assurées à tout le moins pendant toute la durée de l’exposition.
      </p>


      <h4>Instructions de l’Artiste</h4>
      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à respecter les instructions de l’Artiste quant à la présentation de son travail, lesquelles devront
        néanmoins tenir compte des contraintes budgétaires, des possibilités techniques et logistiques du lieu, des normes
        de sécurité ainsi que des conditions d’accès des publics.
      </p>
      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        garantit, sur le lieu d’exposition, la protection des œuvres et des droits de l’Artiste, en recourant à tous les
        moyens à sa disposition, et à faire en sorte que l’exposition soit accessible au public durant les heures
        d’ouverture usuelles.
      </p>

      <h4>Communication, publications et documentation</h4>
      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à prendre en charge la communication de l’exposition en utilisant tous les moyens à sa disposition
        (affiches, annonces, communiqués de presse, prospectus, etc.), en accord avec l’Artiste.
      </p>

      <p>
        A cette fin, <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        est en droit de publier des images des Œuvres de l’Artiste parmi celles faisant partie de l’exposition.
      </p>
      <p>
        Toute autre publication, en dehors du cadre restreint de la promotion de l’exposition, nécessite l’approbation
        exprès de l’Artiste.
      </p>

      <h4>Transport</h4>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        est responsable du transport des Œuvres de l’Artiste et supporte l’ensemble des démarches et coûts y relatifs,
        parmi lesquels sont également compris les frais administratifs et de douane.
      </p>
      <p>
        Si l’Artiste est chargé du transport des Œuvres, il sera rémunéré selon la « Grille de rémunération » (Annexe I)
        et l’ensemble des frais liés au transport lui seront remboursés.
      </p>

      <h4>Montage et démontage</h4>

      <p>Le montage et le démontage des Œuvres s’effectue sous la responsabilité de
      <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                        @update:value="contractStore.structure_name = $event"/>
      et de l’Artiste, lesquels s’engagent à collaborer en bonne intelligence et à apporter leur contribution à hauteur
        de leurs moyens respectifs.</p>

      <p>À cette fin, il appartient à
      <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                        @update:value="contractStore.structure_name = $event"/>
      d’informer l’Artiste de l’étendue et des modalités des soutiens logistiques qui peuvent être mis à sa disposition
        et, le cas échéant, les mettre à sa disposition.</p>

      <p>Si l’Artiste est chargé du montage et du démontage, il sera rémunéré selon la « Grille de rémunération » (Annexe&nbsp;&nbsp;I)
        et l’ensemble des frais lui seront remboursés.</p>

      <h3>[AVEC OU SANS]</h3>

      <h4 :class="{'app-font-remove': contractStore.with_production === false}" >[Production]</h4>
      <p
          :class="{'app-font-remove': contractStore.with_production === false}"
      >
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        s’engage à prendre en charge les frais de production des Œuvres réalisées par l’Artiste, selon les conditions
        définies ci-après sous titre V.
      </p>

      <h3>Obligations de l’Artiste</h3>

      <h4 :class="{'app-font-remove': contractStore.contract_exposition === false}" >[Exposition]</h4>

      <p :class="{'app-font-remove': contractStore.contract_exposition === false}">
        L’Artiste s’engage à mettre les Œuvres à disposition de
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        en vue de leur présentation publique, lors de l’exposition
        <content-editable placeholder="INTITULEE XXX" :value="contractStore.entitled" @update:value="contractStore.entitled = $event"/>
        , qui se tiendra du
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>
        au
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>
        .
      </p>

      <h4>Obligation de renseigner</h4>

      <p>Sur demande de
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>, l’Artiste [LA] renseigne sur ses autres expositions en cours ou à venir, lors desquelles il serait prévu de
        présenter des Œuvres objet du présent contrat.
      </p>

      <p>
        L’Artiste est également tenu de tenir régulièrement informé
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        sur la réalisation de son travail, notamment en cas de modification substantielle du projet prévu initialement.
      </p>

      <h3>Collaboration de l’Artiste</h3>
      <p>
        L’Artiste s’engage à prêter son concours, si nécessaire, à la conception des textes décrivant sa démarche
        artistique et son projet. La version définitive desdits textes doit faire l’objet de l’approbation de l’Artiste.
        [OU] L’Artiste s’engage à rédiger les textes décrivant sa démarche artistique et son projet. Il sera rémunéré
        selon la « Grille de rémunération » (Annexe I).
      </p>

      <p>
        Ces textes peuvent être utilisés par
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        à des fins de communication avant et durant la tenue de l’exposition.
      </p>

      <h4>Utilisation pour ses propres besoins</h4>

      <p>
        L’Artiste est en droit de mentionner la présente collaboration avec
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        dans des publications, des imprimés et dans le cadre d’autres expositions.
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        doit également mettre à la disposition de l’Artiste les photographies qu’elle a prises. L’Artiste peut en faire
        librement usage.
      </p>

      <p>
        Par ailleurs, l’Artiste a le droit de photographier ses Œuvres sur le lieu d’exposition et de publier ces
        photographies.
      </p>

      <h3>[AVEC OU SANS]</h3>

      <h4 :class="{'app-font-remove': contractStore.with_production === false}" >[Production]</h4>

      <p
          :class="{'app-font-remove': contractStore.with_production === false}"
      >
        L’Artiste s’engage à réaliser une ou plusieurs Œuvres afin que celles-ci soient présentées dans le cadre de
        l’exposition organisée par
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>.
      </p>

      <p
          :class="{'app-font-remove': contractStore.with_production === false}"
      >
        Dans la mesure où lesdites Œuvres sont destinées à une présentation publique, celles-ci devront être réalisées
        dans le respect des délais fixés
        <content-editable placeholder="date du contrat" :value="contractStore.info_date"
                          @update:value="contractStore.info_date = $event"/>, afin de permettre leur mise en place dans les meilleures conditions.
      </p>

      <p
          :class="{'app-font-remove': contractStore.with_production === false}"
      >
        L’Artiste s’engage à concevoir ses Œuvres en tenant compte des conditions particulières du lieu d’exposition et
        notamment de l’accès du public.
      </p>

      <h3>Rémunération de l’Artiste</h3>

      <h4>Obligation de renseigner</h4>

      <p>
        L’Artiste s’engage à fournir à
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        tous les documents et informations permettant de déterminer son statut en matière de sécurité sociale, afin
        notamment de pouvoir fixer les modalités de sa rémunération [indépendant ou rémunération par le biais d’une
        personne morale].
      </p>

      <h4>Indemnisation forfaitaire ou cachet</h4>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        verse à l’Artiste, à titre de rémunération pour l’exposition [et/ou] conception/adaptation [et/ou] réalisation de
        son ou ses Œuvre(s), une somme de [XXX], hors TVA, déterminée selon l’activité déployée et les critères prévus
        dans la « Grille de rémunération » (Annexe I).
      </p>

      <p>Le versement sera effectué sur réception d’une facture payable dans les 30 jours.</p>

      <h3>[ET/OU]</h3>

      <h4>Indemnisation calculée à l’heure</h4>

      <p>
        Les travaux de l’Artiste (ou des auxiliaires travaillant pour son compte), en tant que cela a été convenu
        préalablement par les Parties en vue de la mise en place de l’exposition, sont facturés à
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        à un tarif horaire de [XXX], déterminé sur la base des critères prévus par la « Grille de rémunération » (Annexe
        I).
      </p>

      <p>Le versement sera effectué sur réception d’une facture payable dans les 30 jours.</p>

      <h3>[ET/OU]</h3>

      <h4>Vente des œuvres [OPTION EXPOSITION + VENTE]</h4>

      <p>
        L’Artiste fixe librement le prix de ses Œuvres, qui doivent être compris comme un prix minimum.
      </p>
      <p>
        Chaque vente doit faire l’objet d’un contrat écrit, détaillant la ou les Œuvre(s) vendue(s) conformément à
        l’Annexe II « Liste des Œuvres » et indiquant le prix convenu par les parties au contrat de vente.
      </p>
      <p>
        Les Œuvres vendues durant l’exposition sont directement livrées à l’acheteur par
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        et restent propriété de l’Artiste jusqu’au moment du paiement.
      </p>

      <h3>[ET/OU]</h3>

      <h4>Participation au prix de vente des œuvres [OPTION PARTICIPATION DE LA STRUCTURE AU PRIX DE VENTE]</h4>

      <p>
        Des rabais sur la vente ne peuvent être accordés qu’en cas d’accord entre l’Artiste et
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>.
      </p>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        est tenue de verser la part revenant à l’Artiste dans les 30 jours à compter du paiement par l’acheteur. Un
        décompte de vente, comprenant un justificatif d’achat avec le nom et l’adresse de l’acheteur, est remis à
        l’Artiste.
      </p>

      <p>
        En cas de participation de
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        à la production de l’Œuvre, le budget de production sera déduit du prix de vente.
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        est en droit de réclamer la déduction du budget de production, tel que celui-ci est défini à l’art. 10 du présent
        contrat, pendant un délai de [Max 3 ans] à compter de la signature du présent contrat.
      </p>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        a droit, en cas de vente d’une Œuvre de l’Artiste lors de l’exposition, à une commission de [%] sur le prix de
        vente.
      </p>

      <h3>[OU]</h3>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        ne prend pas de commission sur le prix en cas de vente d’une Œuvre de l’Artiste lors de l’exposition.
      </p>

      <h3>[ET/OU]</h3>

      <h3>De la participation aux frais engagés par l’Artiste</h3>

      <h4>Budget de production</h4>

      <p>
          La ou les œuvre(s) commandée(s) par
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
          sont produites avec un budget de production.
      </p>

      <p>Le budget global de [XXX] comprend (à cocher) :</p>

      <p
          :class="{'is-active': contractStore.option_honoraryAchievement}"
          class="app-button--check"
          @click="contractStore.option_honoraryAchievement = !contractStore.option_honoraryAchievement"
      >
        Honoraires de réalisation par l’Artiste ou externalisés selon la « Grille de rémunération » (Annexe I)
      </p>

      <p
          :class="{'is-active': contractStore.option_materials}"
          class="app-button--check"
          @click="contractStore.option_materials = !contractStore.option_materials"
      >
      Matériaux
      </p>

      <p
          :class="{'is-active': contractStore.option_perDiem}"
          class="app-button--check"
          @click="contractStore.option_perDiem = !contractStore.option_perDiem"
      >
      Per diem
      </p>

      <p
          :class="{'is-active': contractStore.option_dailyTax}"
          class="app-button--check"
          @click="contractStore.option_dailyTax = !contractStore.option_dailyTax"
      >
      Taux journalier pour performeur.euse
      </p>
      <p
          :class="{'is-active': contractStore.option_transportation}"
          class="app-button--check"
          @click="contractStore.option_transportation = !contractStore.option_transportation"
      >
      Transport
      </p>
      <p
          :class="{'is-active': contractStore.option_editors}"
          class="app-button--check"
          @click="contractStore.option_editors = !contractStore.option_editors"
      >
      Monteurs.trices et techniciens.nes externes et/ou internes
      </p>
      <p
          :class="{'is-active': contractStore.option_toBeCompletedIfNecessary}"
          class="app-button--check"
          @click="contractStore.option_toBeCompletedIfNecessary = !contractStore.option_toBeCompletedIfNecessary"
      >
          <content-editable
              placeholder="(A compléter si nécessaire)"
              :value="contractStore.option_toBeCompletedIfNecessary_content"
              @update:value="contractStore.option_toBeCompletedIfNecessary_content = $event"
          />
      </p>

      <p>
        La prise en charge du budget de production incombe à
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        [OU] à [l’Artiste] [OU] [clé de répartition].
      </p>

      <p>
        Les Parties peuvent convenir d’une avance sur le budget de production convenu, payable dans les 30 jours dès la
        signature du contrat.
      </p>

      <h3>Participation aux frais accessoires</h3>

      <p>
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        rembourse à l’Artiste les dépenses nécessaires en vue de <span :class="{'app-font-remove': contractStore.contract_exposition === false}" >l’[EXPOSITION]</span><span :class="{'app-font-remove': !contractStore.contract_exposition || !contractStore.contract_public}" >/</span>[PRODUCTION] (frais de voyage, de
        transport, de logement, de repas, etc.), sur présentation des justificatifs.
      </p>

      [OU]

      <p>
        A titre de participation aux frais occasionnés à l’Artiste par l’exécution du présent contrat,
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        verse à l’Artiste un montant forfaitaire de [XXX], payable dans les 30 jours dès la conclusion du contrat.
      </p>

      <h3>Propriété intellectuelle</h3>

      <h4>Crédit de production</h4>

      <p>
        L’Artiste crédite
        <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name"
                          @update:value="contractStore.structure_name = $event"/>
        comme producteur – ou coproducteur – dans les crédits des Œuvres, ainsi que dans tous les supports de
        communication et formes de présentation de l’Œuvre par l’Artiste.
      </p>

      <h4>Droit d’auteur.ice.x</h4>

      <p>En-dehors des clauses figurant ci-dessus et des cessions de droits nécessaires à la bonne exécution du contrat, l’Artiste conserve l’entier des droits d’auteur sur l’Œuvre.</p>

      <p>L’Artiste a droit à une rémunération [%] sur le montant de rémunération pour la cession de certains droits d’auteur selon les termes du présent contrat. Cette rémunération est incluse dans la rémunération facturée par l’Artiste et déterminée selon les critères prévus dans la « Grille de rémunération » (Annexe I).</p>

      Fin du contrat

      <p>Défaut de <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/></p>

      <p>En cas de violation de ses obligations par <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/>, l’Artiste l’interpelle immédiatement par écrit et l’enjoint à respecter ses obligations. Il lui octroie un délai de 30 jours pour s’exécuter.</p>

      <p>Si <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> persiste dans la violation de ses obligations, l’Artiste est en droit de mettre un terme immédiat au contrat qui les lie.</p>

      Sont réservés les droits de l’Artiste en dommages et intérêts.

      <p>Si <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> empêche sans motif justifié l’exécution du contrat, elle devra s’acquitter des frais encourus jusqu’au jour de la résiliation du contrat et de l’entier de la rémunération de l’Artiste prévue par le contrat.</p>

      Défaut de l’artiste

      <p>En cas de violation de ses obligations par l’Artiste, <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> l’interpelle immédiatement par écrit et l’enjoint à respecter ses obligations. Elle lui octroie un délai de 30 jours s’exécuter.</p>

      <p>Si l’Artiste persiste dans la violation de ses obligations d’une manière qui empêche la bonne exécution du</p>
      contrat, <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> est en droit de mettre un terme immédiat à ce dernier. <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> devra s’acquitter des frais encourus et de la rémunération de l’Artiste jusqu’au jour de la résiliation du contrat.

      <p>Sont réservés les droits de <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/> en dommages et intérêts.</p>

      Droit applicable, médiation et juridiction compétente

      Droit applicable

      <p>Les termes du présent contrat sont régis et interprétés conformément au droit suisse.</p>

      Médiation

      <p>Tous litiges, différends ou prétentions nés du présent contrat ou se rapportant à celui-ci, y compris la validité, la nullité, d’éventuelles violations du contrat ou sa résiliation seront soumis à la médiation.</p>

      Juridiction compétente

      <p>Dans les cas où le litige, le différend ou la prétention n’ont pas pu être complètement résolus par la médiation, ils seront tranchés par voie judiciaire par-devant les Tribunaux genevois.</p>


      <p>Fait à [LIEU] en deux exemplaires, le <content-editable placeholder="date du contrat" :value="contractStore.info_date" @update:value="contractStore.info_date = $event"/>:</p>


      <p>Pour <content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/>, Pour l’Artiste :</p>

      <p>[Prénom NOM du représentant]</p>

      <p>[Prénom NOM de l’Artiste]</p>

      <h3>Annexe I – Grille de rémunération</h3>

      <p>[INSERER LA DERNIER VERSION DE LA GRILLE DE REMUNERATION]</p>

      <h3 id="lite-des-oeuvres" >Annexe II – Liste des Œuvres</h3>

      <div
          class="app-g"
          style="flex-wrap: wrap"
      >
        <div
            class="app-g__coll-6-12"
            v-for="object of contractStore.objectList"
        >
          <div class="app-object-list" >
            <h4>Titre de l’œuvre :</h4>
            <p>Année de production&nbsp;:<content-editable  placeholder="Nom de la structure" :value="object.year"        @update:value="object.year        = $event"/></p>
            <p>Dimensions&nbsp;:<content-editable           placeholder="Nom de la structure" :value="object.dimensions"  @update:value="object.dimensions  = $event"/></p>
            <p>Matériaux&nbsp;:<content-editable            placeholder="Nom de la structure" :value="object.material"    @update:value="object.material    = $event"/></p>
            <p>Valeur d’assurance&nbsp;:<content-editable   placeholder="Nom de la structure" :value="object.assurance"   @update:value="object.assurance   = $event"/></p>
          </div>
        </div>
      </div>

      <div
          @click="contractStore.objectList.push({assurance:'',year:'',material:'',dimensions:''})"
          class="app-button"
           style="display: inline-block; margin-top: 2.5rem">[+] ajouter une œuvre</div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ContentEditable from "./ContentEditable.vue";
import {useContractStore} from "../stores/contractStore";
import type {IStateContractStore} from "../stores/contractStore";
import AppCheckbox from "./AppCheckbox.vue"

export default defineComponent({
  name: 'AppContractContent',
  components: {AppCheckbox, ContentEditable},

  data() {
    return {
      contractStore: useContractStore() as IStateContractStore
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app-contract-content {
  line-height: 2.5rem;
}

h2 {
  margin-top: 10rem;
}

h3 {
  margin-top: 7.5rem;
  margin-bottom: 0;
}

h4 {
  margin-top: 2.5rem;
  margin-bottom: 0;
}

p {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.v-app-contract-content__content {
  .app-font-remove {
    //display: none;
    color: coral;
  }
}

h3 + p,
h4 + p {
  margin-top: 0;
}

</style>

<style lang="scss" >
.v-app-contract-content__content {
  .app-value-string {
    border-bottom: none;
  }
}
</style>
