Creer un projet: md Project_name
initialiser le projet: npm init -y
installer les dépendences: npm install --save-dev typescript
                           npm install --save-dev nodemon
                           npm install --save-dev concurrently

Installer les dépendences de projet:  npm install --save express @types/express

# Dans express il faut installer un module mongoDB:  npm install --save mongoose @types/mongoose

# Gérer les pagination: npm install --save mongoose-paginate @types/mongoose-paginate

Pour lancer l'application il faut appeler dev qui se trouve dans package.json, qui va utiliser tsc pour compiler tous les scripts: npm run dev

