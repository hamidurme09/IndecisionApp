import React from 'react';
import Options from './Options';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import OptionModal from './OptionModal';

export default class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleClearSelectedOption=this.handleClearSelectedOption.bind(this);
        
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleClearSelectedOption(){
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid valur to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }



    componentDidMount() {
        try {
            const jsonData = localStorage.getItem('options');
            const options = JSON.parse(jsonData);
    
            if(options) {
                this.setState(() => ({ options }));
            }
            console.log('fetching data')
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        console.log('saving data')
        }
    }

    componentwillUnmount() {
        console.log('ComponentwillUnmount')
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <div className="container">
            <Action 
            hasOptions={this.state.options.length > 0 }
            handlePick={this.handlePick}
            />
            <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
            /> 
            </div>
          
            </div>
           
            <OptionModal 
            selectedOption={this.state.seselectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
          
        )
    }
}

