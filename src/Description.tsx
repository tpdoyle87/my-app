import * as React from 'react';

interface IProps {
    countBy?: number;
}

interface IState {
    count: number;
    countBy?: number;
}

class Description extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0,
            countBy: 1
        };
    }

    public increase = () => {
        const countBy: number = this.state.countBy!;
        const count: number = this.state.count + countBy;
        this.setState({ count });
    }

    public setCountBy = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        this.setState({
            countBy: parseInt(e.currentTarget.value)
        })
    }

    public render() {
        return (
            <div>
                <input type="text" placeholder={"Input your increment number"} onChange={this.setCountBy} />
                <p>My favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default Description;