
var quadrants : Transform[];

static var gameScore : int;
private var hasMoved : boolean = false;
static var lastQuadrant;
static var hasGoneUpRamp : boolean = false;
static var rampQuadrantCounter = 3;
private var timeCount = 0.0;
private var roundLength = 60;

function Awake() {
	// dan't get points for the first move off
	lastQuadrant = quadrants[0].name;
	gameScore = 0;
}

function FixedUpdate () {

	timeCount += Time.deltaTime;
	
	if( timeCount > roundLength ){
		Time.timeScale = 0;
		// 2 points for holding a normal token at end
		gameScore += CanCounter.cansOnBoard * 2;
		
		if( CanCounter.hasSuperToken ){
			// don't get the points for the token
			gameScore -= 2;
			// double gameScore
			gameScore *= 2;
		}
	}
	
	// 1 point for moving
	if( !hasMoved && Input.GetAxis("Vertical") ){
		gameScore++;
		hasMoved = true;
	}

}

function OnGUI () {
	if( timeCount < roundLength ){
		GUI.Box (Rect (0,0, 120,55), "Score: " + gameScore + 
			"\nTime Left: " + Mathf.FloorToInt(roundLength - timeCount) + "s\nCans: " + CanCounter.cansOnBoard);
	} else {
		GUI.Box (Rect (0,0, 120,55), "Final Score: " + gameScore );
	}
}