class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
           return {
            visibility: !prevState.visibility
           }
        })
    }

    render() {
        return (

        <div>
           <h1>Visibility Toggle</h1>
             <button onClick={this.toggleVisibility}>
            {this.state.visibility ? 'Show' : 'Hide'}           </button>
             {!this.state.visibility && (
                <div>
            <p >this is hide paragraph</p>
                </div>
            )}
        </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'show' : 'hide'}
//             </button>
//             {!visibility && (
//                 <div>
//             <p >this is hide paragraph</p>

//                 </div>
//             )}
//         </div>
//     );
// ReactDOM.render(jsx, document.getElementById('app'));

// }
// render();