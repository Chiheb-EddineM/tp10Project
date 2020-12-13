
var passages =

{
  "Ash": " Main : Vectis Secondaire : Angstrum Melee : Nikana",
  "Atlas": " Main : Sybaris Secondaire : Aksomati Melee : Arca titron",
  "Chroma": " Main : Rubico Secondaire : Aksomati Melee : Galatine",
  "Ember": " Main : Ignis Wraith Secondaire : Aksomati Melee : Silva & Aegis",
  "Equinox": " Main : Soma Prime Secondaire : Azima Melee : Volnius",
  "Excalibur Umbra": " Main : Rubico Secondaire : Aksomatti Melee : Nikana Dragon Special : Lame Exalté",
  "Frost": " Main : Rubico Secondaire : Aksomati Melee : Arca titron",
  "Garuda": " Main : Nagantaka Secondaire : Aksomati Melee : Serres de Garuda",
  "Inaros": " Main : Doubles Keres Secondaire : Aksomati Melee : Nikana",
  "Ivara": " Main : Paris Secondaire : Aksomati Melee : Nikana",
  "Mesa": " Main : Rubico Secondaire : Akvasto Melee : Redeemer",
  "Nekros": " Main : Sybaris Secondaire : Tysis Melee : Galatine",
  "Nezha": " Main : Rubico Secondaire : Aksomati Melee : Nikana",
  "Nova": " Main : Soma Prime Secondaire : Aksomatti Melee : Nikana",
  "Rhino": " Main : Corinth Secondaire : Aksomati Melee : Arca titron",
  "Saryn": " Main : Rubico Secondaire : Aksomati Melee : Nikana",
  "Titania": " Main : Soma Prime Secondaire : Aksomati Melee : Nikana Dragon Special : Dex Pixia + Diwata",
  "Wukong": " Main : Rubico Secondaire : Aksomati Melee : Arca titron Special : Baton de Fer",
  "Zephyr": "Main : Sybaris Secondaire: Aksomati Melee : Destreza",
  };
  
var usefull =

{
  "Atlas": "Escarmouche Railjack" + " + " + "Survie",
  "Zephyr": "Controle de securité" + " + " + "Map étendu (Cetus, Fortuna, Deimos)",
  "Nezha": " Survie" + " + " + "D.O.T.",
  "Ash": " Assassinat (Anti-Armure)",
  "Chroma": " Assassinat" + " + " + "Eidolons",
  "Ember": " Burst (Ex: Defense sur Hydron)",
  "Equinox": " Mission de bas Niveau" + " + " + "Support",
  "Excalibur Umbra": " Anti-Sentient",
  "Frost": " Defense",
  "Garuda": " Survie ",
  "Inaros": " Survie",
  "Ivara": " Espionnage",
  "Mesa": " Burst",
  "Nekros": " Support " + "(utilitaire (ressource,Exp ,...))",
  "Nova": " Missions de haut Niveau",
  "Rhino": " Survie" + " + " + "Mission Index",
  "Saryn": " Voler des kills a ses mates",
  "Titania": "Support" + " + " + "Controle de foule",
  "Wukong": " Couteau suisse",
};

var table = ""

//permet de recharger la page et d'initialiser un tableau
function initialiserPage()
{
  document.getElementsByTagName("SECTION")[1].innerHTML = "<table border=1pt><thead><th>Warframe</th><th>Equipement utilisé</th><th>Principale utilité</th></thead><tbody id='passage'></tbody></table>"
}


//permet de cree les tableau avec les valeur de "passages"
function genererWarframe()
{
  /*
  *@param {string} Le nom de la warframe
  *@param {string} Le nom des armes
  *@param {string} Le nom de la mission
  */
  
  var utile = document.getElementById('warframe').value ;
  for (let i in passages)
  {
    if (utile== i || utile == "All") 
    {
      table = table + "<tr><td>"+[i]+"</td><td>"+passages[i]+"</td><td>"+usefull[i]+"</td></tr>";
    }
  }
  document.getElementById('passage').innerHTML = table
}

var warframe = {}
var equipement = {}
var utilitaire = {}

  function genererTable()
  {
  
  for (let i in warframe)
  {
  table = table + "<tr><td>"+warframe[i]+"</td><td>"+equipement[i]+"</td><td>"+utilitaire[i]+"</td></tr>"
  }
  document.getElementById('passage').innerHTML = table
  }
  
  function genererUneWarframe(formulaire)
  {
    warframe[nom] = document.getElementById('nom').value;
    equipement[nom] = document.getElementById('equip').value;
    utilitaire[nom] = document.getElementById('util').value;


    genererTable()
  }

  


