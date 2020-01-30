// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Index.html", "José Félix Estigarribia", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("carlosantonio.html", "Carlos Antonio López", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("franciscosolano.html", "Francisco Solano López", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("josegaspar.html", "José Gaspar Rodríguez de Francia", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("josefelix.html", "José Félix Estigarribia", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("juanpablo.html", "Juan Pablo II", "Copyright © VisitaPY 2020     ", "");
   this[database_length++] = new SearchPage("roquegonzalez.html", "Beato Roque González", "Copyright © VisitaPY 2020     ", "");
   return this;
}
