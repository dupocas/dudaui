### Duda UI

Duda UI is a minimalist, `jss` based solution (yes, another one) to style your React components


-   🚀 It's blazing fast.
-   ⚡️ Powered by  [JSS](https://github.com/cssinjs/jss)
- 📦 Less than 10 KB gzipped
- 🌀 A single static sheet is shared across multiple instances
- ✒️ Theming support
- 💎 Dynamic styles updates based on props and state


### Installation
```
//npm
npm i @dudaui/styles

//yarn
yarn add @dudaui/styles
```

 ### Getting Started
The core style solution is `makeStyles` API

```
import { makeStyles } from '@dudaui/styles'

const styles = {
    root : { backgroundColor: 'red' }
}
const useStyles = makeStyles(styles)

const Component = () =>{
    const classes = useStyles()
	return (
	    <div className={classes.root}> 
	        I have a red background 
	    </div>
	)
}
```


### Reducing boilerplate

 - Import `makeStyles`
 - Import `styles` (it's a common pattern to move your styles's definition to an external file)
 - Instantiate `useStyles`
 - Initialize `useStyles`

This can become boring pretty fast 😕! So the most common pattern is to always export the instanciation of `makeStyles`

```
//styles.js
import { makeStyles } from '@dudaui/styles'
 
export default makeStyles({
   root:{ backgroundColor : 'red'} 
})
```
```
//Component.jsx
import useStyles from './styles'

const Component = () =>{
    const classes = useStyles()
    ...
}
``` 
Declaring the styles directly inside `makeStyles` can become pretty handful since it enhances static typing for `Theme`
![enter image description here](https://i.imgur.com/vH7QTcl.png)

### Theming Support
You can use our default **theme** and override any property you want. As long as you  **provide** the `context` on the top-level you can access your `theme` from anywhere using a custom `callback` instead of a literal styles object

```
import { styler } from '@dudaui/styles'

const styles = theme =>({
    root :{
        backgroundColor: theme.palette.danger.main
    }
})
```

### Dynamic styles interpolation

Static styles are shared across multiple component's instances, but you can also provide dynamic styles which will update the sheet on every change

```
const styles = {
    root : {
        color : ({ color }) => color
    },

    foo : ({ color }) => ({ color })
}

const useStyles = styler(styles)

const Component = ({ color }) =>{
    const interpolation = { color }
    const classes = useStyles(interpolation)

	return <span className={classes.root}> I'm { color } </span>
}
```
Notice that this can generate performance problems, since a new dynamic sheet is created for each component's instance (and updated on each render)

### Motivation


### Roadmap
