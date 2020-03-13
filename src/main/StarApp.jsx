import './StarApp.css'
import React,{Component} from 'react'
import Button from '../components/Button'

export default class starApp extends Component{

    constructor(){
        super()
        this.state = {
            planet: {
               name:'',
               population:'',
               climate:'',
               terrain:'',
               films: [],
            }
        }
    }

    componentDidMount(){
        const id = Math.floor((Math.random()*61)+1)
        fetch(`https://swapi.co/api/planets/${id}/`)
        .then(results => results.json())
        .then(results => this.setState(
            {planet:{
                name : results.name,
                population : results.population,
                climate : results.climate,
                terrain : results.terrain,
                films : results.films,
                }
            }
            ))
            
    }



    render(){
        return(
            <div>
                    <div className="div3">
                        {(this.state.planet.name)}
                    </div>
                    
                    <div className='div4'>
                        <ul>
                            <li><bold>Population: </bold>
                            {(this.state.planet.population)}</li>
                            <li><bold>Climate: </bold>
                            {(this.state.planet.climate)}</li>
                            <li><bold>Terrain: </bold>
                            {(this.state.planet.terrain)}</li>
                       </ul>
                       <p>Featured in: {(this.state.planet.films.length)} films</p>
                    </div>    
                    
                <Button></Button>
            </div>
        )
    }
}