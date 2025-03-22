import "./login.css";

function Login(){

	return (
		
		<div class="login-container">
			
			<form>
				<h1>Log In</h1>
				<label htmlFor="username">Username</label><br></br>
				<input class="input-form" type="text" id="username" name="username" required /><br></br>

				<label htmlFor="password">Password</label><br></br>
				<input class="input-form" type="password" id="password" name="password" required /><br></br>

				<button class="login-button" type="submit">Log In</button><br></br>
				<button type="button">Create Account</button>
				<button type="guest">Continue as Guest</button>
			</form>
		</div>
	);
};

export default Login;