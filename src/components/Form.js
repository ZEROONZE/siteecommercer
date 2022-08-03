import React, { Component, component } from 'react'


class Form extends Component {
     
   constructor (props) {

   
     super(props)

     this. state = {
        name:'',
        nota:'',


    }
    
    this.handleInputChange = this.handleInputChange.bind(this)
}


handleInputChange(e) {   /*               */
    this.setState9({
    name: e.target.value

    })

}


    render() {
        const { name } = this.state
        return (
            <section>
                    <form>
                        <label>
 
                            nome: <input onChange={this.handleInputChange}  type='text' placeholder='Nome' />  

                        </label>

                        <label>
 
                            nota: <input  type='text' placeholder='Nota' />  

                        </label>

                        <button type='submit'>FINALIZAR</button>

                    </form>    

                    <h2>{name}</h2>             
            </section>

        )

    }

}

export default Form;