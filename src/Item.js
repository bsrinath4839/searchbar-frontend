import React from "react";

class Item extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            item :[],
        }
    }
    render() {
       // console.log(this.props);
        return(
            <div>
                {
                    <div>
                        <p>Name :  {this.props.location.state.items.name} </p>
                        <p>Name :  {this.props.location.state.items.description} </p>
                    </div>
                }
            </div>
        );
    }
}

export  default  Item;
