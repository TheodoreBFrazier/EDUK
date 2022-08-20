// isAuth
function isAuth(req, res, next) {
	// isAuthenticated
	const { uid } = req.params;

	if (uid == req.user.uid && req.isAuthenticated()) {
		next();
	} else {
		res.status(401).json({ success: false, error: "Not Authenticated" });
	}
}

module.exports = { isAuth };
