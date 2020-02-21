import * as React from 'react';

interface IProps {
    name?: string;
}

interface IState {
    name?: string;
}



class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: "React"
        };
    }
    public setName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    };
    
    public render() {
        return (
            <div>
                <input type="text" placeholder={"What's your name?"} onChange={this.setName}/>
                <h1>Hello, {this.state.name}{this.state.name !== "" ? "!" : "" } Welcome to React and Typescript</h1>
            </div>

        )
    }
};


export default Header;