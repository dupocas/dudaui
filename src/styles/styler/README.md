
### `styler(styles) => useStyles`

 
`styler` is just syntactic sugar to reduce boilerplate and enhance `typescript` autocomplete in non `typescript` files.

It accepts `styles` just like `makeStyles` and returns `useStyles`

Both codes are equivalent and asserts to the same thing

    import { makeStyles } from  '@dudaui/styles'
   
    const  styles  = {
        root : {
            backgroundColor:  'red'
	    }
    }
    
    const  useStyles  =  makeStyles(styles)

```
import { styler } from '@dudaui/styles'

const useStyles = styler({
	root:{
        backgroundColor : 'red' 
    }    
})
```
The main difference is that since `styler` is an encapsulated `.ts` module it makes possible to have  `theme` autocomplete capabilities for your editor from a non `typescript` file. Also reduces boilerplate code since under the hood `styler` still calls `makeStyles`


You can also move your styles definition to an isolated file, this makes the code a lot cleaner

```
//styles.js
import { styler } from '@dudaui/styles'

export default styler(theme =>({
    root : {
        color : theme.palette.primary.main
    }
}))
```
```
//App.js
import useStyles from './styles'
 
const App = () =>{
    const classes = useStyles(styles)

    return <div className={classes.root}/>
}
```