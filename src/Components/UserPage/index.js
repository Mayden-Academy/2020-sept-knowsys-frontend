import React from "react";
import './style.css';

class UserPage extends React.Component {
	render() {
		return (
            <div className="bodyContent">
                    <h1 class="usernameHeader">@Username</h1>
                    <div class="bioContentContainer">
                    <h3 className="bioHeader">Bio:</h3>
                    <p className="bioContent"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
                </div>
            </div>
		)
	}
}
export default UserPage;