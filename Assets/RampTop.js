
function OnTriggerEnter (other : Collider) {
	if( other.name == "Scorer" && !Scoring.hasGoneUpRamp && Scoring.rampQuadrantCounter >= 3 ){
		// 3 points for reaching the top of the ramp
		Scoring.gameScore += 3;
		Scoring.hasGoneUpRamp = true;
		Scoring.rampQuadrantCounter = 0;
		Debug.Log("kapow");
	}
}