# GULP TASK for Twig rendering static pages.


## Structure
```
src/

|-- twigPages/*.twig (pages)
|-- twigPages/includes  (twig includes)
|-- twigPages/layouts  (twig layouts)
|-- twigPages/data/*.json  (data for pages, matches twig page file name)
```
## Options
```
options: {
    twigPages:{
        dataPath,
        filesSrc
        }
}
```
## Notas
- Las rutas de los includes en los twigs son relativas.

## TODO:
- Migrar a gulp-tasks-front