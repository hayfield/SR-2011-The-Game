
function OnTriggerEnter (other : Collider) {
	if( other.name == "Scorer" && gameObject.name != Scoring.lastQuadrant ){
		// 2 points for passing a quadrant boundary
		Scoring.gameScore += 2;
		// 1 point for carrying a token over a boundary
		Scoring.gameScore += CanCounter.cansOnBoard;
		Scoring.lastQuadrant = gameObject.name;
		Scoring.rampQuadrantCounter++;
		Debug.Log("kapow quad");
	}
}