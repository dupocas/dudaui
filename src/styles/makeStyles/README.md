## `makeStyles(styles) => useStyles`

A **high order hook** (is this a thing?). `function` which accepts a `styles` object and returns a custom `hook`.

This is the core style solution, most of the time you should be using `makeStyles`

### Arguments

| Name | Default | Required |
| ------------- |:-------------:| :-----: |
| `styles`     | `none` | `true` 
 
   
   

 - **`styles`**

     There are two possible signatures for `styles`

          
    - `theme => {}` 
    
        A `function` which accepts a `theme` argument and returns an `object`
        ```
        const styles = theme => ({
            root : { color : theme.palette.primary.main }
        })
        ```

    - `{ }`  

       An `object` literal which describes the styles

        ```
        const styles = {
            root: { color : 'red' }
        }
        ```

### Returned Value

`makeStyles` returns a hook which is by convention called `useStyles`

`useStyles(?interpolation) => classes`

  - `interpolation`
 
       An object which contains dynamic values (usually `props` and `state`) to update the sheet
       
  - `classes`
 
       An `object` containing the generated classes
       



### Basic Usage

    import React from 'react'
    import { makeStyles } from '@dudaui/styles'
    
    const styles = {
        root : { backgroundColor: 'black' }   
    }

    const useStyles(styles)
    
    const Component = () =>{
        const classes = useStyles()
        return <div className={classes.root} />
    }


### Usage with `Theming`

    import React from 'react'    
    import { makeStyles } from '@dudaui/styles'
    
    const styles = theme =>({
        root : { color : theme.palette.primary.main }
    })

    const useStyles(styles)
    
    const Component = () =>{
        const classes = useStyles()
        return <div className={classes.root} />
    }


### Dynamic styles interpolation

    import React from 'react'    
    import { makeStyles } from '@dudaui/styles'
    
    const styles = theme =>({
        root : { 
            color : theme.palette.primary.main,
            backgroundColor : ({ color }) => color
        },

        foo : ({ color }) =>({ color })
    })

    const useStyles(styles)
    
    const Component = ({ color }) =>{
        const interpolation = { color }
        const classes = useStyles(interpolation)
        return(
            <div className={classes.root}>
                <span className={classes.foo} />
            </div>
        )
    }