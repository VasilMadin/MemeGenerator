import React, { Component} from 'react'
import './style.css'

export class MemeGenerator extends Component{

    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'https://i.imgflip.com/lbij.jpg',
            memeImgs: []
        }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                let {memes} = response.data;
                this.setState({memeImgs:memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({ [name]:value })
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.memeImgs.length)
        const randMemeImg = this.state.memeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }



    render() {
        return (
            
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <input 
                        type="text"
                        className='form-control'
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    </div>

                    <div className='form-group'>
                    <input 
                        type="text"
                        className='form-control'
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                    </div>
                
                    <button className="btn btn-primary center-block btn-lg p">Generate</button>
                </form>
            <br></br> <br></br><br></br>
                <div className="meme ">
                    <img src={this.state.randomImg} className='img-fluid' alt="" />
                    <h2 className="top text-center">{this.state.topText}</h2>
                    <h2 className="bottom text-center">{this.state.bottomText}</h2>
                </div> 
            </div>
    
        )
    }
}

export default MemeGenerator
