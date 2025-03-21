import "./login.css";

function Login(){

	return (
		<div class="login-container">
			<form>

				<label htmlFor="username">Username</label><br></br>
				<input type="text" id="username" name="username" required /><br></br>

				<label htmlFor="password">Password</label><br></br>
				<input type="password" id="password" name="password" required /><br></br>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;