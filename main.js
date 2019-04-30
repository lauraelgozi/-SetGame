SetGame.selectTwelveCards()
class App extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.pushCardsArray = this.pushCardsArray.bind(this)
        this.arrSelected = []
        this.state = {
            isBoardDisabled: false,
            counter: 0
        }
    }

    pushCardsArray(obj) {
        if (this.arrSelected.length < 3) {
            this.arrSelected.push(obj)
        }
        if (this.arrSelected.length === 3) {
            this.setState({
                isBoardDisabled: true
            })
            setTimeout(function () {
                window.location.reload();
            }, 2000)
            if (SetGame.isSet(this.arrSelected[0], this.arrSelected[1], this.arrSelected[2])) {
                alert('You have a set !')
                this.setState({
                    isBoardDisabled: false
                })
            }
            this.arrSelected = []

        }
    }
    render() {
        var boardDisabled = this.state.isBoardDisabled ? "boardDisabled" : null;
        return (
            <div className={`board ${boardDisabled}`} onClick={this.pushCardsArray}>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[0]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[1]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[2]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[3]} getObj={this.pushCardsArray} />
                </div>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[4]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[5]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[6]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[7]} getObj={this.pushCardsArray} />
                </div>
                <div className="row">
                    <Card cardType={SetGame.selectedCards[8]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[9]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[10]} getObj={this.pushCardsArray} />
                    <Card cardType={SetGame.selectedCards[11]} getObj={this.pushCardsArray} />
                </div>

            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.getObject = this.getObject.bind(this)
        this.state = {
            isSelected: false

        }
    }
    getObject(event) {
        var obj = this.props.cardType

        this.setState({
            isSelected: true
        })
        this.props.getObj(obj, event)
    }
    render() {
        var selected = this.state.isSelected ? "selected" : null;
        var element = []
        for (let i = 1; i <= this.props.cardType.number; i++) {
            element.push(<div className={`shape ${this.props.cardType.shape} ${this.props.cardType.color} ${this.props.cardType.filling}`}></div>)
        }
        return (
            <div className={`card ${selected}`} data-foobar={this.props.cardType} onClick={this.getObject} >
                {element}
            </div>
        );
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
