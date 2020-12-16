import React from "react";
// import './style.css';

class TILForm extends React.Component {
    render() {
        return (
            <div className="bodyContent">
                <div class="loginForm">
                    <form>
                        <h2>TIL (Today I Learned...)</h2>
                        <input className="newTIL" type="text" placeholder="TIL:"></input>
                        <div className="TIL">
                            <button>Submit</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TILForm;