function InitialiserGrille (ioGrille, iNbLignes, iNbColonnes, iModeAuto)
{
	if(iModeAuto == true)
	{
		//Initialisation en mode automatique aléatoire
		for( var i = 0 ; i < iNbLignes ; i++)
		{
			for(var j = 0 ; j < iNbColonnes ; j++)
				{
					ioGrille[i][j] = Math.round(Math.random());
				}
		}
	}
	else
	{
		//Initialisation en mode manuel (click de l'utilisateur)
		for( var i = 0 ; i < iNbLignes ; i++)
		{
			for(var j = 0 ; j < iNbColonnes ; j++)
				{
					ioGrille[i][j] = 0;
				}
		}
	}
	

}

function Generation()
{
	compteurGeneration++;
	console.log("compteurGeneration");
	console.log(compteurGeneration);

}

function AfficherGrille(iGrille, iNbLignes, iNbColonnes)
{
	var parent;
	var htmlGrille;
	var htmlLigne;
	var htmlCellule;
	
	//A chaque affichage de la grille on compte la génération
	Generation()

	// 1- remove la table dans la div
	parent = document.getElementById("grille");
	htmlGrille = document.getElementById("tab");
	if (htmlGrille != null)
	{
		parent.removeChild(htmlGrille);
	}
	
	// 2- réécrire complètement la table
	parent = document.getElementById("grille");
	htmlGrille = document.createElement("table");
	htmlGrille.setAttribute("id","tab");
	parent.appendChild(htmlGrille);

	for (var i = 0; i < iNbLignes; i++) 
	{
		htmlLigne = document.createElement("tr");
		
		for (var j = 0; j < iNbColonnes; j++) 
		{
			htmlCellule = document.createElement("td");
			if (iGrille[i][j] == 1)
			{
				htmlCellule.setAttribute("class","vie");
			}
			else
			{
				htmlCellule.setAttribute("class","mort");
			}
			htmlLigne.appendChild(htmlCellule);
		}
		htmlGrille.appendChild(htmlLigne);
	}
}

function MettreAJourEtatCellule(iGrille, iNbLignes, iNbColonnes, iNumLigne, iNumColonne)
{
	var NouvelEtatCellule = 0; //Morte par défaut
	var NbCellules = 0; 


	//Première ligne
	if (iNumLigne == 0)
	{
		if (iNumColonne == 0)
		{
			// Première ligne, première colonne position [0][0]: 3 Cellules adjacentes
			if (iGrille[iNumLigne][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}
	
		else if (iNumColonne = iNbColonnes - 1)
		{
			// Première ligne, dernière colonne : 3 Cellules adjacentes
			if (iGrille[iNumLigne][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}

		else
		{
			// Première ligne : 5 Cellules adjacentes
			if(iGrille[iNumLigne][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if(iGrille[iNumLigne][iNumColonne + 1] == 1 )
			{
				NbCellules = NbCellules + 1;
			}
			if(iGrille[iNumLigne + 1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if(iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne + 1] ==1)
			{
				NbCellules = NbCellules + 1;
			}
		}
	}

	//Dernière ligne
	else if (iNumLigne == (iNbLignes - 1))
	{

		if (iNumColonne == 0)
		{
			// Dernière ligne, première colonne : 3 Cellules adjacentes
			if (iGrille[iNumLigne - 1][iNumColonne] == 1)
			{	
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}
		else if (iNumColonne == (iNbColonnes - 1))
		{
			// Dernière ligne, dernière colonne : 3 Cellules adjacentes
			if (iGrille[iNumLigne - 1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}
		else
		{
			// Dernière ligne : 5 Cellules adjacentes
			if (iGrille[iNumLigne -1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if(iGrille[iNumLigne][iNumColonne - 1] == 1 )
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}

	}

	//Autres lignes
	else
	{
		if (iNumColonne == 0)
		{
			// Première colonne : 5 Cellules adjacentes
			if (iGrille[iNumLigne -1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}

		else if(iNumColonne == iNbColonnes - 1)
		{
			// Dernière colonne : 5 Cellules adjacentes
			if(iGrille[iNumLigne -1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1
			}
			if(iGrille[iNumLigne - 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1
			}
			if(iGrille[iNumLigne][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1
			}
			if(iGrille[iNumLigne + 1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1
			}
			if(iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}
		else
		{
			// Cellule quelconque dans la grille : 8 Cellules adjacentes
			if (iGrille[iNumLigne -1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne - 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}

			if (iGrille[iNumLigne][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}

			if (iGrille[iNumLigne + 1][iNumColonne - 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne] == 1)
			{
				NbCellules = NbCellules + 1;
			}
			if (iGrille[iNumLigne + 1][iNumColonne + 1] == 1)
			{
				NbCellules = NbCellules + 1;
			}
		}

	}

	// Mettre à jour la valeur de retour
	if (iGrille[iNumLigne][iNumColonne] == 1)
	{
		if ((NbCellules == 2) || (NbCellules == 3))
		{
			NouvelEtatCellule = 1;
		}
	}
	else
	{
		if (NbCellules == 3)
		{
			NouvelEtatCellule = 1;
		}
	}
	/*console.log("NbCellulles");
	console.log(NbCellules);
	console.log("NouvelEtatCellule");
	console.log(NouvelEtatCellule);*/
	//On retourne le nouvel etat de la cellule
	return NouvelEtatCellule;
}



function VerifierGrille(ioGrille, iNbLignes, iNbColonnes, ioGrilleModifiee)
{
	var i;
	var j;
	var EtatAvant = 0;
	var EtatApres = 0;
	var GrilleModifiee = false;
	var compteurVivant = 0;


	//Création du tableau temporaire
	var GrilleTemp = new Array();
	
	for (i = 0; i < iNbLignes; i++) 
	{
		GrilleTemp[i] = new Array();
		for (j = 0; j < iNbColonnes; j++) 
		{
			GrilleTemp[i][j] = 0;
		}
	}

	//Vérifier la grille
	for (i = 0 ; i < iNbLignes; i++)
	{
		for(j = 0 ; j < iNbColonnes; j++)
		{
			// Récupérer le contenu de la case de la grille
			EtatAvant = ioGrille[i][j];

			//On compte les cellules vivantes 
			if(EtatAvant == 1)
			{
				compteurVivant ++;
			}
			// Initialiser l'état d'après
			EtatApres = EtatAvant;

			// Mettre à jour l'état de la cellule
			EtatApres = MettreAJourEtatCellule(ioGrille, iNbLignes, iNbColonnes, i, j);

			// Recopier la valeur dans la grille temporaire
			GrilleTemp[i][j] = EtatApres;
			
			// Vérifier s'il y a eu une modification
			if (EtatApres != EtatAvant)
			{
				GrilleModifiee = true;
			}

		}
		
	}
	console.log("compteurVivant");
	console.log(compteurVivant);

	//Fin si toutes les cellules sont mortes 
	if(compteurVivant == 0)
	{
		stop();
		window.alert("Toutes les cellules sont mortes !");
	}
	/*console.log(GrilleTemp);*/
	if (GrilleModifiee == true)
	{
		// Recopier la grille
		for( i = 0 ; i < iNbLignes ; i++)
		{
			for( j = 0 ; j < iNbColonnes ; j++)
			{
				ioGrille[i][j] = GrilleTemp[i][j];
			}
		}
		//Réaffiche la grille
		AfficherGrille(ioGrille, iNbLignes, iNbColonnes);
	}

	// MAJ le paramètre de sortie
	ioGrilleModifiee = GrilleModifiee;

}



//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
var globtempo;
var compteurGeneration = 0;

function start ()
{
	var NbColonnes = parseInt(window.prompt("Entrez la longueur du tableau"));
	var NbLignes = parseInt(window.prompt("Entrez la largeur du tableau"));
	var ModeAuto = true;
	var continuer = true;

	//Création du tableau
	var grille = new Array();
	
	for (var i = 0; i < NbLignes; i++) 
	{
		grille[i] = new Array();
		for (var j = 0; j < NbColonnes; j++) 
		{
			grille[i][j] = 0;
		}
	}


	//Initialiser la grille 
	InitialiserGrille(grille, NbLignes, NbColonnes, ModeAuto);

	//Afficher la grille
	AfficherGrille(grille, NbLignes, NbColonnes);

	//Vérifier la grille et réafficher
	globtempo = setInterval(VerifierGrille, 500, grille, NbLignes, NbColonnes, continuer)
}

function stop()
{
	clearInterval(globtempo);
}

function reset()
{
	stop();
	start();
}

