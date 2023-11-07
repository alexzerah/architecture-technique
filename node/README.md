# README

## Docs

- Version de node récente (20+)

## Express

```js
npx express generator
cd NomDeProjet
npm i
```

### Supprimer la vue

- Supprimer les dossiers :
  - `public/javascripts`
  - `public/stylesheets`
  - `views`

- Dans `app.js`, supprimer

```js
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/users', usersRouter);
```

Dans package.json, remplacer :

- la ligne `"start": "node ./bin/www",` par `start: node --watch ./bin/www`

- Remplacer le contenu de `routes/index.js` :

```js
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

```js
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg: "hello world"} );
});
```

- Remplacer `var` par :
  - `const` (par default)
  - `let` si il y a une réassignation
