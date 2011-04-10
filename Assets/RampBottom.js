
function OnTriggerEnter (other : Collider) {	
	if( other.name == "Scorer" && Scoring.hasGoneUpRamp ){
		// 3 points for reaching bottom of ramp
		Scoring.gameScore += 3;
		Scoring.hasGoneUpRamp = false;
		Debug.Log("down ramp kapow");
	}
}