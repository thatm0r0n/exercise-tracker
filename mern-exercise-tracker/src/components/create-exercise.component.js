import React, {Component} from 'react';

export default class CreateExercises extends Component{
    constructor(props){
        super(props);

        this.state={
            username:'',
            description:'',
            duration:0,
            date:new date(),
            users:[]
        }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangedate(date){
        this.setState({
            date: date
        });
    }
    }
    render(){
        return(
            <div>
                <p>You are on the Create Exercises component</p>
            </div>
        )
    }
}