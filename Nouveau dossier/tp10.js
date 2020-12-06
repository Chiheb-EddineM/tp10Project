var passages =

  {
    "Atlas": " Soma : Aksomatti :Arca titron",
    "Zephyr": "Sybaris : Aksomatti :Destreza",
    "Nezha": " Rubico : Aksomatti : Nikana",
  }


function initialiserPage()
{
  document.getElementsByTagName("SECTION")[1].innerHTML = "<table border=1pt><thead><th>Nom de la Warframe</th><th>Equipement utilisé</th></thead><tbody id='passage'></tbody></table>"
}

function genererTable()
{
  var table = ""
  var utile = document.getElementById('warframe').value 
  for (let i in passages)
  {
    if (utile== i || utile == "All") 
    {
      table = table + "<tr><td>"+[i]+"</td><td>"+passages[i]+"</td></tr>"

    }

  }
  document.getElementById('passage').innerHTML = table
}
